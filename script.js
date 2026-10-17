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
    hero_status: '<span class="status-dot"></span> Disponibilidade Imediata (Remoto, Híbrido ou Mobilidade) · Elegível para Estágios +Talento (IEFP Nível 6)',
    hero_name: "Rafael Cruz",
    hero_role: "Licenciado em Engenharia Informática · Automação de Redes (NetDevOps), Cloud &amp; DevSecOps, SRE e Backend Java",
    hero_bio: "Licenciado em Engenharia Informática focado em <strong>Automação de Redes (NetDevOps)</strong>, <strong>Cloud &amp; DevSecOps</strong> e <strong>SRE</strong>, com sólida base em <strong>Engenharia de Backend (Java / Spring Boot)</strong>. Experiência em projeto com parceiro público (ARTE, I.P. – ex-AMA) no desenvolvimento de sistemas de autorremediação em ciclo fechado (<em>closed-loop</em>), Infraestrutura como Código (IaC) e pipelines de CI/CD seguras. Procura integrar uma equipa de Engenharia de Redes, Cloud, Infraestrutura ou Backend (Júnior / Trainee).",
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
    certs_subhead: "Certificações Técnicas Oficiais da Indústria",
    certs_academic_subhead: "Formações &amp; Credenciais Académicas (AWS Academy)",

    // Career History
    history_label: "Educação & Experiência",
    history_title: "Career History",
    history_desc: "Linha cronológica integrando percurso académico, mobilidade internacional e experiência profissional complementar descritas no CV.",
    timeline_hint: "Arraste, use a roda do rato ou clique num marco para navegar",
    timeline_prev: "Anterior",
    timeline_next: "Seguinte",
    timeline_autoroll: "Auto-Roll",

    step_1_short: "IPCB",
    step_2_short: "Lusiaves",
    step_3_short: "Weimar",
    step_4_short: "Brisa",
    step_5_short: "ARTE PoC",
    step_6_short: "Roménia",
    step_7_short: "Presente",

    hist_1_tag: "Académico · Nível 6 EQF",
    hist_1_role: "Licenciatura em Engenharia Informática",
    hist_1_desc: "Castelo Branco, Portugal. Formação sólida em redes, sistemas distribuídos, arquitetura computacional, bases de dados e segurança.",

    hist_2_tag: "Logística &amp; Sistemas",
    hist_2_role: "Operador de Logística e Expedição",
    hist_2_desc: "Marinha das Ondas, Portugal. Operação logística de ritmo acelerado, controlo de inventário por terminais de armazém e cumprimento de normas em turnos rotativos.",

    hist_3_tag: "Mobilidade Internacional",
    hist_3_role: "Curso Intensivo: Ferramentas Digitais e Património Cultural",
    hist_3_desc: "Weimar, Alemanha (Erasmus+ BIP). Ferramentas digitais avançadas, processamento e preservação de património cultural tecnológico.",

    hist_4_tag: "Operações &amp; SLA",
    hist_4_role: "Operador de Atendimento ao Cliente",
    hist_4_desc: "Monte Redondo, Leiria, Portugal. Resolução ágil de incidentes sob pressão em períodos de tráfego intenso e cumprimento rigoroso de protocolos de reconciliação de caixa.",

    hist_5_tag: "Capstone · Nota: 19 / 20",
    hist_5_role: "Automação NetDevOps em Ciclo Fechado e Resiliência de Rede (PoC)",
    hist_5_desc: "Projeto de Fim de Curso (19/20) · Parceria: ARTE, I.P. (ex-AMA). Arquitetura orientada a eventos para autorrecuperação closed-loop em redes críticas (Overlay VPN IPsec sobre Underlay MPLS).",

    hist_6_tag: "Mobilidade Internacional",
    hist_6_role: "Curso Intensivo: Liderança e Gestão da Mudança Rumo à Sustentabilidade",
    hist_6_desc: "Ploiești, Roménia (Erasmus+ BIP). Liderança e gestão da mudança rumo à sustentabilidade em organizações e equipas técnicas.",

    hist_7_tag: "Open to Work · IEFP Nível 6",
    hist_7_role: "Disponibilidade Imediata (Remoto, Híbrido ou Mobilidade)",
    hist_7_desc: "Licenciado em Engenharia Informática focado em Automação de Redes, Cloud/DevSecOps e SRE, com sólida base em Backend Java. Elegível para Estágios +Talento (IEFP Nível 6).",

    // Projects Section
    projects_label: "Experiência de Engenharia",
    projects_title: "Projetos Técnicos",
    projects_desc: "Projetos práticos de elevada complexidade demonstrados com métricas reais, conformidade regulamentar e diagramas interativos de arquitetura.",
    track_all: "Todos os Projetos",
    track_cloud: "Track A: Cloud, NetDevOps &amp; SRE",
    track_backend: "Track B: Software Engineering &amp; Backend",
    btn_view_github: "Ver no GitHub",

    p1_grade: "Classificação: 19 / 20 · Parceria: ARTE, I.P. (ex-AMA) · Set 2025 – Ago 2026",
    p1_title: "Automação NetDevOps em Ciclo Fechado e Resiliência de Rede (PoC)",
    p1_lead: "<strong>Projeto de Fim de Curso (Parceria: ARTE, I.P. – ex-AMA · Equipa: Rafael Cruz &amp; Rafael Victorino · Mentoria: Nuno Batuca, ARTE, I.P.):</strong> Tecnologias: n8n, Python, Fortinet, NetBox, MongoDB, Docker. Arquitetura orientada a eventos para elevar a resiliência e a disponibilidade de redes híbridas críticas (Overlay VPN IPsec sobre Underlay MPLS).",
    p1_bullet1: "<strong>Diagnóstico Diferencial Automatizado:</strong> Workflows orientados a eventos no n8n (via webhooks PRTG) que isolam falhas físicas (MPLS) de lógicas (VPN IPsec) em <strong>&lt;10s (-95% no MTTD)</strong>, com sondas ICMP preventivas contra falhas elétricas.",
    p1_bullet2: "<strong>Motor de Autorremediação Híbrido:</strong> Correção automática de <em>configuration drift</em> em firewalls FortiGate (REST API e contingência SSH em Python/Netmiko), reduzindo o MTTR de <strong>~30 min manuais para ~60s no ciclo completo</strong> (convergência ativa do drift em 4–7s).",
    p1_bullet3: "<strong>Fonte de Verdade (SSoT) e Auditoria:</strong> Validação dinâmica de IPAM no NetBox, registo estruturado de incidentes em MongoDB (Docker) e dashboards no Metabase, validados em 24 ensaios de <em>Chaos Engineering</em> (alinhados com a ISO 27001).",
    p1_pipeline: "PRTG (Webhooks) ➔ n8n Orchestrator ➔ NetBox (SSoT/IPAM) ➔ FortiOS REST API / Netmiko SSH ➔ MongoDB, Metabase & Telegram",
    btn_read_poc_brief: "Ler Análise da Topologia ➔",
    bp_tab_logical: "Blueprint Lógico",
    bp_tab_arte: "Topologia Real ARTE",
    bp_tab_macro: "Macro NetDevOps",
    bp_tab_multicloud: "Fluxo Multi-Cloud",
    bp_tab_dashboard: "Painel Real Autarquia",

    p2_grade: "Classificação: 20 / 20 · Projeto de Engenharia Cloud · Fev 2026 – Mai 2026",
    p2_title: "Plataforma Multi-Cloud Segura e Resiliente (CityGuards)",
    p2_lead: "<strong>Projeto de Engenharia Cloud (Equipa: Diogo Oliveira, Rafael Cruz, Tiago Alves · Orientação: Prof. Osvaldo Santos):</strong> Tecnologias: Azure, GCP Firestore, Next.js, TypeScript, Node.js, Docker, Bicep, OIDC. Plataforma híbrida de alta resiliência e conformidade regulamentar combinando serviços Azure PaaS e Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Arquitetura Multi-Cloud e Tolerância a Falhas:</strong> Arquitetura interoperável entre Microsoft Azure (App Service, Blob Storage, Functions e ACI) e GCP Firestore, com fallback local para classificação de texto e geração de relatórios em PDF (Docker).",
    p2_bullet2: "<strong>Persistência e Concorrência:</strong> Migração desacoplada da base de dados NoSQL de Azure Cosmos DB para GCP Firestore e implementação de transações atómicas ACID (<code>db.runTransaction</code>) contra <em>race conditions</em> na gamificação, garantindo isolamento <em>multi-tenant</em>.",
    p2_bullet3: "<strong>DevSecOps, IaC e FinOps:</strong> Automatização da infraestrutura no Azure com Bicep e pipelines CI/CD no GitHub Actions (autenticação OIDC sem segredos estáticos), otimizando o custo cloud para <strong>~72 €/mês (FinOps)</strong> e avaliando alternativas soberanas (RGPD vs. US CLOUD Act).",
    p2_pipeline: "Bicep Declarativo ➔ GitHub Actions OIDC (azure/login@v2) ➔ Checkov SAST ➔ Azure App Service & GCP Firestore",
    btn_read_cloud_brief: "Ler Análise Multi-Cloud ➔",
    btn_view_linkedin: "Ver no LinkedIn",

    p3_grade: "Engenharia de Software · Padrões de Desenho 2024/25",
    p3_title: "Padrões de Desenho de Software &amp; Arquitetura Modular (PDS Monorepo)",
    p3_lead: "<strong>Monorepo de Engenharia de Software:</strong> Tecnologias: Java 17/21, Padrões GoF (State, Strategy, Observer, Factory, Command, Singleton), Princípios SOLID, Modelação UML. Soluções empresariais desacoplando lógica de domínio e interfaces.",
    p3_bullet1: "<strong>EST Global Airways (Reserva &amp; Gestão de Voos):</strong> Sistema de pesquisa multicritério, cálculo dinâmico de gamas tarifárias por milhagem e taxas aeroportuárias, gestão integral de reservas com ID único alfanumérico e ciclo pós-venda (alteração de datas, lugares e cancelamento com reembolso).",
    p3_bullet2: "<strong>Banco do FaroEST (Refactoring &amp; Packs de Expansão):</strong> Modernização de software legado com transição de lógica monolítica procedural para arquitetura orientada a estados (<em>State Pattern</em>), desacoplamento de eventos (<em>Observer</em>) e extensibilidade de regras de jogo sem quebra de contratos.",
    p3_bullet3: "<strong>Engenharia de Software &amp; Diagramas UML:</strong> Aplicação rigorosa dos princípios SOLID (SRP, OCP, DIP), polimorfismo, interfaces defensivas, tratamento de exceções customizadas e modelação arquitetural através de diagramas de classes UML estruturados.",
    p3_pipeline: "Java 17/21 ➔ GoF Patterns (State, Strategy, Observer) ➔ SOLID &amp; Clean Architecture ➔ UML Class Modeling",
    bp_tab_uml: "Diagrama UML de Classes",
    bp_uml_note: "▲ Diagrama de Classes UML (Modelação de Domínio e Padrões GoF · Clique p/ repositório)",
    p3_metric1_val: "6+ GoF",
    p3_metric1_lbl: "Padrões de Desenho",
    p3_metric2_val: "100%",
    p3_metric2_lbl: "SOLID Clean Code",
    p3_metric3_val: "2",
    p3_metric3_lbl: "Sistemas (Airways + Banco)",
    btn_pds_docs: "Explorar Arquitetura ➔",

    p4_grade: "Microsserviços Distribuídos · Spring Cloud &amp; LGTM Observability",
    p4_title: "Plataforma Distribuída de Partilha de Viagens (CarPooling PT)",
    p4_lead: "<strong>Arquitetura de Microsserviços Corporativa:</strong> Tecnologias: Java 21 LTS, Spring Boot 3, Spring Cloud (Eureka, Gateway, OpenFeign), RabbitMQ (Topic Exchange + DLQ), Redis 7 (Cache-Aside &amp; Rate Limiting), PostgreSQL (Database-per-Service), Docker Compose (18 contentores), Kubernetes declarativo e Observabilidade LGTM.",
    p4_bullet1: "<strong>Microsserviços Desacoplados &amp; Resiliência Distribuída:</strong> 11 módulos Maven (1 biblioteca partilhada + 10 microsserviços) com Service Discovery dinâmico (Netflix Eureka), API Gateway reativo com rate limiting Token Bucket em Redis, mensageria assíncrona por RabbitMQ com Dead Letter Queue e Circuit Breakers Resilience4j com fallbacks gracioso.",
    p4_bullet2: "<strong>Suíte de 123 Testes Automatizados &amp; DevSecOps:</strong> Validação integral no Maven Reactor com 100% de aprovação (JUnit 5 + Mockito), migrações relacionais versionadas via Flyway com isolamento Database-per-Service, manifestos Kubernetes declarativos e auditoria de vulnerabilidades com Trivy.",
    p4_bullet3: "<strong>Stack de Observabilidade LGTM &amp; Fórmulas de Negócio:</strong> Telemetria centralizada correlacionando métricas (Prometheus :9090), dashboards de JVM e tráfego (Grafana :3001), rastreio distribuído OTLP (Tempo :3200) e agregação de logs (Loki :3100), com algoritmo de distâncias Haversine, liquidações sandbox idempotentes e poupança de CO2.",
    p4_pipeline: "API Gateway (Rate Limit) ➔ Eureka ➔ Spring Boot (OpenFeign / Circuit Breaker) ➔ RabbitMQ / Redis ➔ PostgreSQL &amp; LGTM Stack",
    bp_tab_grafana: "Cockpit Grafana",
    bp_tab_leaflet: "Rotas &amp; Leaflet",
    bp_carpooling_note1: "▲ Cockpit de Observabilidade Grafana (JVM, RPS, Latência e Actuator · Clique p/ repositório)",
    bp_carpooling_note2: "▲ Pesquisa de Viagens com Rotas Geodésicas e Mapa Leaflet (Clique p/ repositório)",
    p4_metric1_val: "123 / 123",
    p4_metric1_lbl: "Testes Automatizados",
    p4_metric2_val: "18",
    p4_metric2_lbl: "Contentores Docker (LGTM)",
    p4_metric3_val: "11",
    p4_metric3_lbl: "Módulos Maven",
    btn_carpooling_docs: "Ver Arquitetura ➔",

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
    lang_en_lvl: "C1 (Proficiência Profissional)",
    lang_es_lvl: "B2 (Intermédio Avançado)",

    // Contact
    contact_label: "Comunicação Direta",
    contact_title: "Entrar em Contacto",
    contact_desc: "Se a sua organização procura um profissional com perfil analítico e prático em <strong>Automação de Redes (NetDevOps)</strong>, <strong>Cloud &amp; DevSecOps</strong>, <strong>SRE</strong> ou <strong>Backend Java / Spring Boot</strong>, estou totalmente disponível para conversas e processos de recrutamento (Disponibilidade Imediata [Remoto, Híbrido ou Mobilidade] · Elegível para Estágios +Talento [IEFP Nível 6]).",
    ch_email_lbl: "Email (Clique p/ Copiar)",
    ch_phone_lbl: "Contacto Telefónico",

    // Footer
    footer_role: "Automação de Redes, Cloud &amp; DevSecOps, SRE",
    footer_status: "Status: Disponibilidade Imediata (Elegível Estágios +Talento · IEFP Nível 6)"
  },

  en: {
    // Navigation
    nav_expertise: "Expertise",
    nav_history: "History",
    nav_projects: "Projects",
    nav_writeups: "Writeups",
    nav_contact: "Contact",

    // Hero Section
    hero_status: '<span class="status-dot"></span> Immediate Availability (Remote, Hybrid or Relocation) · Eligible for +Talento Internships (IEFP Level 6)',
    hero_name: "Rafael Cruz",
    hero_role: "BSc in Computer Science and Engineering · Network Automation (NetDevOps), Cloud &amp; DevSecOps, SRE and Backend Java",
    hero_bio: "Computer Science &amp; Engineering graduate focused on <strong>Network Automation (NetDevOps)</strong>, <strong>Cloud &amp; DevSecOps</strong>, and <strong>SRE</strong>, with strong foundations in <strong>Backend Engineering (Java / Spring Boot)</strong>. Experience in public partnership project (ARTE, I.P. – ex-AMA) engineering closed-loop self-healing systems, declarative Infrastructure as Code (IaC), and secure CI/CD pipelines. Seeking to join Network, Cloud, Infrastructure, or Backend engineering teams (Junior / Trainee).",
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
    certs_subhead: "Official Industry Certifications",
    certs_academic_subhead: "Academic Training &amp; Credentials (AWS Academy)",

    // Career History
    history_label: "Education & Experience",
    history_title: "Career History",
    history_desc: "Chronological timeline integrating academic background, international mobility, and complementary professional experience from the CV.",
    timeline_hint: "Drag, scroll mouse wheel, or click any milestone to navigate",
    timeline_prev: "Previous",
    timeline_next: "Next",
    timeline_autoroll: "Auto-Roll",

    step_1_short: "IPCB",
    step_2_short: "Lusiaves",
    step_3_short: "Weimar",
    step_4_short: "Brisa",
    step_5_short: "ARTE PoC",
    step_6_short: "Romania",
    step_7_short: "Present",

    hist_1_tag: "Academic · EQF Level 6",
    hist_1_role: "BSc in Computer Science and Engineering",
    hist_1_desc: "Castelo Branco, Portugal. Solid foundations in computer networks, distributed systems, computer architecture, databases, and security.",

    hist_2_tag: "Logistics &amp; Systems",
    hist_2_role: "Logistics & Dispatch Operator",
    hist_2_desc: "Marinha das Ondas, Portugal. Fast-paced logistics operations, warehouse terminal inventory control, and rotating shifts compliance.",

    hist_3_tag: "International Mobility",
    hist_3_role: "Intensive Course: Digital Tools and Cultural Heritage",
    hist_3_desc: "Weimar, Germany (Erasmus+ BIP). Advanced digital tools, processing, and technological cultural heritage preservation.",

    hist_4_tag: "Operations &amp; SLA",
    hist_4_role: "Customer Service Operator",
    hist_4_desc: "Monte Redondo, Leiria, Portugal. Fast incident resolution under pressure during high-traffic peaks and strict cash reconciliation protocols.",

    hist_5_tag: "Capstone · Grade: 19 / 20",
    hist_5_role: "NetDevOps Automation in Closed Loop & Network Resilience (PoC)",
    hist_5_desc: "Capstone Engineering Project (19/20) · Partnership: ARTE, I.P. (ex-AMA). Event-driven architecture for closed-loop self-healing in critical networks (Overlay IPsec VPN over Underlay MPLS).",

    hist_6_tag: "International Mobility",
    hist_6_role: "Intensive Course: Leadership and Change Management Towards Sustainability",
    hist_6_desc: "Ploiești, Romania (Erasmus+ BIP). Leadership and change management towards sustainability in organizations and technical teams.",

    hist_7_tag: "Open to Work · IEFP Level 6",
    hist_7_role: "Immediate Availability (Remote, Hybrid or Relocation)",
    hist_7_desc: "Computer Science graduate focused on Network Automation, Cloud/DevSecOps, and SRE, with solid backend Java skills. Eligible for +Talento Internships (IEFP Level 6).",

    // Projects Section
    projects_label: "Engineering Experience",
    projects_title: "Technical Projects",
    projects_desc: "Complex hands-on projects demonstrated with real-world metrics, regulatory compliance, and interactive architecture blueprints.",
    track_all: "All Projects",
    track_cloud: "Track A: Cloud, NetDevOps &amp; SRE",
    track_backend: "Track B: Software Engineering &amp; Backend",
    btn_view_github: "View on GitHub",

    p1_grade: "Grade: 19 / 20 · Industry Partnership: ARTE, I.P. (ex-AMA) · Sep 2025 – Aug 2026",
    p1_title: "NetDevOps Closed-Loop Automation & Network Resilience (PoC)",
    p1_lead: "<strong>Capstone Engineering Project (Partnership: ARTE, I.P. – ex-AMA · Team: Rafael Cruz &amp; Rafael Victorino · Industry Mentorship: Nuno Batuca, ARTE, I.P.):</strong> Technologies: n8n, Python, Fortinet, NetBox, MongoDB, Docker. Event-driven architecture engineered to enhance resilience and availability in critical hybrid networks (Overlay IPsec VPN over Underlay MPLS).",
    p1_bullet1: "<strong>Automated Differential Diagnostics:</strong> Event-driven workflows in n8n (via PRTG Webhooks) isolating physical (MPLS) from logical (IPsec VPN) faults in <strong>&lt;10s (-95% MTTD)</strong>, with preventive ICMP probes against electrical outages.",
    p1_bullet2: "<strong>Hybrid Self-Healing Engine:</strong> Automated correction of configuration drift on FortiGate firewalls (REST API and SSH contingency in Python/Netmiko), cutting MTTR from <strong>~30 min manual to ~60s in full cycle</strong> (active drift convergence in 4–7s).",
    p1_bullet3: "<strong>Single Source of Truth (SSoT) & Auditing:</strong> Dynamic IPAM validation in NetBox, structured incident logging in MongoDB (Docker), and Metabase dashboards, validated across 24 Chaos Engineering trials (aligned with ISO 27001).",
    p1_pipeline: "PRTG (Webhooks) ➔ n8n Orchestrator ➔ NetBox (SSoT/IPAM) ➔ FortiOS REST API / Netmiko SSH ➔ MongoDB, Metabase & Telegram",
    btn_read_poc_brief: "Read Topology Brief ➔",
    bp_tab_logical: "Logical Blueprint",
    bp_tab_arte: "Real ARTE Topology",
    bp_tab_macro: "Macro NetDevOps",
    bp_tab_multicloud: "Multi-Cloud Flow",
    bp_tab_dashboard: "Real City Dashboard",

    p2_grade: "Grade: 20 / 20 · Cloud Engineering Project · Feb 2026 – May 2026",
    p2_title: "Secure & Resilient Multi-Cloud Platform (CityGuards)",
    p2_lead: "<strong>Cloud Engineering Project (Team: Diogo Oliveira, Rafael Cruz, Tiago Alves · Academic Supervisor: Prof. Osvaldo Santos):</strong> Technologies: Azure, GCP Firestore, Next.js, TypeScript, Node.js, Docker, Bicep, OIDC. High-resilience and regulatory-compliant hybrid platform combining Microsoft Azure PaaS and Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Multi-Cloud Architecture & Fault Tolerance:</strong> Interoperable architecture between Microsoft Azure (App Service, Blob Storage, Functions, and ACI) and GCP Firestore, featuring local fallback for text classification and Docker PDF report generation.",
    p2_bullet2: "<strong>Persistence & Concurrency:</strong> Decoupled migration of NoSQL database from Azure Cosmos DB to GCP Firestore and implementation of atomic ACID transactions (<code>db.runTransaction</code>) against gamification race conditions, guaranteeing multi-tenant isolation.",
    p2_bullet3: "<strong>DevSecOps, IaC & FinOps:</strong> Infrastructure automation on Azure with Bicep and CI/CD pipelines in GitHub Actions (zero static secrets via OIDC authentication), optimizing cloud spend to <strong>~72 €/month (FinOps)</strong> and evaluating sovereign alternatives (GDPR vs. US CLOUD Act).",
    p2_pipeline: "Declarative Bicep ➔ GitHub Actions OIDC (azure/login@v2) ➔ Checkov SAST ➔ Azure App Service & GCP Firestore",
    btn_read_cloud_brief: "Read Multi-Cloud Brief ➔",
    btn_view_linkedin: "View on LinkedIn",

    p3_grade: "Software Engineering · Design Patterns 2024/25",
    p3_title: "Software Design Patterns &amp; Modular Architecture (PDS Monorepo)",
    p3_lead: "<strong>Software Engineering Monorepo:</strong> Technologies: Java 17/21, GoF Patterns (State, Strategy, Observer, Factory, Command, Singleton), SOLID Principles, UML Modeling. Enterprise domain modeling decoupling business logic and user interfaces.",
    p3_bullet1: "<strong>EST Global Airways (Flight Booking &amp; Fleet Management):</strong> Multi-criteria search engine, dynamic fare bands factoring mileage and airport surcharges, complete booking lifecycle with unique alphanumeric IDs, and post-sale management (date/seat changes and cancellation with refund).",
    p3_bullet2: "<strong>Banco do FaroEST (Legacy Refactoring &amp; Expansion Packs):</strong> Legacy game modernization transitioning from monolithic procedural code to a state-driven architecture (<em>State Pattern</em>), decoupled event handling (<em>Observer</em>), and extensible rule sets without contract regression.",
    p3_bullet3: "<strong>Software Engineering &amp; UML Diagrams:</strong> Rigorous adherence to SOLID principles (SRP, OCP, DIP), polymorphism, defensive interfaces, custom exception handling, and structural domain architecture mapped through structured UML class diagrams.",
    p3_pipeline: "Java 17/21 ➔ GoF Patterns (State, Strategy, Observer) ➔ SOLID &amp; Clean Architecture ➔ UML Class Modeling",
    bp_tab_uml: "UML Class Diagram",
    bp_uml_note: "▲ UML Class Diagram (Domain Modeling &amp; GoF Patterns · Click to view repo)",
    p3_metric1_val: "6+ GoF",
    p3_metric1_lbl: "Design Patterns",
    p3_metric2_val: "100%",
    p3_metric2_lbl: "SOLID Clean Code",
    p3_metric3_val: "2",
    p3_metric3_lbl: "Systems (Airways + Bank)",
    btn_pds_docs: "Explore Architecture ➔",

    p4_grade: "Distributed Microservices · Spring Cloud &amp; LGTM Observability",
    p4_title: "Distributed Car-Pooling &amp; Mobility Platform (CarPooling PT)",
    p4_lead: "<strong>Enterprise Microservices Architecture:</strong> Technologies: Java 21 LTS, Spring Boot 3, Spring Cloud (Eureka, Gateway, OpenFeign), RabbitMQ (Topic Exchange + DLQ), Redis 7 (Cache-Aside &amp; Rate Limiting), PostgreSQL (Database-per-Service), Docker Compose (18 containers), declarative Kubernetes, and full LGTM Observability.",
    p4_bullet1: "<strong>Decoupled Microservices &amp; Resilience Patterns:</strong> 11 Maven modules (1 shared library + 10 executable microservices) with dynamic discovery (Eureka), reactive API Gateway with Redis Token Bucket rate limiting, RabbitMQ event-driven messaging with DLQ, and Resilience4j circuit breakers with graceful fallbacks.",
    p4_bullet2: "<strong>123 Automated Tests Suite &amp; DevSecOps:</strong> Complete Maven Reactor validation with 100% pass rate (JUnit 5 + Mockito), versioned Flyway relational migrations with Database-per-Service isolation, declarative Kubernetes manifests, and Trivy filesystem vulnerability scanning.",
    p4_bullet3: "<strong>LGTM Observability Stack &amp; Business Algorithms:</strong> Correlated telemetry linking metrics (Prometheus :9090), JVM/traffic dashboards (Grafana :3001), OTLP distributed tracing (Tempo :3200), and centralized logs (Loki :3100), paired with Haversine distance calculations, sandbox payment flows, and CO2 sustainability metrics.",
    p4_pipeline: "API Gateway (Rate Limit) ➔ Eureka ➔ Spring Boot (OpenFeign / Circuit Breaker) ➔ RabbitMQ / Redis ➔ PostgreSQL &amp; LGTM Stack",
    bp_tab_grafana: "Grafana Cockpit",
    bp_tab_leaflet: "Routes &amp; Leaflet",
    bp_carpooling_note1: "▲ Grafana Observability Cockpit (JVM, RPS, Latency and Actuator · Click to view repo)",
    bp_carpooling_note2: "▲ Trip Search with Geodesic Routes and Leaflet Map (Click to view repo)",
    p4_metric1_val: "123 / 123",
    p4_metric1_lbl: "Automated Tests",
    p4_metric2_val: "18",
    p4_metric2_lbl: "Docker Containers (LGTM)",
    p4_metric3_val: "11",
    p4_metric3_lbl: "Maven Modules",
    btn_carpooling_docs: "View Architecture ➔",

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
    lang_en_lvl: "C1 (Full Professional)",
    lang_es_lvl: "B2 (Advanced Intermediate)",

    // Contact
    contact_label: "Direct Communication",
    contact_title: "Get in Touch",
    contact_desc: "If your organization is looking for a motivated engineer with an analytical and practical profile in <strong>Network Automation (NetDevOps)</strong>, <strong>Cloud &amp; DevSecOps</strong>, <strong>SRE</strong>, or <strong>Backend Java / Spring Boot</strong>, I am open to conversations and hiring processes (Immediate Availability [Remote, Hybrid or Relocation] · Eligible for +Talento Internships [IEFP Level 6]).",
    ch_email_lbl: "Email (Click to Copy)",
    ch_phone_lbl: "Phone Call",

    // Footer
    footer_role: "Network Automation, Cloud &amp; DevSecOps, SRE",
    footer_status: "Status: Immediate Availability (Eligible for +Talento Internships · IEFP Level 6)"
  }
};

