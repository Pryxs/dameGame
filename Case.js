class Case {
    constructor(position, color, parent) {
        this.parent = parent;
        this.ref;
        this.position = position;
        this.color = color;
        this.pion;
        this.drawCase();
    }

    drawCase() {
        let Case = document.createElement("div");
        this.setAttributes(Case,{"class": "case", "x" : this.position.x, "y" : this.position.y});
        let dimension = ((80 * window.innerHeight) / 100) / this.parent.size;
        Case.style.width = dimension
        Case.style.height = dimension
        Case.style.backgroundColor = this.color;
        this.parent.ref.appendChild(Case);
        this.ref = Case;
    }

    setAttributes(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

}