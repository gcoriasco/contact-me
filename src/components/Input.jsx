import { useContext } from 'react';
import { ValidationError } from '@formspree/react';
import { FormContext } from '../context/FormContext';

function Field({ textarea, ...props }) {
    if (textarea) {
        return (
            <textarea rows="3" {...props} />
        );
    }

    return (
        <input {...props} />
    );
}

export default function Input({ label, icon, iconProps, ...props }) {
    const { state } = useContext(FormContext);

    const { name, type, required } = props;
    const textarea = type === 'textarea';

    label = label || name;

    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{label}{!required && <span className="text-gray-400 dark:text-gray-600 font-normal ml-2">(Optional)</span>}</label>
            <div className="relative text-gray-400 focus-within:text-[#0a66c2] dark:focus-within:text-blue-400 transition-colors">
                <div className={`absolute inset-y-0 left-0 pl-3 pointer-events-none flex ${textarea ? 'top-4' : 'items-center'}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path {...iconProps} d={icon} />
                    </svg>
                </div>
                <Field id={name} {...props} textarea={textarea} className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#0a66c2] dark:focus:ring-blue-500 text-gray-900 dark:text-white outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500" />
            </div>
            <ValidationError prefix={label} field={name} errors={state.errors} className="text-red-500 text-[10px]" />
        </div>
    )
}