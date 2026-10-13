// ============================================================
// RAFAEL CRUZ — PORTFOLIO JAVASCRIPT & INTERNATIONALIZATION (V2)
// High-End Security Automation, NetDevOps & SRE Theme
// ============================================================

// Translation Dictionaries (PT / EN)
const translations = {
  pt: {
    // Navigation
    nav_expertise: "Expertise",
    nav_history: "Histórico",
    nav_projects: "Projetos",
    nav_writeups: "Writeups",
    nav_contact: "Contacto",

    // Hero Section
    hero_status: '<span class="status-dot"></span> Disponibilidade Imediata · Elegível para Estágio Profissional (IEFP Nível 6)',
    hero_name: "Rafael Cruz",
    hero_role: "Security Automation, NetDevOps & SRE Engineer",
    hero_bio: "Engenheiro Informático focado em <strong>Automação de Redes (NetDevOps)</strong>, <strong>Engenharia Multi-Cloud (SecDevOps)</strong> e <strong>SRE</strong>. Experiência prática no desenvolvimento de arquiteturas de autorrecuperação em ciclo fechado (<em>closed-loop</em>), aprovisionamento declarativo (IaC) e pipelines de CI/CD com autenticação federada (Azure OIDC). Orientado para a redução de MTTD/MTTR, mitigação de <em>configuration drift</em> via SSoT e observabilidade em infraestruturas críticas.",
    btn_explore_projects: "Explorar Projetos",
    btn_contact_me: "Falar Comigo ➔",

    // Expertise Section
    expertise_label: "Competências Técnicas",
    expertise_title: "Expertise",
    expertise_desc: "Competências de engenharia organizadas pelos três pilares centrais do CV, aliando automação de redes, aprovisionamento cloud declarativo e resiliência SRE.",
    
    p1_card_title: "Redes & NetDevOps (Closed-Loop)",
    p1_card_desc: "Arquiteturas orientadas a eventos e autorrecuperação em ciclo fechado (<em>closed-loop</em>). Mitigação autónoma de <em>configuration drift</em> (Gateway, Phase 2 CIDR, Firewall Policies e SAs) via <strong>REST API do FortiOS</strong> (Token/Trusted Hosts) e contingência SSH (<strong>Netmiko</strong>), convergindo em <strong>4–7s</strong>. Reconciliação dinâmica com <strong>NetBox como SSoT/IPAM</strong>, orquestração no <strong>n8n</strong> e sondas preventivas ICMP via <strong>PRTG</strong> (&lt;10s, redução &gt;95% MTTD).",

    p2_card_title: "Cloud, IaC & SecDevOps",
    p2_card_desc: "Engenharia multi-cloud em <strong>Microsoft Azure, AWS e GCP</strong>. Aprovisionamento declarativo via <strong>Bicep e Terraform</strong> com injeção dinâmica de Connection Strings. Pipelines CI/CD no <strong>GitHub Actions com autenticação federada via OIDC (<code>azure/login@v2</code>)</strong> sem credenciais estáticas, contentorização <strong>Docker</strong>, administração <strong>Linux (Ubuntu Server)</strong> e <strong>Windows Server</strong>, otimização <strong>FinOps</strong> e conformidade RGPD vs. US CLOUD Act.",

    p3_card_title: "SRE, Observabilidade & Segurança",
    p3_card_desc: "Resiliência operacional com testes de injeção de falhas via <strong>Chaos Engineering</strong> (24 ensaios empíricos), persistência forense de syslogs em <strong>MongoDB (Docker)</strong> e dashboards SRE/MTTR em <strong>Metabase</strong> em conformidade com a norma <strong>ISO 27001</strong>. Monitorização em tempo real via <strong>SIEM (Wazuh, Splunk)</strong>, análise com <strong>Wireshark</strong>, <strong>OpenSSL</strong>, <strong>Nmap</strong> e <strong>OpenVAS</strong>.",

    lang_data_title: "Linguagens & Ecossistema de Dados:",
    certs_subhead: "Certificações Técnicas Oficiais",

    // Career History
    history_label: "Educação & Experiência",
    history_title: "Career History",
    history_desc: "Linha cronológica integrando percurso académico, mobilidade internacional e experiência profissional complementar descritas no CV.",

    hist_1_role: "Licenciatura em Engenharia Informática",
    hist_1_desc: "Castelo Branco, Portugal. Formação sólida em redes, sistemas distribuídos, arquitetura computacional, bases de dados e segurança.",

    hist_2_role: "Operador de Atendimento ao Cliente",
    hist_2_desc: "Monte Redondo, Leiria. Resolução ágil de incidentes sob pressão em períodos de tráfego intenso e reconciliação rigorosa de caixa.",

    hist_3_role: "Passados Aumentados (Erasmus+ BIP)",
    hist_3_desc: "Weimar, Alemanha. Ferramentas digitais avançadas, processamento e preservação de património cultural tecnológico.",

    hist_4_role: "Operador de Logística e Expedição",
    hist_4_desc: "Marinha das Ondas. Operação logística de ritmo acelerado, controlo de inventário por terminais de armazém e turnos rotativos.",

    hist_5_role: "Automação NetDevOps (PoC)",
    hist_5_desc: "Projeto de Fim de Curso (19/20). Arquitetura orientada a eventos para autorrecuperação closed-loop em redes críticas IPsec/MPLS.",

    hist_6_role: "Liderança & Gestão da Mudança",
    hist_6_desc: "Ploiești, Roménia (Erasmus+ BIP). Liderança e gestão da mudança rumo à sustentabilidade em organizações e equipas técnicas.",

    hist_7_role: "Disponibilidade Imediata",
    hist_7_desc: "Engenheiro Informático disponível para posições de NetDevOps, SecDevOps, Cloud e SRE. Elegível para medida ATIVAR.pt.",

    // Projects Section
    projects_label: "Experiência de Engenharia",
    projects_title: "Projetos Técnicos",
    projects_desc: "Projetos práticos de elevada complexidade demonstrados com métricas reais, conformidade regulamentar e diagramas interativos de arquitetura.",

    p1_grade: "Classificação: 19 / 20 · Parceria: ARTE, I.P. · Out 2025 – Jun 2026",
    p1_title: "Automação NetDevOps em Ciclo Fechado e Resiliência de Rede (PoC)",
    p1_lead: "<strong>Projeto de Fim de Curso (Parceria: ARTE, I.P.):</strong> Tecnologias: n8n, Python, Fortinet, NetBox, MongoDB, Docker. Arquitetura orientada a eventos para elevar a resiliência e a disponibilidade de redes híbridas críticas (Overlay VPN IPsec sobre Underlay MPLS).",
    p1_bullet1: "<strong>Triagem Diferencial (Underlay vs. Overlay):</strong> Orquestração orientada a eventos no n8n (via Webhooks PRTG) para isolar falhas entre MPLS e VPN IPsec IKEv2 em <strong>&lt;10s (redução &gt;95% do MTTD)</strong>, com sondas preventivas ICMP (<em>Pre-Check</em>) para despiste elétrico local.",
    p1_bullet2: "<strong>Autorrecuperação Híbrida e CMDB:</strong> Mitigação autónoma de <em>configuration drift</em> (Gateway, Phase 2 CIDR, Firewall Policies e SAs) via REST API do FortiOS com Token/Trusted Hosts e contingência SSH (Netmiko), convergindo em <strong>4–7s (ciclo forense de 40–70s vs. 30 min)</strong>.",
    p1_bullet3: "<strong>SSoT, Auditoria e Observabilidade:</strong> Reconciliação dinâmica de IPAM com o NetBox (SSoT), persistência forense de syslogs em MongoDB (Docker) e dashboards SRE/MTTR em Metabase ao longo de 24 ensaios de <em>Chaos Engineering</em> (conformidade ISO 27001).",
    p1_pipeline: "PRTG (Webhooks) ➔ n8n Orchestrator ➔ NetBox (SSoT/IPAM) ➔ FortiOS REST API / Netmiko SSH ➔ MongoDB, Metabase & Telegram",
    btn_read_poc_brief: "Ler Análise da Topologia ➔",

    p2_grade: "Classificação: 20 / 20 · Projeto de Engenharia Cloud · Fev 2026 – Mai 2026",
    p2_title: "Plataforma Multi-Cloud Segura e Resiliente (CityGuards)",
    p2_lead: "<strong>Projeto de Engenharia Cloud:</strong> Tecnologias: Azure, GCP Firestore, Docker, Bicep, Node.js, OIDC. Plataforma híbrida de alta resiliência e conformidade regulamentar combinando serviços Azure PaaS e Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Arquitetura Híbrida e Contingência:</strong> API em Node.js/Express interoperável entre Azure (App Service, Blob Storage, Functions) e GCP Firestore, com dupla resiliência (<em>graceful degradation</em> de Azure AI Vision para NLP local e <em>fallback in-process</em> de PDFs perante pausa FinOps no ACI).",
    p2_bullet2: "<strong>Robustez Transacional e Persistência:</strong> Migração desacoplada de Azure Cosmos DB para GCP Firestore, controlo de concorrência via transações atómicas ACID (<code>db.runTransaction</code>), isolamento <em>multi-tenant</em> por município e sanitização de payloads contra <em>data leaks</em>.",
    p2_bullet3: "<strong>SecDevOps, IaC, FinOps e Soberania:</strong> Aprovisionamento declarativo via Bicep com injeção dinâmica de <em>Connection Strings</em>, pipeline CI/CD no GitHub Actions com autenticação federada via OIDC (<code>azure/login@v2</code>), otimização FinOps e estudo de soberania RGPD vs. US CLOUD Act.",
    p2_pipeline: "Bicep Declarativo ➔ GitHub Actions OIDC (azure/login@v2) ➔ Checkov SAST ➔ Azure App Service & GCP Firestore",
    btn_read_cloud_brief: "Ler Análise Multi-Cloud ➔",
    btn_view_linkedin: "Ver no LinkedIn",

    // Writeups
    writeups_label: "Artigos &amp; Investigação",
    writeups_title: "Writeups &amp; Engineering Notes",
    writeups_desc: "Notas de engenharia e análises técnicas detalhadas sobre desafios reais resolvidos em automação de redes, segurança em CI/CD e resiliência de sistemas.",

    w1_title: "Remediação Closed-Loop de Configuration Drift em FortiOS via REST API e NetBox",
    w1_snippet: "Como projetar um motor de autorrecuperação determinístico para firewalls Fortinet com NetBox como SSoT, superando limitações de escrita de licença de teste através de contingência SSH por Netmiko.",

    w2_title: "Eliminando Segredos Estáticos em CI/CD: Autenticação Federada com GitHub Actions e Azure OIDC",
    w2_snippet: "Eliminação total de credenciais estáticas de longa duração em pipelines de IaC. Configuração de confiança federada no Azure AD / Entra ID via azure/login@v2 com verificação de compliance no Checkov.",

    w3_title: "Arquitetura Multi-Cloud Resiliente: Mitigando Falhas com Fallback Desacoplado entre Azure e GCP",
    w3_snippet: "Estratégias de graceful degradation em serviços críticos: garantia de atomicidade de dados no Firestore aliada a microsserviços desacoplados em ACI e análise do impacto do US CLOUD Act.",

    btn_read_brief: "Ler Resumo Técnico",

    // Languages
    languages_head: "Competências Linguísticas & Idiomas",
    lang_pt_lvl: "Língua Materna",
    lang_en_lvl: "Profissional Pleno (C1)",
    lang_es_lvl: "Operacional / Fluente (B2)",

    // Contact
    contact_label: "Comunicação Direta",
    contact_title: "Entrar em Contacto",
    contact_desc: "Se a sua organização procura um engenheiro com perfil analítico e prático em <strong>Security Automation</strong>, <strong>NetDevOps</strong>, <strong>SecDevOps</strong> ou <strong>SRE</strong>, estou disponível para conversas e processos de recrutamento (Disponibilidade Imediata · Elegível IEFP Nível 6).",
    ch_email_lbl: "Email (Clique p/ Copiar)",
    ch_phone_lbl: "Contacto Telefónico",

    // Footer
    footer_role: "Security Automation, NetDevOps & SRE",
    footer_status: "Status: Disponibilidade Imediata (ATIVAR.pt Nível 6)"
  },

  en: {
    // Navigation
    nav_expertise: "Expertise",
    nav_history: "History",
    nav_projects: "Projects",
    nav_writeups: "Writeups",
    nav_contact: "Contact",

    // Hero Section
    hero_status: '<span class="status-dot"></span> Immediate Availability · Eligible for Professional Internship (IEFP Level 6)',
    hero_name: "Rafael Cruz",
    hero_role: "Security Automation, NetDevOps & SRE Engineer",
    hero_bio: "Software Engineer focused on <strong>Network Automation (NetDevOps)</strong>, <strong>Multi-Cloud Engineering (SecDevOps)</strong>, and <strong>SRE</strong>. Hands-on experience developing closed-loop self-healing architectures, declarative infrastructure provisioning (IaC), and hardened CI/CD pipelines with federated authentication (Azure OIDC). Driven by reducing MTTD/MTTR, mitigating configuration drift via SSoT, and observability across critical infrastructures.",
    btn_explore_projects: "Explore Projects",
    btn_contact_me: "Get in Touch ➔",

    // Expertise Section
    expertise_label: "Technical Skills",
    expertise_title: "Expertise",
    expertise_desc: "Engineering capabilities structured across the three core CV pillars, combining network automation, declarative cloud provisioning, and SRE resilience.",
    
    p1_card_title: "Networking & NetDevOps (Closed-Loop)",
    p1_card_desc: "Event-driven automation architectures and closed-loop self-healing. Autonomous mitigation of <strong>configuration drift</strong> (Gateway, Phase 2 CIDR, Firewall Policies, and SAs) via <strong>FortiOS REST API</strong> (Token/Trusted Hosts) and SSH contingency (<strong>Netmiko</strong>), converging in <strong>4–7s</strong>. Dynamic reconciliation with <strong>NetBox as SSoT/IPAM</strong>, <strong>n8n</strong> orchestration, and preventive ICMP probing via <strong>PRTG</strong> (&lt;10s, &gt;95% MTTD reduction).",

    p2_card_title: "Cloud, IaC & SecDevOps",
    p2_card_desc: "Multi-cloud engineering across <strong>Microsoft Azure, AWS, and GCP</strong>. Declarative infrastructure provisioning via <strong>Bicep and Terraform</strong> with dynamic Connection String injection. Hardened CI/CD in <strong>GitHub Actions with federated OIDC authentication (<code>azure/login@v2</code>)</strong> without static secrets, <strong>Docker</strong> containerization, <strong>Linux (Ubuntu Server)</strong> and <strong>Windows Server</strong> administration, <strong>FinOps</strong> optimization, and GDPR vs. US CLOUD Act compliance.",

    p3_card_title: "SRE, Observability & Security",
    p3_card_desc: "Operational resilience through fault injection with <strong>Chaos Engineering</strong> (24 empirical trials), forensic syslog persistence in <strong>MongoDB (Docker)</strong>, and SRE/MTTR dashboards in <strong>Metabase</strong> compliant with <strong>ISO 27001</strong> standards. Real-time telemetry via <strong>SIEM (Wazuh, Splunk)</strong>, network forensics with <strong>Wireshark</strong>, <strong>OpenSSL</strong>, <strong>Nmap</strong>, and <strong>OpenVAS</strong>.",

    lang_data_title: "Languages & Data Ecosystem:",
    certs_subhead: "Official Technical Certifications",

    // Career History
    history_label: "Education & Experience",
    history_title: "Career History",
    history_desc: "Chronological timeline integrating academic background, international mobility, and complementary professional experience from the CV.",

    hist_1_role: "BSc in Computer Science and Engineering",
    hist_1_desc: "Castelo Branco, Portugal. Solid foundations in computer networks, distributed systems, computer architecture, databases, and security.",

    hist_2_role: "Customer Service Operator",
    hist_2_desc: "Monte Redondo, Leiria. Agile incident resolution under pressure during high-traffic peaks and strict cash reconciliation protocols.",

    hist_3_role: "Augmented Pasts (Erasmus+ BIP)",
    hist_3_desc: "Weimar, Germany. Advanced digital tools, processing, and technological cultural heritage preservation.",

    hist_4_role: "Logistics & Dispatch Operator",
    hist_4_desc: "Marinha das Ondas. Fast-paced logistics operations, terminal inventory control, and rotating shifts adherence.",

    hist_5_role: "NetDevOps Automation (PoC)",
    hist_5_desc: "Capstone Engineering Project (19/20). Event-driven closed-loop self-healing architecture for critical IPsec/MPLS networks.",

    hist_6_role: "Leadership & Change Management",
    hist_6_desc: "Ploiești, Romania (Erasmus+ BIP). Leadership and change management towards sustainability in technical organizations.",

    hist_7_role: "Immediate Availability",
    hist_7_desc: "Software Engineer available for NetDevOps, SecDevOps, Cloud, and SRE roles. Eligible for the ATIVAR.pt program.",

    // Projects Section
    projects_label: "Engineering Experience",
    projects_title: "Technical Projects",
    projects_desc: "Complex hands-on projects demonstrated with real-world metrics, regulatory compliance, and interactive architecture blueprints.",

    p1_grade: "Grade: 19 / 20 · Industry Partnership: ARTE, I.P. · Oct 2025 – Jun 2026",
    p1_title: "NetDevOps Closed-Loop Automation & Network Resilience (PoC)",
    p1_lead: "<strong>Capstone Engineering Project (Partnership: ARTE, I.P.):</strong> Technologies: n8n, Python, Fortinet, NetBox, MongoDB, Docker. Event-driven architecture engineered to enhance resilience and availability in critical hybrid networks (IPsec VPN Overlay over MPLS Underlay).",
    p1_bullet1: "<strong>Differential Triage (Underlay vs. Overlay):</strong> Event-driven orchestration in n8n (via PRTG Webhooks) isolating faults between MPLS and IPsec IKEv2 in <strong>&lt;10s (&gt;95% MTTD reduction)</strong>, using preventive ICMP probing (<em>Pre-Check</em>) for local electrical troubleshooting.",
    p1_bullet2: "<strong>Hybrid Self-Healing & CMDB:</strong> Autonomous configuration drift mitigation (Gateway, Phase 2 CIDR, Firewall Policies, and SAs) via FortiOS REST API with Token/Trusted Hosts and SSH contingency (Netmiko), converging in <strong>4–7s (40–70s forensic cycle vs. 30 min)</strong>.",
    p1_bullet3: "<strong>SSoT, Auditing & Observability:</strong> Dynamic IPAM reconciliation with NetBox (SSoT), forensic syslog persistence in MongoDB (Docker), and SRE/MTTR dashboards in Metabase across 24 <em>Chaos Engineering</em> trials (ISO 27001 compliance).",
    p1_pipeline: "PRTG (Webhooks) ➔ n8n Orchestrator ➔ NetBox (SSoT/IPAM) ➔ FortiOS REST API / Netmiko SSH ➔ MongoDB, Metabase & Telegram",
    btn_read_poc_brief: "Read Topology Brief ➔",

    p2_grade: "Grade: 20 / 20 · Cloud Engineering Project · Feb 2026 – May 2026",
    p2_title: "Secure & Resilient Multi-Cloud Platform (CityGuards)",
    p2_lead: "<strong>Cloud Engineering Project:</strong> Technologies: Azure, GCP Firestore, Docker, Bicep, Node.js, OIDC. High-resilience and regulatory-compliant hybrid platform combining Microsoft Azure PaaS and Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Hybrid Architecture & Contingency:</strong> Interoperable Node.js/Express API across Azure (App Service, Blob Storage, Functions) and GCP Firestore with dual resilience (graceful degradation of Azure AI Vision to local NLP and in-process PDF fallback during FinOps pauses on ACI).",
    p2_bullet2: "<strong>Transactional Integrity & Persistence:</strong> Decoupled migration from Azure Cosmos DB to GCP Firestore, concurrency control via ACID atomic transactions (<code>db.runTransaction</code>), multi-tenant isolation per municipality, and payload sanitization against data leaks.",
    p2_bullet3: "<strong>SecDevOps, IaC, FinOps & Sovereignty:</strong> Declarative provisioning via Bicep with dynamic Connection String injection, GitHub Actions CI/CD with federated OIDC authentication (<code>azure/login@v2</code>), FinOps cost optimization, and GDPR vs. US CLOUD Act sovereignty analysis.",
    p2_pipeline: "Declarative Bicep ➔ GitHub Actions OIDC (azure/login@v2) ➔ Checkov SAST ➔ Azure App Service & GCP Firestore",
    btn_read_cloud_brief: "Read Multi-Cloud Brief ➔",
    btn_view_linkedin: "View on LinkedIn",

    // Writeups
    writeups_label: "Technical Research & Articles",
    writeups_title: "Writeups &amp; Engineering Notes",
    writeups_desc: "Engineering briefs and technical deep-dives detailing real-world problems solved across network automation, CI/CD security, and system resilience.",

    w1_title: "Closed-Loop Remediation of Configuration Drift in FortiOS via REST API & NetBox",
    w1_snippet: "Designing a deterministic self-healing engine for Fortinet firewalls with NetBox as SSoT, circumventing trial license restrictions via Netmiko SSH contingency fallback.",

    w2_title: "Eliminating Static Secrets in CI/CD: Federated Authentication with GitHub Actions & Azure OIDC",
    w2_snippet: "Zero static long-lived credentials in infrastructure-as-code pipelines. Establishing federated identity trust in Azure Entra ID via azure/login@v2 with Checkov compliance enforcement.",

    w3_title: "Resilient Multi-Cloud Architecture: Mitigating Failures with Decoupled Fallback across Azure and GCP",
    w3_snippet: "Graceful degradation patterns in critical services: ensuring Firestore transactional atomicity coupled with decoupled ACI microservices and US CLOUD Act compliance review.",

    btn_read_brief: "Read Technical Brief",

    // Languages
    languages_head: "Language Proficiencies",
    lang_pt_lvl: "Native Proficiency",
    lang_en_lvl: "Full Professional (C1)",
    lang_es_lvl: "Professional Working (B2)",

    // Contact
    contact_label: "Direct Communication",
    contact_title: "Get in Touch",
    contact_desc: "If your organization is looking for a hands-on engineer in <strong>Security Automation</strong>, <strong>NetDevOps</strong>, <strong>SecDevOps</strong>, or <strong>SRE</strong>, I am open to conversations and hiring processes (Immediate Availability · Eligible for ATIVAR.pt Level 6).",
    ch_email_lbl: "Email (Click to Copy)",
    ch_phone_lbl: "Phone Call",

    // Footer
    footer_role: "Security Automation, NetDevOps & SRE",
    footer_status: "Status: Immediate Availability (ATIVAR.pt Level 6)"
  }
};

