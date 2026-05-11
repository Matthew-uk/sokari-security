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
    features: [
      "24/7 close protection teams",
      "Advance security reconnaissance",
      "Secure transportation and motorcades",
      "Threat and vulnerability assessments",
      "Safe house coordination",
      "Medical support integration",
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
    features: [
      "Human intelligence (HUMINT) networks",
      "Open-source intelligence (OSINT) analysis",
      "Counter-intelligence operations",
      "Technical surveillance and counter-surveillance",
      "Threat landscape assessments",
      "Daily intelligence briefings",
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
    features: [
      "Uniformed and plain-clothes security officers",
      "Access control systems integration",
      "CCTV monitoring and control rooms",
      "Perimeter security and patrol",
      "Visitor management systems",
      "Emergency response protocols",
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
    features: [
      "Security risk assessments",
      "Business continuity planning",
      "Crisis management frameworks",
      "Travel risk management",
      "Security audits and gap analysis",
      "Staff security awareness training",
    ],
    faqs: [
      {
        question: "How long does a security risk assessment take?",
        answer: "A standard facility risk assessment takes 3–5 working days. More comprehensive enterprise-wide assessments are scoped individually based on size and complexity.",
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
    features: [
      "Armed vessel escort operations",
      "Anti-piracy protection",
      "Port and terminal security",
      "Citadel planning and hardening",
      "Maritime threat assessments",
      "Crew security training",
    ],
    faqs: [
      {
        question: "Do you operate in the Gulf of Guinea?",
        answer: "Yes. The Gulf of Guinea is our primary maritime operating area. Our teams have extensive experience with the specific threat dynamics of Nigerian and West African waters.",
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
    features: [
      "Cyber-physical threat assessments",
      "Security operations centre (SOC) advisory",
      "Phishing and social engineering awareness",
      "Incident response planning",
      "Vendor security due diligence",
      "Board-level cyber risk briefings",
    ],
    faqs: [
      {
        question: "Do you offer penetration testing?",
        answer: "We offer advisory services and can partner with certified penetration testing firms for technical assessments. Our focus is on cyber-physical risk at the strategic and operational levels.",
      },
    ],
  },
]
