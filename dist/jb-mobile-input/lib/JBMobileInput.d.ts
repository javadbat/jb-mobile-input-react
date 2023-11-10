import React from 'react';
import 'jb-mobile-input';
import { JBInputEventType } from 'jb-input-react';
import { JBMobileInputWebComponent } from 'jb-mobile-input';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'jb-mobile-input': JBMobileInputType;
        }
        interface JBMobileInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBMobileInputWebComponent>, JBMobileInputWebComponent> {
            class?: string;
            label?: string;
            name?: string;
            message?: string;
        }
    }
}
export declare const JBMobileInput: React.ForwardRefExoticComponent<JBMobileInputProps & React.RefAttributes<unknown>>;
export type JBMobileInputProps = {
    label?: string;
    name?: string;
    className?: string;
    message?: string;
    value: string | number | null | undefined;
    onEnter?: (e: JBInputEventType<CustomEvent>) => void;
    onInput?: (e: JBInputEventType<InputEvent>) => void;
    onBeforeinput?: (e: JBInputEventType<InputEvent>) => void;
    onFocus?: (e: JBInputEventType<FocusEvent>) => void;
    onBlur?: (e: JBInputEventType<FocusEvent>) => void;
    onKeyup?: (e: JBInputEventType<KeyboardEvent>) => void;
    onKeydown?: (e: JBInputEventType<KeyboardEvent>) => void;
    onChange?: (e: JBInputEventType<Event>) => void;
    placeholder?: string;
    disabled?: boolean;
    inputmode?: string;
    children?: any;
};
