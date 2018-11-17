"use strict";
class MindControl extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const div = document.createElement("div");
        shadowRoot.appendChild(div);
        div.style.width = "100%";
        div.style.height = "100%";
        let isOn = false;
        div.style.backgroundColor = "#20cc20";
        this.interval = setInterval(() => {
            if (isOn) {
                isOn = false;
                div.style.backgroundColor = "transparent";
            }
            else {
                isOn = true;
                div.style.backgroundColor = "#20cc20";
            }
        }, 100);
    }
    disconnectedCallback() {
        clearInterval(this.interval);
    }
}
window.customElements.define("mind-control", MindControl);
