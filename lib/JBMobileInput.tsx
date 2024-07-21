import React, { useRef, useEffect, useImperativeHandle, useState } from 'react';
import 'jb-mobile-input';
import {Props as JBInputProps, useJBInputAttribute, useJBInputEvents} from 'jb-input-react';
// eslint-disable-next-line no-duplicate-imports
import { JBMobileInputWebComponent } from 'jb-mobile-input';
interface JBMobileInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBMobileInputWebComponent>, JBMobileInputWebComponent> {
  class?:string,
  label?: string,
  name?:string,
  message?:string,
  placeholder?:string,
  // ref:React.RefObject<JBDateInputWebComponent>,
}
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-mobile-input': JBMobileInputType;
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
  useJBInputAttribute(element,props);
  useJBInputEvents(element,props);
  return(
    <jb-mobile-input ref={element} class={props.className}>
      {props.children}
    </jb-mobile-input>
  );
});
export type JBMobileInputProps = JBInputProps & {
  // add special props here
}
JBMobileInput.displayName = "JBMobileInput";

