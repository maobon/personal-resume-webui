export default function Home() {
    return (
        <div className="relative z-10 mx-auto min-h-screen max-w-screen-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                {/* Left Side: Header & Navigation */}
                <header
                    className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:translate-x-20 lg:flex-col lg:justify-between lg:py-24">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl drop-shadow-[0_0_10px_rgba(203,213,225,0.3)]">
                            Bob Xin
                        </h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-300 sm:text-xl drop-shadow-[0_0_8px_rgba(94,234,212,0.5)]">
                            不知名的垃圾工程师
                        </h2>
                        <p className="mt-4 max-w-xs leading-normal">
                            找不到工作的闲置全栈工程师
                        </p>
                        <nav className="nav hidden lg:block" aria-label="In-page jump links">
                            <ul className="mt-16 w-max">
                                <li>
                                    <a className="group flex items-center py-3 active" href="#about">
                                        <span
                                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span
                                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center py-3" href="#experience">
                                        <span
                                            className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span
                                            className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
                        <li className="text-xs shrink-0">
                            <a className="block hover:text-slate-200 transition-colors" href="https://github.com"
                               target="_blank" rel="noreferrer" aria-label="GitHub">
                                <span className="sr-only">GitHub</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="h-6 w-6" aria-hidden="true">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="text-xs shrink-0">
                            <a className="block hover:text-slate-200 transition-colors" href="https://linkedin.com"
                               target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <span className="sr-only">LinkedIn</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="h-6 w-6" aria-hidden="true">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </header>

                {/* Right Side: Scrollable Content */}
                <main id="content" className="pt-24 lg:w-3/5 lg:translate-x-20 lg:py-24">

                    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="About me">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                        </div>
                        <div>
                            <p className="mb-4">
                                Passionate and detail-oriented Software Engineer with 10 years of experience developing
                                fullstack applications.
                                Proficient in <span className="font-medium text-slate-200">Android</span>, <span
                                className="font-medium text-slate-200">Flutter</span>, <span
                                className="font-medium text-slate-200">TypeScript</span>, and <span
                                className="font-medium text-slate-200">Node.js</span>.
                            </p>
                            <p className="mb-4">
                                Adept at collaborating with cross-functional teams to deliver high-quality software
                                solutions that meet business objectives while prioritizing <span
                                className="font-medium text-slate-200">accessibility</span> and <span
                                className="font-medium text-slate-200">performance</span>.
                            </p>
                            <p>
                                When I'm not coding, I'm usually exploring the outdoors, reading sci-fi, or trying out
                                new coffee shops in San Francisco.
                            </p>
                        </div>
                    </section>

                    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Work experience">
                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Experience</h2>
                        </div>

                        <div>
                            <ol className="group/list">

                                {/* Experience 1 */}
                                <li className="mb-12">
                                    <div
                                        className="group relative grid pb-1 transition-all sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] lg:group-hover:drop-shadow-lg"></div>
                                        <header
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:whitespace-nowrap"
                                            aria-label="2021 to Present">Jan 2021 — Present
                                        </header>
                                        <div className="z-10">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                       href="#" target="_blank" rel="noreferrer"
                                                       aria-label="Senior Software Engineer at Tech Innovators Inc.">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>Senior Software Engineer · <span className="inline-block">Tech Innovators Inc.<svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                            aria-hidden="true"><path fillRule="evenodd"
                                                                                     d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                     clipRule="evenodd"></path></svg></span></span>
                                                    </a>
                                                </div>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">
                                                Led the frontend migration from a monolithic application to a
                                                micro-frontend architecture using Next.js, improving page load times by
                                                40%. Mentored junior engineers and collaborated with design teams to
                                                implement accessible and responsive user interfaces.
                                            </p>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind
                                                        CSS
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                                {/* Experience 2 */}
                                <li className="mb-12">
                                    <div
                                        className="group relative grid pb-1 transition-all sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div
                                            className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[0_0_15px_rgba(45,212,191,0.15)] lg:group-hover:drop-shadow-lg"></div>
                                        <header
                                            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:whitespace-nowrap"
                                            aria-label="2018 to 2020">Jun 2018 — Dec 2020
                                        </header>
                                        <div className="z-10">
                                            <h3 className="font-medium leading-snug text-slate-200">
                                                <div>
                                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                                       href="#" target="_blank" rel="noreferrer"
                                                       aria-label="Software Engineer at Web Solutions Co.">
                                                        <span
                                                            className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                        <span>Software Engineer · <span className="inline-block">Web Solutions Co.<svg
                                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                            aria-hidden="true"><path fillRule="evenodd"
                                                                                     d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                                     clipRule="evenodd"></path></svg></span></span>
                                                    </a>
                                                </div>
                                            </h3>
                                            <p className="mt-2 text-sm leading-normal">
                                                Developed and maintained RESTful APIs using Node.js and Express,
                                                supporting over 10,000 daily active users. Integrated third-party
                                                payment gateways and optimized database queries in PostgreSQL.
                                            </p>
                                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Express
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PostgreSQL
                                                    </div>
                                                </li>
                                                <li className="mr-1.5 mt-2">
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">AWS
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>

                            </ol>
                        </div>
                    </section>

                    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                             aria-label="Education">

                        <div
                            className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-full lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">Education</h2>
                        </div>

                        {/* Education 1 */}
                        <li className="mb-10 list-none">
                            <div
                                className="group relative grid pb-1 transition-all sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:whitespace-nowrap"
                                    aria-label="2014 to 2018">Sep 2024 — Jun 2026
                                </header>
                                <div className="z-10">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        Master of Engineering Management
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        Beihang University
                                    </p>
                                </div>
                            </div>
                        </li>

                        {/* Education 2 */}
                        <li className="mb-10 list-none">
                            <div
                                className="group relative grid pb-1 transition-all sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:whitespace-nowrap"
                                    aria-label="2024 to 2026">Sep 2024 — Jun 2026
                                </header>
                                <div className="z-10">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        Computer of Science
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        Beihang University
                                    </p>
                                </div>
                            </div>
                        </li>

                        {/* Education 3 */}
                        <li className="mb-10 list-none">
                            <div
                                className="group relative grid pb-1 transition-all sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <header
                                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:whitespace-nowrap"
                                    aria-label="2014 to 2018">Sep 2024 — Jun 2026
                                </header>
                                <div className="z-10">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        Bachelor of Business Administration
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        Tech of Tianjin University
                                    </p>
                                </div>
                            </div>
                        </li>

                    </section>

                    {/*
                    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                      <p>
                        Built with <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer">Tailwind CSS</a>. Inspired by Brittany Chiang.
                      </p>
                    </footer>
                    */}
                </main>
            </div>
        </div>
    );
}
