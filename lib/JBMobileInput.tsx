import React, { useRef, useEffect, useImperativeHandle, useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
import 'jb-mobile-input';
import { useEvent } from '../../../common/hooks/use-event';
// import { JBInputValidationItem } from 'jb-input/dist/Types';
import {JBInputEventType} from 'jb-input-react';
// eslint-disable-next-line no-duplicate-imports
import { JBMobileInputWebComponent } from 'jb-mobile-input';
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-mobile-input': JBMobileInputType;
      }
      interface JBMobileInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBMobileInputWebComponent>, JBMobileInputWebComponent> {
        class?:string,
        label?: string,
        name?:string,
        message?:string,
        placeholder?:string,
        // ref:React.RefObject<JBDateInputWebComponent>,
      }
    }
}
// eslint-disable-next-line react/display-name
export const JBMobileInput = React.forwardRef((props:JBMobileInputProps, ref) => {
  const element = useRef<JBMobileInputWebComponent>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  //to force rerender for events
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  const onChange = useCallback((e:JBInputEventType<Event>)=>{
    if (typeof props.onChange === "function") {
      props.onChange(e);
    }
  },[props.onChange]);
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
  const onFocus = useCallback((e:JBInputEventType<FocusEvent>)=>{
    if (props.onFocus && e instanceof FocusEvent) {
      props.onFocus(e);
    }
  },[props.onFocus]);
  const onBlur = useCallback((e:JBInputEventType<FocusEvent>)=>{
    if (props.onBlur && e instanceof FocusEvent) {
      props.onBlur(e);
    }
  },[props.onBlur]);
  const onInput = useCallback((e:JBInputEventType<InputEvent>)=>{
    if (typeof props.onInput == 'function' && e instanceof InputEvent) {
      props.onInput(e);
    }
  },[props.onInput]);
  const onBeforeInput = useCallback((e:JBInputEventType<InputEvent>)=>{
    if (typeof props.onBeforeinput == 'function' && e instanceof InputEvent) {
      props.onBeforeinput(e);
    }
  },[props.onBeforeinput]);
  useEffect(() => {
    let value = props.value;
    if (props.value == null || props.value === undefined) {
      value = '';
    }
    if(element && element.current && element.current){
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
    if(props.inputmode){
      element.current?.setAttribute('inputmode',props.inputmode);
    }else{
      element.current?.removeAttribute('inputmode');
    }
  },[props.inputmode]);
  useEvent(element.current, 'change', onChange);
  useEvent(element.current, 'keydown', onKeydown);
  useEvent(element.current, 'keyup', onKeyup);
  useEvent(element.current, 'focus', onFocus);
  useEvent(element.current, 'blur', onBlur);
  useEvent(element.current, 'enter', onEnter);
  useEvent(element.current, 'input', onInput);
  useEvent(element.current, 'beforeinput', onBeforeInput);
    
  return(
    <jb-mobile-input placeholder={props.placeholder} ref={element} class={props.className} label={props.label} message={props.message}>
      {props.children}
    </jb-mobile-input>
  );
});
export type JBMobileInputProps = {
    label?: string ,
    name?:string,
    className?:string,
    message?:string,
    value: string | number | null | undefined,
    // validationList?: JBInputValidationItem[],
    onEnter?: (e:JBInputEventType<CustomEvent>)=>void,
    onInput?: (e:JBInputEventType<InputEvent>)=>void,
    onBeforeinput?:(e:JBInputEventType<InputEvent>)=>void,
    onFocus?: (e:JBInputEventType<FocusEvent>)=>void,
    onBlur?: (e:JBInputEventType<FocusEvent>)=>void,
    onKeyup?: (e:JBInputEventType<KeyboardEvent>)=>void,
    onKeydown?: (e:JBInputEventType<KeyboardEvent>)=>void,
    onChange?: (e:JBInputEventType<Event>)=>void,
    placeholder?: string,
    disabled?: boolean,
    inputmode?: string,
    children?:any,
}
JBMobileInput.displayName = "JBMobileInput";

