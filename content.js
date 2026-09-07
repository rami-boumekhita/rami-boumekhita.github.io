/*
  RAMI BOUMEKHITA — PORTFOLIO CONTENT
  ===================================
  This is the main file to edit when you want to update the portfolio.
  Most personal information, experience, projects, certificates and skills live here.

  TIP: Keep both EN and FR versions when you add or change text.
*/

const PORTFOLIO = {
  contact: {
    email: "rami.boumekhita@gmail.com",
    phoneDisplay: "+33 6 02 56 39 27",
    phoneRaw: "+33602563927",
    whatsappRaw: "33602563927",
    location: "Lyon, France",
    linkedin: "https://www.linkedin.com/in/rami-boumekhita",
    github: "https://github.com/rami-boumekhita",
    cv: "assets/docs/Rami_Boumekhita_CV.pdf"
  },

  availability: {
    openToWork: true,
    relocation: true,
    drivingLicence: "Permis B",
    negotiable: true
  },

  i18n: {
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.certificates": "Certificates",
      "nav.contact": "Contact",

      "hero.badge": "Open to new opportunities",
      "hero.eyebrow": "Automation • PLC • SCADA • WCS/WMS • Commissioning",
      "hero.hello": "I design, commission, troubleshoot and improve",
      "hero.highlight": "industrial automation systems.",
      "hero.lead": "Automation & Control Engineer with 3+ years of experience including internships, working across Siemens PLC programming, control systems, SCADA, WCS/WMS, industrial communications, troubleshooting and field commissioning.",
      "hero.ctaProjects": "View engineering work",
      "hero.ctaCv": "Download CV",
      "hero.relocation": "Open to relocation",
      "hero.licence": "Driving licence — Permis B",
      "hero.availability": "Availability negotiable",
      "hero.location": "Based in Lyon, France",

      "about.kicker": "PROFILE",
      "about.title": "PLC, control, SCADA and intralogistics — from field devices to supervision systems.",
      "about.body": "I am an Automation & Control Engineer with hands-on experience across PLC programming, industrial control, SCADA supervision, WCS/WMS integration, commissioning and troubleshooting. I work with Siemens S7 systems and TIA Portal, Structured Text, industrial networks, drives, sensors and machine-level diagnostics, while also understanding the supervision and data layers above the PLC. My background spans automated intralogistics, battery manufacturing, automotive, robotics and control engineering.",

      "experience.kicker": "EXPERIENCE",
      "experience.title": "Industrial experience",
      "experience.subtitle": "Hands-on commissioning, supervision, automation, robotics and control engineering in real industrial environments.",

      "projects.kicker": "SELECTED WORK",
      "projects.title": "Projects & engineering case studies",
      "projects.subtitle": "A practical view of the systems and engineering problems I have worked on. Client-sensitive implementation details are intentionally abstracted.",
      "projects.work": "What I worked on",
      "projects.tools": "Core tools",

      "skills.kicker": "TECHNICAL TOOLBOX",
      "skills.title": "Automation stack",
      "skills.subtitle": "Technologies I use across PLC programming, industrial supervision, networks, commissioning, data and software workflows.",

      "education.kicker": "EDUCATION & ACHIEVEMENTS",
      "education.title": "Engineering foundation",
      "education.subtitle": "A multidisciplinary path combining automation & control, mobile automatic systems and management.",
      "achievement.rank": "National Grandes Écoles entrance exam",
      "achievement.rankText": "Ranked 55th out of 1,961 candidates",
      "achievement.rankMeta": "National competitive exam • 2020 results",
      "achievement.rankButton": "View ranking certificate",
      "achievement.toeic": "TOEIC English score",
      "achievement.toeicText": "875 / 990",
      "achievement.toeicMeta": "Listening 465 • Reading 410 • CEFR B2 score report",
      "achievement.toeicButton": "View TOEIC report",

      "certificates.kicker": "CONTINUOUS LEARNING",
      "certificates.title": "Certificates & courses",
      "certificates.subtitle": "Selected training in industrial automation, Industry 4.0, data, AI, programming and engineering tools.",
      "certificates.view": "View certificate",
      "certificates.verify": "Verify credential",

      "community.kicker": "BEYOND ENGINEERING",
      "community.title": "Leadership & extra-professional experience",
      "community.subtitle": "Technical, organizational and cross-functional experience developed through student and professional activities.",

      "recommendations.kicker": "PROFESSIONAL RECOMMENDATIONS",
      "recommendations.title": "Recommendations from people I have worked with",
      "recommendations.body": "Professional recommendations from colleagues and managers are available on my LinkedIn profile.",
      "recommendations.cta": "View recommendations on LinkedIn",

      "languages.kicker": "LANGUAGES",

      "contact.kicker": "LET'S CONNECT",
      "contact.title": "Looking for an automation engineer who can go from code to field?",
      "contact.body": "I am open to opportunities as an Automation Engineer, PLC Engineer, Controls Engineer, SCADA Engineer, Commissioning Engineer or Industrial Automation Engineer. Relocation is possible and availability is negotiable.",
      "contact.email": "Email",
      "contact.call": "Call",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.formTitle": "Send me a message",
      "contact.name": "Your name",
      "contact.emailField": "Your email",
      "contact.company": "Company / organization",
      "contact.message": "Message",
      "contact.send": "Send message",
      "contact.formNote": "Your message will be sent to my professional email.",

      "footer.text": "Automation & Control Engineer • Lyon, France",
      "analytics.message": "I use analytics to understand portfolio visits and improve the site. Advertising features are disabled.",
      "analytics.decline": "Decline",
      "analytics.accept": "Allow analytics"
    },

    fr: {
      "nav.about": "Profil",
      "nav.experience": "Expérience",
      "nav.projects": "Projets",
      "nav.skills": "Compétences",
      "nav.education": "Formation",
      "nav.certificates": "Certificats",
      "nav.contact": "Contact",

      "hero.badge": "Ouvert à de nouvelles opportunités",
      "hero.eyebrow": "Automatisme • PLC • SCADA • WCS/WMS • Commissioning",
      "hero.hello": "Je conçois, mets en service, diagnostique et améliore",
      "hero.highlight": "des systèmes d'automatisation industrielle.",
      "hero.lead": "Ingénieur en automatisme et contrôle-commande avec plus de 3 ans d’expérience, stages inclus, intervenant en programmation PLC Siemens, contrôle-commande, SCADA, WCS/WMS, communications industrielles, diagnostic et mise en service terrain.",
      "hero.ctaProjects": "Voir mes réalisations",
      "hero.ctaCv": "Télécharger le CV",
      "hero.relocation": "Ouvert à la mobilité / relocation",
      "hero.licence": "Permis B",
      "hero.availability": "Disponibilité négociable",
      "hero.location": "Basé à Lyon, France",

      "about.kicker": "PROFIL",
      "about.title": "PLC, contrôle-commande, SCADA et intralogistique — du terrain jusqu’aux systèmes de supervision.",
      "about.body": "Je suis ingénieur en automatisme et contrôle-commande avec une expérience pratique en programmation PLC, contrôle industriel, supervision SCADA, intégration WCS/WMS, mise en service et diagnostic. Je travaille notamment sur les systèmes Siemens S7 sous TIA Portal, le Structured Text, les réseaux industriels, les variateurs, les capteurs et le diagnostic machine, tout en maîtrisant les couches de supervision et de données au-dessus du PLC. Mon parcours couvre l’intralogistique automatisée, l’industrie des batteries, l’automobile, la robotique et le contrôle-commande.",

      "experience.kicker": "EXPÉRIENCE",
      "experience.title": "Expérience industrielle",
      "experience.subtitle": "Commissioning, supervision, automatisme, robotique et contrôle-commande dans des environnements industriels réels.",

      "projects.kicker": "RÉALISATIONS",
      "projects.title": "Projets & études de cas techniques",
      "projects.subtitle": "Une vue pratique des systèmes et problématiques d’ingénierie sur lesquels j’ai travaillé. Les détails sensibles client sont volontairement généralisés.",
      "projects.work": "Travaux réalisés",
      "projects.tools": "Outils principaux",

      "skills.kicker": "BOÎTE À OUTILS TECHNIQUE",
      "skills.title": "Stack automatisme",
      "skills.subtitle": "Technologies utilisées en programmation PLC, supervision industrielle, réseaux, commissioning, data et développement logiciel.",

      "education.kicker": "FORMATION & RÉUSSITES",
      "education.title": "Fondations d’ingénieur",
      "education.subtitle": "Un parcours pluridisciplinaire combinant automatique, systèmes automatiques mobiles et management.",
      "achievement.rank": "Concours national d'accès aux Grandes Écoles",
      "achievement.rankText": "Classé 55e sur 1 961 candidats",
      "achievement.rankMeta": "Concours national • résultats 2020",
      "achievement.rankButton": "Voir l'attestation de classement",
      "achievement.toeic": "Score TOEIC anglais",
      "achievement.toeicText": "875 / 990",
      "achievement.toeicMeta": "Listening 465 • Reading 410 • rapport CECRL B2",
      "achievement.toeicButton": "Voir le rapport TOEIC",

      "certificates.kicker": "FORMATION CONTINUE",
      "certificates.title": "Certificats & formations",
      "certificates.subtitle": "Sélection de formations en automatisme industriel, Industrie 4.0, data, IA, programmation et outils d’ingénierie.",
      "certificates.view": "Voir le certificat",
      "certificates.verify": "Vérifier le certificat",

      "community.kicker": "AU-DELÀ DE L'INGÉNIERIE",
      "community.title": "Leadership & expériences extra-professionnelles",
      "community.subtitle": "Expériences techniques, organisationnelles et transverses développées à travers des activités associatives et professionnelles.",

      "recommendations.kicker": "RECOMMANDATIONS PROFESSIONNELLES",
      "recommendations.title": "Recommandations de personnes avec qui j'ai travaillé",
      "recommendations.body": "Des recommandations professionnelles de collègues et managers sont disponibles directement sur mon profil LinkedIn.",
      "recommendations.cta": "Voir les recommandations sur LinkedIn",

      "languages.kicker": "LANGUES",

      "contact.kicker": "CONTACT",
      "contact.title": "Vous cherchez un automaticien capable d'aller du code au terrain ?",
      "contact.body": "Je suis ouvert aux opportunités d’Automation Engineer, PLC Engineer, Controls Engineer, SCADA Engineer, Commissioning Engineer et Industrial Automation Engineer. Mobilité possible et disponibilité négociable.",
      "contact.email": "Email",
      "contact.call": "Appeler",
      "contact.whatsapp": "WhatsApp",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.formTitle": "Envoyez-moi un message",
      "contact.name": "Votre nom",
      "contact.emailField": "Votre email",
      "contact.company": "Entreprise / organisation",
      "contact.message": "Message",
      "contact.send": "Envoyer le message",
      "contact.formNote": "Votre message sera envoyé à mon adresse email professionnelle.",

      "footer.text": "Ingénieur Automatisme & Contrôle-Commande • Lyon, France",
      "analytics.message": "J’utilise des statistiques de visite pour comprendre l’usage du portfolio et améliorer le site. Les fonctions publicitaires sont désactivées.",
      "analytics.decline": "Refuser",
      "analytics.accept": "Autoriser les statistiques"
    }
  },

  proof: [
    { value: "+3", suffix: " yrs", en: "industrial automation experience", fr: "ans d’expérience en automatisme" },
    { value: "S7", suffix: " / TIA", en: "PLC programming & diagnostics", fr: "programmation & diagnostic PLC" },
    { value: "SCADA", suffix: "", en: "supervision • HMI • industrial systems", fr: "supervision • IHM • systèmes industriels" },
    { value: "WCS", suffix: " / WMS", en: "automated intralogistics", fr: "intralogistique automatisée" }
  ],

  expertise: [
    {
      icon: "PLC",
      en: "PLC programming & control",
      fr: "Programmation PLC & contrôle",
      enText: "Siemens S7 programming and diagnostics, Structured Text modifications, sequence logic, I/O, timers, handshakes and machine-cycle validation.",
      frText: "Programmation et diagnostic Siemens S7, modifications en Structured Text, logique séquentielle, E/S, temporisations, handshakes et validation des cycles machines."
    },
    {
      icon: "HMI",
      en: "SCADA, HMI & supervision",
      fr: "SCADA, IHM & supervision",
      enText: "Industrial supervision, HMI, alarms, traceability, operational monitoring and interfaces with WCS/WMS and higher-level systems.",
      frText: "Supervision industrielle, IHM, alarmes, traçabilité, suivi opérationnel et interfaces avec les systèmes WCS/WMS et les couches supérieures."
    },
    {
      icon: "NET",
      en: "Industrial communication",
      fr: "Communications industrielles",
      enText: "PROFINET, PROFIsafe, OPC UA, MQTT, Modbus, Ethernet/IP and REST interfaces across OT systems.",
      frText: "PROFINET, PROFIsafe, OPC UA, MQTT, Modbus, Ethernet/IP et interfaces REST dans les environnements OT."
    },
    {
      icon: "DRV",
      en: "Field troubleshooting",
      fr: "Diagnostic terrain",
      enText: "Drives, sensors, actuators, machine safety, electrical schematics and communication faults from cabinet to software.",
      frText: "Variateurs, capteurs, actionneurs, sécurité machine, schémas électriques et défauts de communication, de l’armoire au logiciel."
    }
  ],

  experiences: [
    {
      period: { en: "Feb 2026 — Present", fr: "Fév. 2026 — Aujourd’hui" },
      role: { en: "Consultant — Automation Engineer", fr: "Consultant — Ingénieur Automaticien" },
      company: "Harington Technologies / Mecalux France",
      companies: [
        { name: "Harington Technologies", url: "https://harington.fr/en/home-page/" },
        { name: "Mecalux France", url: "https://www.mecalux.fr/" }
      ],
      place: "Lyon, France",
      logos: [
        { src: "assets/logos/harington.png", alt: "Harington Technologies", url: "https://harington.fr/en/home-page/" },
        { src: "assets/logos/mecalux.png", alt: "Mecalux France", url: "https://www.mecalux.fr/" }
      ],
      bullets: {
        en: [
          "Commissioning, functional testing and operational validation of automated intralogistics installations: conveyors, shuttles, in/out stations, reject stations and pallet-handling equipment.",
          "Participation in FAT/SAT, performance and restart testing, with validation of pallet-flow scenarios, routes, machine cycles and load tests.",
          "Siemens S7-1500 diagnostics in TIA Portal: online analysis of machine cycles, transitions, timers, faults, handshakes, sensors and actuators.",
          "Modification and validation of Structured Text logic; WCS/WMS transport-order and tracking tests; investigation of PLC/WCS/field-device exchanges.",
          "PROFINET/PROFIsafe configuration and Lenze VFD diagnostics through TIA Portal and EasyStarter, supported by electrical-schematic analysis and field checks."
        ],
        fr: [
          "Mise en service, tests fonctionnels et validation opérationnelle d’installations intralogistiques automatisées : convoyeurs, navettes, postes d’entrée/sortie, rejet et manutention palettes.",
          "Participation aux FAT/SAT, tests de performance et redémarrages, avec validation des scénarios de flux palettes, routes, cycles machines et essais de charge.",
          "Diagnostic Siemens S7-1500 sous TIA Portal : analyse online des cycles machines, transitions, temporisations, défauts, handshakes, capteurs et actionneurs.",
          "Modification et validation de logique Structured Text ; tests d’ordres de transport et tracking WCS/WMS ; investigation des échanges PLC/WCS/terrain.",
          "Configuration PROFINET/PROFIsafe et diagnostic de variateurs Lenze via TIA Portal et EasyStarter, avec lecture de schémas électriques et contrôles terrain."
        ]
      },
      tags: ["TIA Portal", "S7-1500", "Structured Text", "PROFINET", "PROFIsafe", "WCS/WMS", "Lenze EasyStarter", "FAT/SAT"]
    },
    {
      period: { en: "Jun 2025 — Jan 2026", fr: "Juin 2025 — Jan. 2026" },
      role: { en: "SCADA & Process Supervision Engineer", fr: "Ingénieur SCADA & supervision de procédés" },
      company: "Verkor",
      companies: [{ name: "Verkor", url: "https://verkor.com/en/" }],
      place: "Grenoble, France",
      logos: [{ src: "assets/logos/verkor.jpg", alt: "Verkor", url: "https://verkor.com/en/" }],
      bullets: {
        en: [
          "Operational supervision of automated intralogistics flows including conveyors, RTVs and stacker cranes, with incident diagnosis through equipment states, logic and interlocks.",
          "Definition and configuration of SCADA control strategies: recipes, sequence control, data collection and traceability.",
          "AVEVA MES–SCADA–PLC integration, including process requests/responses and industrial communications through OPC UA, MQTT, Modbus, Ethernet/IP and REST API.",
          "Industrial SQL/data workflows and KPI dashboards with MyWorkbench, Databricks, SQL and Python; technical documentation, user support and training."
        ],
        fr: [
          "Supervision opérationnelle des flux intralogistiques automatisés incluant convoyeurs, RTV et transstockeurs, avec diagnostic via états équipements, logique et interverrouillages.",
          "Définition et configuration de stratégies de contrôle SCADA : recettes, pilotage de séquences, collecte et traçabilité des données.",
          "Intégration AVEVA MES–SCADA–PLC, incluant requêtes/réponses process et communications industrielles via OPC UA, MQTT, Modbus, Ethernet/IP et REST API.",
          "Flux data industriels et KPI avec MyWorkbench, Databricks, SQL et Python ; documentation technique, support et formation utilisateurs."
        ]
      },
      tags: ["SCADA", "AVEVA MES", "OPC UA", "MQTT", "REST API", "SQL", "Databricks", "Python"]
    },
    {
      period: { en: "Apr 2024 — Oct 2024", fr: "Avr. 2024 — Oct. 2024" },
      role: { en: "Industrial Supervision & Automation Engineer — Final Internship", fr: "Ingénieur supervision et automatisation industrielle — Stage de fin d’études" },
      company: "Renault Group",
      companies: [{ name: "Renault Group", url: "https://www.renaultgroup.com/en/" }],
      place: "Le Mans, France",
      logos: [{ src: "assets/logos/renault.jpg", alt: "Renault Group", url: "https://www.renaultgroup.com/en/" }],
      bullets: {
        en: [
          "Developed real-time monitoring solutions for AGVs in an Industry 4.0 environment.",
          "Designed Node-RED supervision interfaces with JavaScript and built Looker/SQL KPI dashboards for logistics performance reporting.",
          "Used Git for source control and Jira for task/incident tracking; contributed to PDCA-based continuous improvement with international teams."
        ],
        fr: [
          "Développement de solutions de monitoring temps réel des AGV dans un environnement Industrie 4.0.",
          "Conception d’interfaces de supervision Node-RED avec JavaScript et création de tableaux de bord KPI Looker/SQL pour le reporting logistique.",
          "Utilisation de Git pour le versioning et Jira pour le suivi des tâches/incidents ; contribution à l’amélioration continue PDCA avec des équipes internationales."
        ]
      },
      tags: ["Node-RED", "JavaScript", "AGV", "Looker", "SQL", "Git", "Jira", "PDCA"]
    },
    {
      period: { en: "Feb 2023 — Jul 2023", fr: "Fév. 2023 — Juil. 2023" },
      role: { en: "Automation & Control R&D Engineer — Internship", fr: "Ingénieur automatique et contrôle-commande — Stage R&D" },
      company: "Laboratoire de Commande des Processus",
      companies: [{ name: "Laboratoire de Commande des Processus", url: "https://www.enp.edu.dz/fr/laboratoire/" }],
      place: "Algeria",
      logos: [{ src: "assets/logos/lcp.png", alt: "Laboratoire de Commande des Processus", url: "https://www.enp.edu.dz/fr/laboratoire/" }],
      bullets: {
        en: [
          "Developed an advanced PWM technique for closed-loop control of dynamic systems.",
          "Modeled, simulated and compared control strategies in MATLAB/Simulink, with performance, stability and robustness analysis."
        ],
        fr: [
          "Développement d’une technique avancée de MLI/PWM pour la commande en boucle fermée de systèmes dynamiques.",
          "Modélisation, simulation et comparaison de stratégies de commande sous MATLAB/Simulink, avec analyse de performance, stabilité et robustesse."
        ]
      },
      tags: ["MATLAB", "Simulink", "PWM", "Control", "R&D"]
    },
    {
      period: { en: "Jul 2022 — Oct 2022", fr: "Juil. 2022 — Oct. 2022" },
      role: { en: "Industrial Robotics Engineer — Internship", fr: "Ingénieur Robotique Industrielle — Stage" },
      company: "Céram-Divindus",
      companies: [{ name: "Céram-Divindus", url: "https://www.divindus.dz/filiales/ceram-production-ceramique/" }],
      place: "Algeria",
      logos: [{ src: "assets/logos/ceram-divindus.png", alt: "Céram-Divindus", url: "https://www.divindus.dz/filiales/ceram-production-ceramique/" }],
      bullets: {
        en: [
          "Designed and programmed industrial robot applications in FANUC RoboGuide.",
          "Developed advanced Karel functions and tested, tuned and validated robotic cycles in simulation."
        ],
        fr: [
          "Conception et programmation d’applications robotisées industrielles sous FANUC RoboGuide.",
          "Développement de fonctions avancées Karel et tests, mise au point et validation des cycles robotisés en simulation."
        ]
      },
      tags: ["FANUC", "RoboGuide", "Karel", "Industrial Robotics"]
    },
    {
      period: { en: "Jun 2021 — Sep 2021", fr: "Juin 2021 — Sept. 2021" },
      role: { en: "Automation & Control Engineer — Internship", fr: "Ingénieur Automatisme & Contrôle — Stage" },
      company: "Algerian Qatari Steel",
      companies: [{ name: "Algerian Qatari Steel", url: "https://aqs.dz/" }],
      place: "Algeria",
      logos: [{ src: "assets/logos/aqs.jpg", alt: "Algerian Qatari Steel", url: "https://aqs.dz/" }],
      bullets: {
        en: [
          "Programmed an industrial elevator using Siemens S7-300/400 under TIA Portal and STEP 7.",
          "Developed WinCC HMI/SCADA interfaces and performed functional testing and automated-sequence validation."
        ],
        fr: [
          "Programmation d’un ascenseur industriel sur Siemens S7-300/400 sous TIA Portal et STEP 7.",
          "Développement d’IHM/SCADA WinCC et réalisation de tests fonctionnels et validation de séquences automatisées."
        ]
      },
      tags: ["S7-300/400", "TIA Portal", "STEP 7", "WinCC", "HMI/SCADA"]
    }
  ],

  projects: [
    {
      n: "01",
      visual: "intralogistics",
      type: { en: "Industrial commissioning", fr: "Commissioning industriel" },
      title: { en: "Automated Intralogistics Commissioning", fr: "Commissioning intralogistique automatisé" },
      description: {
        en: "Commissioning and troubleshooting of pallet-flow systems combining conveyors, shuttles, PLC logic, WCS/WMS, drives and machine safety.",
        fr: "Mise en service et diagnostic de systèmes de flux palettes combinant convoyeurs, navettes, logique PLC, WCS/WMS, variateurs et sécurité machine."
      },
      work: {
        en: ["Online cycle and transition diagnostics", "Structured Text modifications and validation", "WCS/WMS route and tracking tests", "PROFINET/PROFIsafe and VFD troubleshooting", "FAT/SAT, restart and performance tests"],
        fr: ["Diagnostic online des cycles et transitions", "Modifications et validation en Structured Text", "Tests de routes et tracking WCS/WMS", "Diagnostic PROFINET/PROFIsafe et variateurs", "FAT/SAT, redémarrage et tests de performance"]
      },
      tags: ["S7-1500", "TIA Portal", "ST", "WCS/WMS", "PROFIsafe", "Lenze VFD"]
    },
    {
      n: "02",
      visual: "architecture",
      type: { en: "Industrial digitalization", fr: "Digitalisation industrielle" },
      title: { en: "SCADA–MES–PLC Integration", fr: "Intégration SCADA–MES–PLC" },
      description: {
        en: "Operational supervision and system integration across PLC, SCADA, AVEVA MES and industrial data layers for automated production and intralogistics.",
        fr: "Supervision opérationnelle et intégration entre PLC, SCADA, AVEVA MES et couches data industrielles pour la production et l’intralogistique automatisées."
      },
      work: {
        en: ["Recipes, sequence control and traceability", "MES–SCADA–PLC request/response scenarios", "OPC UA / MQTT / Modbus / REST communications", "SQL and industrial data workflows", "User procedures and operational support"],
        fr: ["Recettes, pilotage de séquences et traçabilité", "Scénarios requête/réponse MES–SCADA–PLC", "Communications OPC UA / MQTT / Modbus / REST", "Flux SQL et data industrielle", "Procédures utilisateurs et support opérationnel"]
      },
      tags: ["SCADA", "AVEVA MES", "OPC UA", "MQTT", "REST API", "SQL"]
    },
    {
      n: "03",
      visual: "agv",
      type: { en: "Industry 4.0", fr: "Industrie 4.0" },
      title: { en: "AGV Real-Time Monitoring", fr: "Monitoring temps réel des AGV" },
      description: {
        en: "Real-time monitoring interfaces for automated guided vehicles, designed to improve visibility of logistics operations and performance.",
        fr: "Interfaces de monitoring temps réel pour véhicules à guidage automatique, conçues pour améliorer la visibilité des opérations logistiques et des performances."
      },
      work: {
        en: ["Node-RED supervision interfaces", "JavaScript integration", "Looker/SQL KPI dashboards", "Git versioning and Jira workflow", "PDCA-based continuous improvement"],
        fr: ["Interfaces de supervision Node-RED", "Intégration JavaScript", "Tableaux de bord KPI Looker/SQL", "Versioning Git et workflow Jira", "Amélioration continue selon PDCA"]
      },
      tags: ["AGV", "Node-RED", "JavaScript", "Looker", "SQL", "Git"]
    },
    {
      n: "04",
      visual: "scada",
      type: { en: "PLC & HMI project", fr: "Projet PLC & IHM" },
      title: { en: "Siemens Production-Line SCADA", fr: "SCADA Siemens pour ligne de production" },
      description: {
        en: "Supervision and control of an industrial production line using Siemens S7 with TIA Portal and WinCC HMI/SCADA.",
        fr: "Supervision et contrôle-commande d’une ligne de production industrielle avec Siemens S7 sous TIA Portal et WinCC HMI/SCADA."
      },
      work: {
        en: ["PLC sequence development", "HMI/SCADA screen design", "Alarm management", "Data historization", "Functional testing"],
        fr: ["Développement des séquences PLC", "Conception des écrans IHM/SCADA", "Gestion des alarmes", "Historisation des données", "Tests fonctionnels"]
      },
      tags: ["Siemens S7", "TIA Portal", "WinCC", "HMI", "SCADA"]
    },
    {
      n: "05",
      visual: "robot",
      type: { en: "Industrial robotics", fr: "Robotique industrielle" },
      title: { en: "FANUC Robot Programming", fr: "Programmation robot FANUC" },
      description: {
        en: "Industrial robot applications designed and validated in FANUC RoboGuide, with advanced Karel functions supporting reliable robotic cycles.",
        fr: "Applications robotisées industrielles conçues et validées sous FANUC RoboGuide, avec fonctions avancées Karel pour des cycles robotisés fiables."
      },
      work: {
        en: ["Robot-cell simulation", "Karel function development", "Cycle testing and tuning", "Precision and reliability validation"],
        fr: ["Simulation de cellule robotisée", "Développement de fonctions Karel", "Tests et mise au point des cycles", "Validation de précision et fiabilité"]
      },
      tags: ["FANUC", "RoboGuide", "Karel", "Simulation"]
    },
    {
      n: "06",
      visual: "embedded",
      type: { en: "Embedded automation", fr: "Automatisation embarquée" },
      title: { en: "Mobile Robot Control System", fr: "Système de commande pour robot mobile" },
      description: {
        en: "Embedded automated system for a mobile robot, combining sensors, actuators, control logic and real-time programming in C/C++.",
        fr: "Système automatisé embarqué pour robot mobile combinant capteurs, actionneurs, logique de commande et programmation temps réel en C/C++."
      },
      work: {
        en: ["Sensor and actuator integration", "Real-time control logic", "Embedded C/C++", "System behavior testing"],
        fr: ["Intégration capteurs/actionneurs", "Logique de commande temps réel", "C/C++ embarqué", "Tests du comportement système"]
      },
      tags: ["C", "C++", "Sensors", "Actuators", "Embedded Control"]
    }
  ],

  skillGroups: [
    {
      title: { en: "PLC & Automation", fr: "PLC & Automatisme" },
      items: ["TIA Portal", "STEP 7", "WinCC", "Structured Text (ST)", "Ladder", "FBD", "Grafcet", "S7-1500", "S7-1200", "S7-300/400", "Schneider Modicon", "Unity Pro / EcoStruxure"]
    },
    {
      title: { en: "SCADA / WCS / WMS & Integration", fr: "SCADA / WCS / WMS & Intégration" },
      items: ["WinCC", "Ignition SCADA", "Galileo SCADA", "EasyWCS", "WCS/WMS", "AVEVA MES", "Node-RED", "OPC UA", "MQTT", "Modbus", "PROFINET", "PROFIsafe", "Ethernet/IP", "REST API"]
    },
    {
      title: { en: "Commissioning & Field", fr: "Commissioning & Terrain" },
      items: ["FAT/SAT", "Functional testing", "VFD diagnostics", "Lenze EasyStarter", "Electrical schematics", "Sensors & actuators", "Machine safety", "Troubleshooting", "Technical reporting", "MCO"]
    },
    {
      title: { en: "Data & Software", fr: "Data & Logiciel" },
      items: ["SQL", "PostgreSQL", "MyWorkbench", "Databricks", "Looker", "Python", "JavaScript", "VBA", "C", "C++", "MATLAB/Simulink", "Git", "Jira", "Linux"]
    },
    {
      title: { en: "Robotics & Engineering", fr: "Robotique & Ingénierie" },
      items: ["FANUC RoboGuide", "Karel", "Arduino", "ESP32", "Automation Studio", "Proteus", "Multisim", "Industrial robotics", "Control engineering"]
    },
    {
      title: { en: "Industrial Methods", fr: "Méthodes industrielles" },
      items: ["PDCA", "Kaizen", "5M", "5S", "Poka-Yoke", "Root-cause analysis", "Continuous improvement", "Technical documentation"]
    }
  ],

  brandTools: [
    "Siemens S7", "TIA Portal", "Structured Text", "WinCC", "SCADA", "WCS/WMS", "EasyWCS", "PROFINET", "PROFIsafe", "Lenze EasyStarter", "Ignition", "OPC UA", "Node-RED", "SQL", "Python", "FANUC"
  ],

  education: [
    {
      years: "2024 — 2025",
      degree: { en: "Master 2 — Management & Business Administration", fr: "Master 2 — Management et Administration des Entreprises" },
      school: "Université du Mans",
      place: "Le Mans, France",
      logo: "assets/logos/le-mans.jpg",
      url: "https://www.univ-lemans.fr/"
    },
    {
      years: "2023 — 2024",
      degree: { en: "Master 2 — Mobile Automatic Systems", fr: "Master 2 — Systèmes Automatiques Mobiles" },
      school: "Université Paris-Saclay",
      place: "Paris, France",
      logo: "assets/logos/paris-saclay.jpg",
      url: "https://www.universite-paris-saclay.fr/"
    },
    {
      years: "2018 — 2023",
      degree: { en: "Engineering Degree + Master 2 in Automation", fr: "Diplôme d’Ingénieur & Master 2 Automatique" },
      school: "École Nationale Polytechnique",
      place: "Alger, Algeria",
      logo: "assets/logos/enp.jpg",
      url: "https://www.enp.edu.dz/"
    }
  ],

  languages: [
    { name: { en: "English", fr: "Anglais" }, level: { en: "Bilingual • TOEIC 875/990", fr: "Bilingue • TOEIC 875/990" } },
    { name: { en: "French", fr: "Français" }, level: { en: "Professional proficiency • C1", fr: "Niveau professionnel • C1" } },
    { name: { en: "Arabic", fr: "Arabe" }, level: { en: "Native", fr: "Langue maternelle" } }
  ],

  certifications: [
    {
      title: "Introduction to PLC and Industrial Automation",
      provider: "LinkedIn Learning",
      date: "05 Sep 2026",
      image: "assets/certificates/linkedin-plc.jpg",
      file: "assets/certificates/linkedin-plc.jpg",
      verify: "",
      category: "Automation"
    },
    {
      title: "Understanding Industry 4.0",
      provider: "Udemy • GURUCan Institute",
      date: "23 Aug 2025",
      image: "assets/certificates/udemy-industry-4.jpg",
      file: "assets/certificates/udemy-industry-4.jpg",
      verify: "https://ude.my/UC-27486083-5c6c-44cc-9b3a-f4b93fbb8b72",
      category: "Industry 4.0"
    },
    {
      title: "Tools for Working From Home — Google Apps, Trello & Zoom",
      provider: "Udemy • Start-Tech Academy",
      date: "10 Jul 2025",
      image: "assets/certificates/udemy-tools-work-home-preview.jpg",
      file: "assets/certificates/udemy-tools-work-home.pdf",
      verify: "https://ude.my/UC-397d7f49-f6dd-466f-8510-e10901663eae",
      category: "Productivity"
    },
    {
      title: "Analyzing and Visualizing Data in Looker",
      provider: "Google Cloud • Coursera",
      date: "27 Apr 2024",
      image: "assets/certificates/google-looker.jpeg",
      file: "assets/certificates/google-looker.jpeg",
      verify: "https://coursera.org/verify/XY65DM23SL4N",
      category: "Data"
    },
    {
      title: "Exploring Data Transformation with Google Cloud",
      provider: "Google Cloud • Coursera",
      date: "23 Apr 2024",
      image: "assets/certificates/google-data-transformation.jpeg",
      file: "assets/certificates/google-data-transformation.jpeg",
      verify: "https://coursera.org/verify/5XWHR6283XYY",
      category: "Data"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      provider: "IBM • Coursera",
      date: "11 Feb 2024",
      image: "assets/certificates/ibm-ai.jpeg",
      file: "assets/certificates/ibm-ai.jpeg",
      verify: "https://coursera.org/verify/4G5GFM5H6FAR",
      category: "AI"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      provider: "DeepLearning.AI • Stanford Online • Coursera",
      date: "13 Nov 2023",
      image: "assets/certificates/stanford-ml-preview.jpg",
      file: "assets/certificates/stanford-ml.pdf",
      verify: "https://coursera.org/verify/FV3M3W9E87UH",
      category: "Machine Learning"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      provider: "University of Michigan • Coursera",
      date: "04 Oct 2023",
      image: "assets/certificates/michigan-python-preview.jpg",
      file: "assets/certificates/michigan-python.pdf",
      verify: "https://coursera.org/verify/7M8PTWB5UXQX",
      category: "Programming"
    },
    {
      title: "Work Smarter with Microsoft Excel",
      provider: "Microsoft • Coursera",
      date: "04 Sep 2023",
      image: "assets/certificates/microsoft-excel-preview.jpg",
      file: "assets/certificates/microsoft-excel.pdf",
      verify: "https://coursera.org/verify/Y3QJ7NP69B3F",
      category: "Data"
    },
    {
      title: "Interfacing with the Arduino",
      provider: "University of California, Irvine • Coursera",
      date: "25 Dec 2022",
      image: "assets/certificates/uc-irvine-arduino.jpeg",
      file: "assets/certificates/uc-irvine-arduino.jpeg",
      verify: "https://coursera.org/verify/F8TJ5DKP9MBB",
      category: "Embedded"
    }
  ],

  community: [
    {
      period: { en: "Sep 2022 — Sep 2023", fr: "Sept. 2022 — Sept. 2023" },
      role: { en: "Member — Finance, Logistics & External Relations", fr: "Membre — Finance, Logistique & Relations Extérieures" },
      organization: "Vision & Innovation Club",
      url: "https://www.vic-enp.com/",
      logo: "assets/logos/vic.jpg",
      text: {
        en: "Contributed to project coordination and professional/technology events with partner companies, supporting planning, logistics, communication and multi-stakeholder coordination.",
        fr: "Contribution à la coordination de projets et d’événements professionnels/technologiques avec des entreprises partenaires : planification, logistique, communication et coordination multi-acteurs."
      }
    },
    {
      period: { en: "Oct 2021 — Sep 2022", fr: "Oct. 2021 — Sept. 2022" },
      role: { en: "Member — Information Technology Department", fr: "Membre — Département Technologie de l’Information (IT)" },
      organization: "Vision & Innovation Club",
      url: "https://www.vic-enp.com/",
      logo: "assets/logos/vic.jpg",
      text: {
        en: "Worked on web development (HTML/CSS/JavaScript), graphic design, video editing and technical support for club events, strengthening project-management and multidisciplinary teamwork skills.",
        fr: "Participation au développement web (HTML/CSS/JavaScript), design graphique, montage vidéo et support technique pour les événements du club, renforçant la gestion de projet et le travail en équipe pluridisciplinaire."
      }
    }
  ]
};
