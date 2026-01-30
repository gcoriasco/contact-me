import { useContext } from 'react';
import { ValidationError } from '@formspree/react';
import { FormContext } from '../context/FormContext';

export default function Consent() {
    const { state } = useContext(FormContext);

    return (
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
    );
}