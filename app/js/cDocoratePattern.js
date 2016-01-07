var Decorate = (function() {
    var decorate = function(classs, heightSmall, widthSmall) {
        this.classs = classs;
        this.heightSmall = heightSmall;
        this.widthSmall = widthSmall;
        this.calculateForce = function() {
            console.log(this.classs.getDiameter() * this.classs.getDiameter());
            var equasion = (1 / 12 * (this.classs.getDiameter() * Math.pow(this.classs.getHeight(), 3) - widthSmall * Math.pow(heightSmall, 3)));
            var def = (this.classs.getForce() * Math.pow(this.classs.getLenght(), 3)) / this.classs.getYoung() * equasion;
            return def;
        };
    };

    return decorate;
}());
