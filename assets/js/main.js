/* ==========================================================================
   Rafael Cruz — Portfolio
   Theme · language · navigation · filters · lightbox · closed-loop simulator
   Shared by index.html and writeups/*.html (every block guards its elements)
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function isEn() { return root.lang === 'en'; }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------------- Theme ---------------- */
  var themeBtn = $('#themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store('rc_theme', next);
      document.dispatchEvent(new Event('rc:theme'));
    });
  }

  /* ---------------- Language ---------------- */
  var titles = {
    pt: document.body.getAttribute('data-title-pt') || document.title,
    en: document.body.getAttribute('data-title-en') || document.title
  };
  function applyLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'pt-PT';
    document.title = lang === 'en' ? titles.en : titles.pt;
  }
  applyLang(isEn() ? 'en' : 'pt');

  var langBtn = $('#langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = isEn() ? 'pt' : 'en';
      applyLang(next);
      store('rc_lang', next);
      document.dispatchEvent(new Event('rc:lang'));
    });
  }

  /* ---------------- Header: scrolled state, mobile menu, scroll-spy ---------------- */
  var header = $('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var menuBtn = $('#menuBtn');
  var navLinks = $('#navLinks');
  if (menuBtn && navLinks) {
    var closeMenu = function () {
      navLinks.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    $all('a', navLinks).forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  if (navLinks && 'IntersectionObserver' in window) {
    var linkFor = {};
    $all('a[href^="#"]', navLinks).forEach(function (a) { linkFor[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        $all('a', navLinks).forEach(function (a) { a.classList.remove('is-active'); });
        var link = linkFor[entry.target.id];
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(linkFor).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ---------------- Staggered cascade ---------------- */
  // Children of these grids reveal one after another (90 ms apart).
  // The delay is cleared once shown so hover transitions stay instant.
  var groups = $all('.proof-grid, .projects-grid, .skills-grid, .creds, .writeups-grid, .timeline');
  groups.forEach(function (group) {
    Array.prototype.slice.call(group.children).forEach(function (child, i) {
      child.classList.add('reveal');
      child.setAttribute('data-stagger', '');
      child.style.setProperty('--d', (i * 0.09).toFixed(2) + 's');
    });
  });
  function showGroup(group) {
    Array.prototype.slice.call(group.children).forEach(function (child) {
      child.classList.add('is-in');
      setTimeout(function () { child.style.removeProperty('--d'); }, 1600);
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  // Single elements reveal on their own; staggered grids reveal as a group.
  var reveals = $all('.reveal:not([data-stagger])');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
    groups.forEach(showGroup);
  } else {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (entry.target.hasAttribute('data-group')) showGroup(entry.target);
        else entry.target.classList.add('is-in');
        ro.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { ro.observe(el); });
    groups.forEach(function (g) { g.setAttribute('data-group', ''); ro.observe(g); });
  }

  /* ---------------- Project filters ---------------- */
  var filterBtns = $all('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      filterBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      $all('#projetos [data-track]').forEach(function (item) {
        var tracks = item.getAttribute('data-track').split(' ');
        var show = f === 'all' || tracks.indexOf(f) !== -1;
        item.classList.toggle('is-hidden', !show);
        if (show) item.classList.add('is-in');
      });
    });
  });

  /* ---------------- Lightbox ---------------- */
  var lightbox = $('#lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    var lbImg = $('#lightboxImg');
    var lbCap = $('#lightboxCaption');
    $all('[data-zoom]').forEach(function (btn) {
      var label = isEn() ? 'Enlarge image' : 'Ampliar imagem';
      btn.setAttribute('aria-label', label + ': ' + ($('img', btn).alt || ''));
      btn.addEventListener('click', function () {
        var img = $('img', btn);
        lbImg.src = btn.getAttribute('data-zoom');
        lbImg.alt = img ? img.alt : '';
        var fig = btn.closest('figure');
        var cap = fig ? $('figcaption', fig) : null;
        lbCap.innerHTML = cap ? cap.innerHTML : (img ? img.alt : '');
        lightbox.showModal();
      });
    });
    $('#lightboxClose').addEventListener('click', function () { lightbox.close(); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });
  } else {
    // No <dialog> support: open the image directly
    $all('[data-zoom]').forEach(function (btn) {
      btn.addEventListener('click', function () { window.open(btn.getAttribute('data-zoom'), '_blank'); });
    });
  }

  /* ---------------- Toast & copy email ---------------- */
  var toast = $('#toast');
  var toastTimer;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2400);
  }

  var copyBtn = $('#copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          showToast(isEn() ? 'Email copied to clipboard' : 'Email copiado');
        }, function () { window.location.href = 'mailto:' + email; });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }

  /* ==========================================================================
     Closed-loop simulator
     Replays the capstone's chaos-engineering scenarios. Final durations are
     the values measured in the lab (Projeto II report); intermediate step
     timings are illustrative.
     ========================================================================== */
  /* ==========================================================================
     Design animations: title reveal, cursor spotlight, hero network mesh
     All skipped when the visitor prefers reduced motion.
     ========================================================================== */
  var animate = root.classList.contains('anim');

  /* ---- Hero title: split into words and slide them up ---- */
  var heroTitle = $('.hero-title');
  if (heroTitle && animate) {
    var wordIndex = 0;
    var splitWords = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            var outer = document.createElement('span');
            outer.className = 'w';
            var inner = document.createElement('span');
            inner.textContent = part;
            inner.style.setProperty('--wd', (wordIndex++ * 0.07).toFixed(2) + 's');
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          splitWords(child);
        }
      });
    };
    $all('[data-l]', heroTitle).forEach(function (langSpan) {
      wordIndex = 0;
      splitWords(langSpan);
    });
    heroTitle.classList.add('is-split');
    var revealTitle = function () {
      heroTitle.classList.remove('is-revealed');
      void heroTitle.offsetWidth;
      setTimeout(function () { heroTitle.classList.add('is-revealed'); }, 30);
    };
    revealTitle();
    document.addEventListener('rc:lang', revealTitle);
  } else if (heroTitle) {
    heroTitle.classList.add('is-split', 'is-revealed');
  }

  /* ---- Spotlight that follows the cursor (desktop only) ---- */
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (finePointer) {
    $all('.card, .case, .skill-group, .cred-box, .writeup, .channel').forEach(function (el) {
      el.classList.add('spot');
    });
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest('.spot');
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  /* ---- Network mesh behind the hero ---- */
  var net = $('#heroNet');
  if (net && net.getContext) {
    var ctx = net.getContext('2d');
    var hero = net.parentElement;
    var nodes = [];
    var mouse = { x: -9999, y: -9999 };
    var W = 0, H = 0, dpr = 1, running = false, visible = true, netRaf = null;
    var colors = {};
    var LINK = 150;

    var readColors = function () {
      var cs = getComputedStyle(root);
      var dark = cs.getPropertyValue('color-scheme').trim() === 'dark';
      colors.accent = cs.getPropertyValue('--accent').trim() || '#34d399';
      colors.node = dark ? 'rgba(161,161,170,0.7)' : 'rgba(82,82,91,0.5)';
      colors.lineAlpha = dark ? 0.4 : 0.3;
      colors.lineRgb = dark ? '52,211,153' : '4,120,87';
    };
    var resize = function () {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = hero.clientWidth;
      H = hero.clientHeight;
      net.width = Math.round(W * dpr);
      net.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var target = Math.max(18, Math.min(70, Math.round((W * H) / 16000)));
      while (nodes.length < target) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.2 + 1
        });
      }
      nodes.length = target;
    };
    var draw = function () {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < nodes.length; i++) {
        var a = nodes[i];
        if (animate) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > W) a.vx *= -1;
          if (a.y < 0 || a.y > H) a.vy *= -1;
        }
        for (var j = i + 1; j < nodes.length; j++) {
          var b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.strokeStyle = 'rgba(' + colors.lineRgb + ',' + ((1 - d / LINK) * colors.lineAlpha).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        var dm = Math.sqrt((a.x - mouse.x) * (a.x - mouse.x) + (a.y - mouse.y) * (a.y - mouse.y));
        var near = dm < 150;
        if (near) {
          ctx.strokeStyle = 'rgba(' + colors.lineRgb + ',' + ((1 - dm / 150) * 0.5).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = near ? colors.accent : colors.node;
        ctx.beginPath(); ctx.arc(a.x, a.y, near ? a.r + 1 : a.r, 0, Math.PI * 2); ctx.fill();
      }
    };
    var loop = function () {
      draw();
      netRaf = running ? requestAnimationFrame(loop) : null;
    };
    var setRunning = function () {
      var should = animate && visible && !document.hidden;
      if (should && !running) { running = true; netRaf = requestAnimationFrame(loop); }
      if (!should) { running = false; if (netRaf) cancelAnimationFrame(netRaf); netRaf = null; }
    };

    readColors();
    resize();
    draw();
    net.classList.add('is-on');

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { resize(); draw(); }, 150);
    });
    document.addEventListener('rc:theme', function () { readColors(); draw(); });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { readColors(); draw(); });
    document.addEventListener('visibilitychange', setRunning);
    if (finePointer) {
      hero.addEventListener('pointermove', function (e) {
        var r = hero.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      }, { passive: true });
      hero.addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        setRunning();
      }).observe(hero);
    }
    setRunning();
  }

  var sim = $('#sim');
  if (!sim) return;

  // [time (s), source, css class, PT message, EN message, stage, stage state]
  var SCENARIOS = {
    rgwy_mismatch: {
      dur: 4.0, outcome: 'recovered', down: ['tunnel'],
      result: ['auto_recovered em 4.0 s (SSH · Netmiko)', 'auto_recovered in 4.0 s (SSH · Netmiko)'],
      steps: [
        [0.0, 'PRTG', 'err', 'túnel HUB-TO-SPOKE a 0 KB/s → webhook', 'tunnel HUB-TO-SPOKE at 0 KB/s → webhook', 'detect', 'active'],
        [0.4, 'n8n', '', 'pre-check ICMP 172.16.0.2 → exitCode 0 (underlay OK)', 'ICMP pre-check 172.16.0.2 → exitCode 0 (underlay OK)', 'diagnose', 'active'],
        [0.9, 'n8n', 'warn', 'remote-gw da Phase 1 divergente → rgwy_mismatch', 'Phase 1 remote-gw drifted → rgwy_mismatch', 'diagnose', 'active'],
        [1.4, 'NetBox', '', 'GET /api/dcim/devices/?name=FGT-HUB → remote-gw 172.16.0.2', 'GET /api/dcim/devices/?name=FGT-HUB → remote-gw 172.16.0.2', 'ssot', 'active'],
        [2.0, 'Netmiko', '', 'remediate_config.py → set remote-gw 172.16.0.2', 'remediate_config.py → set remote-gw 172.16.0.2', 'fix', 'active'],
        [3.6, 'FortiOS', 'ok', 'IKE Phase 1 up · SA estabelecida', 'IKE Phase 1 up · SA established', 'fix', 'active'],
        [4.0, 'MongoDB', 'ok', 'incident_runs ← auto_recovered', 'incident_runs ← auto_recovered', 'audit', 'done']
      ]
    },
    phase2_mismatch: {
      dur: 7.0, outcome: 'recovered', down: ['tunnel'],
      result: ['auto_recovered em 7.0 s (SSH · Netmiko)', 'auto_recovered in 7.0 s (SSH · Netmiko)'],
      steps: [
        [0.0, 'PRTG', 'err', 'túnel HUB-TO-SPOKE a 0 KB/s → webhook', 'tunnel HUB-TO-SPOKE at 0 KB/s → webhook', 'detect', 'active'],
        [0.4, 'n8n', '', 'pre-check ICMP 172.16.0.2 → exitCode 0 (underlay OK)', 'ICMP pre-check 172.16.0.2 → exitCode 0 (underlay OK)', 'diagnose', 'active'],
        [1.0, 'n8n', 'warn', 'seletores CIDR da Phase 2 divergentes → phase2_mismatch', 'Phase 2 CIDR selectors drifted → phase2_mismatch', 'diagnose', 'active'],
        [1.6, 'NetBox', '', 'golden config → seletores Phase 2 canónicos', 'golden config → canonical Phase 2 selectors', 'ssot', 'active'],
        [2.3, 'Netmiko', '', 'remediate_phase2.py → repor seletores', 'remediate_phase2.py → restore selectors', 'fix', 'active'],
        [6.6, 'FortiOS', 'ok', 'IKE Phase 2 up · túnel convergido', 'IKE Phase 2 up · tunnel converged', 'fix', 'active'],
        [7.0, 'MongoDB', 'ok', 'incident_runs ← auto_recovered', 'incident_runs ← auto_recovered', 'audit', 'done']
      ]
    },
    zero_traffic: {
      dur: 7.0, outcome: 'recovered', down: ['tunnel'],
      result: ['auto_recovered em 7.0 s (renegociação IKEv2)', 'auto_recovered in 7.0 s (IKEv2 renegotiation)'],
      steps: [
        [0.0, 'PRTG', 'err', 'túnel HUB-TO-SPOKE a 0 KB/s → webhook', 'tunnel HUB-TO-SPOKE at 0 KB/s → webhook', 'detect', 'active'],
        [0.4, 'n8n', '', 'pre-check ICMP 172.16.0.2 → exitCode 0 (underlay OK)', 'ICMP pre-check 172.16.0.2 → exitCode 0 (underlay OK)', 'diagnose', 'active'],
        [1.0, 'n8n', 'warn', 'configuração OK mas SAs paradas → zero_traffic', 'config OK but SAs frozen → zero_traffic', 'diagnose', 'active'],
        [1.5, 'NetBox', '', 'configuração coincide com a fonte de verdade', 'config matches source of truth', 'ssot', 'active'],
        [2.2, 'Netmiko', '', 'remediate_tunnel.py → limpar SAs e renegociar IKEv2', 'remediate_tunnel.py → flush SAs and renegotiate IKEv2', 'fix', 'active'],
        [6.6, 'FortiOS', 'ok', 'SAs renegociadas · tráfego a fluir', 'SAs renegotiated · traffic flowing', 'fix', 'active'],
        [7.0, 'MongoDB', 'ok', 'incident_runs ← auto_recovered', 'incident_runs ← auto_recovered', 'audit', 'done']
      ]
    },
    policy_disabled: {
      dur: 1.8, outcome: 'recovered', down: ['tunnel'],
      result: ['Success · < 2 s por transação (REST API)', 'Success · < 2 s per call (REST API)'],
      steps: [
        [0.0, 'PRTG', 'err', 'túnel HUB-TO-SPOKE a 0 KB/s → webhook', 'tunnel HUB-TO-SPOKE at 0 KB/s → webhook', 'detect', 'active'],
        [0.3, 'n8n', '', 'pre-check ICMP 172.16.0.2 → exitCode 0 (underlay OK)', 'ICMP pre-check 172.16.0.2 → exitCode 0 (underlay OK)', 'diagnose', 'active'],
        [0.6, 'n8n', 'warn', 'firewall policy 1 e 2 desativadas → policy_disabled', 'firewall policies 1 and 2 disabled → policy_disabled', 'diagnose', 'active'],
        [0.9, 'NetBox', '', 'estado esperado: policy 1, 2 = enable', 'expected state: policy 1, 2 = enable', 'ssot', 'active'],
        [1.2, 'REST API', '', 'PUT /api/v2/cmdb/firewall/policy/1 {"status":"enable"} → 200', 'PUT /api/v2/cmdb/firewall/policy/1 {"status":"enable"} → 200', 'fix', 'active'],
        [1.5, 'REST API', 'ok', 'PUT /api/v2/cmdb/firewall/policy/2 {"status":"enable"} → 200', 'PUT /api/v2/cmdb/firewall/policy/2 {"status":"enable"} → 200', 'fix', 'active'],
        [1.8, 'MongoDB', 'ok', 'incident_runs_enterprise ← Success', 'incident_runs_enterprise ← Success', 'audit', 'done']
      ]
    },
    mpls_down: {
      dur: 2.0, outcome: 'escalated', down: ['tunnel', 'mpls'],
      result: ['escalated_to_provider · sem tentativas inúteis', 'escalated_to_provider · no futile retries'],
      steps: [
        [0.0, 'PRTG', 'err', 'túnel HUB-TO-SPOKE a 0 KB/s → webhook', 'tunnel HUB-TO-SPOKE at 0 KB/s → webhook', 'detect', 'active'],
        [0.4, 'n8n', 'err', 'pre-check ICMP 172.16.0.2 → exitCode 1', 'ICMP pre-check 172.16.0.2 → exitCode 1', 'diagnose', 'fail'],
        [0.9, 'n8n', 'warn', 'falha física → mpls_down · remediação suprimida', 'physical fault → mpls_down · remediation suppressed', 'fix', 'skip'],
        [1.4, 'SMTP', 'warn', 'ticket enviado ao operador WAN', 'ticket sent to WAN carrier', null, null],
        [1.7, 'Telegram', 'warn', 'alerta crítico enviado à equipa', 'critical alert sent to the team', null, null],
        [2.0, 'MongoDB', 'ok', 'incident_runs ← escalated_to_provider', 'incident_runs ← escalated_to_provider', 'audit', 'done']
      ]
    }
  };

  var STATE_LABEL = {
    ok: 'HEALTHY', incident: 'INCIDENT', working: 'REMEDIATING',
    recovered: 'RECOVERED', escalated: 'ESCALATED'
  };

  var logEl = $('#simLog');
  var stateEl = $('#simState');
  var timerEl = $('#simTimer');
  var resultEl = $('#simResult');
  var tunnel = $('#simTunnel');
  var mpls = $('#simMpls');
  var packet = $('#simPacket');
  var faultBtns = $all('.fault-btn', sim);
  var stages = {};
  $all('.pipe-step', sim).forEach(function (el) { stages[el.getAttribute('data-stage')] = el; });
  var stageOrder = ['detect', 'diagnose', 'ssot', 'fix', 'audit'];

  var timers = [];
  var raf = null;
  var userInteracted = false;

  function bi(pt, en) {
    return '<span data-l="pt">' + pt + '</span><span data-l="en">' + en + '</span>';
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function setState(s) {
    stateEl.setAttribute('data-state', s === 'recovered' ? 'ok' : s);
    stateEl.textContent = STATE_LABEL[s];
  }
  function setLinks(down) {
    tunnel.classList.toggle('is-down', down.indexOf('tunnel') !== -1);
    mpls.classList.toggle('is-down', down.indexOf('mpls') !== -1);
    packet.style.display = down.indexOf('tunnel') !== -1 ? 'none' : '';
  }
  function resetStages() {
    stageOrder.forEach(function (k) { stages[k].className = 'pipe-step'; });
  }
  function setStage(name, state) {
    if (!name) return;
    if (state === 'active') {
      // everything before this stage that was active is now done
      var idx = stageOrder.indexOf(name);
      stageOrder.forEach(function (k, i) {
        if (i < idx && stages[k].classList.contains('is-active')) {
          stages[k].className = 'pipe-step is-done';
        }
      });
      stages[name].className = 'pipe-step is-active';
    } else if (state === 'fail') {
      stages[name].className = 'pipe-step is-fail';
      stages.detect.className = 'pipe-step is-done';
    } else if (state === 'skip') {
      stages.ssot.className = 'pipe-step is-skip';
      stages.fix.className = 'pipe-step is-skip';
    } else if (state === 'done') {
      stageOrder.forEach(function (k) {
        if (stages[k].classList.contains('is-active')) stages[k].className = 'pipe-step is-done';
      });
      stages[name].className = 'pipe-step is-done';
    }
  }
  function addLine(step) {
    var li = document.createElement('li');
    li.innerHTML =
      '<span class="t">+' + step[0].toFixed(1) + 's</span>' +
      '<span class="src">' + esc(step[1]) + '</span>' +
      '<span class="msg ' + step[2] + '">' + bi(esc(step[3]), esc(step[4])) + '</span>';
    logEl.appendChild(li);
    logEl.scrollTop = logEl.scrollHeight;
  }
  function stop() {
    timers.forEach(clearTimeout);
    timers = [];
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  }
  function finish(sc) {
    if (sc.outcome === 'recovered') {
      setLinks([]);
      setState('recovered');
    } else {
      setState('escalated');
    }
    timerEl.textContent = sc.dur.toFixed(1);
    resultEl.innerHTML = bi(esc(sc.result[0]), esc(sc.result[1]));
    faultBtns.forEach(function (b) { b.disabled = false; });
  }

  function run(id) {
    var sc = SCENARIOS[id];
    if (!sc) return;
    stop();
    logEl.innerHTML = '';
    resetStages();
    setLinks(sc.down);
    setState('incident');
    timerEl.textContent = '0.0';
    resultEl.innerHTML = bi('a executar ' + id + '…', 'running ' + id + '…');
    faultBtns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-scenario') === id));
      b.disabled = true;
    });

    if (reduceMotion) {
      sc.steps.forEach(function (s) { addLine(s); setStage(s[5], s[6]); });
      finish(sc);
      return;
    }

    sc.steps.forEach(function (s, i) {
      timers.push(setTimeout(function () {
        addLine(s);
        setStage(s[5], s[6]);
        if (i === 1 && sc.outcome === 'recovered') setState('working');
        if (i === sc.steps.length - 1) {
          stop();
          finish(sc);
        }
      }, s[0] * 1000));
    });

    var start = performance.now();
    var tick = function (now) {
      var t = Math.min((now - start) / 1000, sc.dur);
      timerEl.textContent = t.toFixed(1);
      if (t < sc.dur) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  faultBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      userInteracted = true;
      run(btn.getAttribute('data-scenario'));
    });
  });

  // Pause the packet animation when motion is reduced
  if (reduceMotion) {
    var svg = sim.querySelector('svg');
    if (svg && svg.pauseAnimations) svg.pauseAnimations();
  }

  // Play one scenario automatically the first time the simulator is visible
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var auto = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        auto.disconnect();
        setTimeout(function () { if (!userInteracted) run('rgwy_mismatch'); }, 900);
      }
    }, { threshold: 0.5 });
    auto.observe(sim);
  }
})();
