const ResumePreview = () => {
    return (
        <div className="page resume bg-gray-50 py-10">

            <div className="resume-box with-photo flex w-[900px] mx-auto bg-white shadow-xl rounded-lg overflow-hidden">

                {/* LEFT SIDEBAR */}

                <div className="left-box w-[300px] bg-gray-100 p-6">

                    <div className="name--title mt-2">
                        <h1 className="text-lg font-bold">Md. Suman Sarkar</h1>
                        <h5 className="text-blue-600 font-semibold">
                            Software Engineer
                        </h5>
                    </div>

                    {/* PERSONAL DETAILS */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mb-3">
                        Personal Details
                    </h5>

                    <ul className="space-y-2 text-sm">

                        <li className="flex items-center space-x-2">
                            <img src="/imgs/leetcode.svg" alt="" />
                            <span>@suman_sarkar</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <img src="/imgs/github.png" width={16} height={16} alt="" />
                            <span>@sumancse26</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <img src="/imgs/linkedin.png" width={16} height={16} alt="" />
                            <span>@suman-iu</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <img src="/imgs/phone.png" width={16} height={16} alt="" />
                            <span>+880 1796 844 288</span>
                        </li>

                        <li className="flex items-center space-x-2">
                            <img src="/imgs/email.png" width={16} height={16} alt="" />
                            <span>suman.iu32@gmail.com</span>
                        </li>

                        <li className="flex items-start space-x-2">
                            <img src="/imgs/location.png" width={16} height={16} alt="" />
                            <p>
                                Tejgaon Industrial Area <br />
                                29/C & 29/D, Dhaka
                            </p>
                        </li>

                    </ul>

                    {/* EDUCATION */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mt-6 mb-3">
                        Education
                    </h5>

                    <div className="text-sm space-y-3">

                        <div>
                            <p>
                                <strong>M.Sc in CSE</strong> (2.76) - 2018
                            </p>
                            <p className="italic">Islamic University</p>
                            <p>Kushtia, Bangladesh</p>
                        </div>

                        <div>
                            <p>
                                <strong>B.Sc in CSE</strong> (3.04) - 2017
                            </p>
                            <p className="italic">Islamic University</p>
                            <p>Kushtia, Bangladesh</p>
                        </div>

                    </div>

                    {/* KEY SKILLS */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mt-6 mb-3">
                        Key Skills
                    </h5>

                    <div className="flex flex-wrap gap-2 text-xs">

                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                            JavaScript
                        </span>

                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">
                            React.js
                        </span>

                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
                            Next.js
                        </span>

                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            TypeScript
                        </span>

                        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                            Nest.js
                        </span>

                    </div>

                    {/* TRAINING */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mt-6 mb-3">
                        Training
                    </h5>

                    <div className="text-sm space-y-2">

                        <p className="font-semibold text-blue-700">
                            Web Development with React, Next, Prisma
                        </p>

                        <p className="italic">Ostad Ltd, Dhaka</p>

                        <ul className="list-disc ml-4 space-y-1">
                            <li>State management</li>
                            <li>Performance optimization</li>
                            <li>Lazy loading</li>
                            <li>Context API</li>
                            <li>Reusable components</li>
                        </ul>

                    </div>

                </div>

                {/* RIGHT CONTENT */}

                <div className="right-box flex-1 p-8">

                    {/* SUMMARY */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mb-3">
                        Summary
                    </h5>

                    <p className="text-sm leading-relaxed mb-6">
                        Self-motivated and performance-driven Web Developer with 4+ years
                        of experience building web applications, updating existing systems,
                        and fixing bugs while collaborating in professional development
                        environments.
                    </p>

                    {/* EXPERIENCE */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mb-5">
                        Professional Experience
                    </h5>

                    <ol className="relative border-l-2 border-blue-400 pl-6">

                        <li className="mb-6">

                            <span className="absolute -left-[9px] w-4 h-4 bg-blue-500 rounded-full"></span>

                            <h3 className="font-bold">
                                Software Engineer
                            </h3>

                            <p className="text-blue-700 text-sm">
                                MononSoft Ltd (A Sister Concern of JMI Group)
                            </p>

                            <div className="flex justify-between text-xs text-gray-600 mb-3">
                                <span>Dec 2021 - Present</span>
                                <span>52 New Eskaton Road, Dhaka</span>
                            </div>

                            <ul className="list-disc ml-4 space-y-1 text-sm">

                                <li>Develop ERP using React.js and Laravel</li>

                                <li>
                                    Production Planning (PP), Material Management (MM),
                                    Finance and Controlling (FICO)
                                </li>

                                <li>Creating and implementing application source code</li>

                                <li>Testing and debugging code</li>

                                <li>Updating and improving existing applications</li>

                            </ul>

                        </li>

                    </ol>

                    {/* SKILLS */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mb-3">
                        Skills & Expertise
                    </h5>

                    <ul className="list-disc ml-5 space-y-1 text-sm mb-6">

                        <li>Reusable components using React and Next.js</li>

                        <li>Responsive UI development with TailwindCSS</li>

                        <li>Frontend architecture best practices</li>

                        <li>TypeScript for maintainable code</li>

                        <li>State management and TanStack Query</li>

                        <li>CI/CD deployment pipelines</li>

                    </ul>

                    {/* PROJECTS */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mb-3">
                        Projects
                    </h5>

                    <ul className="list-disc ml-5 space-y-1 text-sm mb-6">

                        <li>E-learning platform using Nest.js, Next.js and Prisma</li>

                        <li>Multivendor eCommerce website</li>

                        <li>POS inventory management system</li>

                        <li>Realtime chat application</li>

                    </ul>

                    {/* LIVE PROJECTS */}

                    <h5 className="text-blue-700 font-bold border-b border-blue-500 pb-1 mb-3">
                        Live Projects
                    </h5>

                    <div className="space-y-2">

                        <div className="border rounded-lg bg-gray-50 px-3 py-2 shadow-sm">

                            <p className="font-semibold text-sm">
                                Cybernetics IT BD
                            </p>

                            <p className="text-blue-600 text-xs">
                                cyberneticsitbd.com
                            </p>

                        </div>

                        <div className="border rounded-lg bg-gray-50 px-3 py-2 shadow-sm">

                            <p className="font-semibold text-sm">
                                Discount Shop (Pagoole)
                            </p>

                            <p className="text-blue-600 text-xs">
                                discountshop.pagoole.com
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ResumePreview;