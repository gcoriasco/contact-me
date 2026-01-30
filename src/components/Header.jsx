export default function Header({ title, icon }) {
    return (
        <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-[#0a66c2] dark:text-blue-400">
                <svg xmlns="http://www.w3.org" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">{title}</h1>
        </div>
    );
}