// ============================================================
// Technical Writeup Briefs (Modal Content)
// ============================================================
const writeupData = {
  1: {
    pt: {
      title: "Remediação Closed-Loop de Configuration Drift em FortiOS via REST API e NetBox",
      meta: "NetDevOps · Fortinet FortiGate · NetBox SSoT/IPAM · Chaos Engineering · ISO 27001",
      content: `
        <h4>1. O Problema: Degradação Silenciosa e Drift de Configuração</h4>
        <p>Em redes híbridas empresariais com túneis VPN IPsec IKEv2 sobre MPLS, alterações manuais de administradores ou falhas transitórias criam <em>configuration drift</em> em Gateway, Phase 2 CIDR, Firewall Policies ou SAs. Tradicionalmente, a deteção depende de tickets de utilizadores e a resolução manual demora em média 30 a 45 minutos (MTTR elevado).</p>
        
        <h4>2. A Solução Arquitetural Orientada a Eventos</h4>
        <p>Concebi e implementei uma arquitetura em ciclo fechado composta por blocos integrados:</p>
        <ul>
          <li><strong>Detetor Diferencial (PRTG):</strong> Sondagem contínua com verificação preventiva ICMP (<em>Pre-Check</em>) para distinguir falhas de camada física (cabo/fibra rompida) de falhas lógicas de túnel IPsec, suprimindo falsos positivos (&lt;10s, redução &gt;95% do MTTD).</li>
          <li><strong>Barramento de Eventos (n8n):</strong> Acionamento reativo por webhook HTTP imediatamente após alerta do sensor.</li>
          <li><strong>Single Source of Truth (NetBox):</strong> Reconciliação dinâmica de IPAM e consulta da <em>golden configuration</em> declarativa do dispositivo via REST API para validação de discrepâncias.</li>
          <li><strong>Motor Híbrido de Remediação:</strong> Tentativa prioritária de aplicação de patch via <code>FortiOS REST API</code> com Token e Trusted Hosts, convergindo em <strong>4–7 segundos</strong>. Em caso de restrição de escrita, aciona contingência determinística via <code>Python + Netmiko (SSH)</code>.</li>
          <li><strong>Auditoria e Observabilidade SRE:</strong> Registo forense imutável de syslogs em MongoDB (Docker), notificação instantânea no Telegram e dashboards SRE/MTTR em tempo real no Metabase (conformidade ISO 27001).</li>
        </ul>

        <h4>3. Validação Experimental com Chaos Engineering</h4>
        <p>A arquitetura foi submetida a <strong>24 ensaios empíricos</strong> de injeção de falhas (interrupção intencional de túnel, alteração de chaves pré-partilhadas IKE e simulação de corte de enlace). Em todos os ensaios, a autorrecuperação concluiu com <strong>100% de sucesso</strong>, reduzindo o ciclo forense total para <strong>40 a 70 segundos</strong> vs. 30 minutos manuais (Classificação: 19 / 20).</p>
      `
    },
    en: {
      title: "Closed-Loop Remediation of Configuration Drift in FortiOS via REST API & NetBox",
      meta: "NetDevOps · Fortinet FortiGate · NetBox SSoT/IPAM · Chaos Engineering · ISO 27001",
      content: `
        <h4>1. The Problem: Silent Degradation and Configuration Drift</h4>
        <p>In enterprise hybrid networks running IPsec IKEv2 VPN tunnels over MPLS, manual changes or transient glitches cause configuration drift across Gateways, Phase 2 CIDRs, Firewall Policies, or Security Associations. Detection traditionally relies on human ticketing, resulting in high MTTR (30–45 minutes).</p>
        
        <h4>2. Event-Driven Architectural Solution</h4>
        <p>I architected and engineered a closed-loop automated system structured across integrated modules:</p>
        <ul>
          <li><strong>Differential Probing (PRTG):</strong> Continuous telemetry with ICMP pre-checks to distinguish physical carrier failures from logical IPsec renegotiations, eliminating false alarms (&lt;10s, &gt;95% MTTD reduction).</li>
          <li><strong>Event Orchestration (n8n):</strong> Event webhook triggered instantly upon metric threshold alarms.</li>
          <li><strong>Single Source of Truth (NetBox):</strong> Dynamic IPAM reconciliation and declarative golden config audit via REST API.</li>
          <li><strong>Hybrid Remediation Engine:</strong> Primary automated patching via <code>FortiOS REST API</code> with Token and Trusted Hosts, converging in <strong>4–7 seconds</strong>. When encountering sandbox/write barriers, the engine seamlessly invokes deterministic <code>Python + Netmiko (SSH)</code> contingency.</li>
          <li><strong>SRE Observability & Audit Trail:</strong> Forensic syslog persistence in MongoDB (Docker), real-time alerts via Telegram Bot, and SRE/MTTR dashboards in Metabase (ISO 27001 compliance).</li>
        </ul>

        <h4>3. Empirical Validation via Chaos Engineering</h4>
        <p>The system was tested across <strong>24 rigorous Chaos Engineering trials</strong> involving deliberate PSK corruptions, interface teardowns, and route deletions. Closed-loop recovery completed with <strong>100% success</strong>, slashing the total forensic cycle to <strong>40–70 seconds</strong> vs. 30 minutes manually (Grade: 19 / 20).</p>
      `
    }
  },
  2: {
    pt: {
      title: "Eliminando Segredos Estáticos em CI/CD: Autenticação Federada com GitHub Actions e Azure OIDC",
      meta: "SecDevOps · Zero Trust · Azure Entra ID · GitHub Actions OIDC · azure/login@v2 · Checkov",
      content: `
        <h4>1. O Risco de Credenciais Estáticas em Pipelines</h4>
        <p>O armazenamento de <em>Service Principal client secrets</em> de longa duração nas variáveis secretas de CI/CD representa uma das maiores superfícies de ataque para <em>supply chain compromises</em>. O vazamento acidental dessas credenciais concede acesso persistente não monitorizado aos recursos da cloud.</p>
        
        <h4>2. Implementação de Federação OpenID Connect (OIDC)</h4>
        <p>Para mitigar este vetor, configurei uma relação de confiança federada direta entre o GitHub Actions e o Microsoft Entra ID:</p>
        <ul>
          <li><strong>Tokens JWT Efêmeros:</strong> O runner do GitHub solicita um token de identidade OIDC assinado criptograficamente contendo claims verificadas (repositório, branch e ambiente).</li>
          <li><strong>Troca de Token no Azure STS via <code>azure/login@v2</code>:</strong> O Azure Security Token Service valida a assinatura e as claims do GitHub, emitindo um <em>access token</em> temporário com validade curta sem necessidade de qualquer password ou secret armazenado.</li>
          <li><strong>Least-Privilege RBAC & Bicep:</strong> Aprovisionamento declarativo via Bicep com injeção dinâmica de Connection Strings estritamente limitadas ao Resource Group do projeto.</li>
          <li><strong>Segurança Shift-Left (Checkov SAST):</strong> O pipeline inclui varredura automática de conformidade IaC com <code>Checkov</code>, bloqueando qualquer merge com violações de regras de segurança ou permissões excessivas.</li>
        </ul>

        <h4>3. Resultados e Benefícios de Segurança</h4>
        <p>Eliminação de 100% dos segredos estáticos, conformidade com os princípios de <em>Zero Trust Architecture</em> e auditoria granular de todas as operações de aprovisionamento nos logs do Azure Activity.</p>
      `
    },
    en: {
      title: "Eliminating Static Secrets in CI/CD: Federated Authentication with GitHub Actions & Azure OIDC",
      meta: "SecDevOps · Zero Trust · Azure Entra ID · GitHub Actions OIDC · azure/login@v2 · Checkov",
      content: `
        <h4>1. The Threat of Long-Lived CI/CD Secrets</h4>
        <p>Storing long-lived Service Principal client secrets inside CI/CD repositories constitutes a high-risk vector for supply chain breaches. An accidental token leak grants unauthorized, hard-to-detect persistent access into cloud estates.</p>
        
        <h4>2. Implementing OpenID Connect (OIDC) Federation</h4>
        <p>To eliminate this threat surface, I engineered a direct federated identity trust relationship between GitHub Actions and Microsoft Entra ID:</p>
        <ul>
          <li><strong>Ephemeral JWT Tokens:</strong> The GitHub workflow runner requests a cryptographically signed OIDC identity token containing verifiable claims (repository, branch, and environment).</li>
          <li><strong>Token Exchange via <code>azure/login@v2</code>:</strong> Azure's Security Token Service validates the signature and claims against Entra ID, returning a short-lived access token without storing any secrets in GitHub.</li>
          <li><strong>Least-Privilege RBAC & Bicep:</strong> Declarative Bicep provisioning with dynamic Connection String injection confined to target Resource Groups.</li>
          <li><strong>Shift-Left IaC Security:</strong> Automated <code>Checkov</code> SAST scans to catch misconfigurations before deployment commits are reconciled.</li>
        </ul>

        <h4>3. Security Outcomes</h4>
        <p>Achieved 100% elimination of hardcoded secrets, verified Zero Trust operational compliance, and comprehensive auditability in Azure Activity logs.</p>
      `
    }
  },
  3: {
    pt: {
      title: "Arquitetura Multi-Cloud Resiliente: Mitigando Falhas com Fallback Desacoplado entre Azure e GCP",
      meta: "Multi-Cloud Architecture · Azure PaaS · GCP Firestore · db.runTransaction · FinOps · RGPD",
      content: `
        <h4>1. Desafio de Disponibilidade e Conformidade</h4>
        <p>Projetar uma plataforma de elevado tráfego capaz de suportar falhas regionais completas de fornecedor de nuvem (Cloud Outage) sem perda de integridade de dados e garantindo estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
        
        <h4>2. Padrões de Resiliência e Desacoplamento</h4>
        <ul>
          <li><strong>Transações Atómicas no Firestore (<code>db.runTransaction</code>):</strong> Migração desacoplada de Azure Cosmos DB para GCP Firestore, prevenindo <em>race conditions</em> em atualizações de estado simultâneas com isolamento <em>multi-tenant</em> por município.</li>
          <li><strong>Graceful Degradation:</strong> Dupla resiliência com <em>graceful degradation</em> de Azure AI Vision para NLP local e <em>fallback in-process</em> de geração de PDFs perante pausas FinOps no Azure Container Instances (ACI).</li>
          <li><strong>Otimização FinOps:</strong> Controlo rigoroso de consumo de recursos computacionais através de escalamento reativo sob demanda.</li>
          <li><strong>Análise de Soberania de Dados (RGPD vs. US CLOUD Act):</strong> Avaliação jurídica e técnica dos fluxos de dados transfronteiriços para garantir conformidade estrita de dados europeus.</li>
        </ul>

        <h4>3. Classificação Máxima</h4>
        <p>O projeto foi galardoado com a <strong>classificação máxima de 20 / 20 valores</strong>, elogiado pelo rigor na separação de responsabilidades e tratamento de casos limite de infraestrutura.</p>
      `
    },
    en: {
      title: "Resilient Multi-Cloud Architecture: Mitigating Failures with Decoupled Fallback across Azure and GCP",
      meta: "Multi-Cloud Architecture · Azure PaaS · GCP Firestore · db.runTransaction · FinOps · GDPR",
      content: `
        <h4>1. High-Availability & Data Sovereignty Challenge</h4>
        <p>Designing a high-throughput platform engineered to withstand full regional outages of a primary cloud provider while maintaining data integrity and complying with European General Data Protection Regulation (GDPR) mandates.</p>
        
        <h4>2. Resilience Patterns & Decoupled Architecture</h4>
        <ul>
          <li><strong>Atomic Concurrency in Firestore (<code>db.runTransaction</code>):</strong> Decoupled migration from Azure Cosmos DB to GCP Firestore, preventing race conditions during high-volume simultaneous state changes with municipal multi-tenant isolation.</li>
          <li><strong>Graceful Degradation:</strong> Dual resilience with graceful degradation of Azure AI Vision to local NLP heuristics and in-process PDF generation fallback during FinOps pauses on Azure Container Instances (ACI).</li>
          <li><strong>FinOps Optimization:</strong> Tight cost control and resource scaling policies to prevent infrastructure over-provisioning.</li>
          <li><strong>Data Sovereignty Assessment:</strong> Conducted technical analysis evaluating GDPR requirements against extraterritorial reach (US CLOUD Act) for cross-cloud communications.</li>
        </ul>

        <h4>3. Maximum Grade</h4>
        <p>Recognized with the <strong>maximum grade of 20 / 20</strong> for excellence in software architecture, fault-tolerant design, and cloud compliance.</p>
      `
    }
  }
};

