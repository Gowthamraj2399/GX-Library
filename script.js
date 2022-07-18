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

var icon = GX.create("h1", [{ class: "fw-bold" }, { id: "my-id" }], "GX");

var menu = GX.create("div", [
  {
    class: "d-flex gap-4",
  },
]);

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

iconContainer.addChild(icon);
menu.addChild(menuItem1).addChild(menuItem2);
myHeader.addChild(iconContainer).addChild(menu);

var Dom = GX(myHeader);

document.body.append(Dom);
