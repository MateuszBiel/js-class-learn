var pointProt = (function() {
    function pointProt() {
        this.property = true;
        this.lenght = 1;
        this.force = 2;
        this.young = 205;
    }
    
    pointProt.prototype.getYoung = function() {
        return this.young;
    }

    pointProt.prototype.setYoung = function(first_argument) {
        this.young = young
    }
    pointProt.prototype.getLenght = function() {
        return this.lenght;
    }

    pointProt.prototype.setLenght = function(first_argument) {
        this.lenght = first_argument
    }

    pointProt.prototype.getForce = function() {
        return this.force;
    }

    pointProt.prototype.setForce = function(first_argument) {
        this.force = first_argument
    }

    pointProt.prototype.getSuperValue = function() {
        return this.property;
    }

    pointProt.prototype.getPrototypeName=function(){
        console.log("prototype");
    }

    pointProt.prototype.getName=function(){
        console.log("prototype");
    }

    return pointProt;
}());

var rodProp = (function() {
    function rodProp() {
        this.subproperty = false;
        this.diameter = 0;
    }

    rodProp.prototype = new pointProt();

    rodProp.prototype.getSubValue = function() {
        return this.subproperty;
    }

    rodProp.prototype.setDiameter = function(first_argument) {
        this.diameter = first_argument
    }

    rodProp.prototype.getDiameter = function() {
        return this.lenght;
    }

    rodProp.prototype.equation = function(){
        return (3.14 / 64) * Math.pow(this.diameter, 4);
    }

    rodProp.prototype.getDeformation = function() {
        console.log(this.force + " * " + Math.pow(this.lenght, 3) + " / 3*" + this.young + " 3,14/64* " + Math.pow(this.diameter, 4));
        def = (this.force * Math.pow(this.lenght, 3)) / (3*this.young * this.equation());
        return def;
    }

    return rodProp;
}());

var rodSquare = (function() {
    function rodSquare() {
        this.subproperty = false;
        this.height = 0;
    }

    rodSquare.prototype = new rodProp();

    rodSquare.prototype.getSubValue = function() {
        return this.subproperty;
    };

    rodSquare.prototype.getHeight = function() {
        return this.height;
    };

    rodSquare.prototype.setHeight = function(first_argument) {
        this.height = first_argument
    };
    rodSquare.prototype.equation = function(){
        console.log("this was called");
        return ((this.diameter * Math.pow(this.height, 3)) / 12);
    }


    return rodSquare;
}());
