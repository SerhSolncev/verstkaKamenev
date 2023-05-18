(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/js/modules/sliders/types/index.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "SliderProducts", function() { return products_SliderProducts; });
__webpack_require__.d(types_namespaceObject, "SliderShop", function() { return shop_SliderShop; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.weak-map.js
var es_weak_map = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__(149);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 101 modules
var swiper_esm = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(154);

// CONCATENATED MODULE: ./src/js/utils/dash-to-cap-words.js



/**
 * @param {String|null|undefined} str
 */
var dashToCapWords = function dashToCapWords(str) {
  if (typeof str === 'string') {
    return str.replace(/^.|-./g, function (letter, index) {
      return index === 0 ? letter.toUpperCase() : letter.substr(1).toUpperCase();
    });
  }

  return '';
};
// CONCATENATED MODULE: ./src/js/modules/sliders/utils.js

/**
 * @param {String|undefined|null} dashName
 */

var utils_getSliderClassName = function getSliderClassName(dashName) {
  return "Slider".concat(dashToCapWords(dashName));
};
// CONCATENATED MODULE: ./src/js/modules/sliders/storage.js
var slidersCache = {};
// EXTERNAL MODULE: ./src/js/var/array-from.js
var array_from = __webpack_require__(103);

// CONCATENATED MODULE: ./src/js/utils/get-elements.js

/**
 * @param {HTMLElement|Document|Window} context
 * @param {string} selector
 * @param {boolean} [returnAsArray=false]
 * @returns {null|*|[]|NodeListOf<HTMLElementTagNameMap[*]>|NodeListOf<Element>|NodeListOf<SVGElementTagNameMap[*]>}
 */

var get_elements_getElements = function getElements(context, selector) {
  var returnAsArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!context && !selector) {
    return [];
  }

  return returnAsArray ? Object(array_from["a" /* default */])(context.querySelectorAll(selector)) : context.querySelectorAll(selector);
};
// CONCATENATED MODULE: ./src/js/modules/sliders/slider.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






swiper_esm["h" /* default */].use([swiper_esm["a" /* Autoplay */], swiper_esm["b" /* EffectCoverflow */], swiper_esm["c" /* EffectFade */], swiper_esm["d" /* Lazy */], swiper_esm["e" /* Navigation */], swiper_esm["g" /* Thumbs */], swiper_esm["f" /* Pagination */]]);

var slider_Slider = /*#__PURE__*/function () {
  /** @param {HTMLElement} element */
  function Slider(element) {
    _classCallCheck(this, Slider);

    this.element = element;
    this.selector = '.swiper-container';
    this.swiper = null;
  }

  _createClass(Slider, [{
    key: "main",
    value: function main() {
      var _this = this;

      this.swiper = new swiper_esm["h" /* default */](this.element.querySelector(this.selector), this.options);
      slidersCache[utils_getSliderClassName(this.element.dataset.slider)] = this.swiper;
      this.events();
      window.addEventListener('resize', function () {
        _this.update();
      });
      window.addEventListener('orientationchange', function () {
        _this.update();
      });
    }
  }, {
    key: "events",
    value: function events() {}
  }, {
    key: "stopAutoplayByHover",
    value: function stopAutoplayByHover() {
      var _this2 = this;

      if (this.swiper) {
        this.swiper.$el.on('mouseenter', function () {
          _this2.swiper.autoplay.stop();
        });
        this.swiper.$el.on('mouseleave', function () {
          _this2.swiper.autoplay.start();
        });
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.swiper) {
        this.swiper.update();
        this.swiper.lazy.load();
        this.swiper.navigation.update();
        this.swiper.pagination.update();
      }
    }
  }, {
    key: "options",
    get: function get() {
      return {};
    }
  }, {
    key: "slidesCount",
    get: function get() {
      return get_elements_getElements(this.element, '.swiper-slide').length;
    }
  }]);

  return Slider;
}();


// CONCATENATED MODULE: ./src/js/utils/get-element.js
/**
 * @param {HTMLElement|Document} context
 * @param {String} selector
 * @returns {Element|null}
 */
var getElement = function getElement(context, selector) {
  if (!context && !selector) {
    return null;
  }

  return context.querySelector(selector);
};
// CONCATENATED MODULE: ./src/js/modules/sliders/types/products.js













function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function products_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function products_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function products_createClass(Constructor, protoProps, staticProps) { if (protoProps) products_defineProperties(Constructor.prototype, protoProps); if (staticProps) products_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var products_SliderProducts = /*#__PURE__*/function (_Slider) {
  _inherits(SliderProducts, _Slider);

  var _super = _createSuper(SliderProducts);

  function SliderProducts() {
    products_classCallCheck(this, SliderProducts);

    return _super.apply(this, arguments);
  }

  products_createClass(SliderProducts, [{
    key: "events",
    value: function events() {
      this.swiper.on('resize', function () {});
      this.swiper.on('slideChange', function () {});
    }
  }, {
    key: "options",
    get: function get() {
      var _this = this;

      return {
        simulateTouch: true,
        speed: 500,
        lazy: {
          loadOnTransitionStart: true,
          loadPrevNext: true,
          loadPrevNextAmount: 2
        },
        followFinger: true,
        navigation: {
          nextEl: getElement(this.element, '.js-next'),
          prevEl: getElement(this.element, '.js-prev'),
          disabledClass: 'swiper-lock'
        },
        watchSlidesProgress: true,
        pagination: {
          el: getElement(this.element, '.swiper-pagination'),
          clickable: true,
          type: 'progressbar'
        },
        on: {
          afterInit: function afterInit() {
            var total = getElement(_this.element, '.js-swiper-total');
            var current = getElement(_this.element, '.js-swiper-current');

            var totalSlides = _this.element.querySelectorAll('.swiper-slide').length;

            total.innerText = Number(totalSlides) < 10 ? '/0' + Number(totalSlides) : Number(totalSlides);
            current.innerText = '0' + _this.element.querySelectorAll('.swiper-slide-visible').length + '/';
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd(event) {
            var current = getElement(_this.element, '.js-swiper-current');
            current.innerText = Number(_this.swiper.activeIndex + _this.element.querySelectorAll('.swiper-slide-visible').length) < 10 ? '0' + Number(_this.swiper.activeIndex + _this.element.querySelectorAll('.swiper-slide-visible').length) + '/' : Number(_this.swiper.activeIndex + _this.element.querySelectorAll('.swiper-slide-visible').length) + '/';
          }
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 12
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 12
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 12
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 12
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 24
          }
        }
      };
    }
  }]);

  return SliderProducts;
}(slider_Slider);


// CONCATENATED MODULE: ./src/js/modules/sliders/types/shop.js













function shop_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { shop_typeof = function _typeof(obj) { return typeof obj; }; } else { shop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return shop_typeof(obj); }

function shop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function shop_createClass(Constructor, protoProps, staticProps) { if (protoProps) shop_defineProperties(Constructor.prototype, protoProps); if (staticProps) shop_defineProperties(Constructor, staticProps); return Constructor; }

function shop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) shop_setPrototypeOf(subClass, superClass); }

