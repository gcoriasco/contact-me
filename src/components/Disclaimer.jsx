export default function Disclaimer() {
    return (
        <div className="bg-amber-50/50 dark:bg-amber-900/20 px-8 py-6 border-b border-amber-100 dark:border-amber-900/30">
            <div className="border-l-4 border-amber-400 pl-4 text-left">
                <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                    <span className="font-bold block mb-1 uppercase tracking-wide text-[10px] text-amber-700 dark:text-amber-500">A note to recruiters</span>
                    <strong>Dear Recruiter,</strong><br />
                    I apologize for the extra step. Due to a high volume of <span className="font-semibold text-amber-950 dark:text-amber-100 underline decoration-amber-300 decoration-2 underline-offset-2">
                        spam
                    </span> and inquiries <span className="font-semibold text-amber-950 dark:text-amber-100 underline decoration-amber-300 decoration-2 underline-offset-2">
                        unrelated to professional opportunities
                    </span>, I have implemented this form to ensure that genuine career proposals receive the attention they deserve. Thank you for your understanding.
                </p>
            </div>
        </div>
    );
}