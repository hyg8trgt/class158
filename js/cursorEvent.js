AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectItem: { type: "string", default: "" },
  },
  init: function () {
    // this.handlePlaceList()
    this.handleMouseEnter();
    this.handleMouseLeave();
  },
  handlePlaceList: function () {
    var id = this.el.getAttribute("id");
    var placeId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];
    // console.log("id", id);
    // console.log("placeId", placeId);
    if (placeId.includes(id)) {
      var placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectItem: id,
      });
      this.el.setAttribute("material", {
        color: "blue",
        opacity: 1,
      });
    }
  },
  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlaceList();
    });
  },
  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      if (this.data.selectItem) {
        const el = document.querySelector(`#${this.data.selectItem}`);
        const id = el.getAttribute("id");
        console.log(el)
        console.log(id)
        if (id == this.data.selectItem) {
          el.setAttribute("material",
            {
              color: "red",
              opacity: 1,
            })
            
        }
      }
    });
  },
});
