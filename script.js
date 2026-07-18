/* ============================================================
   PORTFOLIO — Script Principal
   Animações, Interatividade e Efeitos
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Particles Background ---------- */
  initParticles();

  /* ---------- Navbar Scroll Effect ---------- */
  initNavbar();

  /* ---------- Mobile Menu ---------- */
  initMobileMenu();

  /* ---------- Scroll Reveal ---------- */
  initScrollReveal();

  /* ---------- Terminal Typing ---------- */
  initTerminalTyping();

  /* ---------- Smooth Scroll ---------- */
  initSmoothScroll();

  /* ---------- Active Section Highlight ---------- */
  initActiveSection();

  /* ---------- Counter Animation ---------- */
  initCounters();
});


/* ============================================================
   PARTICLES BACKGROUND
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height, particles, mouse;

  mouse = { x: -1000, y: -1000 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.floor((width * height) / 18000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Mouse interaction
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 150) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.15 * (1 - mdist / 150)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
}


/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}


/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}


/* ============================================================
   TERMINAL TYPING EFFECT
   ============================================================ */
function initTerminalTyping() {
  const terminalBody = document.getElementById('terminal-text');
  if (!terminalBody) return;

  const lines = [
    { type: 'input', prompt: '~$', text: ' whoami' },
    { type: 'output', text: 'security-automation-engineer' },
    { type: 'input', prompt: '~$', text: ' cat skills.conf' },
    { type: 'output', text: 'SIEM:     Wazuh, Splunk' },
    { type: 'output', text: 'IaC:      Terraform, Bicep, Ansible' },
    { type: 'output', text: 'Cloud:    Azure, GCP, Docker' },
    { type: 'output', text: 'Code:     Python, Bash, PowerShell' },
    { type: 'input', prompt: '~$', text: ' ./run_portfolio.sh' },
    { type: 'output', text: '[✓] Portfolio loaded successfully.' },
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = '';

  function renderLines(completedLines, currentPartial, showCursor) {
    let html = '';
    completedLines.forEach(l => {
      if (l.type === 'input') {
        html += `<div><span class="prompt">${l.prompt}</span><span class="command">${l.text}</span></div>`;
      } else {
        html += `<div><span class="output">${l.text}</span></div>`;
      }
    });
    if (currentPartial !== null) {
      const line = lines[lineIndex];
      if (line.type === 'input') {
        html += `<div><span class="prompt">${line.prompt}</span><span class="command">${currentPartial}</span>${showCursor ? '<span class="cursor-blink"></span>' : ''}</div>`;
      } else {
        html += `<div><span class="output">${currentPartial}</span>${showCursor ? '<span class="cursor-blink"></span>' : ''}</div>`;
      }
    } else if (showCursor) {
      html += `<div><span class="prompt">~$</span><span class="cursor-blink"></span></div>`;
    }
    terminalBody.innerHTML = html;
  }

  const completedLines = [];

  function typeLine() {
    if (lineIndex >= lines.length) {
      renderLines(completedLines, null, true);
      return;
    }

    const line = lines[lineIndex];
    const fullText = line.text;

    if (line.type === 'input') {
      // Type char by char
      if (charIndex <= fullText.length) {
        currentLine = fullText.substring(0, charIndex);
        renderLines(completedLines, currentLine, true);
        charIndex++;
        setTimeout(typeLine, 40 + Math.random() * 30);
      } else {
        completedLines.push(line);
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 300);
      }
    } else {
      // Output appears instantly
      completedLines.push(line);
      renderLines(completedLines, null, false);
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 80);
    }
  }

  // Start typing after a delay
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(typeLine, 800);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(terminalBody.closest('.hero-terminal') || terminalBody);
}


/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const position = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: position, behavior: 'smooth' });
      }
    });
  });
}


/* ============================================================
   ACTIVE SECTION HIGHLIGHT
   ============================================================ */
function initActiveSection() {
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(s => observer.observe(s));
}


/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.getAttribute('data-count');
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const isDecimal = target.includes('.');

        const targetNum = parseFloat(target);
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          let current = eased * targetNum;

          if (isDecimal) {
            current = current.toFixed(1);
          } else {
            current = Math.floor(current);
          }

          el.textContent = prefix + current + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}
