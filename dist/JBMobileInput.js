import React, { useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import 'jb-mobile-input';

function useEvent(dom, event, handler, passive = false) {
    useEffect(() => {
        if (dom) {
            // initiate the event handler
            dom.addEventListener(event, handler, passive);
        }
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            if (dom) {
                dom.removeEventListener(event, handler, passive);
            }
        };
    });
}

// eslint-disable-next-line react/display-name
const JBMobileInput = React.forwardRef((props, ref) => {
    const element = useRef(null);
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
    //to force rerender for events
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    const onChange = useCallback((e) => {
        if (typeof props.onChange === "function") {
            props.onChange(e);
        }
    }, [props.onChange]);
    const onKeydown = useCallback((e) => {
        if (typeof props.onKeydown === "function") {
            props.onKeydown(e);
        }
    }, [props.onKeydown]);
    const onKeyup = useCallback((e) => {
        if (typeof props.onKeyup === "function") {
            props.onKeyup(e);
        }
    }, [props.onKeyup]);
    const onEnter = useCallback((e) => {
        if (props.onEnter) {
            props.onEnter(e);
        }
    }, [props.onEnter]);
    const onFocus = useCallback((e) => {
        if (props.onFocus && e instanceof FocusEvent) {
            props.onFocus(e);
        }
    }, [props.onFocus]);
    const onBlur = useCallback((e) => {
        if (props.onBlur && e instanceof FocusEvent) {
            props.onBlur(e);
        }
    }, [props.onBlur]);
    const onInput = useCallback((e) => {
        if (typeof props.onInput == 'function' && e instanceof InputEvent) {
            props.onInput(e);
        }
    }, [props.onInput]);
    const onBeforeInput = useCallback((e) => {
        if (typeof props.onBeforeinput == 'function' && e instanceof InputEvent) {
            props.onBeforeinput(e);
        }
    }, [props.onBeforeinput]);
    useEffect(() => {
        let value = props.value;
        if (props.value == null || props.value === undefined) {
            value = '';
        }
        if (element && element.current && element.current) {
            element.current.value = value?.toString() || "";
        }
    }, [props.value]);
    // useEffect(() => {
    //     if(element && element.current){
    //         element.current.validationList = props.validationList || [];
    //     }
    // }, [props.validationList]);
    useEffect(() => {
        if (typeof props.disabled == "boolean") {
            element?.current?.setAttribute('disabled', `${props.disabled}`);
        }
    }, [props.disabled]);
    useEffect(() => {
        if (props.inputmode) {
            element.current?.setAttribute('inputmode', props.inputmode);
        }
        else {
            element.current?.removeAttribute('inputmode');
        }
    }, [props.inputmode]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'enter', onEnter);
    useEvent(element.current, 'input', onInput);
    useEvent(element.current, 'beforeinput', onBeforeInput);
    return (React.createElement("jb-mobile-input", { placeholder: props.placeholder, ref: element, class: props.className, label: props.label, message: props.message }, props.children));
});
JBMobileInput.displayName = "JBMobileInput";

export { JBMobileInput };
//# sourceMappingURL=JBMobileInput.js.map
