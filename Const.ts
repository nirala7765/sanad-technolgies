// const.ts
export const OUR_STORY = {
  sectionTitle: "Our Story",
  firstBlock: {
    image: "/story1.png", // Path to first image
    text: "Sanad Technologies was founded with a simple belief — that technology should be a bridge, not a barrier, to business growth. We saw too many companies struggling to turn great ideas into working solutions, so we set out to change that."
  },
  secondBlock: {
    image: "/story1.png", // Path to second image
    text: "Today, We help businesses unlock their potential with smart, scalable, and reliable technology. From first conversation to final delivery, we focus on your challenges, creating solutions that fit — and building partnerships that help you grow in a fast-changing world."
  }
};


// card data for what we stand for section
export const cardData = [
  {
    id: 1,
    title: "Cloud Infrastructure",
    description: "Deploy scalable and secure solutions with AWS, Azure, or GCP.",
    image: "/story1.png" // Path to image
  },
  {
    id: 2,
    title: "AI/ML Solutions",
    description: "Build intelligent systems using modern machine learning frameworks.",
    image: "/images/ai.jpg"
  },
  {
    id: 3,
    title: "DevOps Automation",
    description: "Automate workflows with CI/CD, Docker, and Kubernetes.",
    image: "/images/devops.jpg"
  }
];



// Bento images and titles for the Bento component (ServicesGrid.tsx)
// This data can be used to render the Bento component in the homepage or HomeCompo folder
export const services = [
  {
    img: "/bento1.png",
    title: "Smart Business Solutions",
    desc: "From AI insights to streamlined workflows, we identify the smartest ways to boost efficiency, cut waste, and position your business for long-term success.",
    widthClass: "md:w-[666px]",
  },
  {
    img: "/bento2.png",
    title: "Cloud & Data Innovation",
    desc: "Flexible, secure cloud strategies that boost performance, collaboration, and control over your data.",
    widthClass: "md:w-[469px]",
  },
  {
    img: "/bento3.png",
    title: "Support That Scales",
    desc: "We keep your systems evolving so your business stays competitive.",
    widthClass: "md:w-[469px]",
  },
  {
    img: "/bento4.png",
    title: "Build for Your Business Landscape",
    desc: "Whether in retail, healthcare, manufacturing, or beyond, our solutions are designed to tackle your sector’s real challenges and deliver measurable results.",
    widthClass: "md:w-[666px]",
  },
];





// Process steps data for the ProcessSteps component in homepage or HomeCompo folder
// This data can be used to render the steps in the ProcessSteps component
// It includes the phase, number, title, description, image, and call-to-action text
// This data can be imported and used in the ProcessSteps component to dynamically render the steps
// Each step represents a phase in the process, with a unique number, title, description,
// an image representing the step, and a call-to-action text that can be used for further
// information or navigation
// This structure allows for easy modification and expansion of the steps without changing the component logic
// The data can be fetched from an API or defined statically as shown below
// This is a simple and effective way to manage process steps in a React application

export const PROCESS_STEPS = [
  {
    phase: "Define Phase",
    num: "01",
    title: "Understand Your Vision",
    desc: "We work closely with you to define goals and success criteria.",
    img: "/bgfa.png",
    cta: "Learn More",
  },
  {
    phase: "Design Phase",
    num: "02",
    title: "Shape the Solution",
    desc: "Our designers create a solution blueprint that meets your needs.",
    img: "/bgfa.png",
    cta: "See Designs",
  },
  {
    phase: "Develop Phase",
    num: "03",
    title: "Build with Precision",
    desc: "We build high-quality solutions with precision and efficiency.",
    img: "/bgfa.png",
    cta: "Explore Build",
  },
  {
    phase: "Deploy Phase",
    num: "04",
    title: "Deliver & Support",
    desc: "We launch your solution seamlessly, backed by thorough testing, smooth handover, and ongoing support.",
    img: "/bgfa.png",
    cta: "Get Started",
  },
];


// sections data for the Innovation component in ServiceCompo folder
// This data can be used to render the sections in the Innovation component
// It includes the icon, title, description, points, and image for each section
// This data can be imported and used in the Innovation component to dynamically render the sections
// Each section represents a service offered, with an icon, title, description,
// a list of points highlighting key features, and an image representing the service
// This structure allows for easy modification and expansion of the sections without changing the component logic

export const sections = [
  {
    icon: "/aiicon.png", // replace with your PNG icon path
    title: "Find Your AI Advantage",
    description:
      "Our free AI Pathfinder Assessment identifies exactly how AI can create value in your business, helping you move from curiosity to concrete results.",
    points: [
      "Analyze your current operations and challenges",
      "Identify areas where AI can improve efficiency or reduce costs",
      "Provide a practical roadmap for AI adoption",
      "Ensure solutions are scalable and secure",
      "No-obligation, no-cost assessment",
    ],
    img: "/bgfa.png",
  },
  {
    icon: "/workflow.png",
    title: "Migration & Workflow Optimization",
    description:
      "We evaluate your existing systems and workflows to uncover inefficiencies and plan a migration that improves performance, cuts waste, and supports future growth.",
    points: [
      "Assess your current technology and infrastructure",
      "Identify bottlenecks and recurring issues",
      "Recommend a detailed roadmap with migration options that align with business goals",
    ],
    img: "/bgfa.png",
  },
  {
    icon: "/retailicon.png",
    title: "From Retail to Healthcare, We’ve Got You Covered",
    description:
      "From retail to healthcare, our solutions are tailored to the realities of your sector — helping you solve real problems and seize new opportunities.",
    points: [
      "Retail & Supply Chain: Improve tracking, reduce waste, and optimize inventory",
      "Healthcare: Enhance patient care with secure, compliant systems",
      "Real Estate: Streamline property management and client engagement",
      "Manufacturing: Automate production monitoring and quality control",
      "Telecommunications & Contact Centers: Build efficient, AI-enabled customer service systems",
    ],
    img: "/bgfa.png",
  },
  {
    icon: "/scalericon.png",
    title: "Scale, Secure, and Streamline with the Cloud",
    description:
      "We design and implement cloud strategies that give you flexibility, reliability, and control over your data — without unnecessary complexity.",
    points: [
      "Design cloud architectures that meet your needs",
      "Improve system uptime and availability",
      "Strengthen security and compliance",
      "Optimize costs through smarter resource management",
      "Enable remote access and collaboration securely",
    ],
    img: "/bgfa.png",
  },
  {
    icon: "/supportai.png",
    title: "Ongoing Support & Strategic Consulting",
    description:
      "We stay with you long after delivery, ensuring your technology continues to perform, adapt, and deliver measurable value as your business evolves.",
    points: [
      "Proactive system monitoring and optimization",
      "Regular performance reviews and improvements",
      "Strategic advice to align technology with business goals",
      "Rapid response to issues and changing requirements",
      "Long-term partnership to keep you competitive"
    ],
    img: "/bgfa.png",
  },
];

