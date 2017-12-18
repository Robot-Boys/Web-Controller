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
        toPosition('up_down', args.value)
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
        toPosition('left_right', args.value)
    }
});

$("#rotation-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "half-top",
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
        console.log('rotation', args.value)
        toPosition('rotation', args.value)
    }
});

$("#knee-slider").roundSlider({
    min: -70,
    max: 70,
    sliderType: "min-range",
    circleShape: "half-right",
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
        toPosition('knee', args.value)
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
        toPosition('ground', args.value)
    }
});
