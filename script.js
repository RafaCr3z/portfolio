// ============================================================
// RAFAEL CRUZ — PORTFOLIO JAVASCRIPT & INTERNATIONALIZATION (V2)
// High-End Security Engineer & NetDevOps Theme
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
    cv_tooltip: "Descarregar Currículo em PDF",

    // Hero Section
    hero_status: '<span class="status-dot"></span> Disponibilidade Imediata · Elegível IEFP ATIVAR.pt (Nível 6)',
    hero_name: "Rafael Cruz",
    hero_role: "Security Automation & NetDevOps Engineer",
    hero_bio: "Engenheiro Informático especializado em <strong>Automação de Redes (NetDevOps)</strong>, <strong>SecDevOps</strong> e <strong>Cibersegurança Defensiva</strong>. Foco em autorremediação <em>closed-loop</em>, mitigação de <em>configuration drift</em> via REST APIs e redução comprovada de MTTR operacional de 30 min para &lt; 70 segundos.",
    btn_explore_projects: "Explorar Projetos",
    btn_download_cv: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Descarregar CV',
    btn_contact_me: "Falar Comigo ➔",

    // Expertise Section
    expertise_label: "Especialização Técnica",
    expertise_title: "Expertise",
    expertise_desc: "Competências estratégicas divididas em três pilares fundamentais, combinando código determinístico, segurança em nuvem e observabilidade de infraestruturas.",
    
    p1_card_title: "NetDevOps & Closed-Loop Remediation",
    p1_card_desc: "Engenharia de automação orientada a eventos para redes críticas. Conceção de autorremediação em ciclo fechado com mitigação de <strong>configuration drift</strong>, integração com <strong>Fortinet FortiOS REST API</strong> e <strong>NetBox como SSOT</strong>. Redução validada de MTTR de 30 min para 40–70s sobre 24 ensaios de Chaos Engineering.",

    p2_card_title: "Cloud Security & SecDevOps",
    p2_card_desc: "Aprovisionamento automatizado de infraestruturas via <strong>IaC (Bicep & Terraform)</strong> em <strong>Microsoft Azure e GCP</strong>. Pipelines de CI/CD sem credenciais estáticas protegidas por <strong>autenticação federada OIDC</strong>, análise estática SAST (Checkov) e conformidade regulamentar com <strong>RGPD vs. US CLOUD Act</strong>.",

    p3_card_title: "Defensive Security & Observability",
    p3_card_desc: "Operações defensivas, monitorização e análise forense de incidentes. Auditoria de tráfego de rede via <strong>Wireshark (PCAP)</strong>, enriquecimento e correlação de logs em <strong>SIEM (Wazuh, Splunk)</strong>, avaliações de vulnerabilidades com <strong>OpenVAS/Nmap</strong> e mapeamento ao framework <strong>MITRE ATT&CK</strong>.",

    certs_subhead: "Validação e Certificações Oficiais",

    // Career History
    history_label: "Percurso & Experiência",
    history_title: "Career History",
    history_desc: "Progressão académica e técnica focada em engenharia de sistemas, colaborações com a indústria e programas internacionais de especialização.",

    hist_1_role: "Licenciatura em Engenharia Informática",
    hist_1_desc: "Formação profunda em algoritmos, redes de computadores, arquitetura de sistemas operacionais, bases de dados e segurança de informação.",

    hist_2_role: "Investigação NetDevOps (PoC)",
    hist_2_desc: "Desenvolvimento de arquitetura orientada a eventos para autorremediação em redes híbridas de missão crítica (Classificação: 19 / 20).",

    hist_3_role: "Erasmus+ BIP Mobilidade",
    hist_3_desc: "Programa intensivo europeu: Augmented Pasts — Ferramentas digitais avançadas, processamento e preservação de património tecnológico.",

    hist_4_role: "Erasmus+ BIP Internacional",
    hist_4_desc: "Especialização intensiva: Leadership & Change Management Towards Sustainability aplicada a equipas e projetos tecnológicos.",

    hist_5_role: "Disponível para Integração",
    hist_5_desc: "Disponibilidade imediata para equipas de engenharia e operações defensivas. Elegível para Estágio Profissional IEFP (ATIVAR.pt Nível 6).",

    // Projects Section
    projects_label: "Portfólio de Engenharia",
    projects_title: "Personal Projects",
    projects_desc: "Projetos práticos de elevada complexidade demonstrados com diagramas de topologia de rede, métricas de observabilidade e arquitetura de sistemas.",

    p1_grade: "Classificação: 19 / 20 · Parceria ARTE, I.P.",
    p1_title: "Automação NetDevOps e Resiliência em Ciclo Fechado (PoC)",
    p1_lead: "<strong>Projeto Final de Licenciatura:</strong> Arquitetura orientada a eventos para elevar a resiliência e a disponibilidade de redes híbridas críticas (Overlay VPN IPsec sobre Underlay MPLS).",
    p1_bullet1: "<strong>Triagem Diferencial &amp; Pre-Check:</strong> Isolamento de falhas entre Underlay (MPLS) e Overlay (IPsec) via PRTG em &lt; 10s, recorrendo a sonda preventiva ICMP para suprimir falsos alarmes em falhas físicas de transporte.",
    p1_bullet2: "<strong>Motor Híbrido de Autorremediação:</strong> Mitigação automatizada de <em>configuration drift</em> via REST API do FortiOS com fallback determinístico em Python/Netmiko (SSH), reduzindo o MTTR de 30 min para 40–70s.",
    p1_bullet3: "<strong>SSOT &amp; Chaos Engineering:</strong> Conciliação contínua com NetBox como fonte única de verdade (SSOT), telemetria persistida em MongoDB e validação empírica em 24 ensaios de injeção de falhas com 100% de sucesso.",
    p1_pipeline: "PRTG + FortiOS REST API ➔ n8n Orchestrator ➔ NetBox (SSOT) ➔ Motor Híbrido ➔ Telegram &amp; Metabase",
    btn_read_poc_brief: "Ler Análise da Topologia ➔",

    p2_grade: "Classificação: 20 / 20 · Engenharia de Software",
    p2_title: "Plataforma Multi-Cloud Segura e Resiliente (CityGuards)",
    p2_lead: "<strong>Projeto de Engenharia:</strong> Plataforma híbrida de alta resiliência e conformidade regulamentar combinando serviços Azure PaaS e Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Arquitetura Híbrida &amp; Fallback:</strong> API desacoplada em Node.js com dupla resiliência (<em>graceful degradation</em> para heurística local e fallback <em>offline</em> de microsserviço Docker em Azure Container Instances - ACI).",
    p2_bullet2: "<strong>Robustez Transacional &amp; Segurança:</strong> Transações atómicas no Firestore contra concorrência, sanitização estrita de respostas contra exfiltração de dados e <em>hashing</em> criptográfico com bcrypt.",
    p2_bullet3: "<strong>SecDevOps, IaC &amp; Soberania:</strong> Aprovisionamento automatizado de infraestrutura via Bicep/Terraform, pipeline CI/CD no GitHub Actions com autenticação federada OIDC e análise de conformidade RGPD vs. US CLOUD Act.",
    p2_pipeline: "Bicep &amp; Terraform ➔ GitHub Actions (OIDC) ➔ Checkov SAST ➔ Azure App Service &amp; GCP Firestore",
    btn_read_cloud_brief: "Ler Análise Multi-Cloud ➔",
    btn_view_linkedin: "Ver no LinkedIn",

    // Writeups
    writeups_label: "Artigos &amp; Investigação",
    writeups_title: "Writeups &amp; Engineering Notes",
    writeups_desc: "Notas de engenharia e análises técnicas detalhadas sobre desafios reais resolvidos em automação de redes, segurança em CI/CD e resiliência de sistemas.",

    w1_title: "Remediação Closed-Loop de Configuration Drift em FortiOS via REST API e NetBox",
    w1_snippet: "Como projetar um motor de autorremediação determinístico para firewalls Fortinet com NetBox como SSOT, superando limitações de escrita de licença de teste através de fallback por Netmiko.",

    w2_title: "Eliminando Segredos Estáticos em CI/CD: Autenticação Federada com GitHub Actions e Azure OIDC",
    w2_snippet: "Eliminação total de credenciais estáticas de longa duração em pipelines de IaC. Configuração de confiança federada no Azure AD / Entra ID com verificação de compliance no Checkov.",

    w3_title: "Arquitetura Multi-Cloud Resiliente: Mitigando Falhas com Fallback Desacoplado entre Azure e GCP",
    w3_snippet: "Estratégias de graceful degradation em serviços críticos: garantia de atomicidade de dados no Firestore aliada a microsserviços desacoplados em ACI e análise do impacto do US CLOUD Act.",

    btn_read_brief: "Ler Resumo Técnico",

    // Contact
    contact_label: "Comunicação Direta",
    contact_title: "Entrar em Contacto",
    contact_desc: "Se a sua organização procura um engenheiro com perfil analítico e prático em <strong>Security Automation</strong>, <strong>SecDevOps</strong> ou analista técnico de <strong>SOC</strong>, estou disponível para conversas e processos de recrutamento.",
    btn_download_cv_full: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Descarregar Currículo Completo (PDF)',
    ch_email_lbl: "Email (Clique p/ Copiar)",
    ch_phone_lbl: "Contacto Telefónico",

    // Footer
    footer_role: "Engenharia Informática &amp; Security Automation",
    footer_status: "Status: Disponível (ATIVAR.pt Nível 6)"
  },

  en: {
    // Navigation
    nav_expertise: "Expertise",
    nav_history: "History",
    nav_projects: "Projects",
    nav_writeups: "Writeups",
    nav_contact: "Contact",
    cv_tooltip: "Download Resume (PDF)",

    // Hero Section
    hero_status: '<span class="status-dot"></span> Immediate Availability · Eligible for ATIVAR.pt (Level 6)',
    hero_name: "Rafael Cruz",
    hero_role: "Security Automation & NetDevOps Engineer",
    hero_bio: "Software Engineer specialized in <strong>Network Automation (NetDevOps)</strong>, <strong>SecDevOps</strong>, and <strong>Defensive Cybersecurity</strong>. Focused on closed-loop self-healing, configuration drift mitigation via REST APIs, and validated reduction of operational MTTR from 30 min down to &lt; 70 seconds.",
    btn_explore_projects: "Explore Projects",
    btn_download_cv: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download CV',
    btn_contact_me: "Get in Touch ➔",

    // Expertise Section
    expertise_label: "Technical Specialization",
    expertise_title: "Expertise",
    expertise_desc: "Strategic capabilities across three foundational pillars, combining deterministic code, cloud security, and infrastructure observability.",
    
    p1_card_title: "NetDevOps & Closed-Loop Remediation",
    p1_card_desc: "Event-driven automation engineering for mission-critical networks. Closed-loop self-healing design with <strong>configuration drift mitigation</strong>, <strong>Fortinet FortiOS REST API</strong> integration, and <strong>NetBox as SSOT</strong>. Proven reduction of MTTR from 30 min to 40–70s across 24 Chaos Engineering trials.",

    p2_card_title: "Cloud Security & SecDevOps",
    p2_card_desc: "Automated infrastructure provisioning using <strong>IaC (Bicep & Terraform)</strong> across <strong>Microsoft Azure and GCP</strong>. Hardened CI/CD pipelines without static secrets via <strong>federated OIDC authentication</strong>, automated SAST scanning (Checkov), and regulatory compliance (<strong>GDPR vs. US CLOUD Act</strong>).",

    p3_card_title: "Defensive Security & Observability",
    p3_card_desc: "Defensive security operations, real-time telemetry, and incident forensics. Deep packet inspection via <strong>Wireshark (PCAP)</strong>, centralized SIEM correlation in <strong>Wazuh & Splunk</strong>, vulnerability assessments using <strong>OpenVAS/Nmap</strong>, and alignment with the <strong>MITRE ATT&CK</strong> framework.",

    certs_subhead: "Official Credentials & Certifications",

    // Career History
    history_label: "Track Record & Timeline",
    history_title: "Career History",
    history_desc: "Academic and technical progression focused on systems engineering, industry collaborations, and international mobility programs.",

    hist_1_role: "BSc in Computer Science and Engineering",
    hist_1_desc: "In-depth coursework in algorithms, computer networking, operating systems internals, database systems, and information security.",

    hist_2_role: "NetDevOps Research (PoC)",
    hist_2_desc: "Development of an event-driven architecture for self-healing in mission-critical hybrid networks (Grade: 19 / 20).",

    hist_3_role: "Erasmus+ BIP Mobility",
    hist_3_desc: "Intensive European program: Augmented Pasts — Advanced digital tools, processing, and technological heritage preservation.",

    hist_4_role: "Erasmus+ BIP International",
    hist_4_desc: "Executive program: Leadership & Change Management Towards Sustainability applied to engineering teams and digital projects.",

    hist_5_role: "Available for Integration",
    hist_5_desc: "Immediate availability for engineering and defensive security teams. Eligible for the IEFP Professional Internship (ATIVAR.pt Level 6).",

    // Projects Section
    projects_label: "Engineering Portfolio",
    projects_title: "Personal Projects",
    projects_desc: "Hands-on high-complexity engineering projects showcased with network topology blueprints, observability metrics, and systems design.",

    p1_grade: "Grade: 19 / 20 · Industry Partnership: ARTE, I.P.",
    p1_title: "NetDevOps Automation & Closed-Loop Resilience (PoC)",
    p1_lead: "<strong>Capstone Engineering Project:</strong> Event-driven architecture designed to enhance resilience and availability in critical hybrid networks (IPsec VPN Overlay over MPLS Underlay).",
    p1_bullet1: "<strong>Differential Triage &amp; Pre-Check:</strong> Fault isolation between Underlay (MPLS) and Overlay (IPsec) via PRTG in &lt; 10s, utilizing preventive ICMP probing to suppress false alarms during physical outages.",
    p1_bullet2: "<strong>Hybrid Self-Healing Engine:</strong> Automated mitigation of <em>configuration drift</em> via FortiOS REST API with deterministic fallback in Python/Netmiko (SSH), slashing MTTR from 30 min to 40–70s.",
    p1_bullet3: "<strong>SSOT &amp; Chaos Engineering:</strong> Continuous reconciliation with NetBox as single source of truth, persistent telemetry in MongoDB, and empirical validation across 24 fault injection trials with 100% success.",
    p1_pipeline: "PRTG + FortiOS REST API ➔ n8n Orchestrator ➔ NetBox (SSOT) ➔ Hybrid Engine ➔ Telegram &amp; Metabase",
    btn_read_poc_brief: "Read Topology Brief ➔",

    p2_grade: "Grade: 20 / 20 · Software Engineering",
    p2_title: "Secure & Resilient Multi-Cloud Platform (CityGuards)",
    p2_lead: "<strong>Engineering Project:</strong> Hybrid high-resilience and regulatory-compliant platform combining Microsoft Azure PaaS and Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Hybrid Architecture &amp; Fallback:</strong> Decoupled Node.js API with dual resilience (graceful degradation to local heuristics and offline Docker microservice fallback in Azure Container Instances - ACI).",
    p2_bullet2: "<strong>Transactional Integrity &amp; Security:</strong> Concurrency control using atomic Firestore transactions, strict response sanitization against data exfiltration, and cryptographic bcrypt hashing.",
    p2_bullet3: "<strong>SecDevOps, IaC &amp; Sovereignty:</strong> Automated IaC provisioning via Bicep/Terraform, GitHub Actions CI/CD with federated OIDC authentication, and GDPR vs. US CLOUD Act compliance assessment.",
    p2_pipeline: "Bicep &amp; Terraform ➔ GitHub Actions (OIDC) ➔ Checkov SAST ➔ Azure App Service &amp; GCP Firestore",
    btn_read_cloud_brief: "Read Multi-Cloud Brief ➔",
    btn_view_linkedin: "View on LinkedIn",

    // Writeups
    writeups_label: "Technical Research & Articles",
    writeups_title: "Writeups &amp; Engineering Notes",
    writeups_desc: "Engineering briefs and technical deep-dives detailing real-world problems solved across network automation, CI/CD security, and system resilience.",

    w1_title: "Closed-Loop Remediation of Configuration Drift in FortiOS via REST API & NetBox",
    w1_snippet: "Designing a deterministic self-healing engine for Fortinet firewalls with NetBox as SSOT, circumventing trial license write restrictions via Netmiko programmatic fallback.",

    w2_title: "Eliminating Static Secrets in CI/CD: Federated Authentication with GitHub Actions & Azure OIDC",
    w2_snippet: "Zero static long-lived credentials in infrastructure-as-code pipelines. Establishing federated identity trust in Azure AD / Entra ID with Checkov compliance enforcement.",

    w3_title: "Resilient Multi-Cloud Architecture: Mitigating Failures with Decoupled Fallback across Azure and GCP",
    w3_snippet: "Graceful degradation patterns in critical services: ensuring Firestore transactional atomicity coupled with decoupled ACI microservices and US CLOUD Act compliance review.",

    btn_read_brief: "Read Technical Brief",

    // Contact
    contact_label: "Direct Communication",
    contact_title: "Get in Touch",
    contact_desc: "If your organization is looking for a hands-on engineer in <strong>Security Automation</strong>, <strong>SecDevOps</strong>, or an analytical <strong>SOC Analyst</strong>, I am open to conversations and hiring processes.",
    btn_download_cv_full: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download Full Resume (PDF)',
    ch_email_lbl: "Email (Click to Copy)",
    ch_phone_lbl: "Phone Call",

    // Footer
    footer_role: "Computer Science &amp; Security Automation",
    footer_status: "Status: Available (ATIVAR.pt Level 6)"
  }
};

