'use client';
import React from 'react';
import Form from './Form';

type ValuesTypes = Record<string, string>;

/**
 * ContactUsForm: controlled form using react-hook-form via Form helper.
 */
export default function ContactUsForm() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleSubmit(data: ValuesTypes) {
        // TODO: Wire to backend/email service
    }

    const fields: Array<{ id: string; label: string; kind?: 'textarea' | 'input' }> = [
        { id: 'userName', label: 'What\'s your name?' },
        { id: 'email', label: 'What\'s your email address?' },
        { id: 'phoneNumber', label: 'What\'s your phone number?' },
        { id: 'comment', label: 'What are you looking for?' },
        { id: 'helpComment', label: 'How can we help you?', kind: 'textarea' },
    ];

    return (
        
            <Form onSubmit={handleSubmit}>
                {fields.map(({ id, label, kind = 'input' }) => (
                    <div className="space-y-1" key={id}>
                        <Form.Label id={id}>{label.replace("'", "&apos;")}</Form.Label>
                        {kind === 'textarea' ? <Form.TextArea id={id} /> : <Form.Input id={id} />}
                    </div>
                ))}
                <button type="submit" className="relative top-1 flex h-[56px] w-full items-center justify-center rounded-[80px] bg-black text-xs text-white">
                    Send request
                </button>
            </Form>
        
    );
}
