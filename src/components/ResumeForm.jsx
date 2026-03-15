import React from "react";

export default function ResumeForm({ data, setData }) {

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="container bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Resume Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Full Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Full Name
                        </label>
                        <input
                            name="name"
                            placeholder="John Doe"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Job Title */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Job Title
                        </label>
                        <input
                            name="title"
                            placeholder="Full Stack Developer"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Phone
                        </label>
                        <input
                            name="phone"
                            placeholder="+8801XXXXXXXXX"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            name="email"
                            placeholder="example@email.com"
                            onChange={handleChange}
                            className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                </div>

                {/* Address */}
                <div className="mt-4">
                    <label className="text-sm font-medium text-gray-600">
                        Address
                    </label>
                    <input
                        name="address"
                        placeholder="Dhaka, Bangladesh"
                        onChange={handleChange}
                        className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Summary */}
                <div className="mt-4">
                    <label className="text-sm font-medium text-gray-600">
                        Professional Summary
                    </label>
                    <textarea
                        name="summary"
                        placeholder="Write a short professional summary..."
                        rows="4"
                        onChange={handleChange}
                        className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

            </div>
        </div>
    );
}