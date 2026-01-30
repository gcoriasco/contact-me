export default function LinkedIn() {
    return (
        import.meta.env.VITE_LINKEDIN_PROFILE && <div className="px-8 pt-4 text-left">
            <a
                href={import.meta.env.VITE_LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 group inline-flex items-center gap-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#0a66c2] dark:hover:text-blue-400 transition-all duration-200"
            >
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                    <svg xmlns="http://www.w3.org" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </div>
                <span className="font-semibold text-sm">I'm also on LinkedIn</span>
                <svg xmlns="http://www.w3.org" className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    )
}