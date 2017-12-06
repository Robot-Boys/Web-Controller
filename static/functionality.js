function changePose(pose) {
    console.log("a js pose:", pose);
    axios.put('/pose/' + pose)
        .then(function (succes) {
                console.log("pose puted");
            }
        ).catch(function (error) {
        console.log('pose put failed', error);
    });
}

function toPosition(motor, position) {
    //var position = document.getElementById("pos").value;
    console.log("a js position:", position);
    axios.put('/position/' + position + '/motor/' + motor)
        .then(function (succes) {
                console.log("position puted");
            }
        ).catch(function (error) {
        console.log('position put failed', error);
    });
}
/*
var headSlider = document.getElementById("headSlider");
var headOutput = document.getElementById("headSliderValue");
headOutput.innerHTML = headSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
headSlider.onmouseup = function () {
    headOutput.innerHTML = this.value;
    console.log('Bead value', this.value);
    toPosition('head', this.value)
}

var bodySlider = document.getElementById("bodySlider");
var bodyOutput = document.getElementById("bodySliderValue");
bodyOutput.innerHTML = headSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
bodySlider.onmouseup = function () {
    bodyOutput.innerHTML = this.value;
    console.log('Body value', this.value);
    toPosition('body', this.value)
}
*/

$("#up-down-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "custom-quarter",
    value: 0,
    startAngle: 45,
    editableTooltip: true,
    radius: 150,
    width: 1,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value;
    },
    change: function (args) {
        console.log('change', args.value)
        toPosition('body', args.value)
    }
});

$("#left-right-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "custom-quarter",
    value: 0,
    startAngle: 135,
    editableTooltip: true,
    radius: 150,
    width: 1,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value;
    },
    change: function (args) {
        console.log('change', args.value)
        toPosition('body', args.value)
    }
});

$("#rotation-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "full",
    value: 0,
    startAngle: 0,
    endAngle: 360,
    editableTooltip: true,
    radius: 120,
    width: 1,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value;
    },
    change: function (args) {
        console.log('change', args.value)
        toPosition('body', args.value)
    }
});

$("#knee-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "full",
    value: 0,
    startAngle: 0,
    endAngle: 360,
    editableTooltip: true,
    radius: 120,
    width: 1,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value;
    },
    change: function (args) {
        console.log('change', args.value)
        toPosition('body', args.value)
    }
});

$("#ground-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "full",
    value: 0,
    startAngle: 0,
    endAngle: 360,
    editableTooltip: true,
    radius: 120,
    width: 1,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value;
    },
    change: function (args) {
        console.log('change', args.value)
        toPosition('body', args.value)
    }
});
