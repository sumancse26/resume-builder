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
            linkedin: "www.linkedin.com/in/suman-iu",
            github: "github.com/sumancse26",
            portfolio: "developer-portfolio-silk-one.vercel.app",
            leetcode: "leetcode.com/u/suman_sarkar"
        },

        about:
            "Frontend and Full Stack Software Engineer with 4+ years of experience in React.js, Next.js, NestJS, Express.js, and PostgreSQL. Skilled in building scalable web applications, responsive UI development, RESTful API design and integration, and enterprise ERP systems. Strong focus on clean code and performance.",

        skills: [
            <><strong>JavaScript</strong></>, <><strong>TypeScript</strong></>, <><strong>React.js</strong></>, <><strong>Next.js</strong></>, <><strong>Redux</strong></>, <><strong>Node.js</strong></>,
            <><strong>Nest.js</strong></>, <><strong>Express.js</strong></>, <><strong>TailwindCSS</strong></>, <><strong>REST APIs</strong></>,
            <><strong>Git</strong></>, <><strong>Docker</strong></>, <><strong>CI/CD</strong></>, <><strong>Prisma</strong></>, <><strong>PostGreSQL</strong></>, <><strong>MySQL</strong></>
        ],

        experience: [
            {
                company: "MononSoft Ltd (A Sister Concern of JMI Group)",
                duration: "Dec 2021 – Present",
                role: "Software Engineer",
                description: [
                    <>Developed ERP modules (<strong>SD, PP, MM, FICO</strong>) with <strong> React.js</strong>.</>,
                    "Built scalable UI using React.js and integrated REST APIs.",
                    "Improved performance and implemented business workflows."
                ]
            }
        ],

        projects: [
            {
                name: "E-learning Platform (Cybernetics IT Ltd)",
                description: "E-learning platform with course management, video streaming, quizzes, user authentication, role based feature management.",
                live: "https://cyberneticsitbd.com/",
                tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Nest.js", "Prisma", "PostgreSQL"]
            },
            {
                name: " Discount Shop (Pagoole)",
                description: "E-commerce app with authentication, manage multiple vendor, product management, order managementand payment integration.",
                live: "https://discountshop.pagoole.com/",
                tech: ["React.js", "Next.js", "Node.js", "Prisma", "PostgreSQL"]
            }
        ],

        education: [
            {
                institute: "Islamic University",
                year: "2018",
                degree: "M.Sc in Computer Science & Engineering (2.76)",
            },
            {
                institute: "Islamic University",
                year: "2017",
                degree: "B.Sc in Computer Science & Engineering (3.04)",
            }
        ],

        training: [
            {
                title: "Web Development with React, Next.js & Prisma",
                institute: "Ostad Ltd, Dhaka",
                description: [
                    "Built scalable React apps.",
                    "Implemented SSR, CSR, and caching with Next.js.",
                    "Developed REST APIs.",
                    "Optimized frontend performance.",
                    "Payment gateway integration with SSL Commerz and AamarPay and bKash."
                ]
            }
        ],

        additionalSkills: [
            <>Develop, maintain, and optimize reusable frontend components using <strong>React.js</strong>, <strong>Redux</strong> and <strong>Next.js</strong> (App Router).</>,
            "Implement responsive and interactive UIs in collaboration with product designers and backend teams.",
            <>Use <strong>TailwindCSS</strong>, CSS, and styling libraries to build clean, scalable UI systems.</>,
            <>Develop backend APIs and services using <strong>Nest.js</strong> and <strong>Express</strong> frameworks.</>,
            "Architect frontend codebases following industry best practices, design patterns, and performance standards.",
            "Work with micro frontends and micro repo/mono repo structures to build large-scale modular applications.",
            "Build and maintain internal design systems and component libraries.",
            <>Utilize <strong>TypeScript</strong> to write readable, maintainable, and strongly typed code.</>,
            "Optimize application performance, SEO, and overall user experience.",
            <>Work with state management libraries (<strong>Redux</strong>) and <strong>TanStack Query</strong> for client/server state synchronization.</>,
            "Maintain high code quality using linting tools, formatting standards, and Git workflows.",
            "Participate in release processes and CI/CD pipelines for smooth deployments.",
            <>A solid foundation on <strong>OOP, Algorithm, Data Structure</strong>, knowledge of <strong>REST APIs</strong>.</>,
            <>Experienced with <strong>PostgreSQL, MongoDB, MySQL, Prisma</strong> <strong>SDLC</strong> and <strong>Agile</strong> methodologies.</>,
            <>Version control with <strong>Git, GitHub</strong>; basic knowledge of <strong>Docker</strong>.</>

        ]
    };

    const Section = ({ title, children }) => (
        <section className="mb-4">
            <h2 className="text-[14px] font-semibold uppercase tracking-wide text-gray-800">
                {title}
            </h2>
            <div className="border-t border-gray-300 mt-1 mb-2"></div>
            {children}
        </section>
    );

    return (
        <div className="bg-gray-100 py-5 flex justify-center font-[Hind_Siliguri]">

            <div className="w-[820px] bg-white px-10 py-2 shadow-sm print:text-[13px]">

                {/* HEADER */}
                <div className="text-center mb-2">
                    <h1 className="text-[24px] font-bold text-gray-900">
                        {resume.name}
                    </h1>
                    <p className="text-[20px] text-gray-600 font-medium">
                        {resume.title}
                    </p>
                </div>

                {/* CONTACT */}
                <div className="flex justify-center gap-6 text-[13px] text-gray-700 mb-2">
                    <a href={`tel:${resume.contact.phone}`} className="text-blue-700">
                        📞 {resume.contact.phone}
                    </a>
                    <a href={`mailto:${resume.contact.email}`} className="text-blue-700">
                        ✉ {resume.contact.email}
                    </a>
                    <span>📍 {resume.contact.location}</span>
                </div>

                <div className="border-t border-gray-200 mb-3"></div>

                {/* SOCIAL */}
                <Section title="Social">
                    <div className="flex flex-wrap gap-4 text-[13px]">
                        <div className="flex items-center gap-1">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                            <a href={`https://${resume.social.linkedin}`} className="text-blue-700">LinkedIn</a>
                        </div>

                        <div className="flex items-center gap-1">
                            <img src="/images/github.png" alt="GitHub" className="w-4 h-4" />
                            <a href={`https://${resume.social.github}`} className="text-blue-700">GitHub</a>
                        </div>
                        <div className="flex items-center gap-1">
                            <a href={`https://${resume.social.portfolio}`} className="text-blue-700">🌐 Portfolio</a>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="/images/leetcode.svg" alt="LeetCode" className="w-4 h-4" />
                            <a href={`https://${resume.social.leetcode}`} className="text-blue-700">LeetCode</a>
                        </div>
                    </div>
                </Section>

                {/* SUMMARY */}
                <Section title="Summary">
                    <p className="text-[13px] leading-snug text-gray-700">
                        {resume.about}
                    </p>
                </Section>

                {/* SKILLS */}
                <Section title="Skills">
                    <div className="flex flex-wrap gap-1">
                        {resume.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-0.5 text-[12.5px] bg-gray-100 border rounded">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Section>

                {/* EXPERIENCE */}
                <Section title="Work Experience">
                    {resume.experience.map((exp, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between text-[13px] text-gray-800">
                                <span>{exp.company}</span>
                                <span>{exp.duration}</span>
                            </div>
                            <h3 className="text-[14px] font-semibold">{exp.role}</h3>
                            <ul className="list-disc ml-5 text-[13px] space-y-0.5">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Section>

                {/* PROJECTS */}
                <Section title="Projects">
                    {resume.projects.map((project, i) => (
                        <div key={i} className="mb-3">
                            <h3 className="text-[14px] font-semibold">{project.name}</h3>
                            <p className="text-[13px] text-gray-700 mb-1">{project.description}</p>

                            <div className="flex gap-4 text-[13px] mb-1">
                                {/* <a href={`${project.github}`} className="text-blue-700">GitHub</a> */}
                                <a href={`${project.live}`} target="_blank" className="text-blue-700">Live Link</a>
                            </div>

                            <div className="flex flex-wrap gap-1">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="px-2 py-0.5 text-[11px] bg-gray-100 border rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </Section>

                {/* TRAINING */}
                <Section title="Training">
                    {resume.training.map((t, i) => (
                        <div key={i} className="mb-3">
                            <h3 className="text-[14px] font-semibold">{t.title}</h3>
                            <p className="text-[12px] text-gray-500 mb-1">{t.institute}</p>
                            <ul className="list-disc ml-5 text-[13px] space-y-0.5">
                                {t.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Section>

                {/* PAGE BREAK */}
                <div className="print:break-before-page print:pt-8">

                    {/* EDUCATION */}
                    <Section title="Education">
                        {resume.education.map((edu, i) => (
                            <div key={i} className="mb-3">
                                <div className="flex justify-between text-[13px] text-gray-600">
                                    <span>{edu.institute}</span>
                                    <span>{edu.year}</span>
                                </div>
                                <h3 className="text-[14px] font-semibold">{edu.degree}</h3>
                                <p className="text-[13px]">{edu.description}</p>
                            </div>
                        ))}
                    </Section>



                    {/* ADDITIONAL SKILLS */}
                    <Section title="Additional Skills">
                        <ul className="list-disc ml-5 text-[13px] space-y-0.5">
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