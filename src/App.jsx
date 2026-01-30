import { useForm } from '@formspree/react';
import { FormContext } from './context/FormContext';
import ContactDisclosureForm from './components/ContactDisclosureForm'
import LinkedIn from './components/LinkedIn';
import Footer from './components/Footer';
import Header from './components/Header';
import Disclaimer from './components/Disclaimer';
import Success from './components/Success';

export default function App() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <Success />
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-gray-950 flex items-center justify-center p-4 font-sans transition-colors duration-300">
      <div className="w-full max-w-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">

        <Header title="Contact Disclosure" icon="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />

        <Disclaimer />

        <LinkedIn />

        {/* FORM with state context */}
        <FormContext value={{ state }}>
          <ContactDisclosureForm onSubmit={handleSubmit} />
        </FormContext>

        {/* FOOTER with source Code Link */}
        <Footer />

      </div>

    </div>
  )
}
