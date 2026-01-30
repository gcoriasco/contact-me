export default function Footer() {
    return (
        <footer className="text-center space-y-4 pb-8">
            {(
                import.meta.env.VITE_SOURCE_REPOSITORY_URL && <>
                    <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] font-medium">
                        <div className="h-px w-8 bg-gray-200 dark:bg-gray-800"></div>
                        <span>Open Source Project</span>
                        <div className="h-px w-8 bg-gray-200 dark:bg-gray-800"></div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        The source code for this form is freely available{(
                            <>
                                {(import.meta.env.VITE_SOURCE_REPOSITORY_LABEL && <span> on</span>)}
                                <a
                                    href={import.meta.env.VITE_SOURCE_REPOSITORY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-1 font-bold text-gray-600 dark:text-gray-300 hover:text-[#0a66c2] dark:hover:text-blue-400 underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 transition-colors"
                                >
                                    {import.meta.env.VITE_SOURCE_REPOSITORY_LABEL || 'here'}
                                </a>
                            </>
                        )}.
                    </p>
                </>
            )}
        </footer>
    );
}