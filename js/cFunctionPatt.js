var modulePoint = (function() {
    var modulePoint = function() {
        var me = {};
        me.lenght = 1;
        me.force = 2;
        me.young = 205;

        me.checkParent = function() {
            console.log('parent');
        }
        
        me.getFunctionName=function(){
            console.log("functional pattern");
        }
        
        me.getName=function(){
            console.log("functional pattern");
        }

        me.getLenght = function() {
            return this.subproperty;
        }

        me.setLenght = function(first_argument) {
            this.lenght = first_argument
        }

        me.getForce = function() {
            return this.force;
        }

        me.setForce = function(first_argument) {
            this.force = first_argument
        }

        me.getYoung = function() {
            return this.young;
        }

        me.setYoung = function(first_argument) {
            this.young = first_argument
        }

        return me;
    };
    return modulePoint;
}());

var moduleRod = (function() {
    var moduleRod = function() {
        var me = modulePoint();

        me.diameter = 1;
        me.equasion = function() {
            return (3.14 / 64) * Math.pow(me.diameter, 4)
        };

        me.setDiameter = function(first_argument) {
            this.diameter = first_argument
        },
        me.getDiameter = function() {
            return this.diameter;
        },
        me.getDeformation = function() {
            def = (me.force * Math.pow(me.lenght, 3)) / me.young * me.equasion();
            return def;
        }
        



        return me;
    };

    return moduleRod;
}());

var moduleSquare = (function() {
    var moduleSquare = function() {
        var me = moduleRod();
        me.height =0;

        me.equasion = function() {
            return ((this.diameter * Math.pow(this.height, 3)) / 12);
        };

        me.setDiameter = function(first_argument) {
            this.diameter = first_argument
        },
        me.getDiameter = function() {
            return this.diameter;
        },
        me.getHeight = function() {
            return this.height;
        };

        me.setHeight = function(first_argument) {
            this.height = first_argument
        };

        me.getDeformation = function() {
            def = (me.force * Math.pow(me.lenght, 3)) / me.young * me.equasion();
            return def;
        }
        return me;
    };

    return moduleSquare;
}());