function shop_setPrototypeOf(o, p) { shop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return shop_setPrototypeOf(o, p); }

function shop_createSuper(Derived) { var hasNativeReflectConstruct = shop_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = shop_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = shop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return shop_possibleConstructorReturn(this, result); }; }

function shop_possibleConstructorReturn(self, call) { if (call && (shop_typeof(call) === "object" || typeof call === "function")) { return call; } return shop_assertThisInitialized(self); }

function shop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function shop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function shop_getPrototypeOf(o) { shop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return shop_getPrototypeOf(o); }




var shop_SliderShop = /*#__PURE__*/function (_Slider) {
  shop_inherits(SliderShop, _Slider);

  var _super = shop_createSuper(SliderShop);

  function SliderShop() {
    shop_classCallCheck(this, SliderShop);

    return _super.apply(this, arguments);
  }

  shop_createClass(SliderShop, [{
    key: "events",
    value: function events() {
      this.swiper.on('afterInit', function () {});
      this.swiper.on('slideChange', function () {});
    }
  }, {
    key: "options",
    get: function get() {
      var _this = this;

      return {
        simulateTouch: false,
        speed: 300,
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        lazy: {
          loadOnTransitionStart: true
        },
        followFinger: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        forceToAxis: true,
        navigation: {
          nextEl: getElement(this.element, '.js-next'),
          prevEl: getElement(this.element, '.js-prev'),
          disabledClass: 'swiper-lock'
        },
        pagination: {
          el: getElement(this.element, '.swiper-pagination'),
          clickable: true,
          type: 'progressbar'
        },
        on: {
          afterInit: function afterInit() {
            var total = getElement(_this.element, '.js-swiper-total');

            var totalSlides = _this.element.querySelectorAll('.swiper-slide').length;

            total.innerText = Number(totalSlides) < 10 ? '0' + Number(totalSlides) : Number(totalSlides);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd(event) {
            var current = getElement(_this.element, '.js-swiper-current');
            current.innerText = Number(_this.swiper.activeIndex + 1) < 10 ? '0' + Number(_this.swiper.activeIndex + 1) : Number(_this.swiper.activeIndex + 1);
          }
        }
      };
    }
  }]);

  return SliderShop;
}(slider_Slider);


// CONCATENATED MODULE: ./src/js/modules/sliders/types/index.js


// CONCATENATED MODULE: ./src/js/modules/sliders/index.js









/**
 * @param {HTMLElement} element
 */

function sliderInit(element) {
  var sliderType = utils_getSliderClassName(element.dataset.slider);

  if (!types_namespaceObject[sliderType]) {
    return;
  }

  var slider = new types_namespaceObject[sliderType](element);
  slider.main();
}

var cache = new WeakMap();
/**
 * @param {HTMLElement[]} elements
 */

function slidersObserver(elements) {
  elements.forEach(function (el) {
    if (!cache.has(el)) {
      sliderInit(el);
    }

    cache.set(el, 'slider');
  });
}
/**
 * @param {HTMLElement[]} elements
 */


/* harmony default export */ var sliders = __webpack_exports__["default"] = (function (elements) {
  slidersObserver(elements);
});

/***/ })

}]);