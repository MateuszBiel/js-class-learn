function extend(target, source) {
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            console.log(target[source]);
            target[prop] = source[prop];
        }
    }
    return target;
}

var cClousurePoint = function() {

    var me = {},
        lenght = 1,
        force = 2,
        young = 205;

    publicAPI();

    function publicAPI() {
        extend(me, {
            setLenght: function(_lenght) {
                lenght = _lenght;
            },
            getLenght: function() {
                return lenght;
            },
            setForce: function(_force) {
                force = _force;
            },
            getForce: function() {
                return force;
            },
            setYoung: function(_young) {
                young = _young;
            },
            getYoung: function() {
                return young;
            },
            getClousureName: function() {
                console.log('Clousure pattern');
            },
            getName: function() {
                console.log('Clousure pattern');
            }
        });
    }

    return me;
};

var cClousureBar = function() {

    var me = cClousurePoint(),
        diameter = 1;

    publicAPI();

    function publicAPI() {
        extend(me, {
            equasion: function() {
                return (3.14 / 64) * Math.pow(diameter, 4);
            },
            setDiameter: function(first_argument) {
                diameter = first_argument;
            },
            getDiameter: function() {
                return diameter;
            },
            getDeformation: function() {
                def = (me.getForce() * Math.pow(me.getLenght(), 3)) / me.getYoung() * me.equasion();
                return def;
            }
        });
    }

    return me;
};

var cClousureSquare = function() {

    var me = cClousureBar(),
        height = 0;

    publicAPI();

    function publicAPI() {
        extend(me, {
            equasion: function() {
                return ((me.getDiameter() * Math.pow(me.getHeight(), 3)) / 12);
            },
            getHeight: function() {
                return height;
            },
            setHeight: function(first_argument) {
                height = first_argument;
            }
        });
    }

    return me;
};
