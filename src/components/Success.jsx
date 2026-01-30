export default function Success() {
    return (
        <div className="min-h-screen bg-[#f3f2ef] dark:bg-gray-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-900 p-9 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg text-center">
                <svg xmlns="http://www.w3.org" className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request Sent</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm text-left">The request has been sent. Thank you for your cooperation.</p>
            </div>
        </div>
    );
}