// ============================================================
// Technical Writeup Briefs (Modal Content)
// ============================================================
const writeupData = {
  1: {
    pt: {
      title: "Remediação Closed-Loop de Configuration Drift em FortiOS via REST API e NetBox",
      meta: "NetDevOps · FortiOS v7.6.4 · NetBox SSoT/IPAM · Chaos Engineering (10 Cenários / 24 Incidentes) · ISO/IEC 27001 · Classificação: 19 / 20",
      content: `
        <div class="writeup-diagram-box">
          <img src="figura4_topologia_arte.png" alt="Topologia ARTE I.P." class="writeup-img">
          <p class="writeup-img-caption">Figura: Topologia da infraestrutura híbrida da ARTE, I.P. (Sede HUB FortiGate vs. Loja do Cidadão SPOKE FortiGate sob Underlay MPLS <code>172.16.0.0/30</code> e Overlay IPsec IKEv2 <code>10.10.10.0/30</code>).</p>
        </div>

        <h4>1. Evolução Arquitetural: Do Diagnóstico Passivo (Projeto I) ao Self-Healing (Projeto II)</h4>
        <p>Em infraestruturas críticas do Estado com túneis VPN IPsec IKEv2 sobre circuitos Underlay MPLS, desvios manuais de configuração (<em>configuration drift</em>) em gateways remotos, seletores CIDR da Phase 2 ou políticas de firewall geram quebras silenciosas com <strong>MTTR manual de 15 a 30 minutos</strong>. O trabalho decorreu em duas fases académicas em parceria com a <strong>ARTE, I.P. — Agência para a Reforma Tecnológica do Estado, I.P.</strong> (Decreto-Lei n.º 96/2025, ex-AMA):</p>
        <ul>
          <li><strong>Projeto I (Fev 2026 — Diagnóstico Granular Passivo):</strong> Conceção da topologia híbrida Hub-and-Spoke em <strong>VMware Workstation Pro (FortiOS v7.6.4)</strong> sobre 4 segmentos isolados (<code>VMnet2</code> OOB Management <code>10.0.0.0/24</code>, <code>VMnet5</code> WAN MPLS <code>172.16.0.0/30</code>, <code>VMnet4</code> Túnel IPsec <code>10.10.10.0/30</code> com IKEv2 AES256-SHA256 / AES-GCM DH Group 20 e DPD <em>On-Demand</em>, e <code>VMnet3</code> LAN Spoke <code>192.168.10.0/24</code>). Implementação de árvore de decisão em n8n que correlaciona telemetria PRTG e consulta SSH para distinguir falhas físicas de erros lógicos (Phase 1 vs. Phase 2) e alertar via Telegram (&lt; 3,2s).</li>
          <li><strong>Projeto II (Jun 2026 — Remediação Closed-Loop Autonómica):</strong> Evolução para arquitetura de ciclo fechado (<em>Self-Healing</em>) integrando <strong>NetBox (SSoT/IPAM)</strong>, motor híbrido de remediação (<strong>Netmiko SSH</strong> em <code>/opt/venv_netmiko</code> sob PEP 668 no Ubuntu Server 24.04 LTS + <strong>FortiOS REST API CMDB</strong> nativa), escalonamento automático de operador WAN via <strong>SMTP Mailtrap</strong> e persistência forense em <strong>MongoDB + Metabase</strong>.</li>
        </ul>

        <h4>2. Arquitetura Modular em Ciclo Fechado (Closed-Loop)</h4>
        <p>Desenvolvida pela equipa de engenharia <strong>Rafael Lourenço Cruz &amp; Rafael Ginga Victorino</strong>, com mentoria de indústria do <strong>Eng.º Nuno Batuca</strong> (Equipa de Comunicações da ARTE, I.P.), orientação do <strong>Prof. Doutor Vasco Nuno da Gama de Jesus Soares</strong> e coorientação do <strong>Prof. Doutor Alexandre José Pereira Duro da Fonte</strong> (Júri: Presidente Prof. Doutor Osvaldo Arede dos Santos; Arguente Prof. Doutor Carlos Manuel de Oliveira Alves):</p>
        <ul>
          <li><strong>Detetor de Falhas e Pre-Check ICMP (PRTG + n8n):</strong> Sonda HTTP Webhook dispara quando o tráfego do túnel cai para 0 KB/s. Antes de qualquer ação lógica, um nó de <em>Pre-Check ICMP</em> (<code>ping -c 2 -W 2 172.16.0.2</code>) valida a alcançabilidade física do Spoke: se <code>exitCode == 1</code>, o sistema diagnostica falha elétrica/hardware (<code>power_or_hardware_failure</code>) ou corte MPLS (<code>mpls_down</code>), inibindo tentativas inúteis de SSH/API e reduzindo o <strong>MTTD de ~15 min para &lt; 10s (&gt;95% de redução)</strong>.</li>
          <li><strong>Single Source of Truth / IPAM (NetBox):</strong> Consulta declarativa da <em>golden configuration</em> via REST API (<code>GET /api/dcim/devices/?name=FGT-HUB</code>) para extrair os parâmetros canónicos validados antes de injetar correções no plano de controlo.</li>
          <li><strong>Motor Híbrido de Remediação (Fase 1 SSH Netmiko vs. Fase 2 REST API CMDB):</strong>
            <ul>
              <li><strong>Fase 1 (Licença Trial VM — SSH / Netmiko):</strong> Contornando o bloqueio de escrita HTTP PUT em licenças de avaliação de FortiGate-VM, scripts Python determinísticos (<code>remediate_config.py</code>, <code>remediate_phase2.py</code>, <code>remediate_tunnel.py</code>) executam via <code>Netmiko</code> sobre SSH em ambiente virtual isolado (<code>/opt/venv_netmiko</code>).</li>
              <li><strong>Fase 2 (Licença Enterprise — Native FortiOS REST API CMDB):</strong> Com licenciamento comercial ativo e autenticação Zero Trust via Bearer Token (<code>apisecret</code> restrito a <code>10.0.0.60/32</code>), o orquestrador executa mutações cirúrgicas via <code>HTTP PUT</code> direto na CMDB (<code>/api/v2/cmdb/vpn.ipsec/phase1-interface/HUB-TO-SPOKE</code>, <code>phase2-interface</code> e <code>/api/v2/cmdb/firewall/policy/1</code> e <code>2</code>), atingindo eficiência transacional <em>R</em><sub>trans</sub> &ge; 90% (&lt; 2s por transação HTTP).</li>
            </ul>
          </li>
          <li><strong>Auditoria Forense e Observabilidade SRE:</strong> Registo imutável em duas coleções MongoDB (<code>incident_runs</code> e <code>incident_runs_enterprise</code>), notificações críticas no <strong>Telegram</strong>, tickets de operador via <strong>SMTP Mailtrap</strong> e dashboards executivos de MTTR e taxa de sucesso em <strong>Metabase</strong> (alinhado com <strong>ISO/IEC 27001</strong>).</li>
        </ul>

        <div class="writeup-diagram-box">
          <img src="figura3_netdevops_arquitetura.png" alt="Arquitetura NetDevOps Macro" class="writeup-img">
          <p class="writeup-img-caption">Figura: Fluxo sequencial integrado de deteção (PRTG), orquestração (n8n), validação (NetBox SSoT), remediação híbrida (FortiOS) e persistência analítica (MongoDB/Metabase).</p>
        </div>

        <h4>3. Validação Experimental com Chaos Engineering (10 Cenários A–J · 24 Incidentes)</h4>
        <p>A plataforma foi submetida a uma bateria de <strong>10 cenários de Chaos Engineering</strong> (<strong>Cenários A a E</strong> na Fase 1 SSH/Netmiko e <strong>Cenários F a J</strong> na Fase 2 REST API CMDB), totalizando <strong>24 incidentes reais auditados em MongoDB</strong>:</p>
        <ul>
          <li><strong>Fase 1 — Coleção <code>incident_runs</code> (13 incidentes, Cenários A–E):</strong>
            <ul>
              <li><strong>Cenário A (<code>mpls_down</code> — 4 incidentes / 30,8%):</strong> Corte do enlace WAN MPLS → escalonamento automático via SMTP Mailtrap (<code>escalated_to_provider</code>).</li>
              <li><strong>Cenário B (<code>phase2_mismatch</code> — 2 incidentes / 15,4%):</strong> Corrupção de seletores CIDR da Phase 2 → <code>remediate_phase2.py</code> converge o túnel em <strong>7,0 segundos</strong> nos syslogs FortiOS (<code>15:58:23</code> → <code>15:58:30</code>).</li>
              <li><strong>Cenário C (<code>zero_traffic</code> — 2 incidentes / 15,4%):</strong> Queda silenciosa das Security Associations → <code>remediate_tunnel.py</code> renegocia IKEv2 em <strong>7,0 segundos</strong> (<code>15:40:43</code> → <code>15:40:50</code>).</li>
              <li><strong>Cenário D (<code>rgwy_mismatch</code> — 3 incidentes / 23,1%):</strong> Desvio de Remote Gateway na Phase 1 → <code>remediate_config.py</code> restaura <code>172.16.0.2</code> em <strong>4,0 segundos</strong> (<code>15:47:55</code> → <code>15:47:59</code>).</li>
              <li><strong>Cenário E (<code>power_or_hardware_failure</code> — 2 incidentes / 15,4%):</strong> Falha elétrica simulada na filial → Pre-Check ICMP (<code>exitCode == 1</code>) aborta SSH imediatamente e emite alerta crítico de infraestrutura.</li>
              <li><em>Balanço Fase 1:</em> <strong>7 <code>auto_recovered</code> (53,8% global = 100% das 7 falhas lógicas elegíveis)</strong>, 4 <code>escalated_to_provider</code> (30,8%) e 2 <code>power_or_hardware_failure</code> (15,4%).</li>
            </ul>
          </li>
          <li><strong>Fase 2 — Coleção <code>incident_runs_enterprise</code> (11 incidentes, Cenários F–J):</strong>
            <ul>
              <li><strong>Cenários F (<code>mpls_down</code> — 1 inc. / 9,09%) &amp; G (<code>power_or_hardware_failure</code> — 2 inc. / 18,18%):</strong> Triagem física preventiva (<code>not_attempted</code>) com despacho SMTP Mailtrap / Telegram.</li>
              <li><strong>Cenários H (<code>rgwy_mismatch</code> — 3 inc. / 27,27%) &amp; I (<code>phase2_mismatch</code> — 2 inc. / 18,18%):</strong> Remediação transacional via <code>HTTP PUT</code> direto na CMDB FortiOS (&lt; 2s).</li>
              <li><strong>Cenário J (<code>policy_disabled</code> — 3 inc. / 27,27%):</strong> Reativação concorrente das Firewall Policies ID 1 e ID 2 (<code>{"status": "enable"}</code> em <code>/api/v2/cmdb/firewall/policy/</code>).</li>
              <li><em>Balanço Fase 2:</em> <strong>8 <code>Success</code> / <code>auto_recovered</code> (72,7% global = 100% das 8 falhas lógicas elegíveis)</strong> e 3 <code>not_attempted</code> (27,3%).</li>
            </ul>
          </li>
          <li><strong>Reconhecimento Académico:</strong> Projeto defendido perante júri na EST/IPCB e aprovado com a classificação final de <strong>19 / 20 valores</strong>.</li>
        </ul>
      `
    },
    en: {
      title: "Closed-Loop Remediation of Configuration Drift in FortiOS via REST API & NetBox",
      meta: "NetDevOps · FortiOS v7.6.4 · NetBox SSoT/IPAM · Chaos Engineering (10 Scenarios / 24 Incidents) · ISO/IEC 27001 · Grade: 19 / 20",
      content: `
        <div class="writeup-diagram-box">
          <img src="figura4_topologia_arte.png" alt="ARTE I.P. Hybrid Topology" class="writeup-img">
          <p class="writeup-img-caption">Figure: Hybrid infrastructure topology for ARTE, I.P. (Hub FortiGate vs. Citizen Shop Spoke FortiGate interconnected via MPLS Underlay <code>172.16.0.0/30</code> and IPsec IKEv2 Overlay <code>10.10.10.0/30</code>).</p>
        </div>

        <h4>1. Architectural Evolution: From Passive Diagnostics (Project I) to Self-Healing (Project II)</h4>
        <p>In mission-critical public-sector backbones relying on IPsec IKEv2 tunnels over leased MPLS circuits, unintended configuration drift (gateway misconfigurations, mismatched Phase 2 CIDR selectors, or disabled firewall policies) creates silent outages with a manual <strong>MTTR of 15–30 minutes</strong>. Conducted across two academic stages in partnership with <strong>ARTE, I.P. — State Agency for Technological Reform</strong> (Decree-Law No. 96/2025, formerly AMA):</p>
        <ul>
          <li><strong>Project I (Feb 2026 — Granular Passive Diagnostics):</strong> Designed the Hub-and-Spoke hybrid testbed in <strong>VMware Workstation Pro (FortiOS v7.6.4)</strong> across 4 isolated network segments (<code>VMnet2</code> OOB Management <code>10.0.0.0/24</code>, <code>VMnet5</code> WAN MPLS <code>172.16.0.0/30</code>, <code>VMnet4</code> IPsec Tunnel <code>10.10.10.0/30</code> using IKEv2 AES256-SHA256 / AES-GCM DH Group 20 with On-Demand DPD, and <code>VMnet3</code> Spoke LAN <code>192.168.10.0/24</code>). Built an event-driven n8n decision tree correlating PRTG alerts and SSH diagnostics to separate physical link failures from logical IKE Phase 1/Phase 2 drift and dispatch Telegram alerts (&lt; 3.2s).</li>
          <li><strong>Project II (Jun 2026 — Autonomous Closed-Loop Self-Healing):</strong> Evolved into a full closed-loop remediation platform integrating <strong>NetBox (SSoT/IPAM)</strong>, a dual-mode remediation engine (<strong>Netmiko SSH</strong> inside an isolated PEP 668 virtualenv <code>/opt/venv_netmiko</code> on Ubuntu Server 24.04 LTS + native <strong>FortiOS REST API CMDB</strong>), automated ISP ticket escalation via <strong>SMTP Mailtrap</strong>, and immutable forensic telemetry in <strong>MongoDB + Metabase</strong>.</li>
        </ul>

        <h4>2. Event-Driven Closed-Loop Architecture</h4>
        <p>Engineered by <strong>Rafael Lourenço Cruz &amp; Rafael Ginga Victorino</strong>, with industry mentorship from <strong>Eng. Nuno Batuca</strong> (Communications Team at ARTE, I.P.), supervised by <strong>Prof. Dr. Vasco Nuno da Gama de Jesus Soares</strong> and co-supervised by <strong>Prof. Dr. Alexandre José Pereira Duro da Fonte</strong> (Jury President: Prof. Dr. Osvaldo Arede dos Santos; Examiner: Prof. Dr. Carlos Manuel de Oliveira Alves):</p>
        <ul>
          <li><strong>Fault Detection &amp; ICMP Pre-Check (PRTG + n8n):</strong> Real-time HTTP Webhooks fire when tunnel traffic drops to 0 KB/s. Before attempting software remediation, an <em>ICMP Pre-Check</em> node (<code>ping -c 2 -W 2 172.16.0.2</code>) verifies physical underlay reachability: if <code>exitCode == 1</code>, the orchestrator classifies a branch power/hardware outage (<code>power_or_hardware_failure</code>) or WAN carrier cut (<code>mpls_down</code>), suppressing futile SSH/API calls and cutting <strong>MTTD from ~15 min to &lt; 10s (&gt;95% reduction)</strong>.</li>
          <li><strong>Single Source of Truth / IPAM (NetBox):</strong> Queries the declarative golden configuration via REST API (<code>GET /api/dcim/devices/?name=FGT-HUB</code>) to retrieve canonical parameters prior to control-plane mutation.</li>
          <li><strong>Hybrid Remediation Engine (Phase 1 SSH Netmiko vs. Phase 2 REST API CMDB):</strong>
            <ul>
              <li><strong>Phase 1 (VM Trial License — SSH / Netmiko):</strong> Bypassing HTTP PUT write restrictions on evaluation FortiGate-VMs, deterministic Python scripts (<code>remediate_config.py</code>, <code>remediate_phase2.py</code>, <code>remediate_tunnel.py</code>) execute over SSH via <code>Netmiko</code> in <code>/opt/venv_netmiko</code>.</li>
              <li><strong>Phase 2 (Enterprise License — Native FortiOS REST API CMDB):</strong> With commercial licensing and Zero Trust Bearer Token authentication (<code>apisecret</code> restricted to <code>10.0.0.60/32</code>), n8n performs direct <code>HTTP PUT</code> mutations against CMDB endpoints (<code>/api/v2/cmdb/vpn.ipsec/phase1-interface/HUB-TO-SPOKE</code>, <code>phase2-interface</code>, and <code>/api/v2/cmdb/firewall/policy/1</code> &amp; <code>2</code>), achieving transactional efficiency <em>R</em><sub>trans</sub> &ge; 90% (&lt; 2s per HTTP call).</li>
            </ul>
          </li>
          <li><strong>Forensic Auditing &amp; SRE Observability:</strong> Immutable records persisted across two MongoDB collections (<code>incident_runs</code> and <code>incident_runs_enterprise</code>), instant alerts via <strong>Telegram Bot</strong>, carrier escalation via <strong>SMTP Mailtrap</strong>, and live MTTR analytics in <strong>Metabase</strong> (aligned with <strong>ISO/IEC 27001</strong> traceability).</li>
        </ul>

        <div class="writeup-diagram-box">
          <img src="figura3_netdevops_arquitetura.png" alt="NetDevOps Macro Architecture" class="writeup-img">
          <p class="writeup-img-caption">Figure: Macro architecture and sequential control flow across PRTG, n8n, NetBox SSoT, hybrid FortiOS remediation, and MongoDB/Metabase auditing.</p>
        </div>

        <h4>3. Empirical Validation via Chaos Engineering (10 Scenarios A–J · 24 Incidents)</h4>
        <p>The platform was validated across <strong>10 Chaos Engineering scenarios</strong> (<strong>Scenarios A–E</strong> in Phase 1 SSH/Netmiko and <strong>Scenarios F–J</strong> in Phase 2 REST API CMDB), totaling <strong>24 audited incidents in MongoDB</strong>:</p>
        <ul>
          <li><strong>Phase 1 — Collection <code>incident_runs</code> (13 incidents, Scenarios A–E):</strong>
            <ul>
              <li><strong>Scenario A (<code>mpls_down</code> — 4 incidents / 30.8%):</strong> WAN MPLS link cut → automated carrier ticket dispatch via SMTP Mailtrap (<code>escalated_to_provider</code>).</li>
              <li><strong>Scenario B (<code>phase2_mismatch</code> — 2 incidents / 15.4%):</strong> Corrupted Phase 2 CIDR selectors → <code>remediate_phase2.py</code> converges tunnel in <strong>7.0 seconds</strong> in FortiOS syslogs (<code>15:58:23</code> → <code>15:58:30</code>).</li>
              <li><strong>Scenario C (<code>zero_traffic</code> — 2 incidents / 15.4%):</strong> Frozen IPsec SAs → <code>remediate_tunnel.py</code> flushes and renegotiates IKEv2 in <strong>7.0 seconds</strong> (<code>15:40:43</code> → <code>15:40:50</code>).</li>
              <li><strong>Scenario D (<code>rgwy_mismatch</code> — 3 incidents / 23.1%):</strong> Tampered Phase 1 Remote Gateway → <code>remediate_config.py</code> restores <code>172.16.0.2</code> in <strong>4.0 seconds</strong> (<code>15:47:55</code> → <code>15:47:59</code>).</li>
              <li><strong>Scenario E (<code>power_or_hardware_failure</code> — 2 incidents / 15.4%):</strong> Simulated branch power loss → ICMP Pre-Check (<code>exitCode == 1</code>) aborts SSH immediately and dispatches a physical outage alert.</li>
              <li><em>Phase 1 Breakdown:</em> <strong>7 <code>auto_recovered</code> (53.8% overall = 100% of 7 eligible logical faults)</strong>, 4 <code>escalated_to_provider</code> (30.8%), and 2 <code>power_or_hardware_failure</code> (15.4%).</li>
            </ul>
          </li>
          <li><strong>Phase 2 — Collection <code>incident_runs_enterprise</code> (11 incidents, Scenarios F–J):</strong>
            <ul>
              <li><strong>Scenarios F (<code>mpls_down</code> — 1 inc. / 9.09%) &amp; G (<code>power_or_hardware_failure</code> — 2 inc. / 18.18%):</strong> Preventive physical triage (<code>not_attempted</code>) with SMTP Mailtrap / Telegram dispatch.</li>
              <li><strong>Scenarios H (<code>rgwy_mismatch</code> — 3 inc. / 27.27%) &amp; I (<code>phase2_mismatch</code> — 2 inc. / 18.18%):</strong> Direct transactional <code>HTTP PUT</code> remediation on FortiOS CMDB (&lt; 2s).</li>
              <li><strong>Scenario J (<code>policy_disabled</code> — 3 inc. / 27.27%):</strong> Dual concurrent <code>HTTP PUT</code> re-enabling Firewall Policies ID 1 and ID 2 (<code>{"status": "enable"}</code> on <code>/api/v2/cmdb/firewall/policy/</code>).</li>
              <li><em>Phase 2 Breakdown:</em> <strong>8 <code>Success</code> / <code>auto_recovered</code> (72.7% overall = 100% of 8 eligible logical faults)</strong> and 3 <code>not_attempted</code> (27.3%).</li>
            </ul>
          </li>
          <li><strong>Academic Distinction:</strong> Defended before the EST/IPCB examination jury and awarded a final grade of <strong>19 / 20</strong>.</li>
        </ul>
      `
    }
  },
  2: {
    pt: {
      title: "Eliminando Segredos Estáticos em CI/CD: Autenticação Federada com GitHub Actions e Azure OIDC",
      meta: "SecDevOps · Zero Trust · Azure Entra ID · GitHub Actions OIDC · azure/login@v2 · Checkov",
      content: `
        <h4>1. O Vetor de Risco das Credenciais Estáticas</h4>
        <p>O armazenamento de <em>Service Principal secrets</em> de longa duração nas definições secretas de repositórios CI/CD representa uma das vulnerabilidades mais exploradas em ataques à cadeia de abastecimento de software (<em>supply chain compromises</em>). Uma fuga acidental em logs de build ou um commit inadvertido concede persistência não autorizada ao tenant de cloud da organização, exigindo rotações de emergência e auditorias complexas.</p>

        <h4>2. Arquitetura de Confiança Federada com OpenID Connect (OIDC)</h4>
        <p>Para implementar uma postura rigorosa de <strong>Zero Trust</strong>, configurei a federação de identidades entre o GitHub Actions e o Microsoft Entra ID (Azure AD), eliminando integralmente as palavras-passe estáticas:</p>
        <ul>
          <li><strong>Claims Criptográficas Efêmeras:</strong> O runner do GitHub gera um token de identidade OIDC (JWT) assinado digitalmente, contendo claims estritas: organização, repositório, branch específico (ex: <code>refs/heads/main</code>) e ambiente.</li>
          <li><strong>Troca de Token no Azure STS (<code>azure/login@v2</code>):</strong> O Azure Security Token Service valida criptograficamente o emissor do GitHub (<code>https://token.actions.githubusercontent.com</code>) e emite um <em>access token</em> temporário com validade máxima de 60 minutos, limitado estritamente ao Resource Group do projeto.</li>
          <li><strong>Aprovisionamento Declarativo via IaC Bicep:</strong> A infraestrutura é descrita em código declarativo Bicep, com injeção dinâmica de Connection Strings e chaves de instrumentação via funções nativas (<code>listKeys()</code>), evitando qualquer parâmetro sensível hardcoded no repositório.</li>
          <li><strong>Segurança Shift-Left com Checkov SAST:</strong> Integração de análise estática de segurança no pipeline através do <code>Checkov</code>, inspecionando templates Bicep e Dockerfiles antes do deployment para prevenir portas de gestão desprotegidas, protocolos obsoletos ou permissões excessivas no RBAC.</li>
        </ul>

        <h4>3. Resultados e Impacto Operacional</h4>
        <p>Redução a zero do risco de fuga de credenciais no repositório, rastreabilidade total de cada operação nos logs do Azure Activity vinculada ao commit SHA e ao workflow do GitHub, e conformidade integral com as melhores práticas de DevSecOps para ambientes de produção.</p>
      `
    },
    en: {
      title: "Eliminating Static Secrets in CI/CD: Federated Authentication with GitHub Actions & Azure OIDC",
      meta: "SecDevOps · Zero Trust · Azure Entra ID · GitHub Actions OIDC · azure/login@v2 · Checkov",
      content: `
        <h4>1. Threat Surface of Long-Lived CI/CD Secrets</h4>
        <p>Storing long-lived Service Principal secrets inside CI/CD repository secrets remains one of the most exploited attack vectors in software supply chain compromises. Accidental leaks in build logs or rogue commits grant persistent, hard-to-detect administrative access into corporate cloud tenants, necessitating disruptive emergency key rotations.</p>

        <h4>2. Federated Trust Architecture via OpenID Connect (OIDC)</h4>
        <p>To enforce an uncompromising <strong>Zero Trust</strong> security posture, I engineered federated identity trust between GitHub Actions and Microsoft Entra ID (Azure AD), eliminating static credentials altogether:</p>
        <ul>
          <li><strong>Ephemeral Cryptographic Claims:</strong> The GitHub workflow runner requests a digitally signed OIDC identity token (JWT) containing cryptographic claims: organization, repository, branch restriction (e.g., <code>refs/heads/main</code>), and deployment environment.</li>
          <li><strong>Token Exchange via <code>azure/login@v2</code>:</strong> Azure's Security Token Service validates the GitHub token issuer (<code>https://token.actions.githubusercontent.com</code>) and issues a short-lived access token valid for at most 60 minutes, strictly constrained to the project's target Resource Group.</li>
          <li><strong>Declarative IaC with Bicep:</strong> Cloud infrastructure is declared through modular Bicep templates with dynamic injection of connection strings and instrumentation keys via native functions (<code>listKeys()</code>), keeping repository configuration completely sanitized.</li>
          <li><strong>Shift-Left Security with Checkov SAST:</strong> Automated static security scanning embedded into pull requests using <code>Checkov</code>, inspecting IaC templates and Dockerfiles to prevent exposed management ports, deprecated protocols, or overprivileged RBAC assignments.</li>
        </ul>

        <h4>3. Operational Outcomes & Compliance</h4>
        <p>100% elimination of hardcoded secrets, complete operational auditability in Azure Activity logs tied to specific commit SHAs and workflow runs, and full compliance with enterprise DevSecOps standards.</p>
      `
    }
  },
  3: {
    pt: {
      title: "Arquitetura Multi-Cloud Resiliente: Mitigando Falhas com Fallback Desacoplado entre Azure e GCP",
      meta: "Multi-Cloud Architecture · Azure PaaS · GCP Firestore · db.runTransaction · FinOps · RGPD · Classificação: 20 / 20",
      content: `
        <div class="writeup-diagram-box">
          <img src="figura11_cityguards_multicloud_real.png" alt="CityGuards Multi-Cloud Dashboard" class="writeup-img">
          <p class="writeup-img-caption">Figura: Painel operacional da plataforma CityGuards em arquitetura híbrida ativa (Microsoft Azure + GCP Firestore).</p>
        </div>

        <h4>1. O Desafio: Interoperabilidade Híbrida e Resiliência Operacional</h4>
        <p>Desenvolver uma plataforma distribuída de reporte cívico e gestão de incidentes municipais (CityGuards) capaz de manter disponibilidade contínua, tolerância a falhas de fornecedores cloud individuais e rigorosa proteção de dados sensíveis de cidadãos em conformidade com o <strong>RGPD</strong>.</p>

        <h4>2. Mecanismos Avançados de Engenharia e Fallback</h4>
        <ul>
          <li><strong>Persistência Desacoplada e Migração de Contingência:</strong> Durante o desenvolvimento, o esgotamento precoce de créditos estudantis no Azure Cosmos DB foi convertido numa oportunidade de engenharia de resiliência: a camada NoSQL foi migrada de forma totalmente desacoplada para o <strong>Google Cloud Firestore</strong>, mantendo o frontend e API no <strong>Azure App Service</strong> e os uploads no <strong>Azure Blob Storage</strong>.</li>
          <li><strong>Consistência e Atomicidade ACID (<code>db.runTransaction</code>):</strong> Para evitar <em>race conditions</em> na atribuição de pontos de gamificação e resgate de vouchers cívicos sob concorrência intensa, todas as mutações de pontuação são orquestradas via transações atómicas ACID no Firestore, garantindo isolamento absoluto por município (<em>multi-tenant</em>).</li>
          <li><strong>Graceful Degradation Dual (IA & Microsserviços):</strong>
            <ul>
              <li><strong>Azure AI Vision vs. NLP Local:</strong> Quando o serviço cognitivo atinge limites de quota ou latência excessiva, o backend aciona de forma transparente o algoritmo local <code>TextHeuristicFallback</code>, categorizando a ocorrência por padrões lexicais e semânticos ponderados sem interromper a submissão.</li>
              <li><strong>Geração de PDFs em ACI com Fallback In-Process:</strong> Para controlo de custos <strong>FinOps</strong>, o microsserviço de geração de comprovativos em <em>Azure Container Instances (ACI)</em> só opera sob demanda; se a instância contentorizada estiver pausada ou indisponível, o sistema recorre imediatamente à geração <em>in-process</em> em Node.js com a paleta oficial da plataforma.</li>
            </ul>
          </li>
          <li><strong>Soberania de Dados e Conformidade (RGPD vs. US CLOUD Act):</strong> Realização de um estudo aprofundado sobre soberania digital, analisando a compatibilidade entre a retenção de dados de cidadãos na União Europeia e os riscos de extraterritorialidade introduzidos pelo US CLOUD Act em fornecedores de computação sediados nos EUA.</li>
        </ul>

        <h4>3. Reconhecimento Máximo de Engenharia</h4>
        <p>Pela robustez arquitetural, capacidade demonstrada de operar eficazmente entre clouds distintas (Azure e GCP) e elegância na gestão de falhas de infraestrutura, o projeto obteve a <strong>classificação máxima de 20 / 20 valores</strong>.</p>
      `
    },
    en: {
      title: "Resilient Multi-Cloud Architecture: Mitigating Failures with Decoupled Fallback across Azure and GCP",
      meta: "Multi-Cloud Architecture · Azure PaaS · GCP Firestore · db.runTransaction · FinOps · GDPR · Grade: 20 / 20",
      content: `
        <div class="writeup-diagram-box">
          <img src="figura11_cityguards_multicloud_real.png" alt="CityGuards Multi-Cloud Dashboard" class="writeup-img">
          <p class="writeup-img-caption">Figure: Operational management dashboard for CityGuards running on active hybrid multi-cloud architecture (Microsoft Azure + GCP Firestore).</p>
        </div>

        <h4>1. The Challenge: Hybrid Interoperability & Operational Resilience</h4>
        <p>Engineering a distributed civic issue reporting and municipal asset management platform (CityGuards) capable of maintaining 99.9% uptime, surviving regional cloud provider outages, and guaranteeing citizen data protection in compliance with the European <strong>GDPR</strong>.</p>

        <h4>2. Advanced Engineering Patterns & Graceful Fallbacks</h4>
        <ul>
          <li><strong>Decoupled Persistence & Contingency Migration:</strong> When educational credit limitations threatened Azure Cosmos DB availability, I spearheaded an agile migration to <strong>Google Cloud Firestore</strong>, establishing a truly decoupled hybrid multi-cloud topology: compute and blob ingestion hosted on <strong>Azure App Service & Blob Storage</strong>, with persistent state managed across <strong>GCP</strong>.</li>
          <li><strong>ACID Transactional Atomicity (<code>db.runTransaction</code>):</strong> To prevent concurrency race conditions in civic gamification points and voucher redemption under heavy traffic spikes, all ledger mutations execute within atomic Firestore transactions (<code>db.runTransaction</code>), preserving multi-tenant municipal boundaries.</li>
          <li><strong>Dual Graceful Degradation Patterns:</strong>
            <ul>
              <li><strong>Azure AI Vision vs. Local NLP:</strong> Should cognitive computer vision APIs encounter rate limits or latency degradation, the backend seamlessly triggers a local regex-based <code>TextHeuristicFallback</code> algorithm, classifying civic reports via lexical matching without stalling citizen submissions.</li>
              <li><strong>FinOps Microservices with In-Process Fallback:</strong> To enforce strict <strong>FinOps</strong> cost discipline, the PDF generation microservice on <em>Azure Container Instances (ACI)</em> is spun up dynamically; if ACI is cold-starting or throttled, an in-process Node.js rendering fallback generates the branded certificate instantaneously.</li>
            </ul>
          </li>
          <li><strong>Data Sovereignty Assessment (GDPR vs. US CLOUD Act):</strong> Comprehensive technical and legal analysis evaluating the storage of European civic records within EU cloud regions while mitigating extraterritorial access risks stemming from the US CLOUD Act.</li>
        </ul>

        <h4>3. Maximum Engineering Grade</h4>
        <p>Distinguished with the <strong>maximum grade of 20 / 20</strong> for technical excellence in distributed systems architecture, cross-cloud resilience, and proactive failure mitigation.</p>
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
// Blueprint Interactive Tab Switching
// ============================================================
function switchBlueprintTab(projectId, tabName, btn) {
  const card = btn.closest('.blueprint-card');
  if (!card) return;

  // Toggle active class on tab buttons
  card.querySelectorAll('.bp-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Toggle views
  card.querySelectorAll('.bp-view').forEach(v => {
    v.style.display = 'none';
    v.classList.remove('active');
  });

  const targetView = card.querySelector(`#bp${projectId}-view-${tabName}`);
  if (targetView) {
    targetView.style.display = 'block';
    targetView.classList.add('active');
  }

  // Update blueprint name bar
  const nameLabel = card.querySelector('.blueprint-name');
  if (nameLabel) {
    if (tabName === 'svg') {
      nameLabel.textContent = projectId === 1 ? 'closed_loop_topology.svg' : 'multicloud_resilience.svg';
    } else if (tabName === 'arte') {
      nameLabel.textContent = 'figura4_topologia_arte.png (1344x477)';
    } else if (tabName === 'macro') {
      nameLabel.textContent = 'figura3_netdevops_arquitetura.png (1583x829)';
    } else if (tabName === 'dashboard') {
      nameLabel.textContent = 'figura11_cityguards_multicloud_real.png (1502x844)';
    } else if (tabName === 'grafana') {
      nameLabel.textContent = 'carpooling_grafana.png (LGTM Observability)';
    } else if (tabName === 'leaflet') {
      nameLabel.textContent = 'carpooling_leaflet.png (Leaflet Routes & Trips)';
    }
  }
}
window.switchBlueprintTab = switchBlueprintTab;

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
// Project Track Filter (Dual-Track Architecture Showcase)
// ============================================================
function filterProjectTrack(track, btn) {
  // Update active state on track buttons
  document.querySelectorAll('.track-tab').forEach(b => b.classList.remove('active'));
  if (btn) {
    btn.classList.add('active');
  } else {
    const matchingBtn = document.querySelector(`.track-tab[data-track="${track}"]`);
    if (matchingBtn) matchingBtn.classList.add('active');
  }

  // Filter project cards
  const cards = document.querySelectorAll('.project-showcase-card');
  cards.forEach(card => {
    const cardTracks = (card.getAttribute('data-track') || '').split(' ');
    if (track === 'all' || cardTracks.includes(track)) {
      card.classList.remove('track-hidden');
    } else {
      card.classList.add('track-hidden');
    }
  });

  // Deep linking URL hash management
  if (track === 'cloud') {
    history.replaceState(null, '', '#cloud');
  } else if (track === 'backend') {
    history.replaceState(null, '', '#backend');
  } else if (window.location.hash === '#cloud' || window.location.hash === '#backend') {
    history.replaceState(null, '', '#projects');
  }
}
window.filterProjectTrack = filterProjectTrack;

function handleTrackHash() {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#cloud') {
    filterProjectTrack('cloud');
    const projSec = document.getElementById('projects');
    if (projSec) {
      projSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else if (hash === '#backend') {
    filterProjectTrack('backend');
    const projSec = document.getElementById('projects');
    if (projSec) {
      projSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    filterProjectTrack('all');
  }
}

// ============================================================
// Career History Timeline Rolling Engine (Physics, Stepper & Scrubber)
// ============================================================
function initTimelineRolling() {
  const wrapper = document.getElementById('timelineWrapper');
  const container = document.getElementById('timelineCarouselContainer') || document.querySelector('.timeline-carousel-container');
  const btnPrev = document.getElementById('timelineBtnPrev');
  const btnNext = document.getElementById('timelineBtnNext');
  const floatPrev = document.getElementById('timelineFloatPrev');
  const floatNext = document.getElementById('timelineFloatNext');
  const autoRollToggle = document.getElementById('timelineAutoRollToggle');
  const autoRollIcon = document.getElementById('timelineAutoRollIcon');
  const scrubber = document.getElementById('timelineScrubber');
  const scrubberFill = document.getElementById('timelineScrubberFill');
  const scrubberThumb = document.getElementById('timelineScrubberThumb');
  const activeStepLabel = document.getElementById('timelineActiveStep');
  const stepPills = Array.from(document.querySelectorAll('.timeline-step-pill'));
  const nodes = Array.from(document.querySelectorAll('.timeline-node'));

  if (!wrapper || nodes.length === 0) return;

  // Sub-pixel floating-point scroll state (prevents integer scrollLeft quantization lock)
  let currentScroll = wrapper.scrollLeft || 0;
  let targetScroll = currentScroll;
  let isInterpolating = false;

  // Auto-roll state
  let isAutoRolling = true;
  let autoDirection = 1; // 1 = forward, -1 = reverse (smooth ping-pong)
  const autoSpeedPxPerSec = 54; // Smooth executive glide speed
  let isHovered = false;
  let isDragging = false;
  let isScrubbing = false;
  let pauseUntil = 0;
  let explicitStepIndex = null;
  let lastFrameTime = performance.now();

  function getMaxScroll() {
    return Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
  }

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function pauseAutoRoll(ms = 3200) {
    pauseUntil = performance.now() + ms;
  }

  function setActiveStepUI(idx) {
    const safeIdx = clamp(idx, 0, nodes.length - 1);
    nodes.forEach((n, i) => {
      if (i === safeIdx) n.classList.add('is-active');
      else n.classList.remove('is-active');
    });
    stepPills.forEach((p, i) => {
      if (i === safeIdx) p.classList.add('active');
      else p.classList.remove('active');
    });
    if (activeStepLabel) {
      activeStepLabel.textContent = String(safeIdx + 1).padStart(2, '0');
    }
  }

  function syncTelemetry() {
    const maxScroll = getMaxScroll();
    const ratio = maxScroll > 0 ? clamp(currentScroll / maxScroll, 0, 1) : 0;
    const pct = (ratio * 100).toFixed(2) + '%';

    if (scrubberFill) scrubberFill.style.width = pct;
    if (scrubberThumb) scrubberThumb.style.left = pct;
    if (scrubber) scrubber.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));

    // Update lateral arrow disabled states
    if (floatPrev) {
      if (currentScroll <= 6) floatPrev.classList.add('disabled');
      else floatPrev.classList.remove('disabled');
    }
    if (floatNext) {
      if (currentScroll >= maxScroll - 6) floatNext.classList.add('disabled');
      else floatNext.classList.remove('disabled');
    }

    // Determine active milestone node
    if (explicitStepIndex !== null && isInterpolating) {
      setActiveStepUI(explicitStepIndex);
    } else {
      explicitStepIndex = null;
      const proportionalIdx = Math.round(ratio * (nodes.length - 1));
      setActiveStepUI(proportionalIdx);
    }
  }

  // Scroll smoothly to center a specific node index (0..6)
  function glideToNode(index) {
    const safeIdx = clamp(index, 0, nodes.length - 1);
    const node = nodes[safeIdx];
    if (!node) return;
    const maxScroll = getMaxScroll();

    let desired;
    if (safeIdx === 0) {
      desired = 0;
    } else if (safeIdx === nodes.length - 1) {
      desired = maxScroll;
    } else {
      const nodeCenter = node.offsetLeft + node.offsetWidth / 2;
      desired = nodeCenter - wrapper.clientWidth / 2;
    }

    explicitStepIndex = safeIdx;
    targetScroll = clamp(desired, 0, maxScroll);
    isInterpolating = true;
    pauseAutoRoll(4000);
    setActiveStepUI(safeIdx);
  }

  // High-precision 60/120Hz Physics Loop
  function tick(now) {
    const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
    lastFrameTime = now;
    const maxScroll = getMaxScroll();

    if (!isDragging && !isScrubbing && maxScroll > 4) {
      if (isInterpolating) {
        // Exponential Lerp Damping towards targetScroll
        const diff = targetScroll - currentScroll;
        if (Math.abs(diff) < 0.6) {
          currentScroll = targetScroll;
          isInterpolating = false;
          explicitStepIndex = null;
        } else {
          currentScroll += diff * (1 - Math.exp(-10 * dt));
        }
        wrapper.scrollLeft = currentScroll;
        syncTelemetry();
      } else if (isAutoRolling && !isHovered && now > pauseUntil) {
        // Continuous sub-pixel glide with smooth ping-pong reversal at boundaries
        currentScroll += autoDirection * autoSpeedPxPerSec * dt;

        if (currentScroll >= maxScroll) {
          currentScroll = maxScroll;
          autoDirection = -1;
          pauseAutoRoll(1600);
        } else if (currentScroll <= 0) {
          currentScroll = 0;
          autoDirection = 1;
          pauseAutoRoll(1600);
        }

        targetScroll = currentScroll;
        wrapper.scrollLeft = currentScroll;
        syncTelemetry();
      }
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  // Hover pause on carousel
  if (container) {
    container.addEventListener('mouseenter', () => { isHovered = true; });
    container.addEventListener('mouseleave', () => { isHovered = false; });
  }

  // Stepper Pill Clicks
  stepPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const step = parseInt(pill.getAttribute('data-step') || '0', 10);
      glideToNode(step);
    });
  });

  // Clicking a card focuses that milestone
  nodes.forEach((node, idx) => {
    node.addEventListener('click', () => {
      if (!hasDraggedSignificantly) {
        glideToNode(idx);
      }
    });
  });

  // Mouse Wheel -> Smooth Horizontal Target Glide
  wrapper.addEventListener('wheel', (e) => {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0) return;

    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    if (Math.abs(delta) > 0) {
      // Allow vertical page scroll only if already at extreme boundary and scrolling further out
      if ((currentScroll <= 1 && delta < 0) || (currentScroll >= maxScroll - 1 && delta > 0)) {
        return;
      }
      e.preventDefault();
      explicitStepIndex = null;
      if (!isInterpolating) targetScroll = currentScroll;
      targetScroll = clamp(targetScroll + delta * 1.35, 0, maxScroll);
      isInterpolating = true;
      pauseAutoRoll(3200);
    }
  }, { passive: false });

  // Inertial Mouse Drag-to-Scroll
  let dragStartX = 0;
  let dragStartScroll = 0;
  let lastDragX = 0;
  let lastDragTime = 0;
  let velocityX = 0;
  let hasDraggedSignificantly = false;

  wrapper.addEventListener('mousedown', (e) => {
    if (getMaxScroll() <= 0) return;
    if (e.target.closest('button') || e.target.closest('a')) return;

    isDragging = true;
    isInterpolating = false;
    explicitStepIndex = null;
    hasDraggedSignificantly = false;
    wrapper.classList.add('dragging');

    dragStartX = e.clientX;
    lastDragX = e.clientX;
    lastDragTime = performance.now();
    dragStartScroll = currentScroll;
    velocityX = 0;
    pauseAutoRoll(4000);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const now = performance.now();
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 6) hasDraggedSignificantly = true;

    const dtMs = Math.max(1, now - lastDragTime);
    const instantVel = ((lastDragX - e.clientX) / dtMs) * 1000;
    velocityX = velocityX * 0.6 + instantVel * 0.4;

    lastDragX = e.clientX;
    lastDragTime = now;

    const maxScroll = getMaxScroll();
    currentScroll = clamp(dragStartScroll - dx * 1.15, 0, maxScroll);
    targetScroll = currentScroll;
    wrapper.scrollLeft = currentScroll;
    syncTelemetry();
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove('dragging');

    // Apply momentum flick projection
    const maxScroll = getMaxScroll();
    if (Math.abs(velocityX) > 60) {
      targetScroll = clamp(currentScroll + velocityX * 0.28, 0, maxScroll);
      isInterpolating = true;
    }
    pauseAutoRoll(3200);
  };

  window.addEventListener('mouseup', endDrag);

  // Interactive Progress Scrubber Bar (Click & Drag)
  function scrubToClientX(clientX) {
    if (!scrubber) return;
    const rect = scrubber.getBoundingClientRect();
    if (rect.width <= 0) return;
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    const maxScroll = getMaxScroll();
    explicitStepIndex = null;
    targetScroll = ratio * maxScroll;
    currentScroll = targetScroll;
    isInterpolating = false;
    wrapper.scrollLeft = currentScroll;
    syncTelemetry();
    pauseAutoRoll(3500);
  }

  if (scrubber) {
    scrubber.addEventListener('mousedown', (e) => {
      isScrubbing = true;
      scrubToClientX(e.clientX);
    });
    window.addEventListener('mousemove', (e) => {
      if (!isScrubbing) return;
      e.preventDefault();
      scrubToClientX(e.clientX);
    });
    window.addEventListener('mouseup', () => {
      if (isScrubbing) {
        isScrubbing = false;
        pauseAutoRoll(3000);
      }
    });
  }

  // Prev / Next Step Buttons
  const stepByCard = (dir) => {
    const maxScroll = getMaxScroll();
    const cardStep = 344; // 320px card + 24px gap
    explicitStepIndex = null;
    if (!isInterpolating) targetScroll = currentScroll;
    targetScroll = clamp(targetScroll + dir * cardStep, 0, maxScroll);
    isInterpolating = true;
    pauseAutoRoll(3500);
  };

  if (btnPrev) btnPrev.addEventListener('click', () => stepByCard(-1));
  if (btnNext) btnNext.addEventListener('click', () => stepByCard(1));
  if (floatPrev) floatPrev.addEventListener('click', () => stepByCard(-1));
  if (floatNext) floatNext.addEventListener('click', () => stepByCard(1));

  // Auto-Roll Toggle Button
  if (autoRollToggle) {
    autoRollToggle.addEventListener('click', () => {
      isAutoRolling = !isAutoRolling;
      if (isAutoRolling) {
        autoRollToggle.classList.add('active');
        if (autoRollIcon) autoRollIcon.textContent = '⏸';
        pauseUntil = 0;
      } else {
        autoRollToggle.classList.remove('active');
        if (autoRollIcon) autoRollIcon.textContent = '▶';
      }
    });
  }

  // Sync on native touch scroll or window resize
  wrapper.addEventListener('scroll', () => {
    if (!isDragging && !isScrubbing && !isInterpolating && (!isAutoRolling || isHovered)) {
      currentScroll = wrapper.scrollLeft;
      targetScroll = currentScroll;
      syncTelemetry();
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    const maxScroll = getMaxScroll();
    currentScroll = clamp(currentScroll, 0, maxScroll);
    targetScroll = clamp(targetScroll, 0, maxScroll);
    syncTelemetry();
  }, { passive: true });

  setTimeout(syncTelemetry, 150);
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

  // Initialize Career History Rolling Carousel
  initTimelineRolling();

  // Initialize track hash routing
  handleTrackHash();
  window.addEventListener('hashchange', handleTrackHash);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
