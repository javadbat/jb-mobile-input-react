import React from 'react';
import 'jb-mobile-input';
import { Props as JBInputProps } from 'jb-input-react';
import { JBMobileInputWebComponent } from 'jb-mobile-input';
interface JBMobileInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBMobileInputWebComponent>, JBMobileInputWebComponent> {
    class?: string;
    label?: string;
    name?: string;
    message?: string;
    placeholder?: string;
}
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'jb-mobile-input': JBMobileInputType;
        }
    }
}
export declare const JBMobileInput: React.ForwardRefExoticComponent<import("jb-input-react").JBInputEvents & import("jb-input-react").JBInputAttributes & {
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
} & React.RefAttributes<unknown>>;
export type JBMobileInputProps = JBInputProps & {};
export {};
