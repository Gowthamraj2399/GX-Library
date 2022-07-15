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
  GXDom.__proto__.create = function (elementObj) {
    if (!elementObj) {
      return "Please pass the element oject to create object model";
    }
    if (!elementObj.type && typeof elementObj.type === "string") {
      return "Please pass the element object with correct type";
    }

    newElem.type = elementObj.type;

    if (elementObj.attr && typeof elementObj.attr === "object") {
      newElem.attr = elementObj.attr;
    }
    if (elementObj.child && typeof elementObj.child === "object") {
      newElem.child = elementObj.child;
    }

    return newElem;
  };

  GXDom.__proto__.set = function (key, value) {
    for (var i = 0; i < newElem.attr.length; i++) {
      var getKey = Object.keys(newElem.attr[i])[0];
      if (getKey === key) {
        newElem.attr[i][key] = value;
      }
    }
  };

  GXDom.__proto__.addChild = function (elem) {
    newElem.child.push(elem);
  };

  return GXDom;
});
