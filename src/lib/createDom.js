
function createElement(obj,pai) {
    
    const { type } = obj;

    if (type === "Elem") {
        
        let element = document.createElement(obj.tagName)
        pai.appendChild(element)

        //cria os atributos
        const { attributes } = obj;

        for (let att in attributes) {
            const [name, value] = attributes[att];
            element.setAttribute(name, value);
        }

        //pega os filhos
        const { children } = obj;
        domCreate(children, element)
    }

    if (type === "TextElem") {
        let text = document.createTextNode(obj.textContent);
        pai.appendChild(text) //= "" + 
    }

}



function domCreate(obj, pai) {

    const { type } = obj; 

    if (type === undefined) {
        
        if (Array.isArray(obj)) {

            for (let key in obj) {

                //console.log(obj[key])

                const { type } = obj[key];

                if (type === "TextElem") {
                    createElement(obj[key],pai)
                }

                if (type === "Elem") {

                    if (obj[key].tagName === "P") {
                        createElement(obj[key],pai)
                    }

                    if (obj[key].tagName === "DIV") {
                        createElement(obj[key],pai)
                    }

                    if (obj[key].tagName === "H1") {
                        createElement(obj[key],pai)
                    }

                    if (obj[key].tagName === "B") {
                        createElement(obj[key],pai)
                    }

                    if (obj[key].tagName === "BUTTON") {
                        createElement(obj[key],pai)
                    }

                }
              
            }

        }

    } else {
        createElement(obj,pai)
    }    
    
}

export default domCreate;