// ============================================================
// Technical Writeup Briefs (Modal Content)
// ============================================================
const writeupData = {
  1: {
    pt: {
      title: "Remediação Closed-Loop de Configuration Drift em FortiOS via REST API e NetBox",
      meta: "NetDevOps · Fortinet FortiOS · NetBox SSOT · Chaos Engineering · MTTR 40-70s",
      content: `
        <h4>1. O Problema: Degradação Silenciosa e Drift de Configuração</h4>
        <p>Em redes híbridas empresariais com túneis VPN IPsec sobre MPLS, alterações manuais de administradores ou falhas transitórias criam <em>configuration drift</em>. Tradicionalmente, a deteção depende de tickets de utilizadores e a resolução manual demora em média 30 a 45 minutos (MTTR elevado).</p>
        
        <h4>2. A Solução Arquitetural Orientada a Eventos</h4>
        <p>Concebi e implementei uma arquitetura em ciclo fechado composta por cinco blocos integrados:</p>
        <ul>
          <li><strong>Detetor Diferencial (PRTG):</strong> Sondagem contínua com verificação preventiva ICMP para distinguir falhas de camada física (cabo/fibra rompida) de falhas lógicas de túnel IPsec, evitando falsos disparos.</li>
          <li><strong>Barramento de Eventos (n8n):</strong> Acionamento reativo por webhook HTTP imediatamente após alerta do sensor (MTTD &lt; 10s).</li>
          <li><strong>Single Source of Truth (NetBox):</strong> Consulta da <em>golden configuration</em> declarativa do dispositivo via REST API para validação de discrepâncias.</li>
          <li><strong>Motor Híbrido de Remediação:</strong> Tentativa prioritária de aplicação de patch via <code>FortiOS REST API</code>. Em cenários de restrição de escrita de licença de teste, o sistema aciona um fallback determinístico por <code>Python + Netmiko (SSH)</code> com idempotência garantida.</li>
          <li><strong>Auditoria e Observabilidade:</strong> Registo de auditoria imutável em MongoDB, notificação instantânea para canal de operações no Telegram e telemetria em tempo real no Metabase.</li>
        </ul>

        <h4>3. Validação Experimental com Chaos Engineering</h4>
        <p>A arquitetura foi submetida a <strong>24 ensaios empíricos</strong> de injeção de falhas (interrupção intencional de túnel, alteração de chaves pré-partilhadas IKE e simulação de corte de enlace). Em todos os ensaios, a autorremediação concluiu com <strong>100% de sucesso</strong>, reduzindo o MTTR para o intervalo de <strong>40 a 70 segundos</strong> (uma redução de ~96% no tempo de inatividade).</p>
      `
    },
    en: {
      title: "Closed-Loop Remediation of Configuration Drift in FortiOS via REST API & NetBox",
      meta: "NetDevOps · Fortinet FortiOS · NetBox SSOT · Chaos Engineering · MTTR 40-70s",
      content: `
        <h4>1. The Problem: Silent Degradation and Configuration Drift</h4>
        <p>In enterprise hybrid networks running IPsec VPN tunnels over MPLS, manual configuration modifications or transient faults produce configuration drift. Traditionally, detection relies on human ticketing and manual engineering response, leading to an average MTTR of 30 to 45 minutes.</p>
        
        <h4>2. Event-Driven Architectural Solution</h4>
        <p>I architected and engineered a closed-loop automated system structured across five integrated modules:</p>
        <ul>
          <li><strong>Differential Probing (PRTG):</strong> Continuous telemetry with ICMP pre-checks to differentiate physical transport carrier outages from logical IPsec renegotiation anomalies, suppressing false alarms.</li>
          <li><strong>Event Orchestration (n8n):</strong> Event webhook triggered instantly upon metric alert (MTTD &lt; 10s).</li>
          <li><strong>Single Source of Truth (NetBox):</strong> Automated query of declarative golden state configs via REST API.</li>
          <li><strong>Hybrid Remediation Engine:</strong> Primary automated patching via <code>FortiOS REST API</code>. When facing sandbox or write restrictions, the engine seamlessly invokes a deterministic <code>Python + Netmiko (SSH)</code> fallback with verified idempotency.</li>
          <li><strong>Observability & Audit Trail:</strong> Immutable audit records stored in MongoDB, operations alert dispatch via Telegram Bot, and latency visualizations in Metabase.</li>
        </ul>

        <h4>3. Empirical Validation via Chaos Engineering</h4>
        <p>The system was tested across <strong>24 rigorous Chaos Engineering trials</strong> involving deliberate PSK corruptions, interface teardowns, and route deletions. In 100% of cases, closed-loop recovery completed successfully, slashing operational MTTR down to <strong>40–70 seconds</strong> (a ~96% downtime reduction).</p>
      `
    }
  },
  2: {
    pt: {
      title: "Eliminando Segredos Estáticos em CI/CD: Autenticação Federada com GitHub Actions e Azure OIDC",
      meta: "SecDevOps · Zero Trust · Azure Entra ID · GitHub Actions OIDC · Checkov SAST",
      content: `
        <h4>1. O Risco de Credenciais Estáticas em Pipelines</h4>
        <p>O armazenamento de <em>Service Principal client secrets</em> de longa duração nas variáveis secretas de CI/CD representa uma das maiores superfícies de ataque para <em>supply chain compromises</em>. O vazamento acidental dessas credenciais concede acesso não monitorizado aos recursos da cloud.</p>
        
        <h4>2. Implementação de Federação OpenID Connect (OIDC)</h4>
        <p>Para mitigar este vetor, configurei uma relação de confiança federada direta entre o GitHub Actions e o Microsoft Entra ID (antigo Azure AD):</p>
        <ul>
          <li><strong>Emissão de Tokens JWT Efêmeros:</strong> O runner do GitHub solicita um token de identidade OIDC assinado criptograficamente contendo claims verificadas (repositório, branch e ambiente).</li>
          <li><strong>Troca de Token no Azure STS:</strong> O Azure Security Token Service valida a assinatura e as claims do GitHub, emitindo um <em>access token</em> temporário com validade máxima de 60 minutos sem necessidade de qualquer password ou secret armazenado.</li>
          <li><strong>Least-Privilege RBAC:</strong> O Service Principal possui permissões estritamente limitadas ao Resource Group do projeto, eliminando privilégios subscription-wide.</li>
          <li><strong>Segurança Shift-Left (SAST):</strong> O pipeline inclui varredura automática de conformidade IaC com <code>Checkov</code>, bloqueando qualquer merge com violações de regras de segurança ou permissões excessivas.</li>
        </ul>

        <h4>3. Resultados e Benefícios de Segurança</h4>
        <p>Eliminação de 100% dos segredos estáticos, conformidade com os princípios de <em>Zero Trust Architecture</em> e auditoria granular de todas as operações de aprovisionamento nos logs do Azure Activity.</p>
      `
    },
    en: {
      title: "Eliminating Static Secrets in CI/CD: Federated Authentication with GitHub Actions & Azure OIDC",
      meta: "SecDevOps · Zero Trust · Azure Entra ID · GitHub Actions OIDC · Checkov SAST",
      content: `
        <h4>1. The Threat of Long-Lived CI/CD Secrets</h4>
        <p>Storing long-lived Service Principal client secrets inside CI/CD repositories constitutes a high-risk vector for supply chain breaches. An accidental token leak grants unauthorized, hard-to-detect persistent access into cloud estates.</p>
        
        <h4>2. Implementing OpenID Connect (OIDC) Federation</h4>
        <p>To eliminate this threat surface, I engineered a direct federated identity trust relationship between GitHub Actions and Microsoft Entra ID:</p>
        <ul>
          <li><strong>Ephemeral JWT Tokens:</strong> The GitHub workflow runner requests a cryptographically signed OIDC identity token containing verifiable claims (repository, branch, and environment).</li>
          <li><strong>Token Exchange via Azure STS:</strong> Azure's Security Token Service validates the signature and claims against Entra ID, returning a short-lived access token (max 60 minutes) without storing any secrets in GitHub.</li>
          <li><strong>Least-Privilege RBAC:</strong> The target identity holds strict scoping confined to designated Resource Groups, preventing broad tenant-level exposure.</li>
          <li><strong>Shift-Left IaC Security:</strong> The pipeline triggers automated <code>Checkov</code> SAST scans to catch misconfigurations before deployment commits are reconciled.</li>
        </ul>

        <h4>3. Security Outcomes</h4>
        <p>Achieved 100% elimination of hardcoded secrets, verified Zero Trust operational compliance, and comprehensive auditability in Azure Activity logs.</p>
      `
    }
  },
  3: {
    pt: {
      title: "Arquitetura Multi-Cloud Resiliente: Mitigando Falhas com Fallback Desacoplado entre Azure e GCP",
      meta: "Multi-Cloud Architecture · Azure PaaS · GCP Firestore · Docker ACI · GDPR Compliance",
      content: `
        <h4>1. Desafio de Disponibilidade e Conformidade</h4>
        <p>Projetar uma plataforma de elevado tráfego capaz de suportar falhas regionais completas de fornecedor de nuvem (Cloud Outage) sem perda de integridade de dados e garantindo estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
        
        <h4>2. Padrões de Resiliência e Desacoplamento</h4>
        <ul>
          <li><strong>Transações Atómicas no Firestore:</strong> Utilização de primitivas de concorrência transacional no GCP Cloud Firestore para prevenir <em>race conditions</em> em atualizações de estado simultâneas.</li>
          <li><strong>Graceful Degradation:</strong> Quando as APIs externas atingem limites de taxa ou lentidão de rede, a aplicação recorre automaticamente a heurísticas determinísticas locais em memória, preservando a experiência do utilizador.</li>
          <li><strong>Fallback Offline com Docker ACI:</strong> Implementação de contentores de contingência no Azure Container Instances prontos a assumir operações críticas de leitura caso o cluster primário de execução enfrente indisponibilidade.</li>
          <li><strong>Análise de Soberania de Dados (RGPD vs. US CLOUD Act):</strong> Avaliação jurídica e técnica dos fluxos de dados transfronteiriços para garantir que dados de utilizadores europeus não estejam vulneráveis a solicitações unilaterais de jurisdições externas.</li>
        </ul>

        <h4>3. Classificação Máxima</h4>
        <p>O projeto foi galardoado com a <strong>classificação máxima de 20 / 20 valores</strong>, elogiado pelo rigor na separação de responsabilidades e tratamento de casos limite de infraestrutura.</p>
      `
    },
    en: {
      title: "Resilient Multi-Cloud Architecture: Mitigating Failures with Decoupled Fallback across Azure and GCP",
      meta: "Multi-Cloud Architecture · Azure PaaS · GCP Firestore · Docker ACI · GDPR Compliance",
      content: `
        <h4>1. High-Availability & Data Sovereignty Challenge</h4>
        <p>Designing a high-throughput platform engineered to withstand full regional outages of a primary cloud provider while maintaining data integrity and complying with European General Data Protection Regulation (GDPR) mandates.</p>
        
        <h4>2. Resilience Patterns & Decoupled Architecture</h4>
        <ul>
          <li><strong>Atomic Concurrency in Firestore:</strong> Leveraged atomic transactions in GCP Cloud Firestore to prevent race conditions during high-volume simultaneous state changes.</li>
          <li><strong>Graceful Degradation:</strong> When external APIs degrade or hit rate thresholds, the system seamlessly activates in-memory heuristic calculation fallbacks, ensuring zero user-facing downtime.</li>
          <li><strong>Offline Contingency Containers (ACI):</strong> Standby lightweight Docker containers on Azure Container Instances configured to instantly pick up service traffic if primary runtimes fail.</li>
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
    // Fallback prompt
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
