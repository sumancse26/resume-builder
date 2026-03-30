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
            "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js",
            "Nest.js", "Express", "TailwindCSS", "REST APIs",
            "Git", "Docker", "CI/CD", "PostGreSQL", "MySQL"
        ],

        experience: [
            {
                company: "MononSoft Ltd",
                duration: "Dec 2021 – Present",
                role: "Software Engineer",
                description: [
                    "Developed ERP modules (PP, MM, FICO).",
                    "Built scalable UI using React.js and integrated REST APIs.",
                    "Improved performance and implemented business workflows."
                ]
            }
        ],

        projects: [
            {
                name: "ERP Management System",
                description: "Full-stack ERP system for production, inventory, and finance with optimized database performance.",
                github: "github.com/suman/erp-system",
                live: "erp-demo.vercel.app",
                tech: ["React.js", "Node.js", "Laravel", "MySQL"]
            },
            {
                name: "E-Commerce Web Application",
                description: "E-commerce app with authentication, product management, and payment integration.",
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
                description: "Advanced software engineering and system design."
            },
            {
                institute: "Islamic University",
                year: "2017",
                degree: "B.Sc in Computer Science & Engineering",
                description: "Core CS fundamentals including algorithms and databases."
            }
        ],

        training: [
            {
                title: "Web Development with React, Next.js & Prisma",
                institute: "Ostad Ltd, Dhaka",
                description: [
                    "Built scalable React apps",
                    "Implemented SSR with Next.js",
                    "Developed REST APIs",
                    "Optimized frontend performance"
                ]
            }
        ],

        additionalSkills: [
            "OOP, Data Structures, Algorithms",
            "REST APIs & client-server architecture",
            "PostgreSQL, MongoDB, MySQL",
            "Git, GitHub, Bitbucket",
            "AWS basics & DevOps workflows"
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
        <div className="bg-gray-100 py-10 flex justify-center font-[Hind_Siliguri]">

            <div className="w-[820px] bg-white px-10 py-8 shadow-sm print:text-[13px]">

                {/* HEADER */}
                <div className="text-center mb-2">
                    <h1 className="text-[28px] font-bold text-gray-900">
                        {resume.name}
                    </h1>
                    <p className="text-[18px] text-gray-600 font-medium">
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
                    <div className="flex flex-wrap gap-1 text-[13px]">
                        <a href={`https://${resume.social.linkedin}`} className="text-blue-700">🔗 LinkedIn</a>
                        <a href={`https://${resume.social.github}`} className="text-blue-700">💻 GitHub</a>
                        <a href={`https://${resume.social.portfolio}`} className="text-blue-700">🌐 Portfolio</a>
                        <a href={`https://${resume.social.leetcode}`} className="text-blue-700">🧠 LeetCode</a>
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
                            <span key={i} className="px-2 py-0.5 text-[12px] bg-gray-100 border rounded">
                                {skill}
                            </span>
                        ))}
                    </div>
                </Section>

                {/* EXPERIENCE */}
                <Section title="Work Experience">
                    {resume.experience.map((exp, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between text-[13px] text-gray-600">
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

                            <div className="flex gap-4 text-[12px] mb-1">
                                <a href={`https://${project.github}`} className="text-blue-700">GitHub</a>
                                <a href={`https://${project.live}`} className="text-blue-700">Live</a>
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