// ============================================================
// Language Management
// ============================================================
let currentLang = 'pt';
try {
  const savedLang = localStorage.getItem('rafael_lang');
  if (savedLang === 'pt' || savedLang === 'en') {
    currentLang = savedLang;
  }
} catch (e) {
  // ignore
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('rafael_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update elements with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[lang] && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
      el.setAttribute('title', translations[lang][key]);
    }
  });

  // Update button active indicators
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Global exposure
window.setLanguage = setLanguage;

// ============================================================
// Dark / Light Theme System
// ============================================================
let currentTheme = 'dark';
try {
  const savedTheme = localStorage.getItem('rafael_theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    currentTheme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    currentTheme = 'dark'; // Keep default dark for cybersecurity aesthetic
  }
} catch (e) {}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('rafael_theme', theme);
  } catch (e) {}

  const sunIcon = document.getElementById('themeIconSun');
  const moonIcon = document.getElementById('themeIconMoon');

  if (theme === 'light') {
    if (sunIcon) sunIcon.style.display = 'block';
    if (moonIcon) moonIcon.style.display = 'none';
  } else {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'block';
  }
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

// ============================================================
// Clipboard Copy Email
// ============================================================
function copyEmailToClipboard() {
  const email = "rafael.lourenco.cruz20@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast(currentLang === 'pt' ? '✓ Email copiado para a área de transferência!' : '✓ Email copied to clipboard!');
  }).catch(() => {
    window.location.href = `mailto:${email}`;
  });
}
window.copyEmailToClipboard = copyEmailToClipboard;

