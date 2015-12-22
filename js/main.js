var checkedOption = "prototype";
var instance;

$(document).ready(function() {
    var radios = document.forms["pattern-checker"].elements["pattern"];
    console.log(radios);
    for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            checkedOption = this.value;
        }
    }
    var radios = document.forms["menu-algorythm"].elements["figure"];
    for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            console.log(this.value);
            displayCalculate(this.value);
        }
    }

})

function displayCalculate(name) {
    $('#values').find("input[type=number], textarea").val("");
    $(".square-bar").hide();
    switch (name) {
        case "point":
            $(".calculate-area h1").html("round bar");
            switch (this.checkedOption){
                case "prototype":
                    console.log("prototyte rodProp");
                    this.instance = new rodProp();
                    this.instance.getName();
                    break;
                case "closure": 
                    console.log("closure cClousureBar");
                    this.instance = cClousureBar();
                    this.instance.getName();
                    break;
                default:
                    console.log("module moduleRod");
                    this.instance = new moduleRod();
                    this.instance.getName();
                    break;
            }
            break;
        case "rect":
            $(".calculate-area h1").html("square bar");
            switch (this.checkedOption){
                case "prototype":
                    this.instance = new rodSquare();
                    this.instance.getName();
                    break;
                case "closure":
                    this.instance = cClousureSquare();
                    this.instance.getName();
                    break;
                default:
                    this.instance = new moduleSquare() ;
                    this.instance.getName();
                    break;
            }
            $(".square-bar").show();
            break;
            
        case "doubleT":
            break;
        default:
            break;
    }
}

function calculateForce() {
    var data = $('#values').serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    console.log(this.instance);
    this.instance.setDiameter(data["diameter"]);
    this.instance.setLenght(data["width"]);
    this.instance.setForce(data["force"]);
    if (data["height"]) this.instance.setHeight(data["force"]);
    $("#eq-result").html(this.instance.getDeformation());
    return data;
}
