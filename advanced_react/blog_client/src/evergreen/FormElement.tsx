import {ReactNode, HTMLAttributes,InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {FieldError} from "../types/FieldError.ts";

interface FormElementProps extends HTMLAttributes<HTMLElement> {
    type: string,
    name: string,
    placeholder: string,
    className?: string,
    valid_text: string,
    invalid_text: string,
    errors: Array<FieldError>,
    setErrors: (errors: Array<FieldError>) => void,
}

export const FormElement = ({
                                type,
                                name,
                                placeholder,
                                className,
                                valid_text,
                                invalid_text,
                                errors,
                                setErrors,
                                ...rest
                            }: FormElementProps): ReactNode => {

    return <div className="mb-3">
        <label htmlFor={name} className="form-label">Title</label>
        {(type === 'textarea')
            ? <textarea
                id={name}
                name={name}
                className={`form-control ${className || ''} ${errors.findIndex(err => err.field === name) === -1 ? 'is-valid' : 'is-invalid'}`}
                onChange={() => setErrors([])}
                placeholder={placeholder}
                {...rest as TextareaHTMLAttributes<HTMLTextAreaElement>}/>
            : <input type={type}
                     id={name}
                     name={name}
                     className={`form-control ${className || ''} ${errors.findIndex(err => err.field === name) === -1 ? 'is-valid' : 'is-invalid'}`}
                     onChange={() => setErrors([])}
                     placeholder={placeholder}
                     {...rest as InputHTMLAttributes<HTMLInputElement>}/>
        }

        <div className="valid-feedback">{valid_text}</div>
        <div className="invalid-feedback">{invalid_text}</div>
    </div>
}