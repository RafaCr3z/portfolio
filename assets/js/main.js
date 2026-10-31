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

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = $all('.reveal');
  if (reveals.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            ro.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      reveals.forEach(function (el) { ro.observe(el); });
    }
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
