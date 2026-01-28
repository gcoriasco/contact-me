import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactDisclosureForm() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#f3f2ef] dark:bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 p-10 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg text-center">
          <svg xmlns="http://www.w3.org" className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request Sent</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm text-left">The request has been queued. Thank you for your cooperation.</p>
        </div>
      </div>
    );
  }

  const formErrors = state.errors?.getFormErrors?.();

  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-gray-950 flex items-center justify-center p-4 font-sans transition-colors duration-300">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">

        {/* 1. HEADER */}
        <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-[#0a66c2] dark:text-blue-400">
            <svg xmlns="http://www.w3.org" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">Contact Disclosure</h1>
        </div>

        {/* 2. DISCLAIMER */}
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

        <div className="p-8 space-y-6 text-left">

          {/* INPUTS (con classi dark:) */}
          {[
            { label: "Company", name: "company", type: "text", placeholder: "e.g. Acme Corp", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { label: "Opportunity Link", name: "job-url", type: "url", placeholder: "https://...", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
            { label: "Professional Email", name: "email", type: "email", placeholder: "name@company.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{field.label}</label>
              <div className="relative text-gray-400 focus-within:text-[#0a66c2] dark:focus-within:text-blue-400 transition-colors">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d={field.icon} />
                  </svg>
                </div>
                <input name={field.name} type={field.type} placeholder={field.placeholder} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0a66c2] dark:focus:ring-blue-500 text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" required />
              </div>
            </div>
          ))}

          {/* MESSAGE */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Brief Message</label>
            <textarea name="message" rows="3" placeholder="Tell me briefly..." className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0a66c2] dark:focus:ring-blue-500 text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" required></textarea>
          </div>

          {/* GDPR CONSENT */}
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="gdpr"
                  name="gdpr-consent"
                  type="checkbox"
                  className="focus:ring-[#0a66c2] h-4 w-4 text-[#0a66c2] border-gray-300 dark:border-gray-700 rounded cursor-pointer"
                  required
                />
              </div>
              <div className="ml-3 text-[10px] text-justify">
                <label htmlFor="gdpr" className="font-bold text-gray-700 dark:text-gray-300 cursor-pointer uppercase tracking-wider">
                  I consent to the processing of my professional data
                </label>
                <p className="text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                  By submitting this form, it is acknowledged that the information provided will be used exclusively
                  to evaluate the professional proposal. All data will be handled in strict compliance with
                  <strong> GDPR</strong> standards and will not be disclosed to third parties.
                </p>
              </div>
            </div>
            <ValidationError prefix="Consent" field="gdpr-consent" errors={state.errors} className="text-red-500 text-[10px]" />
          </div>

          {/* ERROR MESSAGE BLOCK */}
          {formErrors && formErrors.length > 0 && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 dark:bg-red-900/20">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-800 dark:text-red-200 font-medium">
                  Oops! Something went wrong. Please try again later.
                </p>
              </div>
              {/* Lista dettagliata degli errori (opzionale) */}
              <ul className="mt-2 ml-7 list-disc list-inside text-xs text-red-700 dark:text-red-300">
                {formErrors.map((error, index) => (
                  <li key={index}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}

          <button type="submit" disabled={state.submitting} className="w-full bg-[#0a66c2] dark:bg-blue-600 hover:bg-[#004182] dark:hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md active:scale-[0.98] transition-all disabled:opacity-50">
            {state.submitting ? "Processing..." : "Submit Disclosure Request"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactDisclosureForm;
