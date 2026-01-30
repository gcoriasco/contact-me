import { createContext } from "react";

export const FormContext = createContext({
    state: {
        errors: null,
        result: null,
        submitting: false,
        succeeded: false,
    },
});