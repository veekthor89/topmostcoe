// Data extracted from edukate.framer.website scrape

export const SITE = {
  name: "Edukate University",
  tagline: "Empowering Futures Since 1890",
  phone: "+1 (800) 123-4567",
  email: "info@Edukateuniversity.edu",
  address: "123 University Lane, New City, California, USA",
};

export type Program = {
  slug: string;
  title: string;
  image: string;
  category: "Undergraduate" | "Professional" | "Technology" | "Online";
  blurb: string;
};

export const PROGRAMS: Program[] = [
  { slug: "b-sc-in-computer-science", title: "B.Sc. in Computer Science", image: "https://framerusercontent.com/images/Ka1bJBny9syIl3hNTfDdIjrXrI.png", category: "Technology", blurb: "Strong foundation in programming, data structures, algorithms and modern computing." },
  { slug: "bba-in-marketing", title: "BBA in Marketing", image: "https://framerusercontent.com/images/ev9CvHUA8C8q2XIZGRHP0vWBXWk.png", category: "Undergraduate", blurb: "Master modern marketing strategy, consumer behavior and brand leadership." },
  { slug: "ll-b-bachelor-of-laws", title: "LL.B (Bachelor of Laws)", image: "https://framerusercontent.com/images/SmMXkMeL4PGRHcCrq8IrGvZE0g.png", category: "Professional", blurb: "Comprehensive legal education with practical advocacy training." },
  { slug: "b-sc-in-public-health", title: "B.Sc. in Public Health", image: "https://framerusercontent.com/images/f8CAMd3kts006FQ9QDIISgZWG8.png", category: "Undergraduate", blurb: "Address modern health challenges through evidence-based practice." },
  { slug: "b-a-in-english-literature", title: "B.A. in English Literature", image: "https://framerusercontent.com/images/7JyxFzbhwLWHTHMjN0jThMbL1Q.png", category: "Undergraduate", blurb: "Explore literature, criticism and creative writing across cultures." },
  { slug: "b-sc-in-biotechnology", title: "B.Sc. in Biotechnology", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", category: "Technology", blurb: "Bridge biology and technology to innovate in healthcare and agriculture." },
  { slug: "b-sc-in-electrical-engineering", title: "B.Sc. in Electrical Engineering", image: "https://framerusercontent.com/images/kp1vlrAOAXV8X6W8fUI17liwdA.png", category: "Technology", blurb: "Design and build the electrical systems that power tomorrow." },
  { slug: "b-a-in-psychology", title: "B.A. in Psychology", image: "https://framerusercontent.com/images/MY9oljZl07K9qZQcTot9CaYruU.png", category: "Undergraduate", blurb: "Understand the human mind through research, clinical and applied psychology." },
  { slug: "b-sc-in-cybersecurity", title: "B.Sc. in Cybersecurity", image: "https://framerusercontent.com/images/loscw1ZBnmCGM9cGy1sS4AhX7EA.png", category: "Technology", blurb: "Defend critical systems from evolving cyber threats." },
  { slug: "b-sc-in-data-science", title: "B.Sc. in Data Science", image: "https://framerusercontent.com/images/EU9Lyg6JKFiBn2rzVX9nNYq61ik.png", category: "Technology", blurb: "Turn data into insight with statistics, ML and visualization." },
  { slug: "b-sc-in-artificial-intelligence", title: "B.Sc. in Artificial Intelligence", image: "https://framerusercontent.com/images/I9jq7IPQ7TtkNw240huBZM29vZ4.jpg", category: "Technology", blurb: "Shape the future of intelligent systems and applied AI." },
  { slug: "b-sc-in-software-engineering", title: "B.Sc. in Software Engineering", image: "https://framerusercontent.com/images/K7oUH6zJ9duT6M0WS7UpQ6cGm5s.png", category: "Technology", blurb: "Engineer scalable, reliable software for real-world impact." },
  { slug: "master-of-business-administration", title: "Master of Business Administration", image: "https://framerusercontent.com/images/Ka1bJBny9syIl3hNTfDdIjrXrI.png", category: "Professional", blurb: "Advance to senior leadership with our flagship MBA program." },
  { slug: "executive-program-in-business", title: "Executive Program in Business", image: "https://framerusercontent.com/images/ev9CvHUA8C8q2XIZGRHP0vWBXWk.png", category: "Professional", blurb: "Intensive program for working executives ready for the next step." },
  { slug: "educational-leadership-online", title: "Educational Leadership (Online)", image: "https://framerusercontent.com/images/SmMXkMeL4PGRHcCrq8IrGvZE0g.png", category: "Online", blurb: "Lead change in schools and educational organizations — fully online." },
  { slug: "diploma-in-digital-marketing", title: "Diploma in Digital Marketing", image: "https://framerusercontent.com/images/f8CAMd3kts006FQ9QDIISgZWG8.png", category: "Online", blurb: "Master SEO, social, paid media and analytics in one focused diploma." },
  { slug: "online-certification-in-data", title: "Online Certification in Data", image: "https://framerusercontent.com/images/7JyxFzbhwLWHTHMjN0jThMbL1Q.png", category: "Online", blurb: "Practical data analysis credential you can complete on your schedule." },
  { slug: "certificate-in-project-management", title: "Certificate in Project Management", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", category: "Professional", blurb: "Plan, execute and deliver complex projects with confidence." },
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
  { slug: "climate-solutions", title: "Climate Solutions Driving the Next Decade", date: "Mar 18, 2025", image: "https://framerusercontent.com/images/luVIdrO0w0Yq6ufqymfoO2maDAw.png", excerpt: "Edukate researchers unveil a roadmap for scalable climate solutions." },
  { slug: "energy-efficiency", title: "Breakthroughs in Energy Efficiency", date: "Mar 02, 2025", image: "https://framerusercontent.com/images/HUZa3FT5X6SynWllviBSNe9ldZ8.png", excerpt: "A new lab pushes building energy use to record lows." },
  { slug: "environmental-impact", title: "Measuring Our Environmental Impact", date: "Feb 21, 2025", image: "https://framerusercontent.com/images/YhMGo78KsMrUeJnprF1NJBOMyA.png", excerpt: "How the campus reached carbon-neutral operations." },
  { slug: "green-technology", title: "Green Technology on Campus", date: "Feb 10, 2025", image: "https://framerusercontent.com/images/Ka1bJBny9syIl3hNTfDdIjrXrI.png", excerpt: "Student-led startups bringing green tech to market." },
  { slug: "renewable-resources", title: "Investing in Renewable Resources", date: "Jan 28, 2025", image: "https://framerusercontent.com/images/ev9CvHUA8C8q2XIZGRHP0vWBXWk.png", excerpt: "New endowment fund accelerates renewable research." },
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
  { slug: "student-startup-pitch-competition", title: "Student Startup Pitch Competition", date: "January 22, 2025", image: "https://framerusercontent.com/images/luVIdrO0w0Yq6ufqymfoO2maDAw.png", excerpt: "Top student founders compete for seed funding and mentorship." },
  { slug: "international-fashion-parade", title: "International Fashion Parade", date: "May 22, 2025", image: "https://framerusercontent.com/images/HUZa3FT5X6SynWllviBSNe9ldZ8.png", excerpt: "A celebration of cultural style from 50+ countries." },
  { slug: "award-winning-student-play", title: "Award-Winning Student Play", date: "May 22, 2025", image: "https://framerusercontent.com/images/YhMGo78KsMrUeJnprF1NJBOMyA.png", excerpt: "Original student theatre returning by popular demand." },
  { slug: "tech-innovation-summit", title: "Tech Innovation Summit", date: "June 10, 2025", image: "https://framerusercontent.com/images/Ka1bJBny9syIl3hNTfDdIjrXrI.png", excerpt: "Industry leaders and students shape the next wave of tech." },
  { slug: "global-entrepreneurship-forum", title: "Global Entrepreneurship Forum", date: "July 03, 2025", image: "https://framerusercontent.com/images/ev9CvHUA8C8q2XIZGRHP0vWBXWk.png", excerpt: "Founders, funders and faculty in one room." },
  { slug: "sustainable-business-expo", title: "Sustainable Business Expo", date: "August 18, 2025", image: "https://framerusercontent.com/images/SgQPOC1lvcPZAilklIFONMPEFw.png", excerpt: "Showcasing companies redefining sustainable commerce." },
];

export const STATS = [
  { value: "42,000+", label: "Students Trust Us" },
  { value: "50+", label: "Countries Represented" },
  { value: "120+", label: "Programs Offered" },
  { value: "20+", label: "Research Centers" },
];
