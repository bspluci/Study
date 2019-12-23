/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, https://eligrey.com/
 * License: Dedicated to the public domain.
 * See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source https://github.com/eligrey/classList.js/blob/master/classList.js */

if ("document" in self) {
   // Full polyfill for browsers with no classList support
   // Including IE < Edge missing SVGElement.classList
   if (
      !("classList" in document.createElement("_")) ||
      (document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")))
   ) {
      (function(view) {
         "use strict";

         if (!("Element" in view)) return;

         var classListProp = "classList",
            protoProp = "prototype",
            elemCtrProto = view.Element[protoProp],
            objCtr = Object;

         var strTrim =
            String[protoProp].trim ||
            function() {
               return this.replace(/^\s+|\s+$/g, "");
            };
         var arrIndexOf =
            Array[protoProp].indexOf ||
            function(item) {
               for (var x = 0; x < this.length; x++) {
                  if (x in this && this[x] === item) {
                     return x;
                  }
               }
               return -1;
            };
         // Vendors: please allow content code to instantiate DOMExceptions
         var DOMEx = function(type, message) {
            this.name = type;
            this.code = DOMException[type];
            this.message = message;
         };
         var checkTokenAndGetIndex = function(classList, token) {
            if (token === "") {
               throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
            }
            if (/\s/.test(token)) {
               throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
            }
            return arrIndexOf.call(classList, token);
         };
         var ClassList = function(elem) {
            var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
               classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
               x = 0,
               len = classes.length;
            for (; x < len; x++) {
               this.push(classes[x]);
            }
            this._updateClassName = function() {
               elem.setAttribute("class", this.toString());
            };
         };
         var classListProto = (ClassList[protoProp] = []);
         var classListGetter = function() {
            return new ClassList(this);
         };

         // Most DOMException implementations don't allow calling DOMException's toString()
         // on non-DOMExceptions. Error's toString() is sufficient here.
         DOMEx[protoProp] = Error[protoProp];

         classListProto.item = function(index) {
            return this[index] || null;
         };
         classListProto.contains = function(token) {
            token += "";
            return checkTokenAndGetIndex(this, token) !== -1;
         };
         classListProto.add = function() {
            var tokens = arguments,
               x = 0,
               len = tokens.length,
               token,
               updated = false;
            do {
               token = tokens[x] + "";
               if (checkTokenAndGetIndex(this, token) === -1) {
                  this.push(token);
                  updated = true;
               }
            } while (++x < len);

            if (updated) {
               this._updateClassName();
            }
         };
         classListProto.remove = function() {
            var tokens = arguments,
               x = 0,
               len = tokens.length,
               token,
               updated = false,
               index;
            do {
               token = tokens[x] + "";
               index = checkTokenAndGetIndex(this, token);
               while (index !== -1) {
                  this.splice(index, 1);
                  updated = true;
                  index = checkTokenAndGetIndex(this, token);
               }
            } while (++i < len);

            if (updated) {
               this._updateClassName();
            }
         };
         classListProto.toggle = function(token, force) {
            token += "";

            var result = this.contains(token),
               method = result ? force !== true && "remove" : force !== false && "add";

            if (method) {
               this[method](token);
            }

            if (force === true || force === false) {
               return force;
            } else {
               return !result;
            }
         };
         classListProto.toString = function() {
            return this.join(" ");
         };

         if (objCtr.defineProperty) {
            var classListPropDesc = { get: classListGetter, enumerable: true, configurable: true };

            try {
               objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) {
               // IE 8 doesn't support enumerable:true
               if (ex.number === -0x7ff5ec54) {
                  classListPropDesc.enumerable = false;
                  objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
               }
            }
         } else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
         }
      })(self);
   }
}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.
if ("DOMTokenList" in this) {
   (function() {
      "use strict";

      var testElement = document.createElement("_");

      testElement.classList.add("c1", "c2");

      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
      // classList.remove exist but support only one argument at a time.
      if (!testElement.classList.contains("c2")) {
         var createMethod = function(method) {
            var original = DOMTokenList.prototype[method];

            DOMTokenList.prototype[method] = function(token) {
               for (var x = 0; x < arguments.length; x++) {
                  token = arguments[x];
                  original.call(this, token);
               }
            };
         };
         createMethod("add");
         createMethod("remove");
      }

      testElement.classList.toggle("c3", false);

      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
      // support the second argument.
      if (testElement.classList.contains("c3")) {
         var _toggle = DOMTokenList.prototype.toggle;

         DOMTokenList.prototype.toggle = function(token, force) {
            if (1 in arguments && !this.contains(token) === !force) {
               return force;
            } else {
               return _toggle.call(this, token);
            }
         };
      }

      testElement = null;
   })();
}