function showToast(message) {
  const toast = document.getElementById('copyToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ============================================================
// Technical Writeup Modal
// ============================================================
function openWriteupModal(id) {
  const modal = document.getElementById('writeupModal');
  const container = document.getElementById('modalContentDynamic');
  if (!modal || !container) return;

  const data = writeupData[id] && writeupData[id][currentLang] ? writeupData[id][currentLang] : null;
  if (!data) return;

  container.innerHTML = `
    <h3 class="brief-modal-title">${data.title}</h3>
    <div class="brief-modal-meta">${data.meta}</div>
    <div class="brief-modal-body">
      ${data.content}
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
window.openWriteupModal = openWriteupModal;

function closeWriteupModal() {
  const modal = document.getElementById('writeupModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
window.closeWriteupModal = closeWriteupModal;

// Close modal on outside click & escape key
document.addEventListener('click', (e) => {
  const modal = document.getElementById('writeupModal');
  if (modal && e.target === modal) {
    closeWriteupModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWriteupModal();
  }
});

// ============================================================
// Active Navbar Link Indicator on Scroll
// ============================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.offsetHeight;
      if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ============================================================
// Initialization on DOM Ready
// ============================================================
function init() {
  // Apply saved theme & language
  applyTheme(currentTheme);
  setLanguage(currentLang);

  // Setup theme toggle listener
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Setup language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.target.getAttribute('data-lang');
      if (targetLang) setLanguage(targetLang);
    });
  });

  // Setup Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  setupScrollSpy();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
