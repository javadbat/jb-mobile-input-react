'use strict';

var React = require('react');
require('jb-mobile-input');
require('jb-input');

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

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
function useJBInputEvents(element, props) {
  var onChange = React.useCallback(function (e) {
    if (typeof props.onChange === "function") {
      props.onChange(e);
    }
  }, [props.onChange]);
  var onKeydown = React.useCallback(function (e) {
    if (typeof props.onKeydown === "function") {
      props.onKeydown(e);
    }
  }, [props.onKeydown]);
  var onKeyup = React.useCallback(function (e) {
    if (typeof props.onKeyup === "function") {
      props.onKeyup(e);
    }
  }, [props.onKeyup]);
  var onEnter = React.useCallback(function (e) {
    if (props.onEnter) {
      props.onEnter(e);
    }
  }, [props.onEnter]);
  var onFocus = React.useCallback(function (e) {
    if (props.onFocus && e instanceof FocusEvent) {
      props.onFocus(e);
    }
  }, [props.onFocus]);
  var onBlur = React.useCallback(function (e) {
    if (props.onBlur && e instanceof FocusEvent) {
      props.onBlur(e);
    }
  }, [props.onBlur]);
  var onInput = React.useCallback(function (e) {
    if (typeof props.onInput == 'function' && e instanceof InputEvent) {
      props.onInput(e);
    }
  }, [props.onInput]);
  var onBeforeInput = React.useCallback(function (e) {
    if (typeof props.onBeforeinput == 'function' && e instanceof InputEvent) {
      props.onBeforeinput(e);
    }
  }, [props.onBeforeinput]);
  useEvent(element.current, 'change', onChange);
  useEvent(element.current, 'keydown', onKeydown);
  useEvent(element.current, 'keyup', onKeyup);
  useEvent(element.current, 'focus', onFocus);
  useEvent(element.current, 'blur', onBlur);
  useEvent(element.current, 'enter', onEnter);
  useEvent(element.current, 'input', onInput);
  useEvent(element.current, 'beforeinput', onBeforeInput);
}
function useJBInputAttribute(element, props) {
  React.useEffect(function () {
    var value = props.value;
    if (props.value == null || props.value === undefined) {
      value = '';
    }
    if (element && element.current && element.current) {
      var _value;
      element.current.value = ((_value = value) === null || _value === void 0 ? void 0 : _value.toString()) || "";
    }
  }, [props.value]);
  React.useEffect(function () {
    if (props.type) {
      var _element$current;
      element === null || element === void 0 || (_element$current = element.current) === null || _element$current === void 0 || _element$current.setAttribute('type', props.type);
    }
  }, [props.type]);
  React.useEffect(function () {
    if (element && element.current) {
      element.current.validation.list = props.validationList || [];
    }
  }, [props.validationList]);
  React.useEffect(function () {
    var _element$current2;
    element === null || element === void 0 || (_element$current2 = element.current) === null || _element$current2 === void 0 || _element$current2.setAttribute('label', props.label || "");
  }, [props.label]);
  React.useEffect(function () {
    if (typeof props.disabled == "boolean") {
      var _element$current3;
      element === null || element === void 0 || (_element$current3 = element.current) === null || _element$current3 === void 0 || _element$current3.setAttribute('disabled', "".concat(props.disabled));
    }
  }, [props.disabled]);
  React.useEffect(function () {
    if (props.inputmode) {
      var _element$current4;
      (_element$current4 = element.current) === null || _element$current4 === void 0 || _element$current4.setAttribute('inputmode', props.inputmode);
    } else {
      var _element$current5;
      (_element$current5 = element.current) === null || _element$current5 === void 0 || _element$current5.removeAttribute('inputmode');
    }
  }, [props.inputmode]);
  React.useEffect(function () {
    var _element$current6;
    element === null || element === void 0 || (_element$current6 = element.current) === null || _element$current6 === void 0 || _element$current6.setAttribute('message', props.message || "");
  }, [props.message]);
  React.useEffect(function () {
    var _element$current7;
    element === null || element === void 0 || (_element$current7 = element.current) === null || _element$current7 === void 0 || _element$current7.setAttribute('placeholder', props.placeholder || "");
  }, [props.placeholder]);
}

// eslint-disable-next-line react/display-name
var JBInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var element = React.useRef(null);
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    refChangeCount = _useState2[0],
    refChangeCountSetter = _useState2[1];
  React.useImperativeHandle(ref, function () {
    return element ? element.current : {};
  }, [element]);
  //to force rerender for events
  React.useEffect(function () {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useJBInputEvents(element, props);
  useJBInputAttribute(element, props);
  return /*#__PURE__*/React.createElement("jb-input", {
    ref: element,
    "class": props.className
  }, props.children);
});
JBInput.displayName = "JBInput";

// eslint-disable-next-line react/display-name
const JBMobileInput = React.forwardRef((props, ref) => {
    const element = React.useRef(null);
    const [refChangeCount, refChangeCountSetter] = React.useState(0);
    React.useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
    //to force rerender for events
    React.useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useJBInputAttribute(element, props);
    useJBInputEvents(element, props);
    return (React.createElement("jb-mobile-input", { ref: element, class: props.className }, props.children));
});
JBMobileInput.displayName = "JBMobileInput";

exports.JBMobileInput = JBMobileInput;
//# sourceMappingURL=JBMobileInput.cjs.js.map
