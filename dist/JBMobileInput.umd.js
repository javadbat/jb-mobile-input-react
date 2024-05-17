(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('jb-mobile-input')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'jb-mobile-input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JBMobileInput = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    function useEvent(dom, event, handler) {
      var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      React.useEffect(function () {
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
        const element = React.useRef(null);
        const [refChangeCount, refChangeCountSetter] = React.useState(0);
        React.useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
        //to force rerender for events
        React.useEffect(() => {
            refChangeCountSetter(refChangeCount + 1);
        }, [element.current]);
        const onChange = React.useCallback((e) => {
            if (typeof props.onChange === "function") {
                props.onChange(e);
            }
        }, [props.onChange]);
        const onKeydown = React.useCallback((e) => {
            if (typeof props.onKeydown === "function") {
                props.onKeydown(e);
            }
        }, [props.onKeydown]);
        const onKeyup = React.useCallback((e) => {
            if (typeof props.onKeyup === "function") {
                props.onKeyup(e);
            }
        }, [props.onKeyup]);
        const onEnter = React.useCallback((e) => {
            if (props.onEnter) {
                props.onEnter(e);
            }
        }, [props.onEnter]);
        const onFocus = React.useCallback((e) => {
            if (props.onFocus && e instanceof FocusEvent) {
                props.onFocus(e);
            }
        }, [props.onFocus]);
        const onBlur = React.useCallback((e) => {
            if (props.onBlur && e instanceof FocusEvent) {
                props.onBlur(e);
            }
        }, [props.onBlur]);
        const onInput = React.useCallback((e) => {
            if (typeof props.onInput == 'function' && e instanceof InputEvent) {
                props.onInput(e);
            }
        }, [props.onInput]);
        const onBeforeInput = React.useCallback((e) => {
            if (typeof props.onBeforeinput == 'function' && e instanceof InputEvent) {
                props.onBeforeinput(e);
            }
        }, [props.onBeforeinput]);
        React.useEffect(() => {
            let value = props.value;
            if (props.value == null || props.value === undefined) {
                value = '';
            }
            if (element && element.current && element.current) {
                element.current.value = (value === null || value === void 0 ? void 0 : value.toString()) || "";
            }
        }, [props.value]);
        // useEffect(() => {
        //     if(element && element.current){
        //         element.current.validationList = props.validationList || [];
        //     }
        // }, [props.validationList]);
        React.useEffect(() => {
            var _a;
            if (typeof props.disabled == "boolean") {
                (_a = element === null || element === void 0 ? void 0 : element.current) === null || _a === void 0 ? void 0 : _a.setAttribute('disabled', `${props.disabled}`);
            }
        }, [props.disabled]);
        React.useEffect(() => {
            var _a, _b;
            if (props.inputmode) {
                (_a = element.current) === null || _a === void 0 ? void 0 : _a.setAttribute('inputmode', props.inputmode);
            }
            else {
                (_b = element.current) === null || _b === void 0 ? void 0 : _b.removeAttribute('inputmode');
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

    exports.JBMobileInput = JBMobileInput;

}));
//# sourceMappingURL=JBMobileInput.umd.js.map
