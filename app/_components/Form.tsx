'use client';
import React, { createContext, useContext } from 'react';
import {
    useForm,
    UseFormRegister,
    FieldErrors,
    FieldValues,
    RegisterOptions,
} from 'react-hook-form';

/**
 * Internal context shared by form primitives (Label, Input, TextArea).
 */
 type contextTypes = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
};
const FormContext = createContext<contextTypes | null>(null);

/**
 * Props for the root Form component.
 * - children: Form primitives or custom elements
 * - onSubmit: submit handler receiving validated values
 * - defaultValues: optional initial values
 * - className: optional class override for the <form>
 * - mode: validation mode (react-hook-form)
 */
 type FormProps = {
    children: React.ReactNode;
    onSubmit: (data: FieldValues) => void;
    defaultValues?: Record<string, unknown>;
    className?: string;
    mode?: 'onSubmit' | 'onChange' | 'onBlur' | 'onTouched' | 'all';
};

/**
 * Form: typed wrapper around react-hook-form with a small context to power inputs.
 */
export function Form({ children, onSubmit, defaultValues, className, mode = 'onSubmit' }: FormProps) {
    const options: Parameters<typeof useForm<FieldValues>>[0] = { mode };
    if (defaultValues) options.defaultValues = defaultValues;

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>(options);

    return (
        <FormContext.Provider value={{ register, errors }}>
            <form className={className ?? 'space-y-3 text-[#141517] max-sm:space-y-4'} onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormContext.Provider>
    );
}

/**
 * Label: small styled label bound to an input/textarea via htmlFor.
 */
function Label({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
    return (
        <>
            <label htmlFor={id} className={className ?? 'text-xs max-sm:text-sm'}>
                {children}
            </label>
        </>
    );
}

/**
 * Input: text-like input registered with react-hook-form.
 * Accepts minimal props to keep API simple while supporting validation and a11y.
 */
function Input({
    id,
    type = 'text',
    autoComplete,
    inputMode,
    placeholder,
    rules,
    className,
}: {
    id: string;
    type?: React.HTMLInputTypeAttribute;
    autoComplete?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
    placeholder?: string;
    rules?: RegisterOptions<FieldValues, string>;
    className?: string;
}) {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('Input must be used within a FormProvider');
    }
    const { register, errors } = context;
    const hasError = Boolean(errors?.[id]);
    return (
        <>
            <input
                type={type}
                id={id}
                autoComplete={autoComplete}
                inputMode={inputMode}
                placeholder={placeholder}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? `${id}-error` : undefined}
                className={className ?? 'h-9 max-sm:h-10 w-full rounded bg-[#ffffff99] py-2.5 pl-2 pr-4 text-sm max-sm:text-base caret-black outline-none'}
                {...register(id, {
                    required: 'This Field Is Required',
                    ...(rules || {}),
                })}
            />
            {typeof errors[id]?.message === 'string' && (
                <p id={`${id}-error`} className="text-[10px] max-sm:text-xs text-red-500">
                    {errors[id]?.message}
                </p>
            )}
        </>
    );
}

/**
 * TextArea: multi-line input registered with react-hook-form.
 */
function TextArea({ id, rows = 5, placeholder, rules, className }: { id: string; rows?: number; placeholder?: string; rules?: RegisterOptions<FieldValues, string>; className?: string }) {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('TextArea must be used within a FormProvider');
    }
    const { register, errors } = context;
    const hasError = Boolean(errors?.[id]);
    return (
        <>
            <textarea
                id={id}
                rows={rows}
                placeholder={placeholder}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? `${id}-error` : undefined}
                className={className ?? 'h-[104px] max-sm:h-[120px] w-full resize-none rounded bg-[#ffffff99] py-2.5 pl-2 pr-4 text-sm max-sm:text-base caret-black outline-none'}
                {...register(id, {
                    required: 'This Field Is Required',
                    ...(rules || {}),
                })}
            />
            {typeof errors[id]?.message === 'string' && (
                <p id={`${id}-error`} className="text-[10px] max-sm:text-xs text-red-500">
                    {errors[id]?.message}
                </p>
            )}
        </>
    );
}

Form.Input = Input;
Form.Label = Label;
Form.TextArea = TextArea;

export { Input, TextArea, Label };
export default Form;
