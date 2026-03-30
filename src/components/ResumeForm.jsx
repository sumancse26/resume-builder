import React from "react";

export default function ResumeForm({ data, setData }) {

    // ✅ fallback safe data
    const safeData = data || {
        name: "",
        title: "",
        contact: { phone: "", email: "", location: "" },
        social: { linkedin: "", github: "", portfolio: "", leetcode: "" },
        about: "",
        skills: [],
        experience: [],
        additionalSkills: []
    };

    // Handle top-level fields
    const handleChange = (e) => {
        setData({ ...safeData, [e.target.name]: e.target.value });
    };

    // Handle nested fields
    const handleNestedChange = (section, field, value) => {
        setData({
            ...safeData,
            [section]: {
                ...safeData[section],
                [field]: value
            }
        });
    };

    // Handle array fields
    const handleArrayChange = (field, value) => {
        setData({
            ...safeData,
            [field]: value.split(",").map(item => item.trim())
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
            <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow">

                <h2 className="text-2xl font-bold mb-6">
                    Resume Information
                </h2>

                {/* BASIC INFO */}
                <section className="mb-6">
                    <h3 className="font-semibold mb-3">Basic Info</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            name="name"
                            value={safeData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="input"
                        />

                        <input
                            name="title"
                            value={safeData.title}
                            onChange={handleChange}
                            placeholder="Job Title"
                            className="input"
                        />
                    </div>
                </section>

                {/* CONTACT */}
                <section className="mb-6">
                    <h3 className="font-semibold mb-3">Contact</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            value={safeData.contact?.phone || ""}
                            onChange={(e) => handleNestedChange("contact", "phone", e.target.value)}
                            placeholder="Phone"
                            className="input"
                        />

                        <input
                            value={safeData.contact?.email || ""}
                            onChange={(e) => handleNestedChange("contact", "email", e.target.value)}
                            placeholder="Email"
                            className="input"
                        />

                        <input
                            value={safeData.contact?.location || ""}
                            onChange={(e) => handleNestedChange("contact", "location", e.target.value)}
                            placeholder="Location"
                            className="input md:col-span-2"
                        />
                    </div>
                </section>

                {/* SOCIAL */}
                <section className="mb-6">
                    <h3 className="font-semibold mb-3">Social Links</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            value={safeData.social?.linkedin || ""}
                            onChange={(e) => handleNestedChange("social", "linkedin", e.target.value)}
                            placeholder="LinkedIn"
                            className="input"
                        />

                        <input
                            value={safeData.social?.github || ""}
                            onChange={(e) => handleNestedChange("social", "github", e.target.value)}
                            placeholder="GitHub"
                            className="input"
                        />

                        <input
                            value={safeData.social?.portfolio || ""}
                            onChange={(e) => handleNestedChange("social", "portfolio", e.target.value)}
                            placeholder="Portfolio"
                            className="input"
                        />

                        <input
                            value={safeData.social?.leetcode || ""}
                            onChange={(e) => handleNestedChange("social", "leetcode", e.target.value)}
                            placeholder="LeetCode"
                            className="input"
                        />
                    </div>
                </section>

                {/* SUMMARY */}
                <section className="mb-6">
                    <h3 className="font-semibold mb-3">Summary</h3>

                    <textarea
                        value={safeData.about || ""}
                        onChange={(e) => setData({ ...safeData, about: e.target.value })}
                        rows="4"
                        className="input w-full"
                    />
                </section>

                {/* SKILLS */}
                <section className="mb-6">
                    <h3 className="font-semibold mb-3">Skills (comma separated)</h3>

                    <input
                        value={(safeData.skills || []).join(", ")}
                        onChange={(e) => handleArrayChange("skills", e.target.value)}
                        className="input w-full"
                    />
                </section>

                {/* EXPERIENCE */}
                <section className="mb-6">
                    <h3 className="font-semibold mb-3">Experience</h3>

                    {(safeData.experience || []).map((exp, index) => (
                        <div key={index} className="border p-4 rounded mb-3">

                            <input
                                value={exp?.company || ""}
                                onChange={(e) => {
                                    const newExp = [...safeData.experience];
                                    newExp[index].company = e.target.value;
                                    setData({ ...safeData, experience: newExp });
                                }}
                                placeholder="Company"
                                className="input mb-2"
                            />

                            <input
                                value={exp?.role || ""}
                                onChange={(e) => {
                                    const newExp = [...safeData.experience];
                                    newExp[index].role = e.target.value;
                                    setData({ ...safeData, experience: newExp });
                                }}
                                placeholder="Role"
                                className="input mb-2"
                            />

                            <textarea
                                value={(exp?.description || []).join("\n")}
                                onChange={(e) => {
                                    const newExp = [...safeData.experience];
                                    newExp[index].description = e.target.value.split("\n");
                                    setData({ ...safeData, experience: newExp });
                                }}
                                placeholder="Responsibilities (one per line)"
                                className="input w-full"
                            />
                        </div>
                    ))}
                </section>

                {/* ADDITIONAL SKILLS */}
                <section>
                    <h3 className="font-semibold mb-3">Additional Skills</h3>

                    <input
                        value={(safeData.additionalSkills || []).join(", ")}
                        onChange={(e) => handleArrayChange("additionalSkills", e.target.value)}
                        className="input w-full"
                    />
                </section>

            </div>
        </div>
    );
}