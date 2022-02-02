class Event {

    constructor() {

        this.btnMenu = document.querySelector("#icon-menu");
        this.header = document.querySelector("#header");
        this.menuFooter = document.querySelector(".menu-footer");
        this.logo = document.querySelector("#logo");
        this.userInfo = document.querySelector(".user-info");
        this.inputSearch = document.querySelector("#input-search");
        this.inputGroup = document.querySelector(".input-group");

    }

    onEvent(event) {
        this.btnMenu.addEventListener(event, () => {
            this.header.classList.toggle("active");
            this.menuFooter.classList.toggle("active");
            this.logo.classList.toggle("display-none");
            this.userInfo.classList.toggle("display-none");
            this.inputSearch.classList.toggle("display-none");
            this.inputGroup.classList.toggle("btn-search");
        });
    }

}

const event = new Event().onEvent("click");

