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

  var newElem = {};
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
    if (typeof element.child === "object") {
      element.child = [];
      element.child.push(child);
    }

    return this.createElement(element);
  };
  GXDom.__proto__.createElement = function (elementObj) {
    if (!elementObj) {
      return "Please pass the element oject to create object model";
    }
    if (!elementObj.type && typeof elementObj.type === "string") {
      return "Please pass the element object with correct type";
    }

    newElem.type = elementObj.type;
    newElem.attr = null;
    if (elementObj.attr && typeof elementObj.attr === "object") {
      newElem.attr = elementObj.attr;
    }
    if (elementObj.child && typeof elementObj.child === "object") {
      newElem.child = elementObj.child;
    }
    if (elementObj.text && typeof elementObj.text === "string") {
      newElem.text = elementObj.text;
    }
    newElem.__proto__.set = set;
    newElem.__proto__.addChild = addChild;
    newElem.__proto__.setText = setText;
    return Object.assign({}, newElem);
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

  var setText = function (text) {
    if (typeof text === "string") {
      this.text = text;
    }

    return this;
  };

  var addChild = function (elem) {
    if (this.child) {
      this.child.push(elem);
    } else {
      this.child = [];
      this.text = null;
      this.child.push(elem);
    }
    return this;
  };

  return GXDom;
});
