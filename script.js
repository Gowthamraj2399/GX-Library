//Header

var myHeader = GX.create("div", [
  {
    class: "d-flex justify-content-between align-items-center container",
  },
]);

var iconContainer = GX.create("div", [
  {
    class: "d-flex justify-content-center align-items-center",
  },
]);

var icon = GX.create("h1", [{ class: "fw-bold" }, { id: "my-id" }], "G");

var menuItem1 = GX.create(
  "h3",
  [
    {
      class: "fw-bold",
    },
  ],
  "Menu1"
);
var menuItem2 = GX.create(
  "h3",
  [
    {
      class: "fw-bold",
    },
  ],
  "Menu2"
);
var menu = GX.create(
  "div",
  [
    {
      class: "d-flex gap-4",
    },
  ],
  null,
  [menuItem1, menuItem2]
);

iconContainer.addChild(icon);
menu.addChild(menuItem1).addChild(menuItem2);
// myHeader.addChild(iconContainer).addChild(menu);
console.log(menu);
var Dom = GX(myHeader);
console.log(Dom);

document.body.append(Dom);
