import type { Service } from "@/lib/types"

export const SERVICES: Service[] = [
  {
    slug: "executive-protection",
    title: "Executive Protection",
    shortDescription: "Close protection services for high-value individuals, executives, and dignitaries.",
    description:
      "Our executive protection teams are drawn from elite military and law enforcement backgrounds. We provide discreet, professional close protection tailored to the threat level and operational environment of each principal.",
    metaDescription:
      "Professional executive protection services in Nigeria and West Africa. Close protection for executives, dignitaries, and high-value individuals.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80",
    features: [
      "24/7 close protection teams",
      "Advance security reconnaissance",
      "Secure transportation and motorcades",
      "Threat and vulnerability assessments",
      "Safe house coordination",
      "Medical support integration",
    ],
    methodology: [
      {
        step: "Threat Profiling",
        description: "We build a tailored threat profile for the principal — covering travel patterns, public exposure, family considerations, and adversary landscape.",
      },
      {
        step: "Advance & Route Planning",
        description: "Advance teams reconnoitre venues, vet routes and alternates, identify safe havens, and pre-position medical and logistical support.",
      },
      {
        step: "Protective Deployment",
        description: "Vetted close protection officers operate in plain clothes or uniformed posture depending on threat profile and principal preference.",
      },
      {
        step: "Continuous Review",
        description: "Daily debriefs and intelligence updates refresh the operational picture; deployment is recalibrated as the threat environment shifts.",
      },
    ],
    deliverables: [
      "Threat assessment report",
      "Operational security plan with route maps",
      "Daily situation reports during deployment",
      "Post-engagement after-action review",
    ],
    faqs: [
      {
        question: "How quickly can you deploy an executive protection team?",
        answer: "We can deploy a qualified protection team within 24–48 hours for standard requests and as quickly as 6 hours for emergency deployments within Nigeria.",
      },
      {
        question: "Do your agents have international experience?",
        answer: "Yes. Our protection specialists have operational experience across West Africa, Europe, and the Middle East, and hold internationally recognised close protection certifications.",
      },
      {
        question: "Is the service discreet?",
        answer: "Discretion is fundamental to our methodology. All principals are briefed on our low-profile approach, and our agents operate in plain clothes unless the threat profile requires otherwise.",
      },
    ],
  },
  {
    slug: "intelligence-surveillance",
    title: "Intelligence & Surveillance",
    shortDescription: "Human intelligence, open-source analysis, and technical surveillance operations.",
    description:
      "We provide actionable intelligence through a combination of human intelligence networks, open-source analysis, and cutting-edge technical surveillance. Our intelligence products support strategic decision-making for corporations and government entities operating in complex environments.",
    metaDescription:
      "Intelligence and surveillance services in Nigeria. HUMINT, OSINT, and technical surveillance for corporate and government clients.",
    icon: "Eye",
    image: "https://images.unsplash.com/photo-1551808525-051f70a55ec0?auto=format&fit=crop&w=1920&q=80",
    features: [
      "Human intelligence (HUMINT) networks",
      "Open-source intelligence (OSINT) analysis",
      "Counter-intelligence operations",
      "Technical surveillance and counter-surveillance",
      "Threat landscape assessments",
      "Daily intelligence briefings",
    ],
    methodology: [
      {
        step: "Collection Planning",
        description: "We agree the intelligence requirements with the client and design a collection plan blending HUMINT, OSINT, and technical sources.",
      },
      {
        step: "Multi-Source Collection",
        description: "Analysts and field operators gather raw information across vetted human networks, public data, and lawful technical means.",
      },
      {
        step: "Analysis & Fusion",
        description: "Analysts triangulate sources, assess credibility, and produce assessments that highlight indicators, gaps, and confidence levels.",
      },
      {
        step: "Dissemination",
        description: "Findings are delivered via encrypted channels in formats matched to the client — written reports, verbal briefings, or live alerts.",
      },
    ],
    deliverables: [
      "Daily situation reports (SITREPs)",
      "Weekly threat assessments",
      "Ad-hoc target intelligence packages",
      "Monthly strategic intelligence summaries",
    ],
    faqs: [
      {
        question: "What types of intelligence products do you deliver?",
        answer: "We provide daily situation reports, weekly threat assessments, ad-hoc target intelligence packages, and monthly strategic intelligence summaries tailored to your sector.",
      },
      {
        question: "How is sensitive intelligence data protected?",
        answer: "All intelligence is handled under strict information security protocols, including encrypted delivery channels and need-to-know access controls.",
      },
    ],
  },
  {
    slug: "physical-security",
    title: "Physical Security",
    shortDescription: "Manned guarding, access control, and perimeter security for facilities of all sizes.",
    description:
      "Sokari Securities provides rigorously trained security personnel for corporate offices, industrial facilities, residential estates, and critical infrastructure. Our officers are vetted, licensed, and undergo continuous skills development.",
    metaDescription:
      "Physical security services Nigeria — manned guarding, access control, perimeter security for corporate and industrial facilities.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=1920&q=80",
    features: [
      "Uniformed and plain-clothes security officers",
      "Access control systems integration",
      "CCTV monitoring and control rooms",
      "Perimeter security and patrol",
      "Visitor management systems",
      "Emergency response protocols",
    ],
    methodology: [
      {
        step: "Site Survey",
        description: "Our security consultants walk the site, map vulnerabilities, and benchmark against industry standards and the client's risk appetite.",
      },
      {
        step: "Security Design",
        description: "We design a layered solution combining manning levels, posts, patrols, technology, and emergency procedures.",
      },
      {
        step: "Mobilisation",
        description: "Vetted officers are screened, trained on site-specific orders, and deployed alongside any required technology integration.",
      },
      {
        step: "Supervision & Audit",
        description: "Supervisors conduct unannounced inspections, KPIs are reported monthly, and posts are recalibrated as the site evolves.",
      },
    ],
    deliverables: [
      "Site security survey and gap analysis",
      "Assignment instructions and post orders",
      "Monthly KPI and incident report",
      "Quarterly security review with stakeholders",
    ],
    faqs: [
      {
        question: "Are your security officers licensed?",
        answer: "All Sokari security officers hold valid licences from the appropriate regulatory bodies in Nigeria, and undergo background checks before deployment.",
      },
      {
        question: "Can you manage security for multiple sites?",
        answer: "Yes. We have a dedicated operations centre that coordinates security across multiple client sites simultaneously, with real-time reporting and escalation procedures.",
      },
    ],
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    shortDescription: "Comprehensive security risk assessments and crisis management consulting.",
    description:
      "We help organisations identify, assess, and mitigate security risks before they materialise. Our consultants bring decades of combined experience in corporate security, government intelligence, and operational risk.",
    metaDescription:
      "Security risk management consulting in Nigeria. Risk assessments, crisis management, and business continuity planning.",
    icon: "AlertTriangle",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    features: [
      "Security risk assessments",
      "Business continuity planning",
      "Crisis management frameworks",
      "Travel risk management",
      "Security audits and gap analysis",
      "Staff security awareness training",
    ],
    methodology: [
      {
        step: "Discovery",
        description: "We map the client's operations, assets, people, and critical processes to define what must be protected and to what standard.",
      },
      {
        step: "Risk Assessment",
        description: "Threats, vulnerabilities, and impact are scored against a transparent methodology to produce a prioritised risk register.",
      },
      {
        step: "Mitigation Design",
        description: "We recommend proportionate controls — operational, physical, procedural, and training-led — and sequence them by risk reduction.",
      },
      {
        step: "Embed & Test",
        description: "Plans are validated with tabletop exercises, crisis drills, and continuous review against the evolving threat landscape.",
      },
    ],
    deliverables: [
      "Enterprise risk register",
      "Crisis management and business continuity plans",
      "Travel risk procedures and country briefs",
      "Tabletop exercise reports and recommendations",
    ],
    faqs: [
      {
        question: "How long does a security risk assessment take?",
        answer: "A standard facility risk assessment takes 3–5 working days. More comprehensive enterprise-wide assessments are scoped individually based on size and complexity.",
      },
      {
        question: "Do you support crisis response in addition to planning?",
        answer: "Yes. Once a crisis plan is in place we provide on-call crisis advisory and, where required, embed consultants alongside client leadership during live incidents.",
      },
    ],
  },
  {
    slug: "maritime-security",
    title: "Maritime Security",
    shortDescription: "Vessel protection, port security, and anti-piracy operations in Nigerian waters.",
    description:
      "Operating in the Gulf of Guinea — one of the world's most challenging maritime environments — our maritime security teams provide armed vessel escorts, anti-piracy operations, and port facility security consulting.",
    metaDescription:
      "Maritime security services Nigeria — vessel protection, anti-piracy, port security in the Gulf of Guinea.",
    icon: "Anchor",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=80",
    features: [
      "Armed vessel escort operations",
      "Anti-piracy protection",
      "Port and terminal security",
      "Citadel planning and hardening",
      "Maritime threat assessments",
      "Crew security training",
    ],
    methodology: [
      {
        step: "Voyage Risk Assessment",
        description: "Each transit is assessed against current Gulf of Guinea threat intelligence, vessel characteristics, and cargo sensitivity.",
      },
      {
        step: "Embarkation & Brief",
        description: "Maritime security operators embark with the master, brief the crew on procedures, and harden vulnerable approaches.",
      },
      {
        step: "Transit & Watchkeeping",
        description: "Operators maintain 24-hour watch, liaise with the Nigerian Navy where relevant, and execute pre-agreed escalation protocols.",
      },
      {
        step: "Disembark & Report",
        description: "After safe transit, operators disembark and deliver a voyage report covering incidents, sightings, and lessons identified.",
      },
    ],
    deliverables: [
      "Voyage-specific threat assessment",
      "Vessel hardening recommendations",
      "Daily transit position and status reports",
      "Post-voyage incident and lessons report",
    ],
    faqs: [
      {
        question: "Do you operate in the Gulf of Guinea?",
        answer: "Yes. The Gulf of Guinea is our primary maritime operating area. Our teams have extensive experience with the specific threat dynamics of Nigerian and West African waters.",
      },
      {
        question: "Are your maritime operators authorised to carry weapons?",
        answer: "Armed maritime deployments are conducted in compliance with Nigerian regulations and in coordination with the appropriate authorities. We can also provide unarmed advisory teams where preferred.",
      },
    ],
  },
  {
    slug: "cyber-security-advisory",
    title: "Cyber Security Advisory",
    shortDescription: "Advisory services bridging physical and digital security for holistic protection.",
    description:
      "In an increasingly connected world, physical and cyber threats are inseparable. Our cyber security advisory practice helps clients understand the intersection of digital vulnerabilities and physical security risks.",
    metaDescription:
      "Cyber security advisory services Nigeria — bridging physical and digital security for comprehensive protection.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    features: [
      "Cyber-physical threat assessments",
      "Security operations centre (SOC) advisory",
      "Phishing and social engineering awareness",
      "Incident response planning",
      "Vendor security due diligence",
      "Board-level cyber risk briefings",
    ],
    methodology: [
      {
        step: "Posture Review",
        description: "We benchmark the client's current cyber-physical security posture against recognised frameworks and sector peers.",
      },
      {
        step: "Threat Modelling",
        description: "We identify the adversaries who matter most to the business and trace the most likely attack paths across digital and physical surfaces.",
      },
      {
        step: "Advisory Roadmap",
        description: "Findings translate into a prioritised, board-ready roadmap covering controls, governance, training, and incident readiness.",
      },
      {
        step: "Embedded Advisory",
        description: "We remain available on retainer for incident escalation, vendor due diligence, and quarterly executive briefings.",
      },
    ],
    deliverables: [
      "Cyber-physical posture report",
      "Threat model and attack-path analysis",
      "Board-level executive briefing pack",
      "Incident response playbooks",
    ],
    faqs: [
      {
        question: "Do you offer penetration testing?",
        answer: "We offer advisory services and can partner with certified penetration testing firms for technical assessments. Our focus is on cyber-physical risk at the strategic and operational levels.",
      },
      {
        question: "How is this different from a traditional cyber consultancy?",
        answer: "Our edge is in connecting digital threats to physical-world consequences — for example, how a credential leak can enable a kidnap-for-ransom plot, or how an OT breach can endanger field personnel.",
      },
    ],
  },
]
