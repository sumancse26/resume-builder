import { useState } from "react";
import { defaultResume } from "./resumeData";

const Section = ({ title, children }) => (
    <section className="mb-4">
        <h2 className="text-[14px] font-semibold uppercase tracking-wide text-gray-800">
            {title}
        </h2>
        <div className="border-t border-gray-300 mt-1 mb-2"></div>
        {children}
    </section>
);

const EditableText = ({ value, onChange, className = "" }) => (
    <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border border-transparent hover:border-gray-300 focus:border-blue-400 outline-none rounded px-1 -mx-1 bg-transparent ${className}`}
    />
);

const ResumePreview = ({ data, setData }) => {
    const resume = data || defaultResume;
    const [editing, setEditing] = useState(false);

    const update = (patch) => setData({ ...resume, ...patch });
    const updateNested = (section, field, value) =>
        setData({ ...resume, [section]: { ...resume[section], [field]: value } });

    const updateExperience = (index, field, value) => {
        const next = [...resume.experience];
        next[index] = { ...next[index], [field]: value };
        setData({ ...resume, experience: next });
    };

    const updateProject = (index, field, value) => {
        const next = [...resume.projects];
        next[index] = { ...next[index], [field]: value };
        setData({ ...resume, projects: next });
    };

    const downloadPdf = () => window.print();

    return (
        <div className="bg-gray-100 py-5 flex justify-center font-[Hind_Siliguri] print:bg-white print:py-0">

            {/* ACTION BAR */}
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-3 bg-white/90 backdrop-blur border-b px-6 py-2 print:hidden">
                <button
                    onClick={() => setEditing((e) => !e)}
                    className="rounded-md border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    {editing ? "Done Editing" : "Edit Content"}
                </button>
                <button
                    onClick={downloadPdf}
                    className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Download PDF
                </button>
            </div>

            <div className="w-[820px] bg-white px-10 py-2 shadow-sm print:text-[13px] print:shadow-none mt-12 print:mt-0">

                {/* HEADER */}
                <div className="text-center mb-2 mt-5">
                    {editing ? (
                        <div className="space-y-1">
                            <EditableText value={resume.name} onChange={(v) => update({ name: v })}
                                className="text-center text-[24px] font-bold text-gray-900" />
                            <EditableText value={resume.title} onChange={(v) => update({ title: v })}
                                className="text-center text-[18px] text-gray-600 font-medium" />
                        </div>
                    ) : (
                        <>
                            <h1 className="text-[24px] font-bold text-gray-900">{resume.name}</h1>
                            <p className="text-[18px] text-gray-600 font-medium">{resume.title}</p>
                        </>
                    )}
                </div>

                {/* CONTACT */}
                <div className="flex justify-center gap-6 text-[13px] text-gray-700 mb-2 flex-wrap">
                    {editing ? (
                        <div className="grid grid-cols-1 gap-1 w-full max-w-md">
                            <EditableText value={resume.contact.phone} onChange={(v) => updateNested("contact", "phone", v)} />
                            <EditableText value={resume.contact.email} onChange={(v) => updateNested("contact", "email", v)} />
                            <EditableText value={resume.contact.location} onChange={(v) => updateNested("contact", "location", v)} />
                        </div>
                    ) : (
                        <>
                            <a href={`tel:${resume.contact.phone}`} className="text-gray-700 hover:text-blue-700">📞 {resume.contact.phone}</a>
                            <a href={`mailto:${resume.contact.email}`} className="text-gray-700 hover:text-blue-700">✉ {resume.contact.email}</a>
                            <span>📍 {resume.contact.location}</span>
                        </>
                    )}
                </div>

                <div className="border-t border-gray-200 mb-3"></div>

                {/* SOCIAL */}
                <Section title="Social">
                    {editing ? (
                        <div className="grid grid-cols-2 gap-2 text-[13px]">
                            <EditableText value={resume.social.linkedin} onChange={(v) => updateNested("social", "linkedin", v)} />
                            <EditableText value={resume.social.github} onChange={(v) => updateNested("social", "github", v)} />
                            <EditableText value={resume.social.portfolio} onChange={(v) => updateNested("social", "portfolio", v)} />
                            <EditableText value={resume.social.leetcode} onChange={(v) => updateNested("social", "leetcode", v)} />
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-4 text-[13px]">
                            <div className="flex items-center gap-1">
                                <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
                                <a href={`https://${resume.social.linkedin}`} className="text-gray-700 hover:text-blue-700">LinkedIn</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="/images/github.png" alt="GitHub" className="w-4 h-4" />
                                <a href={`https://${resume.social.github}`} className="text-gray-700 hover:text-blue-700">GitHub</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <a href={`https://${resume.social.portfolio}`} className="text-gray-700 hover:text-blue-700">🌐 Portfolio</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="/images/leetcode.svg" alt="LeetCode" className="w-4 h-4" />
                                <a href={`https://${resume.social.leetcode}`} className="text-gray-700 hover:text-blue-700">LeetCode</a>
                            </div>
                        </div>
                    )}
                </Section>

                {/* SUMMARY */}
                <Section title="Summary">
                    {editing ? (
                        <textarea value={resume.about} onChange={(e) => update({ about: e.target.value })} rows={4}
                            className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-blue-400" />
                    ) : (
                        <p className="text-[13px] leading-snug text-gray-700">{resume.about}</p>
                    )}
                </Section>

                {/* SKILLS */}
                <Section title="Skills">
                    {editing ? (
                        <textarea value={(resume.skills || []).join(", ")} onChange={(e) => update({ skills: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} rows={2}
                            className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-blue-400" />
                    ) : (
                        <div className="flex flex-wrap gap-1">
                            {(resume.skills || []).map((skill, i) => (
                                <span key={i} className="px-2 py-0.5 text-[12.5px] bg-gray-100 border border-gray-200 rounded text-gray-800">{skill}</span>
                            ))}
                        </div>
                    )}
                </Section>

                {/* EXPERIENCE */}
                <Section title="Work Experience">
                    {(resume.experience || []).map((exp, i) => (
                        <div key={i} className="mb-3">
                            {editing ? (
                                <div className="space-y-1">
                                    <EditableText value={exp.company} onChange={(v) => updateExperience(i, "company", v)} className="font-semibold" />
                                    <EditableText value={exp.role} onChange={(v) => updateExperience(i, "role", v)} className="text-[14px] font-semibold text-gray-900" />
                                    <EditableText value={exp.duration} onChange={(v) => updateExperience(i, "duration", v)} className="text-[13px] text-gray-600" />
                                    <textarea value={(exp.description || []).join("\n")} onChange={(e) => updateExperience(i, "description", e.target.value.split("\n"))} rows={3}
                                        className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-blue-400" />
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-between text-[13px] text-gray-800">
                                        <span className="font-semibold">{exp.company}</span>
                                        <span className="text-gray-600">{exp.duration}</span>
                                    </div>
                                    <h3 className="text-[14px] font-semibold text-gray-900">{exp.role}</h3>
                                    <ul className="list-disc ml-5 text-[13px] space-y-0.5 text-gray-700">
                                        {(exp.description || []).map((desc, di) => (<li key={di}>{desc}</li>))}
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}
                </Section>

                {/* PROJECTS */}
                <Section title="Projects">
                    {(resume.projects || []).map((project, i) => (
                        <div key={i} className="mb-3">
                            {editing ? (
                                <div className="space-y-1">
                                    <EditableText value={project.name} onChange={(v) => updateProject(i, "name", v)} className="text-[14px] font-semibold text-gray-900" />
                                    <textarea value={project.description} onChange={(e) => updateProject(i, "description", e.target.value)} rows={3}
                                        className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-blue-400" />
                                    <EditableText value={project.live || ""} onChange={(v) => updateProject(i, "live", v)} className="text-[13px]" />
                                    <EditableText value={project.credentials || ""} onChange={(v) => updateProject(i, "credentials", v)} className="text-[13px]" />
                                    <EditableText value={(project.tech || []).join(", ")} onChange={(v) => updateProject(i, "tech", v.split(",").map((t) => t.trim()).filter(Boolean))} className="text-[13px]" />
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-[14px] font-semibold text-gray-900">{project.name}</h3>
                                    <p className="text-[13px] text-gray-700 mb-1">{project.description}</p>
                                    <div className="flex flex-wrap gap-4 text-[13px] mb-1">
                                        {project.live && (
                                            <a href={`${project.live}`} target="_blank" rel="noreferrer" className="text-blue-700 underline hover:text-blue-800">Live Link</a>
                                        )}
                                        {project.credentials && (
                                            <span className="text-gray-600">Credentials: {project.credentials}</span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {(project.tech || []).map((tech, index) => (
                                            <span key={index} className="px-2 py-0.5 text-[11px] bg-gray-100 border border-gray-200 rounded text-gray-800">{tech}</span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </Section>

                {/* TRAINING (starts on page 2) */}
                <div className="training-page-break">
                    <Section title="Training">
                        {(resume.training || []).map((t, i) => (
                            <div key={i} className="mb-3">
                                {editing ? (
                                    <div className="space-y-1">
                                        <EditableText value={t.title} onChange={(v) => {
                                            const next = [...resume.training]; next[i] = { ...next[i], title: v }; setData({ ...resume, training: next });
                                        }} className="text-[14px] font-semibold text-gray-900" />
                                        <EditableText value={t.institute} onChange={(v) => {
                                            const next = [...resume.training]; next[i] = { ...next[i], institute: v }; setData({ ...resume, training: next });
                                        }} className="text-[12px] text-gray-600" />
                                        <textarea value={(t.description || []).join("\n")} onChange={(e) => {
                                            const next = [...resume.training]; next[i] = { ...next[i], description: e.target.value.split("\n") }; setData({ ...resume, training: next });
                                        }} rows={3}
                                            className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-blue-400" />
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-[14px] font-semibold text-gray-900">{t.title}</h3>
                                        <p className="text-[12px] text-gray-600 mb-1">{t.institute}</p>
                                        <ul className="list-disc ml-5 text-[13px] space-y-0.5 text-gray-700">
                                            {(t.description || []).map((item, index) => (<li key={index}>{item}</li>))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </Section>
                </div>

                {/* EDUCATION + ADDITIONAL SKILLS */}
                <div className="print:pt-0">
                    <Section title="Education">
                        {(resume.education || []).map((edu, i) => (
                            <div key={i} className="mb-3">
                                {editing ? (
                                    <div className="space-y-1">
                                        <EditableText value={edu.institute} onChange={(v) => {
                                            const next = [...resume.education]; next[i] = { ...next[i], institute: v }; setData({ ...resume, education: next });
                                        }} className="text-[13px] text-gray-600" />
                                        <EditableText value={edu.year} onChange={(v) => {
                                            const next = [...resume.education]; next[i] = { ...next[i], year: v }; setData({ ...resume, education: next });
                                        }} className="text-[13px] text-gray-600" />
                                        <EditableText value={edu.degree} onChange={(v) => {
                                            const next = [...resume.education]; next[i] = { ...next[i], degree: v }; setData({ ...resume, education: next });
                                        }} className="text-[14px] font-semibold text-gray-900" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex justify-between text-[13px] text-gray-600">
                                            <span>{edu.institute}</span>
                                            <span>{edu.year}</span>
                                        </div>
                                        <h3 className="text-[14px] font-semibold text-gray-900">{edu.degree}</h3>
                                    </>
                                )}
                            </div>
                        ))}
                    </Section>

                    <Section title="Additional Skills">
                        {editing ? (
                            <textarea value={(resume.additionalSkills || []).join("\n")} onChange={(e) => update({ additionalSkills: e.target.value.split("\n").filter(Boolean) })} rows={10}
                                className="w-full border border-gray-300 rounded p-2 text-[13px] outline-none focus:border-blue-400" />
                        ) : (
                            <ul className="list-disc ml-5 text-[13px] space-y-0.5 text-gray-700">
                                {(resume.additionalSkills || []).map((skill, i) => (<li key={i}>{skill}</li>))}
                            </ul>
                        )}
                    </Section>
                </div>

            </div>
        </div>
    );
};

export default ResumePreview;
