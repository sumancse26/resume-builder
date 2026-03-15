import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

            <div className="max-w-3xl bg-white shadow-xl rounded-xl p-10 text-center">

                {/* Title */}

                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Professional Resume Builder
                </h1>

                {/* Subtitle */}

                <p className="text-gray-600 text-lg mb-8">
                    Create a clean, modern, and ATS-friendly resume in minutes.
                    Showcase your skills, experience, and projects with a professional layout.
                </p>

                {/* Features */}

                <div className="grid md:grid-cols-3 gap-6 text-left mb-10">

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-1">
                            Easy to Use
                        </h3>
                        <p className="text-sm text-gray-600">
                            Fill simple forms and generate your resume instantly.
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-1">
                            ATS Friendly
                        </h3>
                        <p className="text-sm text-gray-600">
                            Designed to pass modern applicant tracking systems.
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-1">
                            Export to PDF
                        </h3>
                        <p className="text-sm text-gray-600">
                            Download a clean and professional resume PDF instantly.
                        </p>
                    </div>

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 justify-center">

                    <Link to="/create" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-md font-medium transition">
                        Fill Resume
                    </Link>

                    <Link to="/preview" className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-md font-medium transition">
                        Preview Resume
                    </Link>

                </div>

                {/* Footer */}

                <p className="text-xs text-gray-500 mt-8">
                    Build a professional resume and stand out to recruiters.
                </p>

            </div>

        </div>
    );
}