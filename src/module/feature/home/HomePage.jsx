export default function LandingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl p-10 rounded-xl text-center">

                <h1 className="text-3xl font-bold mb-4">
                    Resume Builder
                </h1>

                <p className="text-gray-600 mb-6">
                    Create and download your professional resume
                </p>

                <div className="flex gap-4 justify-center">

                    <button className="bg-blue-600 text-white px-6 py-2 rounded">
                        Fill Resume
                    </button>

                    <button className="bg-green-600 text-white px-6 py-2 rounded">
                        Preview Resume
                    </button>

                </div>
            </div>
        </div>
    );
}