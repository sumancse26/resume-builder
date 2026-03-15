const ResumePreview = () => {

    const resume = {
        name: "MD. SUMAN SARKAR",
        title: "Software Engineer",

        contact: {
            phone: "+8801796844288",
            email: "suman.iu32@gmail.com",
            location: "Dhaka, Bangladesh"
        },

        social: {
            linkedin: "linkedin.com/in/suman",
            github: "github.com/suman",
            portfolio: "suman.dev",
            leetcode: "leetcode.com/suman"
        },

        about:
            "Software Engineer with 4+ years of experience designing scalable web applications and enterprise ERP systems. Skilled in React.js, Next.js, Node.js and Laravel. Experienced in building reusable UI components, REST APIs, and improving system performance.",

        skills: [
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Node.js",
            "Nest.js",
            "Laravel",
            "TailwindCSS",
            "REST APIs",
            "Git",
            "Docker",
            "MySQL"
        ],

        experience: [
            {
                company: "MononSoft Ltd",
                duration: "Dec 2021 – Present",
                role: "Software Engineer",
                description:
                    "Developed ERP modules using React.js and Laravel including Production Planning (PP), Material Management (MM), and FICO modules. Built reusable frontend components and collaborated with backend teams to design scalable REST APIs."
            }
        ],

        projects: [
            {
                name: "ERP Management System",
                description:
                    "Enterprise resource planning system for production planning, inventory management, and finance operations.",
                github: "github.com/suman/erp-system",
                live: "erp-demo.vercel.app",
                tech: ["React.js", "Node.js", "Laravel", "MySQL"]
            },
            {
                name: "E-Commerce Web Application",
                description:
                    "Full-stack e-commerce platform with authentication, product management, and payment integration.",
                github: "github.com/suman/ecommerce-app",
                live: "ecommerce-demo.vercel.app",
                tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"]
            }
        ],

        education: [
            {
                institute: "Islamic University",
                year: "2018",
                degree: "M.Sc in Computer Science & Engineering",
                description:
                    "Focused on advanced software engineering, distributed systems and modern development practices."
            },
            {
                institute: "Islamic University",
                year: "2017",
                degree: "B.Sc in Computer Science & Engineering",
                description:
                    "Studied algorithms, operating systems, databases and modern web development."
            }
        ],

        training: [
            {
                title: "Web Development with React, Next.js & Prisma",
                institute: "Ostad Ltd, Dhaka",
                description: [
                    "Built scalable React applications using reusable component architecture",
                    "Implemented server-side rendering using Next.js",
                    "Designed REST APIs and backend services with modern development practices",
                    "Optimized performance and improved frontend architecture"
                ]
            }
        ],

        additionalSkills: [
            "Strong foundation in Object-Oriented Programming (OOP), Algorithms, and Data Structures",
            "Knowledge of Web Services such as REST / JSON APIs",
            "Experienced with Node.js, TypeScript, React.js, Express.js, Redux, Tailwind CSS, Bootstrap",
            "Experience working with PostgreSQL, MongoDB, and MySQL",
            "Experience with Software Development Life Cycle (SDLC) and Agile methodologies",
            "Experience using version control systems such as Git, Bitbucket, and GitHub",
            "Basic knowledge of cloud platforms like AWS",
            "Knowledge of DevOps principles",
            "Ability to work independently with minimal supervision",
            "Strong problem-solving and proactive mindset"
        ]
    };

    const Section = ({ title, children }) => (
        <section className="mb-5">

            <h2 className="text-[16px] font-semibold uppercase tracking-wide text-gray-800">
                {title}
            </h2>

            <div className="border-t border-gray-300 mt-1 mb-3"></div>

            {children}

        </section>
    );

    return (
        <div className="bg-gray-100 py-12 flex justify-center font-[Hind_Siliguri]">

            <div className="w-[820px] bg-white px-12 py-10 shadow-sm print:shadow-none">

                {/* HEADER */}

                <div className="text-center mb-2">

                    <h1 className="text-[32px] font-bold tracking-wide text-gray-900">
                        {resume.name}
                    </h1>

                    <p className="text-[20px] text-gray-600 font-medium">
                        {resume.title}
                    </p>

                </div>

                {/* CONTACT */}

                <div className="flex justify-center gap-10 text-[14px] text-gray-700 mb-2">

                    <a href={`tel:${resume.contact.phone}`} className="hover:underline text-blue-700">
                        📞 {resume.contact.phone}
                    </a>

                    <a href={`mailto:${resume.contact.email}`} className="hover:underline text-blue-700">
                        ✉ {resume.contact.email}
                    </a>

                    <span>📍 {resume.contact.location}</span>

                </div>

                <div className="border-t border-gray-200 mb-3"></div>

                {/* SOCIAL */}

                <Section title="Social">

                    <div className="flex flex-wrap gap-8 text-[14px]">

                        <a href={`https://${resume.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                            🔗 {resume.social.linkedin}
                        </a>

                        <a href={`https://${resume.social.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                            💻 {resume.social.github}
                        </a>

                        <a href={`https://${resume.social.portfolio}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                            🌐 {resume.social.portfolio}
                        </a>

                        <a href={`https://${resume.social.leetcode}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                            🧠 {resume.social.leetcode}
                        </a>

                    </div>

                </Section>

                {/* ABOUT */}

                <Section title="About Me">
                    <p className="text-[14px] leading-relaxed text-gray-700">
                        {resume.about}
                    </p>
                </Section>

                {/* SKILLS */}

                <Section title="Skills">
                    <div className="flex flex-wrap gap-2">
                        {resume.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 text-[13px] bg-gray-100 border border-gray-200 rounded-md">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Section>

                {/* EXPERIENCE */}

                <Section title="Work Experience">
                    {resume.experience.map((exp, i) => (
                        <div key={i} className="mb-4">

                            <div className="flex justify-between text-[14px] text-gray-600">
                                <span>{exp.company}</span>
                                <span>{exp.duration}</span>
                            </div>

                            <h3 className="text-[15px] font-semibold text-gray-900">
                                {exp.role}
                            </h3>

                            <p className="text-[14px] text-gray-700 leading-relaxed">
                                {exp.description}
                            </p>

                        </div>
                    ))}
                </Section>

                {/* PROJECTS */}

                <Section title="Projects">

                    {resume.projects.map((project, i) => (
                        <div key={i} className="mb-4">

                            <h3 className="text-[15px] font-semibold text-gray-900">
                                {project.name}
                            </h3>

                            <p className="text-[14px] text-gray-700 mb-1">
                                {project.description}
                            </p>

                            <div className="flex gap-6 text-[13px] mb-2">

                                <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    💻 GitHub
                                </a>

                                <a href={`https://${project.live}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                    🌐 Live Demo
                                </a>

                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 text-[12px] bg-gray-100 border border-gray-200 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </Section>

                {/* PAGE BREAK */}

                <div className="print:break-before-page print:pt-20">

                    {/* EDUCATION */}

                    <Section title="Education">
                        {resume.education.map((edu, i) => (
                            <div key={i} className="mb-4">

                                <div className="flex justify-between text-[14px] text-gray-600">
                                    <span>{edu.institute}</span>
                                    <span>{edu.year}</span>
                                </div>

                                <h3 className="text-[15px] font-semibold text-gray-900">
                                    {edu.degree}
                                </h3>

                                <p className="text-[14px] text-gray-700">
                                    {edu.description}
                                </p>

                            </div>
                        ))}
                    </Section>

                    {/* TRAINING */}

                    <Section title="Training">
                        {resume.training.map((t, i) => (
                            <div key={i} className="mb-4">

                                <h3 className="text-[15px] font-semibold text-gray-900">
                                    {t.title}
                                </h3>

                                <p className="text-[13px] text-gray-500 mb-1">
                                    {t.institute}
                                </p>

                                <ul className="list-disc ml-6 text-[14px] space-y-1 text-gray-700">
                                    {t.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </Section>

                    {/* ADDITIONAL SKILLS */}

                    <Section title="Additional Skills">
                        <ul className="list-disc ml-6 text-[14px] space-y-1 text-gray-700">
                            {resume.additionalSkills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </Section>

                </div>

            </div>

        </div>
    );
};

export default ResumePreview;