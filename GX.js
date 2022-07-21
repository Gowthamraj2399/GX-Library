(function (root, factory) {
  root["GX"] = factory();
})(window, function () {
  function GXDom(inputObj) {
    var outputDomElement;
    if (!inputObj) {
      return "Please paass the object";
    }

    if (typeof inputObj === "object") {
      outputDomElement = createDomElement(inputObj);
    }

    //Function to create an actual dom
    function createDomElement(myObj) {
      var elementObj = document.createElement(myObj.type);
      if (typeof myObj.text === "string") {
        elementObj.innerText = myObj.text;
      }
      if (myObj.attr.length > 0) {
        for (var i = 0; i < myObj.attr.length; i++) {
          elementObj.setAttribute(
            Object.keys(myObj.attr[i]).toString(),
            myObj.attr[i][Object.keys(myObj.attr[i]).toString()]
          );
        }
      }
      if (myObj.child && myObj.child.length > 0) {
        for (var i = 0; i < myObj.child.length; i++) {
          elementObj.append(createDomElement(myObj.child[i]));
        }
      }

      return elementObj;
    }
    return outputDomElement;
  }

  GXDom.__proto__.create = function (tag, attr, text, child) {
    var element = {};
    if (typeof tag === "undefined") {
      return "Please add a valid tag";
    }
    if (typeof tag === "string") {
      element.type = tag;
    }
    if (typeof attr === "object") {
      element.attr = attr;
    }
    if (typeof text === "string") {
      element.text = text;
    }
    if (typeof child === "object") {
      element.child = child;
    }
    element.__proto__.set = set;
    element.__proto__.addChildren = addChildren;
    element.__proto__.setText = setText;
    element.__proto__.clone = cloneObj;
    return Object.assign({}, element);
  };

  var set = function (key, value) {
    var changed = false;
    if (key && value) {
      for (var i = 0; i < this.attr.length; i++) {
        var getKey = Object.keys(this.attr[i])[0];
        if (getKey === key) {
          this.attr[i][key] = value;
          changed = true;
        }
      }
      if (!changed) {
        this.attr.push({ [key]: value });
      }
    }

    return this;
  };

  var setText = function (newText) {
    if (typeof newText === "string") {
      this.text = newText;
    }

    return this;
  };

  var addChildren = function (elem) {
    if (Array.isArray(elem)) {
      this.child = elem;
    } else {
      if (this.child) {
        this.child.push(elem);
      } else {
        this.child = [];
        this.child.push(elem);
      }
    }
    return this;
  };

  var cloneObj = function () {
    return Object.assign({}, this);
  };

  return GXDom;
});
