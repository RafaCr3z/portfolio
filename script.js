// ============================================================
// Rafael Cruz — Portfolio Scripts & Internationalization (i18n)
// ============================================================

// Dicionário de Traduções (PT / EN)
const translations = {
  pt: {
    // Navigation
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_skills: "Competências",
    nav_education: "Educação",
    nav_certs: "Certificações",
    nav_contact: "Contacto",

    // Hero
    hero_badge: '<span class="dot"></span> Disponibilidade Imediata · Elegível IEFP ATIVAR.pt (Nível 6)',
    hero_title: '<span>Rafael Cruz</span><br />Security Automation',
    hero_subtitle: 'Engenheiro Informático focado em <strong>Automação de Redes (NetDevOps)</strong>, <strong>SecDevOps</strong> e <strong>Cibersegurança Defensiva</strong>. Foco na redução de MTTR operacional, mitigação de configuration drift e observabilidade de infraestruturas críticas.',
    hero_btn_projects: "Ver Projetos",
    hero_btn_contact: "Falar Comigo",

    // Hero Code Card
    code_comment_1: "# Comparar running-config com NetBox (SSOT)",
    code_log_1: 'f"Drift detetado em {device.id} | Acionando remediação"',
    code_comment_2: "# Tentativa primária via API REST (Fortinet FortiOS)",
    code_comment_3: "# Fallback determinístico via Netmiko / SSH",

    // About
    about_label: "Apresentação",
    about_title: "Engenharia aplicada à segurança de sistemas",
    about_p1: "Engenheiro Informático focado em <strong>Automação de Redes (NetDevOps)</strong>, <strong>SecDevOps</strong> e <strong>Cibersegurança Defensiva</strong>. Experiência no desenvolvimento de PoCs para autorremediação <em>closed-loop</em>, telemetria orientada a eventos, pipelines CI/CD com autenticação federada (OIDC na Azure) e monitorização SIEM.",
    about_p2: "Foco na redução de MTTR operacional, mitigação de <em>configuration drift</em> e observabilidade de infraestruturas críticas. Disponibilidade imediata para novos desafios profissionais e elegível para Estágio Profissional IEFP (Medida ATIVAR.pt, Nível 6).",
    about_feat1_title: "Automação NetDevOps & Telemetria",
    about_feat1_desc: "Desenvolvimento de PoCs para autorremediação em ciclo fechado e telemetria orientada a eventos.",
    about_feat2_title: "SecDevOps & Cloud Security",
    about_feat2_desc: "Aprovisionamento IaC via Bicep/Terraform e CI/CD protegido com autenticação federada OIDC.",

    // Projects Section
    projects_label: "Portfólio de Engenharia",
    projects_title: "Experiência em Engenharia e Projetos Técnicos",
    projects_desc: "Projetos práticos onde apliquei conceitos avançados de computação, automação de redes, arquitetura de software e segurança de infraestruturas.",

    // Project 1
    p1_title: "Automação NetDevOps e Resiliência em Ciclo Fechado (PoC)",
    p1_badge: "Classificação: 19 / 20 · MTTR: 40–70s · MTTD: &lt;10s",
    p1_lead: "<strong>Projeto Final de Licenciatura (Parceria: ARTE, I.P.):</strong> Arquitetura orientada a eventos para elevar a resiliência e a disponibilidade de redes híbridas críticas (Overlay VPN IPsec sobre Underlay MPLS).",
    p1_bullet1: "<strong>Triagem Diferencial &amp; Pre-Check:</strong> Arquitetura orientada a eventos para isolamento de falhas entre Underlay (MPLS) e Overlay (IPsec) via PRTG (&lt; 10s), com sonda preventiva ICMP para suprimir falsos positivos em falhas físicas.",
    p1_bullet2: "<strong>Motor Híbrido de Autorremediação:</strong> Mitigação de <em>configuration drift</em> via REST API do FortiOS (com fallback programático em Python/Netmiko via SSH), reduzindo o MTTR em testes de 30 min para 40–70s.",
    p1_bullet3: "<strong>SSOT, Auditoria e Observabilidade:</strong> Conciliação com NetBox como SSOT, persistência de telemetria em MongoDB (Docker) e painéis em Metabase para validação de resiliência sobre 24 ensaios de Chaos Engineering.",
    p1_link: "Ver no LinkedIn",

    // Project 2
    p2_title: "Plataforma Multi-Cloud Segura e Resiliente (CityGuards)",
    p2_badge: "Classificação: 20 / 20 · Multi-Cloud IaC",
    p2_lead: "<strong>Projeto de Engenharia:</strong> Plataforma híbrida de alta resiliência e conformidade regulamentar combinando serviços Azure PaaS e Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Arquitetura Híbrida &amp; Fallback:</strong> API em Node.js interoperável entre Azure e GCP Firestore, com dupla resiliência (<em>graceful degradation</em> para heurística local e fallback <em>offline</em> de microsserviço Docker em ACI).",
    p2_bullet2: "<strong>Robustez Transacional &amp; Segurança:</strong> Controlo de concorrência com transações atómicas no Firestore para gamificação, mitigação de fugas de dados via sanitização de respostas e <em>hashing</em> seguro com bcrypt.",
    p2_bullet3: "<strong>SecDevOps, IaC &amp; Soberania:</strong> Aprovisionamento automatizado de infraestrutura via Bicep, pipeline CI/CD no GitHub Actions com autenticação federada OIDC e análise de conformidade RGPD vs. US CLOUD Act.",
    p2_link: "Ver no LinkedIn",

    // Skills
    skills_label: "Competências Técnicas",
    skills_title: "Especializações e Ferramentas",
    skills_desc: "Competências práticas aplicadas em projetos de engenharia, infraestrutura e operações de segurança.",
    skill_cat1: "Cibersegurança e SOC",
    skill_cat2: "Redes e Automação (NetDevOps)",
    skill_cat3: "Cloud e SecDevOps",
    skill_cat4: "Linguagens e Dados",

    // Education
    edu_label: "Formação Académica",
    edu_title: "Formação Académica e Mobilidade Internacional",
    edu1_title: "Licenciatura em Engenharia Informática",
    edu1_subtitle: "Instituto Politécnico de Castelo Branco (IPCB-ESTCB) | Média Final: 15 / 20",
    edu1_date: "Set 2023 — Set 2026",
    edu2_title: "Universidade de Petróleo e Gás de Ploiești (Erasmus+ BIP)",
    edu2_subtitle: "Leadership and Change Management Towards Sustainability · Ploiești, Roménia",
    edu2_date: "Abr 2026",
    edu3_title: "Universidade Bauhaus-Weimar (Erasmus+ BIP)",
    edu3_subtitle: "Augmented Pasts: Digital Tools and Cultural Heritage · Weimar, Alemanha",
    edu3_date: "Fev 2025 — Mar 2025",

    // Certifications
    certs_label: "Certificação Profissional",
    certs_title: "Validação de Competências",
    cert_active: "Ativa",

    // Contact
    contact_title: "Entrar em Contacto",
    contact_desc: "Se procura um profissional dedicado para equipas de Automação de Segurança, DevSecOps ou analista técnico no SOC, envie-me uma mensagem.",
    contact_location: "📍 Portugal",

    // Footer
    footer_copy: "© 2026 Rafael Cruz",
    footer_desc: "Engenharia Informática & Segurança"
  },
  en: {
    // Navigation
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_certs: "Certifications",
    nav_contact: "Contact",

    // Hero
    hero_badge: '<span class="dot"></span> Immediate Availability · Eligible for ATIVAR.pt (Level 6)',
    hero_title: '<span>Rafael Cruz</span><br />Security Automation',
    hero_subtitle: 'Software Engineer focused on <strong>Network Automation (NetDevOps)</strong>, <strong>SecDevOps</strong>, and <strong>Defensive Cybersecurity</strong>. Focused on reducing operational MTTR, mitigating configuration drift, and critical infrastructure observability.',
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Get in Touch",

    // Hero Code Card
    code_comment_1: "# Compare running-config with NetBox (SSOT)",
    code_log_1: 'f"Drift detected on {device.id} | Triggering remediation"',
    code_comment_2: "# Primary attempt via REST API (Fortinet FortiOS)",
    code_comment_3: "# Deterministic fallback via Netmiko / SSH",

    // About
    about_label: "About Me",
    about_title: "Engineering Applied to Systems Security",
    about_p1: "Software Engineer focused on <strong>Network Automation (NetDevOps)</strong>, <strong>SecDevOps</strong>, and <strong>Defensive Cybersecurity</strong>. Hands-on experience developing PoCs for closed-loop self-healing, event-driven telemetry, CI/CD pipelines with federated authentication (OIDC on Azure), and SIEM monitoring.",
    about_p2: "Focused on operational MTTR reduction, configuration drift mitigation, and critical infrastructure observability. Immediate availability for new career opportunities and eligible for the IEFP professional internship program (ATIVAR.pt measure, Level 6).",
    about_feat1_title: "NetDevOps Automation & Telemetry",
    about_feat1_desc: "Development of closed-loop self-healing PoCs and event-driven telemetry systems.",
    about_feat2_title: "SecDevOps & Cloud Security",
    about_feat2_desc: "IaC provisioning via Bicep/Terraform and hardened CI/CD with federated OIDC authentication.",

    // Projects Section
    projects_label: "Engineering Portfolio",
    projects_title: "Engineering Experience & Technical Projects",
    projects_desc: "Hands-on projects applying advanced computer science principles, network automation, software architecture, and infrastructure security.",

    // Project 1
    p1_title: "NetDevOps Automation & Closed-Loop Resilience (PoC)",
    p1_badge: "Grade: 19 / 20 · MTTR: 40–70s · MTTD: &lt;10s",
    p1_lead: "<strong>BSc Capstone Project (Partnership: ARTE, I.P.):</strong> Event-driven architecture designed to enhance resilience and uptime in critical hybrid networks (IPsec VPN Overlay over MPLS Underlay).",
    p1_bullet1: "<strong>Differential Triage &amp; Pre-Check:</strong> Event-driven architecture for fault isolation between Underlay (MPLS) and Overlay (IPsec) via PRTG (&lt; 10s), using preventive ICMP probing to suppress false positives on physical outages.",
    p1_bullet2: "<strong>Hybrid Self-Healing Engine:</strong> Configuration drift mitigation via FortiOS REST API (with programmatic fallback in Python/Netmiko over SSH), reducing MTTR in tests from 30 min to 40–70s.",
    p1_bullet3: "<strong>SSOT, Auditing &amp; Observability:</strong> Reconciliation with NetBox as SSOT, telemetry persistence in MongoDB (Docker), and Metabase dashboards for resilience validation across 24 Chaos Engineering trials.",
    p1_link: "View on LinkedIn",

    // Project 2
    p2_title: "Secure & Resilient Multi-Cloud Platform (CityGuards)",
    p2_badge: "Grade: 20 / 20 · Multi-Cloud IaC",
    p2_lead: "<strong>Engineering Project:</strong> High-resilience, regulatory-compliant hybrid platform combining Azure PaaS and Google Cloud Platform (GCP) services.",
    p2_bullet1: "<strong>Hybrid Architecture &amp; Fallback:</strong> Interoperable Node.js API across Azure and GCP Firestore, featuring dual resilience (graceful degradation to local heuristics and offline Docker microservice fallback on ACI).",
    p2_bullet2: "<strong>Transactional Robustness &amp; Security:</strong> Concurrency control with atomic Firestore transactions for gamification, response sanitization to prevent data leaks, and secure bcrypt hashing.",
    p2_bullet3: "<strong>SecDevOps, IaC &amp; Sovereignty:</strong> Automated infrastructure provisioning via Bicep, GitHub Actions CI/CD with federated OIDC authentication, and GDPR vs. US CLOUD Act compliance auditing.",
    p2_link: "View on LinkedIn",

    // Skills
    skills_label: "Technical Skills",
    skills_title: "Specializations & Tooling",
    skills_desc: "Hands-on skills applied across engineering projects, infrastructure, and security operations.",
    skill_cat1: "Cybersecurity & SOC",
    skill_cat2: "Networking & Automation (NetDevOps)",
    skill_cat3: "Cloud & SecDevOps",
    skill_cat4: "Languages & Data",

    // Education
    edu_label: "Academic Background",
    edu_title: "Academic Background & International Mobility",
    edu1_title: "BSc in Computer Science and Engineering",
    edu1_subtitle: "Polytechnic Institute of Castelo Branco (IPCB-ESTCB) | Final GPA: 15 / 20",
    edu1_date: "Sep 2023 — Sep 2026",
    edu2_title: "Petroleum-Gas University of Ploiești (Erasmus+ BIP)",
    edu2_subtitle: "Leadership and Change Management Towards Sustainability · Ploiești, Romania",
    edu2_date: "Apr 2026",
    edu3_title: "Bauhaus-Universität Weimar (Erasmus+ BIP)",
    edu3_subtitle: "Augmented Pasts: Digital Tools and Cultural Heritage · Weimar, Germany",
    edu3_date: "Feb 2025 — Mar 2025",

    // Certifications
    certs_label: "Professional Certifications",
    certs_title: "Credentials & Certifications",
    cert_active: "Active",

    // Contact
    contact_title: "Get in Touch",
    contact_desc: "If you are looking for a dedicated engineer for Security Automation, DevSecOps, or SOC analyst roles, feel free to send me a message.",
    contact_location: "📍 Portugal",

    // Footer
    footer_copy: "© 2026 Rafael Cruz",
    footer_desc: "Computer Science & Security Engineering"
  }
};

// Current language (defaults to stored language or 'pt')
let currentLang = localStorage.getItem('preferred_lang') || 'pt';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update toggle button active indicator
  document.querySelectorAll('.lang-opt').forEach(opt => {
    if (opt.getAttribute('data-lang') === lang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
}

// Language switch button event listener
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      const clickedOpt = e.target.closest('.lang-opt');
      if (clickedOpt) {
        const targetLang = clickedOpt.getAttribute('data-lang');
        setLanguage(targetLang);
      } else {
        // Toggle if clicked anywhere on the button
        setLanguage(currentLang === 'pt' ? 'en' : 'pt');
      }
    });
  }

  // Set initial language
  setLanguage(currentLang);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
