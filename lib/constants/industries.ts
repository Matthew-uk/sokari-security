import type { Industry } from "@/lib/types"

export const INDUSTRIES: Industry[] = [
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    shortDescription: "Protecting personnel and assets across onshore and offshore energy operations.",
    description:
      "Nigeria's oil and gas sector faces some of the most complex security challenges in the world — from pipeline vandalism to kidnap-for-ransom threats. Sokari Securities has deep expertise in protecting upstream, midstream, and downstream energy operations.",
    metaDescription:
      "Security solutions for Nigeria's oil and gas sector — personnel protection, asset security, and threat management for energy companies.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    approach:
      "We embed with energy operators across the Niger Delta and offshore Nigeria, combining intelligence-led prevention, hardened physical protection, and crisis response. Engagements are scoped to the asset lifecycle — exploration, construction, production, or decommissioning.",
    challenges: [
      "Kidnap and ransom threats to expatriate personnel",
      "Pipeline vandalism and oil theft",
      "Community tensions and civil unrest",
      "Remote and high-risk operational environments",
      "Regulatory compliance and due diligence requirements",
    ],
    relatedServices: [
      "executive-protection",
      "physical-security",
      "intelligence-surveillance",
      "risk-management",
    ],
    faqs: [
      {
        question: "Can you support operations in the Niger Delta swamps and offshore?",
        answer: "Yes. We routinely support clients in swamp, riverine, and offshore environments, with operators trained for those specific terrains and logistics requirements.",
      },
      {
        question: "Do you handle kidnap-for-ransom response?",
        answer: "We provide preventive intelligence, crisis advisory, and coordinated response in conjunction with the client's K&R insurer and response consultancy where applicable.",
      },
    ],
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    shortDescription: "Physical security and intelligence solutions for financial institutions.",
    description:
      "Banks and financial institutions require a sophisticated, layered approach to security. We provide armed guard services, cash-in-transit protection, executive protection for senior bankers, and intelligence support for fraud and insider threat mitigation.",
    metaDescription:
      "Security solutions for Nigerian banks and financial institutions — armed guarding, cash-in-transit, and executive protection.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1920&q=80",
    approach:
      "We design tiered security programmes across head office, branch network, and cash-handling operations — anchored by a 24/7 control room and tightly integrated with the bank's own loss-prevention and fraud teams.",
    challenges: [
      "Armed robbery and cash-in-transit risks",
      "ATM and branch security",
      "Executive and director personal security",
      "Insider threat and fraud investigation support",
      "Crowd management and protest response",
    ],
    relatedServices: [
      "physical-security",
      "executive-protection",
      "intelligence-surveillance",
      "risk-management",
    ],
    faqs: [
      {
        question: "Do you provide cash-in-transit (CIT) services?",
        answer: "We provide armed escort and route security for CIT movements in partnership with licensed CIT operators, with intelligence-led routing and timing.",
      },
      {
        question: "Can you secure ATM galleries across multiple locations?",
        answer: "Yes. Our control room coordinates static and patrol coverage across distributed ATM estates, with rapid response protocols for tamper alerts.",
      },
    ],
  },
  {
    slug: "diplomatic",
    title: "Diplomatic & Consular",
    shortDescription: "Specialist security support for embassies, high commissions, and diplomatic missions.",
    description:
      "Diplomatic and consular premises require discretion, professionalism, and a deep understanding of the threat environment. Sokari Securities provides close protection for ambassadors and senior diplomatic staff, as well as residential and mission compound security.",
    metaDescription:
      "Diplomatic security services Nigeria — embassy security, ambassador protection, and consular facility guarding.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=1920&q=80",
    approach:
      "We work to the protocol standards expected by diplomatic missions — vetted personnel, formal post orders, and protocol-trained close protection officers — while remaining flexible to host-nation requirements.",
    challenges: [
      "Elevated threat targeting of diplomatic premises",
      "Protocol-sensitive security operations",
      "Crowd management during demonstrations",
      "Classified information protection",
      "Visa and access control management",
    ],
    relatedServices: [
      "executive-protection",
      "physical-security",
      "intelligence-surveillance",
    ],
    faqs: [
      {
        question: "Do your officers have experience with diplomatic protocol?",
        answer: "Yes. Officers assigned to diplomatic accounts are trained on protocol expectations, sensitivity around motorcades, and the etiquette required for engagements involving senior diplomats.",
      },
      {
        question: "Can you provide residence-level security for ambassadors?",
        answer: "Yes. We provide tiered residential security, integrated with close protection arrangements for the principal and their family.",
      },
    ],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    shortDescription: "Security services for government ministries, agencies, and public institutions.",
    description:
      "Government entities and public institutions require reliable, compliant security partners. We support federal and state agencies with manned guarding, event security, and operational risk consulting.",
    metaDescription:
      "Government security services Nigeria — guarding, event security, and risk consulting for public sector clients.",
    icon: "Building",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80",
    approach:
      "We engage public-sector clients with a heavy emphasis on compliance, transparent reporting, and interagency coordination — recognising that security in government settings is often as much about governance as it is about guards on the ground.",
    challenges: [
      "Public access management and crowd control",
      "Protection of critical national infrastructure",
      "Electoral security and event security",
      "Interagency coordination requirements",
    ],
    relatedServices: [
      "physical-security",
      "risk-management",
      "intelligence-surveillance",
    ],
    faqs: [
      {
        question: "Can you scale rapidly for one-off events?",
        answer: "Yes. We maintain a roster of trained, vetted officers who can be mobilised for state events, conferences, and elections at short notice.",
      },
      {
        question: "Do you work alongside Nigerian Police Force and DSS?",
        answer: "Many government engagements require coordination with state security organs. Our supervisors are experienced in liaison and joint-command arrangements.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction & Real Estate",
    shortDescription: "Site security, asset protection, and workforce safety for construction projects.",
    description:
      "Large construction projects are high-value targets for theft, sabotage, and vandalism. Sokari Securities deploys trained site security teams to protect equipment, materials, and personnel throughout the project lifecycle.",
    metaDescription:
      "Construction site security Nigeria — site guarding, asset protection, and workforce security for construction projects.",
    icon: "HardHat",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    approach:
      "We integrate with the project's HSE and procurement teams from mobilisation through handover, scaling manning levels and surveillance technology as the site progresses from groundwork to fit-out.",
    challenges: [
      "Equipment and materials theft",
      "Trespassing and site safety breaches",
      "Labour disputes and workforce security",
      "Community relations and stakeholder security",
    ],
    relatedServices: [
      "physical-security",
      "risk-management",
    ],
    faqs: [
      {
        question: "How do you manage community tensions around large project sites?",
        answer: "We work closely with the client's community relations team, deploy supervisors with local language and stakeholder experience, and de-escalate before disputes become security incidents.",
      },
      {
        question: "Can you secure remote project sites with no existing infrastructure?",
        answer: "Yes. We've mobilised to remote sites across Nigeria, including providing temporary control rooms, communications, and accommodation for our deployed officers.",
      },
    ],
  },
  {
    slug: "maritime",
    title: "Maritime & Ports",
    shortDescription: "Comprehensive security for ports, terminals, and vessels in West African waters.",
    description:
      "Port facilities and maritime operations demand specialist security expertise. Our maritime division provides port security consulting, terminal guarding, and vessel escort services across the Gulf of Guinea.",
    metaDescription:
      "Maritime security Nigeria — port security, vessel protection, and anti-piracy services in the Gulf of Guinea.",
    icon: "Ship",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1920&q=80",
    approach:
      "We treat the port-to-vessel chain as a single security surface — combining ISPS-compliant terminal procedures, layered access control, and armed vessel escorts so that cargo and crew are protected end-to-end.",
    challenges: [
      "Piracy and armed robbery at sea",
      "Port facility access control",
      "Cargo theft and smuggling",
      "ISPS Code compliance",
    ],
    relatedServices: [
      "maritime-security",
      "physical-security",
      "intelligence-surveillance",
    ],
    faqs: [
      {
        question: "Do you support ISPS Code compliance audits?",
        answer: "Yes. We advise port and terminal operators on ISPS Code obligations, conduct facility security assessments, and help prepare for flag-state and port-state inspections.",
      },
      {
        question: "Can you coordinate with the Nigerian Navy?",
        answer: "Coordination with the Nigerian Navy and NIMASA is integral to most maritime escort engagements; our operations team manages this liaison on behalf of the client.",
      },
    ],
  },
]
