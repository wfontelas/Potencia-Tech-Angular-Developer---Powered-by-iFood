//extends = no caso abaixo a classe vai se portar como elemento HTML
/*constructor é o o construtor da nossa classe e o super é uma chamada do construtor
 em que ele esta herdando*/
    
// class CardNews extends HTMLElement {
//     constructor() {
//         super();

//         const shadow = this.attachShadow({ mode: "open" }) //cria uma sombra
//         shadow.innerHTML = "<h1>Hello World</h1>";
//     }
// }
// customElements.define('card-news', CardNews)

class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() { 
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right")
        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;

    }
    
    styles() {}
    
}

customElements.define("card-news", CardNews);