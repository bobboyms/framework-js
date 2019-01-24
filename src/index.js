import html2json from "./lib/html2json";
import domCreate from "./lib/createDom";
import ComponentController from "./lib/ComponentController";

const { addComponent, components } = ComponentController


class Component {
    
    constructor(name) {

    }

    createComponent = () => {
        
        let component = html2json(document.getElementById("01"))
        addComponent(component)

        console.log(components)

        const root = document.getElementById("02")
        domCreate(component,root)
    }


}

new Component().createComponent();
