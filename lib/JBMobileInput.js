import React, { useRef, useEffect, useState, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import 'jb-mobile-input';
import { useEvent } from '../../custom-hooks/UseEvent';

// eslint-disable-next-line react/display-name
const JBMobileInput = React.forwardRef((props, ref) => {
    /**
     * @type {React.MutableRefObject<HTMLInputElement>}
     */
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element ? element.current : {}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    const onChange = useCallback((e)=>{
        if (typeof props.onChange === "function") {
            props.onChange(e);
        }
    });
    const onKeydown = useCallback((e)=>{
        if (typeof props.onKeydown === "function") {
            props.onKeydown(e);
        }
    },[props.onKeydown]);
    const onKeyup = useCallback((e)=>{
        if (typeof props.onKeyup === "function") {
            props.onKeyup(e);
        }
    },[props.onKeyup]);
    
    const onEnter = useCallback((e)=>{
        if (props.onEnter) {
            props.onEnter(e);
        }
    },[props.onEnter]);
    const onFocus = useCallback((e)=>{
        if (props.onFocus && e instanceof FocusEvent) {
            props.onFocus(e);
        }
    },[props.onFocus]);
    const onBlur = useCallback((e)=>{
        if (props.onBlur && e instanceof FocusEvent) {
            props.onBlur(e);
        }
    },[props.onBlur]);
    const onInput = useCallback((e)=>{
        if (typeof props.onInput == 'function' && e instanceof InputEvent) {
            props.onInput(e);
        }
    },[props.onInput]);
    const onBeforeInput = useCallback((e)=>{
        if (typeof props.onBeforeInput == 'function' && e instanceof InputEvent) {
            props.onBeforeInput(e);
        }
    },[props.onBeforeInput]);
    
    useEffect(() => {
        let value = props.value;
        if (props.value === null || props.value === undefined) {
            value = '';
        }else{
            element.current.value = value;
        }
    }, [props.value]);
    useEffect(() => {
        element.current.validationList = props.validationList || [];
    }, [props.validationList]);
    useEffect(() => {
        if (typeof props.disabled == "boolean") {
            element.current.setAttribute('disabled', `${props.disabled}`);
        }
    }, [props.disabled]);
    useEffect(() => {
        if(props.inputmode){
            element.current.setAttribute('inputmode',props.inputmode);
        }else{
            element.current.removeAttribute('inputmode');
        }
    }
    , [props.inputmode]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'input', onInput);
    useEvent(element.current, 'beforeinput', onBeforeInput);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'enter', onEnter);
    return (
        <jb-mobile-input placeholder={props.placeholder?props.placeholder:''} ref={element} class={props.className?props.className:''} label={props.label?props.label:''} message={props.message?props.message:''}>
        </jb-mobile-input>
    );
});

JBMobileInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onKeyup: PropTypes.func,
    onKeydown: PropTypes.func,
    onEnter: PropTypes.func,
    onInput: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onBeforeinput: PropTypes.func,
    className: PropTypes.string,
    validationList: PropTypes.array,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    inputmode: PropTypes.string,
    message: PropTypes.string,
};
JBMobileInput.displayName = "JBMobileInput";
export {JBMobileInput};