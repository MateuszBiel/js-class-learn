var checkedOption = "prototype";
var instance = new rodProp();
var barType = "";

function setCheckedOption() {
    "use strict";
    return function() {
        checkedOption = this.value;
    };
}

function setCalculate() {
    "use strict";
    return function() {
        barType = this.value;
        displayCalculate(this.value);
    };
}

var radios = document.forms["pattern-checker"].pattern;
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].addEventListener("click", setCheckedOption());
}
var radios = document.forms["menu-algorythm"].figure;
for (var i = 0, max = radios.length; i < max; i++) {
    radios[i].addEventListener("click", setCalculate());
}

function setCurrentFigureName(name) {
    document.getElementById('current-set').innerHTML = name;
}

function displayElementsBloc(name, type) {

    var elements = document.getElementsByClassName(name);

    for (var i = 0; i < elements.length; i++) {
        document.getElementsByClassName(name)[i].style.display = type;
    }
}

function displayCalculate(name) {
    // $('#values').find("input[type=number], textarea").val("");
    clearFormData();

    displayElementsBloc("square-bar", "none");
    displayElementsBloc("T-bar", "none");
    changeDiameterToWidth(0);
    switch (name) {
        case "point":
            setCurrentFigureName("round bar");

            switch (this.checkedOption) {
                case "prototype":

                    this.instance = new rodProp();
                    this.instance.getName();
                    break;
                case "closure":

                    this.instance = cClousureBar();
                    this.instance.getName();
                    break;
                default:

                    this.instance = new moduleRod();
                    this.instance.getName();
                    break;
            }
            break;
        case "rect":
            setCurrentFigureName("square bar");
            switch (this.checkedOption) {
                case "prototype":
                    this.instance = new rodSquare();
                    this.instance.getName();
                    break;
                case "closure":
                    this.instance = cClousureSquare();
                    this.instance.getName();
                    break;
                default:
                    this.instance = new moduleSquare();
                    this.instance.getName();
                    break;
            }

            document.getElementsByClassName("square-bar")[0].style.display = 'block';
            changeDiameterToWidth(1);
            break;
        case "doubleT":
            setCurrentFigureName("I-beam");

            switch (this.checkedOption) {
                case "prototype":
                    this.instance = new rodSquare();
                    this.instance.getName();
                    break;
                case "closure":
                    this.instance = cClousureSquare();
                    this.instance.getName();
                    break;
                default:
                    this.instance = new moduleSquare();
                    this.instance.getName();
                    break;
            }
            displayElementsBloc("T-bar", "block");

            changeDiameterToWidth(1);
            break;
        default:
            break;
    }
}

function clearFormData() {
    var x = document.getElementById("values");
    var i;
    for (i = 0; i < x.length; i++) {
        x.elements[i].value = "";
    }
}

function getDataFromForm() {
    var x = document.getElementById("values");
    var tmpArray = [];
    var i;
    for (i = 0; i < x.length; i++) {
        tmpArray[x.elements[i].name] = x.elements[i].value;
    }
    return tmpArray;
}

function calculateForce() {
    var data = getDataFromForm();
    this.instance.setDiameter(data.diameter);
    this.instance.setLenght(data.lenght);
    this.instance.setForce(data.force);
    if (data.height) this.instance.setHeight(data.height);
    if (barType == "doubleT") {

        var decoratorObject = new Decorate(instance, data.heightS, data.diameterS);

        document.getElementById("eq-result").innerHTML = decoratorObject.calculateForce();

    } else {
        document.getElementById("eq-result").innerHTML = instance.getDeformation();
    }

    return data;
}


function changeDiameterToWidth(rec) {
    var doc = document.getElementsByClassName('diameter-word');
    for (var i = 0; i < doc.length; i++) {
        var theText = doc[i].innerHTML;
        if (rec) {
            theText = theText.replace("diameter", "width");
        } else {
            theText = theText.replace("width", "diameter");
        }
        document.getElementsByClassName('diameter-word')[i].innerHTML = theText;
    }
}
