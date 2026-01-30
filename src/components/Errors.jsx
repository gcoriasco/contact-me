import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Errors() {
    const { state } = useContext(FormContext);

    const errors = [
        ...(state.errors?.getFormErrors?.() || []),
        //...(state.errors?.getAllFieldErrors?.()?.flatMap?.(([field, errors]) => errors.map(e => ({ message: `[${field}] ${e.message}` }))) || []),
    ];

    return (errors && errors.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 dark:bg-red-900/20">
            <div className="flex items-center">
                <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-800 dark:text-red-200 font-medium">
                    Oops! Something went wrong. Please try again.
                </p>
            </div>
            {/* Errors list */}
            <ul className="mt-2 ml-7 list-disc list-inside text-xs text-red-700 dark:text-red-300">
                {errors.map((error, index) => (
                    <li key={index}>{error.message}</li>
                ))}
            </ul>
        </div>
    ));
}