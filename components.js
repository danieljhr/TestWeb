
class ElementDetails extends HTMLElement {

    _name = "Post title"; 
    _image = "image.jpg";
    _link = "https://bypeople.com";
    _description = `A placeholder inside a web component that users 
        can fill with their own markup, with the effect 
        of composing different DOM trees together.`;


    imageSelector = ".card__image-element";
    titleSelector = "slot[name='title']";
    descriptionSelector = "slot[name='description']";
    linkSelector = ".card__link-element"


    constructor() {
        /* Call the properties of HTMLElement */
        super();
        
        /* Get the template in HTML */
        var template = document.getElementById('element-details-template').content;

        /* Create a shadows DOM */
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.cloneNode(true));

        template.querySelector(this.imageSelector).textContent = this._image;    
        template.querySelector(this.titleSelector).textContent = this._name;    
        template.querySelector(this.descriptionSelector).textContent = this._description;                  
    }

    /* Component attributes */
    
    set name (val) {
        this._name = val;
        this.shadowRoot.querySelector(this.titleSelector).textContent = val;
    }

    get name () {
        this.getAttribute("name");
    }

    set description (val) {
        this._name = val;
        this.shadowRoot.querySelector(this.descriptionSelector).textContent = val;
    }

    get description () {
        this.getAttribute("description");
    }

    set image (val) {
        this._image = val;
        this.shadowRoot.querySelector(this.imageSelector).src = val;
    }

    get image () {
        this.getAttribute("image");
    }

    set link (val) {
        this._link = val;
        this.shadowRoot.querySelector(this.linkSelector).href = val;
    }

    get link () {
        this.getAttribute("link");
    }

    /* Setting attributes for watching */ 
    static get observedAttributes() {
        return ['name', 'image', 'link', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
        
}


customElements.define('element-details', ElementDetails)
