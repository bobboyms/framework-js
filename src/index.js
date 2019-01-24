import html2json from "./lib/html2json";

let obj = html2json(document.getElementsByTagName("component")[0])

var no = 1;
console.log("Nó numero ", no)


const root = document.getElementById("02")

var no = 0;

function createElement(obj,pai) {
    
    const { type } = obj;

    if (type === "Elem") {
        
        console.log("Nome da tag ", obj.tagName)

        let element = document.createElement(obj.tagName)
        pai.appendChild(element)

        console.log(pai)

        //cria os atributos
        const { attributes } = obj;

        for (let att in attributes) {
            const [name, value] = attributes[att];

            element.setAttribute(name, value);
        }

        
        //console.log(element)

        //pega os filhos
        const { children } = obj;
        montaDom(children, element)
    }

    if (type === "TextElem") {
        pai.innerHTML = obj.textContent;
    }
}

function montaDom(obj, pai) {

    console.log("Acessando o Nó, " , ++no)

    const { type } = obj; 

    if (type === undefined) {
        
        if (Array.isArray(obj)) {

            for (let key in obj) {
                createElement(obj[key],pai)
            }

        }

    } else {
        createElement(obj,pai)
    }    
    
}


montaDom(obj,root)

