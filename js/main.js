var checkedOption = "prototype";
var instance;
var barType="";

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
            barType = this.value;
            displayCalculate(this.value);
            
        }
    }

})

function displayCalculate(name) {
    $('#values').find("input[type=number], textarea").val("");
    $(".square-bar").hide();
    $(".T-bar").hide();
    changeDiameterToWidth(0)
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
            changeDiameterToWidth(1);
            break;
        case "doubleT":
            $(".calculate-area h1").html("I-beam");
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
            $(".T-bar").show();
            changeDiameterToWidth(1);
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
    this.instance.setLenght(data["lenght"]);
    this.instance.setForce(data["force"]);
    if (data["height"]) this.instance.setHeight(data["height"]);
    if (barType=="doubleT") {
        console.log(barType);
        var decoratorObject= new decorate(instance,data["heightS"],data["diameterS"]);
        console.log(decoratorObject);
        $("#eq-result").html(decoratorObject.calculateForce());

    }else{
        $("#eq-result").html(this.instance.getDeformation());
    }
    
    return data;
}


function changeDiameterToWidth(rec){
    var doc = document.getElementsByClassName('diameter-word');
    for (var i = 0; i < doc.length; i++) {
        var theText =doc[i].innerHTML;
        if (rec) {
            theText = theText.replace("diameter", "width");
        }else{
            theText = theText.replace("width", "diameter");
        }
        document.getElementsByClassName('diameter-word')[i].innerHTML =theText;
    };
}