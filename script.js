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
    track_all: "Todos os Projetos",
    track_cloud: "Track A: Cloud, NetDevOps &amp; SRE",
    track_backend: "Track B: Software Engineering &amp; Backend",
    btn_view_github: "Ver no GitHub",

    p1_grade: "Classificação: 19 / 20 · Parceria: ARTE, I.P. · Out 2025 – Jun 2026",
    p1_title: "Automação NetDevOps em Ciclo Fechado e Resiliência de Rede (PoC)",
    p1_lead: "<strong>Projeto de Fim de Curso (Parceria: ARTE, I.P.):</strong> Tecnologias: n8n, Python, Fortinet, NetBox, MongoDB, Docker. Arquitetura orientada a eventos para elevar a resiliência e a disponibilidade de redes híbridas críticas (Overlay VPN IPsec sobre Underlay MPLS).",
    p1_bullet1: "<strong>Triagem Diferencial (Underlay vs. Overlay):</strong> Orquestração orientada a eventos no n8n (via Webhooks PRTG) para isolar falhas entre MPLS e VPN IPsec IKEv2 em <strong>&lt;10s (redução &gt;95% do MTTD)</strong>, com sondas preventivas ICMP (<em>Pre-Check</em>) para despiste elétrico local.",
    p1_bullet2: "<strong>Autorrecuperação Híbrida e CMDB:</strong> Mitigação autónoma de <em>configuration drift</em> (Gateway, Phase 2 CIDR, Firewall Policies e SAs) via REST API do FortiOS com Token/Trusted Hosts e contingência SSH (Netmiko), convergindo em <strong>4–7s (ciclo forense de 40–70s vs. 30 min)</strong>.",
    p1_bullet3: "<strong>SSoT, Auditoria e Observabilidade:</strong> Reconciliação dinâmica de IPAM com o NetBox (SSoT), persistência forense de syslogs em MongoDB (Docker) e dashboards SRE/MTTR em Metabase ao longo de 24 ensaios de <em>Chaos Engineering</em> (conformidade ISO 27001).",
    p1_pipeline: "PRTG (Webhooks) ➔ n8n Orchestrator ➔ NetBox (SSoT/IPAM) ➔ FortiOS REST API / Netmiko SSH ➔ MongoDB, Metabase & Telegram",
    btn_read_poc_brief: "Ler Análise da Topologia ➔",
    bp_tab_logical: "Blueprint Lógico",
    bp_tab_arte: "Topologia Real ARTE",
    bp_tab_macro: "Macro NetDevOps",
    bp_tab_multicloud: "Fluxo Multi-Cloud",
    bp_tab_dashboard: "Painel Real Autarquia",

    p2_grade: "Classificação: 20 / 20 · Projeto de Engenharia Cloud · Fev 2026 – Mai 2026",
    p2_title: "Plataforma Multi-Cloud Segura e Resiliente (CityGuards)",
    p2_lead: "<strong>Projeto de Engenharia Cloud:</strong> Tecnologias: Azure, GCP Firestore, Docker, Bicep, Node.js, OIDC. Plataforma híbrida de alta resiliência e conformidade regulamentar combinando serviços Azure PaaS e Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Arquitetura Híbrida e Contingência:</strong> API em Node.js/Express interoperável entre Azure (App Service, Blob Storage, Functions) e GCP Firestore, com dupla resiliência (<em>graceful degradation</em> de Azure AI Vision para NLP local e <em>fallback in-process</em> de PDFs perante pausa FinOps no ACI).",
    p2_bullet2: "<strong>Robustez Transacional e Persistência:</strong> Migração desacoplada de Azure Cosmos DB para GCP Firestore, controlo de concorrência via transações atómicas ACID (<code>db.runTransaction</code>), isolamento <em>multi-tenant</em> por município e sanitização de payloads contra <em>data leaks</em>.",
    p2_bullet3: "<strong>SecDevOps, IaC, FinOps e Soberania:</strong> Aprovisionamento declarativo via Bicep com injeção dinâmica de <em>Connection Strings</em>, pipeline CI/CD no GitHub Actions com autenticação federada via OIDC (<code>azure/login@v2</code>), otimização FinOps e estudo de soberania RGPD vs. US CLOUD Act.",
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

    p4_grade: "Engenharia Web &amp; Backend · Arquitetura MVC Enterprise",
    p4_title: "Plataforma Empresarial de Gestão e Reserva de Transportes (FelixBus)",
    p4_lead: "<strong>Plataforma Web de Mobilidade e Faturação:</strong> Tecnologias: Java (JSP, Servlets), MySQL, Apache Tomcat, HTML5/CSS3/JavaScript. Sistema completo de gestão de rotas de autocarro, emissão de bilhetes, controlo de lotação e perfis de acesso.",
    p4_bullet1: "<strong>Padrão de Desenho MVC (Model-View-Controller):</strong> Desacoplamento estruturado entre a camada de apresentação (JSP/JSTL), controladores de lógica de negócio em Servlets Java e camada de persistência com padrões DAO (Data Access Object) e DTO.",
    p4_bullet2: "<strong>Modelação Relacional &amp; Integridade Transacional:</strong> Esquema relacional MySQL em 3ª Forma Normal (3NF) com chaves estrangeiras, restrições de integridade, índices de pesquisa e transações ACID para garantir consistência na reserva concorrente de lugares.",
    p4_bullet3: "<strong>Segurança e Controlo de Acessos RBAC:</strong> Gestão de sessões HTTP autenticadas com segregação de permissões em 3 níveis (Administrador, Operador e Passageiro), sanitização contra injeção SQL via <code>PreparedStatement</code> e validação defensiva de formulários.",
    p4_pipeline: "JSP &amp; Frontend ➔ Java Servlets (Controllers) ➔ Business Logic (Services) ➔ DAO / MySQL RDBMS (ACID)",
    bp_tab_webportal: "Interface da Plataforma",
    bp_felixbus_note: "▲ Portal de Reservas e Bilhética FelixBus (Interface MVC Web · Clique p/ repositório)",
    p4_metric1_val: "MVC",
    p4_metric1_lbl: "Camadas Desacopladas",
    p4_metric2_val: "RBAC",
    p4_metric2_lbl: "3 Níveis de Acesso",
    p4_metric3_val: "ACID",
    p4_metric3_lbl: "Reservas Concorrentes",
    btn_felixbus_docs: "Ver Repositório ➔",

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
    track_all: "All Projects",
    track_cloud: "Track A: Cloud, NetDevOps &amp; SRE",
    track_backend: "Track B: Software Engineering &amp; Backend",
    btn_view_github: "View on GitHub",

    p1_grade: "Grade: 19 / 20 · Industry Partnership: ARTE, I.P. · Oct 2025 – Jun 2026",
    p1_title: "NetDevOps Closed-Loop Automation & Network Resilience (PoC)",
    p1_lead: "<strong>Capstone Engineering Project (Partnership: ARTE, I.P.):</strong> Technologies: n8n, Python, Fortinet, NetBox, MongoDB, Docker. Event-driven architecture engineered to enhance resilience and availability in critical hybrid networks (IPsec VPN Overlay over MPLS Underlay).",
    p1_bullet1: "<strong>Differential Triage (Underlay vs. Overlay):</strong> Event-driven orchestration in n8n (via PRTG Webhooks) isolating faults between MPLS and IPsec IKEv2 in <strong>&lt;10s (&gt;95% MTTD reduction)</strong>, using preventive ICMP probing (<em>Pre-Check</em>) for local electrical troubleshooting.",
    p1_bullet2: "<strong>Hybrid Self-Healing & CMDB:</strong> Autonomous configuration drift mitigation (Gateway, Phase 2 CIDR, Firewall Policies, and SAs) via FortiOS REST API with Token/Trusted Hosts and SSH contingency (Netmiko), converging in <strong>4–7s (40–70s forensic cycle vs. 30 min)</strong>.",
    p1_bullet3: "<strong>SSoT, Auditing & Observability:</strong> Dynamic IPAM reconciliation with NetBox (SSoT), forensic syslog persistence in MongoDB (Docker), and SRE/MTTR dashboards in Metabase across 24 <em>Chaos Engineering</em> trials (ISO 27001 compliance).",
    p1_pipeline: "PRTG (Webhooks) ➔ n8n Orchestrator ➔ NetBox (SSoT/IPAM) ➔ FortiOS REST API / Netmiko SSH ➔ MongoDB, Metabase & Telegram",
    btn_read_poc_brief: "Read Topology Brief ➔",
    bp_tab_logical: "Logical Blueprint",
    bp_tab_arte: "Real ARTE Topology",
    bp_tab_macro: "Macro NetDevOps",
    bp_tab_multicloud: "Multi-Cloud Flow",
    bp_tab_dashboard: "Real City Dashboard",

    p2_grade: "Grade: 20 / 20 · Cloud Engineering Project · Feb 2026 – May 2026",
    p2_title: "Secure & Resilient Multi-Cloud Platform (CityGuards)",
    p2_lead: "<strong>Cloud Engineering Project:</strong> Technologies: Azure, GCP Firestore, Docker, Bicep, Node.js, OIDC. High-resilience and regulatory-compliant hybrid platform combining Microsoft Azure PaaS and Google Cloud Platform (GCP).",
    p2_bullet1: "<strong>Hybrid Architecture & Contingency:</strong> Interoperable Node.js/Express API across Azure (App Service, Blob Storage, Functions) and GCP Firestore with dual resilience (graceful degradation of Azure AI Vision to local NLP and in-process PDF fallback during FinOps pauses on ACI).",
    p2_bullet2: "<strong>Transactional Integrity & Persistence:</strong> Decoupled migration from Azure Cosmos DB to GCP Firestore, concurrency control via ACID atomic transactions (<code>db.runTransaction</code>), multi-tenant isolation per municipality, and payload sanitization against data leaks.",
    p2_bullet3: "<strong>SecDevOps, IaC, FinOps & Sovereignty:</strong> Declarative provisioning via Bicep with dynamic Connection String injection, GitHub Actions CI/CD with federated OIDC authentication (<code>azure/login@v2</code>), FinOps cost optimization, and GDPR vs. US CLOUD Act sovereignty analysis.",
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

    p4_grade: "Web Engineering &amp; Backend · Enterprise MVC Architecture",
    p4_title: "Enterprise Travel &amp; Ticketing Management Platform (FelixBus)",
    p4_lead: "<strong>Mobility &amp; Ticketing Web Platform:</strong> Technologies: Java (JSP, Servlets), MySQL, Apache Tomcat, HTML5/CSS3/JavaScript. Comprehensive management system for bus routes, ticket issuance, occupancy tracking, and multi-tier access control.",
    p4_bullet1: "<strong>MVC Design Pattern (Model-View-Controller):</strong> Structured decoupling between the presentation layer (JSP/JSTL), business controllers in Java Servlets, and persistence layers using DAO (Data Access Object) and DTO patterns.",
    p4_bullet2: "<strong>Relational Modeling &amp; Transactional Integrity:</strong> 3rd Normal Form (3NF) MySQL schema with foreign key constraints, search indexes, and ACID transactions to ensure database consistency during concurrent seat booking.",
    p4_bullet3: "<strong>RBAC Security &amp; Access Control:</strong> Authenticated HTTP session management with 3-tier role segregation (Administrator, Operator, Passenger), SQL injection protection via <code>PreparedStatement</code>, and defensive form validation.",
    p4_pipeline: "JSP &amp; Frontend ➔ Java Servlets (Controllers) ➔ Business Logic (Services) ➔ DAO / MySQL RDBMS (ACID)",
    bp_tab_webportal: "Platform Interface",
    bp_felixbus_note: "▲ FelixBus Booking &amp; Ticketing Portal (MVC Web Interface · Click to view repo)",
    p4_metric1_val: "MVC",
    p4_metric1_lbl: "Decoupled Layers",
    p4_metric2_val: "RBAC",
    p4_metric2_lbl: "3 Access Levels",
    p4_metric3_val: "ACID",
    p4_metric3_lbl: "Concurrent Bookings",
    btn_felixbus_docs: "View Repository ➔",

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
      meta: "NetDevOps · Fortinet FortiGate · NetBox SSoT/IPAM · Chaos Engineering · ISO 27001 · Classificação: 19 / 20",
      content: `
        <div class="writeup-diagram-box">
          <img src="figura4_topologia_arte.png" alt="Topologia ARTE I.P." class="writeup-img">
          <p class="writeup-img-caption">Figura: Topologia da infraestrutura híbrida da ARTE, I.P. (Sede HUB FortiGate vs. Loja do Cidadão SPOKE FortiGate sob Underlay MPLS e Overlay IPsec).</p>
        </div>

        <h4>1. O Problema: Degradação Silenciosa e Configuration Drift</h4>
        <p>Em infraestruturas críticas com túneis VPN IPsec IKEv2 estabelecidos sobre redes de transporte sobredimensionadas (Underlay MPLS), desvios manuais de configuração (<em>configuration drift</em>) em gateways remotos, seletores CIDR da Phase 2, rotas estáticas ou regras de filtragem de firewall geram quebras de conectividade silenciosas. No modelo operacional tradicional, a deteção depende da abertura reativa de tickets por utilizadores finais, resultando num <strong>MTTR médio de 15 a 30 minutos</strong> e dependência humana de engenheiros de nível sénior.</p>

        <h4>2. Arquitetura Modular em Ciclo Fechado (Closed-Loop)</h4>
        <p>Desenvolvida em parceria com a <strong>ARTE — Agência para a Reforma Tecnológica do Estado</strong>, a arquitetura implementa o paradigma NetDevOps através de 5 módulos desacoplados:</p>
        <ul>
          <li><strong>Detetor de Falhas e Telemetria Diferencial (PRTG):</strong> Sondagem contínua das interfaces com validação preventiva ICMP (<em>Pre-Check</em>) para o IP do router de underlay na filial. Se a sonda ICMP falhar fisicamente, o sistema diagnostica corte de energia/enlace físico e inibe falsos alertas de software, reduzindo o <strong>MTTD para &lt; 10s (&gt;95% de redução)</strong>.</li>
          <li><strong>Barramento de Eventos e Orquestração (n8n):</strong> Acionamento reativo por Webhook HTTP em tempo real, sem necessidade de polling intensivo, garantindo execução idempotente do fluxo de remediação.</li>
          <li><strong>Single Source of Truth / IPAM (NetBox):</strong> Consulta da <em>golden configuration</em> declarativa do dispositivo via REST API, validando discrepâncias nos blocos de endereçamento, sub-redes e interfaces.</li>
          <li><strong>Motor Híbrido de Remediação (REST API & Netmiko SSH):</strong>
            <ul>
              <li><strong>Fase 1 (Ambiente de Testes / Sandbox):</strong> Perante restrições de escrita na API em licenças de avaliação dos FortiGates virtuais, concebi scripts determinísticos em Python utilizando a biblioteca <code>Netmiko</code> sobre SSH (<code>remediate_config.py</code>, <code>remediate_phase2.py</code>, <code>remediate_tunnel.py</code>) com controlo de exceções e idempotência.</li>
              <li><strong>Fase 2 (Ambiente Comercial / Produção):</strong> Ativação de licenças comerciais com acesso pleno à <code>FortiOS REST API</code> via tokens de serviço e <em>Trusted Hosts</em> (eliminação de credenciais estáticas). Remediação cirúrgica direta em endpoints CMDB (<code>/api/v2/cmdb/vpn.ipsec/phase2-interface</code> e <code>/api/v2/cmdb/router/static</code>), cobrindo Gateway incorreto, sub-redes da Phase 2, políticas de firewall e ressincronização das Security Associations (SAs).</li>
            </ul>
          </li>
          <li><strong>Auditoria Forense e Observabilidade SRE:</strong> Registo imutável de todos os eventos e tempos de transição numa base de dados <strong>MongoDB (Docker)</strong>, notificações críticas instantâneas no <strong>Telegram</strong> e dashboards analíticos de MTTR e causa-raiz em <strong>Metabase</strong>, cumprindo as diretrizes de rastreabilidade da norma <strong>ISO 27001</strong>.</li>
        </ul>

        <div class="writeup-diagram-box">
          <img src="figura3_netdevops_arquitetura.png" alt="Arquitetura NetDevOps Macro" class="writeup-img">
          <p class="writeup-img-caption">Figura: Fluxo sequencial integrado de deteção (PRTG), orquestração (n8n), validação (NetBox SSoT), remediação (FortiOS) e persistência analítica (MongoDB/Metabase).</p>
        </div>

        <h4>3. Validação Experimental com Chaos Engineering</h4>
        <p>A resiliência da solução foi submetida a <strong>24 ensaios empíricos</strong> de injeção intencional de falhas em ambiente virtualizado (VMware Workstation Pro): alteração forçada de gateways, corrupção de propostas de Phase 2, bloqueio de políticas de firewall e simulação de corte de alimentação elétrica. Resultados obtidos:</p>
        <ul>
          <li><strong>Convergência do Motor de Remediação:</strong> A retificação ativa da anomalia no FortiOS concluiu-se consistentemente entre <strong>4 e 7 segundos</strong>.</li>
          <li><strong>Ciclo Forense Total:</strong> Desde o disparo da sonda, passando pela orquestração, remediação, gravação no MongoDB e notificação Telegram, o tempo total situou-se entre <strong>40 e 70 segundos</strong> (face aos 30 minutos do processo manual).</li>
          <li><strong>Taxa de Sucesso:</strong> 100% de autorrecuperação sem intervenção humana nos cenários elegíveis e despiste preciso imediato no cenário de corte de energia via Pre-Check ICMP.</li>
          <li><strong>Reconhecimento Académico:</strong> Projeto defendido e aprovado com a nota de <strong>19 / 20 valores</strong>.</li>
        </ul>
      `
    },
    en: {
      title: "Closed-Loop Remediation of Configuration Drift in FortiOS via REST API & NetBox",
      meta: "NetDevOps · Fortinet FortiGate · NetBox SSoT/IPAM · Chaos Engineering · ISO 27001 · Grade: 19 / 20",
      content: `
        <div class="writeup-diagram-box">
          <img src="figura4_topologia_arte.png" alt="ARTE I.P. Hybrid Topology" class="writeup-img">
          <p class="writeup-img-caption">Figure: Hybrid infrastructure topology for ARTE, I.P. (Hub FortiGate vs. Spoke FortiGate connected via MPLS Underlay and IPsec Overlay).</p>
        </div>

        <h4>1. The Problem: Silent Degradation and Configuration Drift</h4>
        <p>In critical enterprise backbones relying on IPsec IKEv2 tunnels over leased Underlay MPLS circuits, unintended configuration drift (gateway misconfigurations, mismatched Phase 2 CIDR selectors, altered firewall filtering policies) creates silent outages. Traditional network operations depend on end-user incident tickets, causing average <strong>MTTR to skyrocket to 15–30 minutes</strong> and demanding manual senior engineer intervention.</p>

        <h4>2. Event-Driven Closed-Loop Architecture</h4>
        <p>Engineered in partnership with <strong>ARTE (State Agency for Technological Reform)</strong>, this architecture implements the NetDevOps paradigm through 5 decoupled building blocks:</p>
        <ul>
          <li><strong>Fault Detection & Differential Telemetry (PRTG):</strong> Continuous monitoring with preventive ICMP probing (<em>Pre-Check</em>) targeting the remote branch underlay router IP. If the physical link or power fails, software remediation is inhibited, suppressing false positives and dropping <strong>MTTD to &lt; 10s (&gt;95% reduction)</strong>.</li>
          <li><strong>Event Bus & Orchestration (n8n):</strong> Reactive event handling via real-time HTTP Webhooks, eliminating expensive polling and ensuring idempotent workflow execution.</li>
          <li><strong>Single Source of Truth / IPAM (NetBox):</strong> Queries the declarative golden configuration via REST API, validating addressing anomalies and interface bindings.</li>
          <li><strong>Hybrid Remediation Engine (REST API & Netmiko SSH):</strong>
            <ul>
              <li><strong>Phase 1 (Sandbox Testing):</strong> Faced with trial license REST API write restrictions on virtual FortiGates, I developed deterministic Python scripts with the <code>Netmiko</code> library over SSH (<code>remediate_config.py</code>, <code>remediate_phase2.py</code>, <code>remediate_tunnel.py</code>) incorporating strict exception handling and idempotency.</li>
              <li><strong>Phase 2 (Production / Commercial License):</strong> Leveraging commercial licensing enabled direct access to the <code>FortiOS REST API</code> via API Tokens and <em>Trusted Hosts</em> (Zero Trust management). Surgical configuration patches target CMDB endpoints (<code>/api/v2/cmdb/vpn.ipsec/phase2-interface</code> and <code>/api/v2/cmdb/router/static</code>), correcting gateways, Phase 2 subnets, firewall filtering, and forcing SA renegotiation.</li>
            </ul>
          </li>
          <li><strong>Forensic Auditing & SRE Observability:</strong> Immutable audit logs persisted in <strong>MongoDB (Docker)</strong>, instant high-priority alerts dispatched via <strong>Telegram Bot</strong>, and operational SRE/MTTR telemetry visualized in real-time on <strong>Metabase</strong>, strictly aligned with <strong>ISO 27001</strong> traceability standards.</li>
        </ul>

        <div class="writeup-diagram-box">
          <img src="figura3_netdevops_arquitetura.png" alt="NetDevOps Macro Architecture" class="writeup-img">
          <p class="writeup-img-caption">Figure: Macro architecture and sequential control flow between PRTG, n8n, NetBox, FortiOS REST API / Netmiko SSH, and MongoDB/Metabase auditing.</p>
        </div>

        <h4>3. Empirical Validation via Chaos Engineering</h4>
        <p>The system was evaluated across <strong>24 rigorous fault injection trials</strong> in VMware Workstation Pro (simulating gateway tampering, Phase 2 proposal corruption, firewall policy blocks, and remote site electrical failures):</p>
        <ul>
          <li><strong>Remediation Engine Convergence:</strong> Active drift correction on FortiOS converged deterministically in <strong>4 to 7 seconds</strong>.</li>
          <li><strong>Total Closed-Loop Forensic Cycle:</strong> From initial sensor alarm through remediation, MongoDB audit persistence, and Telegram dispatch, elapsed time averaged <strong>40 to 70 seconds</strong> (vs. 30 minutes manual).</li>
          <li><strong>Success Rate:</strong> 100% autonomous resolution without human intervention in eligible failure scenarios, and instantaneous physical triage on power outages via ICMP Pre-Check.</li>
          <li><strong>Academic Distinction:</strong> Successfully defended with a grade of <strong>19 / 20</strong>.</li>
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

  // Initialize track hash routing
  handleTrackHash();
  window.addEventListener('hashchange', handleTrackHash);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
