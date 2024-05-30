class Kartya{
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;
    #id;

    constructor(id, allapot, szuloElem){
        this.#id = id;
        this.#allapot = allapot;
        this.#fajlnev = "kep"+id+".jpg"
        this.szuloElem = $(`#${szuloElem}`);
        szuloElem.html(`<div id="${id}"><img src="${this.#fajlnev}" alt="kep"></div>`);
        this.#divElem = $(`#${id}`);
        this.#imgElem = $(`#${id} img`);
        this.#blokkolt = false;

    }

    setAllapot() {
        if(this.#allapot === true){
            this.#allapot = false;
        }else{
            this.#allapot = true;
        }
        this.#setLap();
    }

    #setLap(){
        if(this.#allapot === false){
            this.#imgElem.attr("src", "hatter.jpg");
        }else{
            this.#imgElem.attr("src", `${this.#fajlnev}`);
        }
    }

    getFajlnev(){
        return this.#fajlnev;
    }

    #kattintasTrigger(){
        const event = new CustomEvent("fordit");
        this.#divElem.dispatchEvent(event);
    }

}