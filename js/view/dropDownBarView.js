class dropDown {
  _units = document.querySelector(".units");
  _hiddenUnits = document.querySelector(".dropDown");
  _btn = document.querySelectorAll(".btn");
  constructor() {
    this._units.addEventListener("click", this.unitsDropDown.bind(this));
    window.addEventListener("click", (e) => {
      if (
        e.target === document.querySelector(".btn") ||
        e.target === this._hiddenUnits
      )
        return;
      if (
        e.target.closest(".btn__Units") !==
        document.querySelector(".btn__Units")
      ) {
        this.closeDropdown();
      }
    });
  }
  unitsDropDown() {
    this._hiddenUnits.classList.toggle("hidden");
  }
  closeDropdown() {
    this._hiddenUnits.classList.add("hidden");
  }

  disableBtn() {
    this._btn.forEach((btn) => (btn.disabled = true));
  }
  enableBtn() {
    this._btn.forEach((btn) => (btn.disabled = false));
  }

  renderActive() {
    this._hiddenUnits.querySelectorAll(".btn").forEach((e) => {
      e.classList.remove("active");
      e.querySelector(".img-check").classList.add("hidden");
    });

    const selector = [".Celsius", ".km", ".mm"];

    selector.forEach((btn) => {
      const active = document.querySelector(btn);

      active.classList.add("active");
      active.querySelector(".img-check").classList.remove("hidden");
    });
  }
  unitsClick(handler) {
    this._hiddenUnits.addEventListener("click", function (e) {
      const allBtn = document.querySelectorAll(".btn");
      const clickedBtn = e.target.closest(".btn");
      const imperial = [".fahrenheit", ".mph", ".in"];
      const impBtn = document.querySelector(".btn_imperial");
      if (!clickedBtn) return;

      if (clickedBtn.innerText === "Switch to Imperial") {
        allBtn.forEach((el) => {
          el.classList.remove("active");
          el.querySelector(".img-check").classList.add("hidden");
        });
        clickedBtn.classList.add("active");
        clickedBtn.querySelector(".img-check").classList.remove("hidden");
        imperial.forEach((el) => {
          const button = document.querySelector(el);
          button.classList.add("active");
          button.querySelector(".img-check").classList.remove("hidden");
        });
      }

      const parent = clickedBtn.closest(".group");
      if (!parent) {
        handler(clickedBtn.innerText);
        return;
      }

      if (clickedBtn.classList.contains("active")) return;

      parent.querySelectorAll(".btn").forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".img-check").classList.add("hidden");
      });
      if (impBtn.classList.contains("active")) {
        impBtn.classList.remove("active");
        impBtn.querySelector(".img-check").classList.add("hidden");
      }
      clickedBtn.classList.add("active");
      clickedBtn.querySelector(".img-check").classList.remove("hidden");

      handler(clickedBtn.innerText);
    });
  }
}

export default new dropDown();
