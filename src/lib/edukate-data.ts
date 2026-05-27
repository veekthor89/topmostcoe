// Data extracted from edukate.framer.website scrape

export const SITE = {
  name: "TOPCOED",
  tagline: "Accredited. Affiliated. Trusted.",
  phone: "08037204088, 08033183854",
  email: "info@topmost.edu",
  address: "Ipaja/Agbado, Lagos",
};

export type Program = {
  slug: string;
  title: string;
  image: string;
  category: "Vocational" | "Postgraduate" | "Degree" | "Online" | "Certificate" | "B.Sc / B.A / B.Ed Education" | "NCE" | "PDE" | "NABTEB";
  blurb: string;
};

export const PROGRAMS: Program[] = [
  { slug: "b-sc-in-computer-science", title: "B.Sc / B.A / B.Ed Education (LASU Sandwich)", image: "/nabteb-program.jpg", category: "B.Sc / B.A / B.Ed Education", blurb: "LASU-affiliated sandwich degree in Science Education. \nChoose from Biology, Chemistry, Mathematics, Physics, Computer \nScience Education, Educational Technology, Health Education, \nPhysical & Health Education, Geography, Accounting Education, \nBusiness Education, Economics Education, or Political Science \nEducation." },
  { slug: "bba-in-marketing", title: "NCE (Nigeria Certificate in Education)", image: "/teacher-image.jpg", category: "NCE", blurb: "Dual-subject NCE in Science Education. Combinations include \nBiology/Integrated Science, Biology/Mathematics, Biology/Social \nStudies, Computer Science/Mathematics, Computer Science/Biology, \nand Computer Science/Economics/English." },
  { slug: "ll-b-bachelor-of-laws", title: "Professional Diploma in Education (PDE)", image: "/library-program.jpg", category: "PDE", blurb: "For nurses, healthcare professionals, military and \nparamilitary personnel with a B.Sc in Nursing or HND in \nHealth-Related fields. Earn a TRCN-recognised teaching \nqualification without leaving your profession" },
  { slug: "b-sc-in-public-health", title: "NABTEB O & A Levels", image: "/english-program.jpg", category: "NABTEB", blurb: "Full and part-time NABTEB O Level preparation across \nNational Business Certificate (NBC) and National Technical \nCertificate (NTC). All trades available. Examination diets: \nMay/June & November/December." },
  { slug: "b-a-in-english-literature", title: "B.A Education — Arts & Humanities", image: "https://framerusercontent.com/images/7JyxFzbhwLWHTHMjN0jThMbL1Q.png", category: "B.Sc / B.A / B.Ed Education", blurb: "LASU-affiliated sandwich degree in Arts Education. Subject \noptions include English Language Education, History, French, \nChristian Religious Studies, Islamic Religious Studies, \nYoruba, and Arabic." },
  { slug: "b-sc-in-biotechnology", title: "B.Ed Early Childhood & Primary Education", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Professional B.Ed degree in Early Childhood and Primary \nEducation in affiliation with Lagos State University, Ojo. \nDesigned for educators committed to foundational and early \nyears teaching." },
  { slug: "b-sc-in-electrical-engineering", title: "B.Ed Educational Management & Guidance", image: "https://framerusercontent.com/images/kp1vlrAOAXV8X6W8fUI17liwdA.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Two B.Ed pathways Educational Management for aspiring \nschool administrators, and Guidance & Counselling Education \nfor educators supporting student wellbeing. LASU-affiliated \nsandwich programme." },
  { slug: "b-a-in-psychology", title: "NCE  Arts & Social Sciences", image: "https://framerusercontent.com/images/MY9oljZl07K9qZQcTot9CaYruU.png", category: "NCE", blurb: "Dual-subject NCE in Science Education. Combinations include \nBiology/Integrated Science, Biology/Mathematics, Biology/Social \nStudies, Computer Science/Mathematics, Computer Science/Biology, \nand Computer Science/Economics/English." },
  { slug: "b-sc-in-cybersecurity", title: "B.Sc. in Cybersecurity", image: "https://framerusercontent.com/images/loscw1ZBnmCGM9cGy1sS4AhX7EA.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Defend critical systems from evolving cyber threats." },
  { slug: "b-sc-in-data-science", title: "B.Sc. in Data Science", image: "https://framerusercontent.com/images/EU9Lyg6JKFiBn2rzVX9nNYq61ik.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Turn data into insight with statistics, ML and visualization." },
  { slug: "b-sc-in-artificial-intelligence", title: "B.Sc. in Artificial Intelligence", image: "https://framerusercontent.com/images/I9jq7IPQ7TtkNw240huBZM29vZ4.jpg", category: "B.Sc / B.A / B.Ed Education", blurb: "Shape the future of intelligent systems and applied AI." },
  { slug: "b-sc-in-software-engineering", title: "B.Sc. in Software Engineering", image: "https://framerusercontent.com/images/K7oUH6zJ9duT6M0WS7UpQ6cGm5s.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Engineer scalable, reliable software for real-world impact." },
  { slug: "master-of-business-administration", title: "Master of Business Administration", image: "/nabteb-program.jpg", category: "PDE", blurb: "Advance to senior leadership with our flagship MBA program." },
  { slug: "executive-program-in-business", title: "Executive Program in Business", image: "/teacher-image.jpg", category: "PDE", blurb: "Intensive program for working executives ready for the next step." },
  { slug: "educational-leadership-online", title: "Educational Leadership (Online)", image: "/library-program.jpg", category: "B.Sc / B.A / B.Ed Education", blurb: "Lead change in schools and educational organizations — fully online." },
  { slug: "diploma-in-digital-marketing", title: "Diploma in Digital Marketing", image: "/english-program.jpg", category: "B.Sc / B.A / B.Ed Education", blurb: "Master SEO, social, paid media and analytics in one focused diploma." },
  { slug: "online-certification-in-data", title: "Online Certification in Data", image: "https://framerusercontent.com/images/7JyxFzbhwLWHTHMjN0jThMbL1Q.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Practical data analysis credential you can complete on your schedule." },
  { slug: "certificate-in-project-management", title: "Certificate in Project Management", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", category: "PDE", blurb: "Plan, execute and deliver complex projects with confidence." },
  { slug: "certification-in-ux-ui-design", title: "Certification in UX/UI Design", image: "https://framerusercontent.com/images/kp1vlrAOAXV8X6W8fUI17liwdA.png", category: "B.Sc / B.A / B.Ed Education", blurb: "Design products people love through research-led UX practice." },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export const NEWS: Post[] = [
  { slug: "climate-solutions", title: "2026/2027 Admission Forms Now Available", date: "May 18, 2026", image: "/admissions-student.png", excerpt: "Application forms are now on sale for all programes. Visit the admissions office or apply online." },
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
  { slug: "international-fashion-parade", title: "NABTEB Examination — Nov/Dec Diet", date: "Feb 12, 2026", image: "/nabteb-exam.png", excerpt: "Examination period for all NABTEB registered candidates at our approved centre." },
  { slug: "award-winning-student-play", title: "TRCN CBT/PQEI Examination", date: "Jan 04, 2026", image: "/trcn-logo.png", excerpt: "On-site CBT preparation and examination sitting for TRCN Certified candidates." },
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