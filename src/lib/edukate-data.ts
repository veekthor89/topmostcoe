// Data extracted from edukate.framer.website scrape

export const SITE = {
  name: "TOPCOED",
  tagline: "Empowering Futures Educators",
  phone: "08037204088, 08033183854",
  email: "info@topmost.edu",
  address: "Ipaja/Agbado, Lagos",
};

export type Program = {
  slug: string;
  title: string;
  image: string;
  category: "Vocational" | "Postgraduate" | "Degree" | "Online" | "Certificate";
  blurb: string;
};

export const PROGRAMS: Program[] = [
  { slug: "b-sc-in-computer-science", title: "B.Sc / B.A Education (LASU Sandwich)", image: "/nabteb-program.jpg", category: "Degree", blurb: "Strong foundation in programming, data structures, algorithms and modern computing." },
  { slug: "bba-in-marketing", title: "NCE (Nigeria Certificate in Education)", image: "/teacher-image.jpg", category: "Certificate", blurb: "Master modern marketing strategy, consumer behavior and brand leadership." },
  { slug: "ll-b-bachelor-of-laws", title: "Professional Diploma in Education (PDE)", image: "/library-program.jpg", category: "Postgraduate", blurb: "Comprehensive legal education with practical advocacy training." },
  { slug: "b-sc-in-public-health", title: "NABTEB O & A Levels", image: "/english-program.jpg", category: "Vocational", blurb: "Address modern health challenges through evidence-based practice." },
  { slug: "b-a-in-english-literature", title: "B.A. in English Literature", image: "https://framerusercontent.com/images/7JyxFzbhwLWHTHMjN0jThMbL1Q.png", category: "Vocational", blurb: "Explore literature, criticism and creative writing across cultures." },
  { slug: "b-sc-in-biotechnology", title: "B.Sc. in Biotechnology", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", category: "Degree", blurb: "Bridge biology and technology to innovate in healthcare and agriculture." },
  { slug: "b-sc-in-electrical-engineering", title: "B.Sc. in Electrical Engineering", image: "https://framerusercontent.com/images/kp1vlrAOAXV8X6W8fUI17liwdA.png", category: "Degree", blurb: "Design and build the electrical systems that power tomorrow." },
  { slug: "b-a-in-psychology", title: "B.A. in Psychology", image: "https://framerusercontent.com/images/MY9oljZl07K9qZQcTot9CaYruU.png", category: "Vocational", blurb: "Understand the human mind through research, clinical and applied psychology." },
  { slug: "b-sc-in-cybersecurity", title: "B.Sc. in Cybersecurity", image: "https://framerusercontent.com/images/loscw1ZBnmCGM9cGy1sS4AhX7EA.png", category: "Degree", blurb: "Defend critical systems from evolving cyber threats." },
  { slug: "b-sc-in-data-science", title: "B.Sc. in Data Science", image: "https://framerusercontent.com/images/EU9Lyg6JKFiBn2rzVX9nNYq61ik.png", category: "Degree", blurb: "Turn data into insight with statistics, ML and visualization." },
  { slug: "b-sc-in-artificial-intelligence", title: "B.Sc. in Artificial Intelligence", image: "https://framerusercontent.com/images/I9jq7IPQ7TtkNw240huBZM29vZ4.jpg", category: "Degree", blurb: "Shape the future of intelligent systems and applied AI." },
  { slug: "b-sc-in-software-engineering", title: "B.Sc. in Software Engineering", image: "https://framerusercontent.com/images/K7oUH6zJ9duT6M0WS7UpQ6cGm5s.png", category: "Degree", blurb: "Engineer scalable, reliable software for real-world impact." },
  { slug: "master-of-business-administration", title: "Master of Business Administration", image: "/nabteb-program.jpg", category: "Postgraduate", blurb: "Advance to senior leadership with our flagship MBA program." },
  { slug: "executive-program-in-business", title: "Executive Program in Business", image: "/teacher-image.jpg", category: "Postgraduate", blurb: "Intensive program for working executives ready for the next step." },
  { slug: "educational-leadership-online", title: "Educational Leadership (Online)", image: "/library-program.jpg", category: "Online", blurb: "Lead change in schools and educational organizations — fully online." },
  { slug: "diploma-in-digital-marketing", title: "Diploma in Digital Marketing", image: "/english-program.jpg", category: "Online", blurb: "Master SEO, social, paid media and analytics in one focused diploma." },
  { slug: "online-certification-in-data", title: "Online Certification in Data", image: "https://framerusercontent.com/images/7JyxFzbhwLWHTHMjN0jThMbL1Q.png", category: "Online", blurb: "Practical data analysis credential you can complete on your schedule." },
  { slug: "certificate-in-project-management", title: "Certificate in Project Management", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", category: "Postgraduate", blurb: "Plan, execute and deliver complex projects with confidence." },
  { slug: "certification-in-ux-ui-design", title: "Certification in UX/UI Design", image: "https://framerusercontent.com/images/kp1vlrAOAXV8X6W8fUI17liwdA.png", category: "Online", blurb: "Design products people love through research-led UX practice." },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export const NEWS: Post[] = [
  { slug: "climate-solutions", title: "2026/2027 Admission Forms Now Available", date: "May 18, 2026", image: "/student-hallway.jpg", excerpt: "Application forms are now on sale for all programes. Visit the admissions office or apply online." },
  { slug: "energy-efficiency", title: "TRCN CBT Examination — May/June Diet", date: "May 02, 2026", image: "/computer-lab.jpg", excerpt: "​Topmost Tutorial College is an approved NABTEB examination centre for May/June and November diets." },
  { slug: "environmental-impact", title: "PDE Programe Open to All Healthcare Professionals", date: "Apr 21, 2026", image: "/healthcare-pros.jpg", excerpt: "Nurses, military medics, and paramedics can now enrol in our TRCN-accredited PDE programme." },
  { slug: "green-technology", title: "Green Technology on Campus", date: "Feb 10, 2025", image: "/nabteb-program.jpg", excerpt: "Student-led startups bringing green tech to market." },
  { slug: "renewable-resources", title: "Investing in Renewable Resources", date: "Jan 28, 2025", image: "/teacher-image.jpg", excerpt: "New endowment fund accelerates renewable research." },
  { slug: "sustainable-agriculture", title: "Sustainable Agriculture at Scale", date: "Jan 14, 2025", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", excerpt: "Field trials show resilient yield with lower inputs." },
];

export type Event = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export const EVENTS: Event[] = [
  { slug: "student-startup-pitch-competition", title: "Orientation for New Students", date: "Mar 22, 2026", image: "/student-orientation.jpg", excerpt: "Welcome ceremony for all newly admitted students across all programmes." },
  { slug: "international-fashion-parade", title: "International Fashion Parade", date: "May 22, 2025", image: "/english-program.jpg", excerpt: "A celebration of cultural style from 50+ countries." },
  { slug: "award-winning-student-play", title: "Award-Winning Student Play", date: "May 22, 2025", image: "/teacher-image.jpg", excerpt: "Original student theatre returning by popular demand." },
  { slug: "tech-innovation-summit", title: "Tech Innovation Summit", date: "June 10, 2025", image: "/nabteb-program.jpg", excerpt: "Industry leaders and students shape the next wave of tech." },
  { slug: "global-entrepreneurship-forum", title: "Global Entrepreneurship Forum", date: "July 03, 2025", image: "/teacher-image.jpg", excerpt: "Founders, funders and faculty in one room." },
  { slug: "sustainable-business-expo", title: "Sustainable Business Expo", date: "August 18, 2025", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", excerpt: "Showcasing companies redefining sustainable commerce." },
];

export const STATS = [
  { value: "2001", label: "Year Established" },
  { value: "TRCN", label: "Licensed & Accredited" },
  { value: "LASU", label: "University Affiliation" },
  { value: "100+", label: "Graduates Annually" },
];