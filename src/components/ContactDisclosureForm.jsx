import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import Input from './Input';
import Consent from './Consent';
import Errors from './Errors';

function ContactDisclosureForm({ onSubmit }) {
  const { state } = useContext(FormContext);

  return (
    <form onSubmit={onSubmit}>

      <div className="p-8 space-y-6 text-left">

        {/* INPUTS */}
        {[
          { required: true, label: "Company", name: "company", type: "text", placeholder: "e.g. Acme Corp", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { required: true, label: "Opportunity Link", name: "job-url", type: "url", placeholder: "https://...", icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" },
          { required: true, label: "Professional Email", name: "email", type: "email", placeholder: "name@company.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
          { required: false, label: "Brief Message", name: "message", type: "textarea", placeholder: "Any additional context...", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z", iconProps: { strokeLinecap: "round", strokeLinejoin: "round" } },
        ].map(({ name, ...props }) => (
          <Input key={name} {...{ name, ...props }} />
        ))}

        {/* GDPR CONSENT */}
        <Consent />

        {/* ERROR MESSAGE BLOCK */}
        <Errors />

        <button type="submit" disabled={state.submitting} className="w-full bg-[#0a66c2] dark:bg-blue-600 hover:bg-[#004182] dark:hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md active:scale-[0.98] transition-all disabled:opacity-50">
          {state.submitting ? "Processing..." : "Submit Disclosure Request"}
        </button>
      </div>
    </form>
  );
}

export default ContactDisclosureForm;
