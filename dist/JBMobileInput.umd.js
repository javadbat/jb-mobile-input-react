(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('jb-mobile-input')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'jb-mobile-input'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JBMobileInput = {}, global.React, global.PropTypes));
})(this, (function (exports, React, PropTypes) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var arrayWithHoles = createCommonjsModule(function (module) {
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var iterableToArrayLimit = createCommonjsModule(function (module) {
	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
	}

	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var nonIterableRest = createCommonjsModule(function (module) {
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var slicedToArray = createCommonjsModule(function (module) {
	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
	}

	module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray);

	function useEvent(dom, event, handler) {
	  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	  React.useEffect(function () {
	    if (dom) {
	      // initiate the event handler
	      dom.addEventListener(event, handler, passive);
	    } // this will clean up the event every time the component is re-rendered


	    return function cleanup() {
	      if (dom) {
	        dom.removeEventListener(event, handler, passive);
	      }
	    };
	  });
	}

	var JBMobileInput = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
	  /**
	   * @type {React.MutableRefObject<HTMLInputElement>}
	   */
	  var element = React.useRef();

	  var _useState = React.useState(0),
	      _useState2 = _slicedToArray(_useState, 2),
	      refChangeCount = _useState2[0],
	      refChangeCountSetter = _useState2[1];

	  React.useImperativeHandle(ref, function () {
	    return element ? element.current : {};
	  }, [element]);
	  React.useEffect(function () {
	    refChangeCountSetter(refChangeCount + 1);
	  }, [element.current]);
	  var onChange = React.useCallback(function (e) {
	    if (typeof props.onChange === "function") {
	      props.onChange(e);
	    }
	  });
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
	    if (typeof props.onBeforeInput == 'function' && e instanceof InputEvent) {
	      props.onBeforeInput(e);
	    }
	  }, [props.onBeforeInput]);
	  React.useEffect(function () {
	    var value = props.value;

	    if (props.value === null || props.value === undefined) {
	      value = '';
	    } else {
	      element.current.value = value;
	    }
	  }, [props.value]);
	  React.useEffect(function () {
	    element.current.validationList = props.validationList || [];
	  }, [props.validationList]);
	  React.useEffect(function () {
	    if (typeof props.disabled == "boolean") {
	      element.current.setAttribute('disabled', "".concat(props.disabled));
	    }
	  }, [props.disabled]);
	  React.useEffect(function () {
	    if (props.inputmode) {
	      element.current.setAttribute('inputmode', props.inputmode);
	    } else {
	      element.current.removeAttribute('inputmode');
	    }
	  }, [props.inputmode]);
	  useEvent(element.current, 'change', onChange);
	  useEvent(element.current, 'input', onInput);
	  useEvent(element.current, 'beforeinput', onBeforeInput);
	  useEvent(element.current, 'keydown', onKeydown);
	  useEvent(element.current, 'keyup', onKeyup);
	  useEvent(element.current, 'focus', onFocus);
	  useEvent(element.current, 'blur', onBlur);
	  useEvent(element.current, 'enter', onEnter);
	  return /*#__PURE__*/React__default["default"].createElement("jb-mobile-input", {
	    placeholder: props.placeholder ? props.placeholder : '',
	    ref: element,
	    "class": props.className ? props.className : '',
	    label: props.label ? props.label : '',
	    message: props.message ? props.message : ''
	  });
	});
	JBMobileInput.propTypes = {
	  label: PropTypes__default["default"].string,
	  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
	  onChange: PropTypes__default["default"].func,
	  onKeyup: PropTypes__default["default"].func,
	  onKeydown: PropTypes__default["default"].func,
	  onEnter: PropTypes__default["default"].func,
	  onInput: PropTypes__default["default"].func,
	  onFocus: PropTypes__default["default"].func,
	  onBlur: PropTypes__default["default"].func,
	  onBeforeinput: PropTypes__default["default"].func,
	  className: PropTypes__default["default"].string,
	  validationList: PropTypes__default["default"].array,
	  placeholder: PropTypes__default["default"].string,
	  disabled: PropTypes__default["default"].bool,
	  inputmode: PropTypes__default["default"].string,
	  message: PropTypes__default["default"].string
	};
	JBMobileInput.displayName = "JBMobileInput";

	exports.JBMobileInput = JBMobileInput;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=JBMobileInput.umd.js.map
