function animateText(text, interval, selector, delay, randomFactor) {
    $(selector).html("");
    var deviationArray = [];
    var returnVal = (interval * 2) + (randomFactor * 2);
    for (var i = 0; i < text.length; i++) {
        deviationArray[i] = Math.floor(Math.random() * randomFactor);
        returnVal += deviationArray[i] + interval;
    }
    setTimeout(function() {
        $(selector).removeClass('done');
        var currentString = "";
        var deviations = 0;
        for (var i = 0; i < text.length; i++) {
            currentString = currentString + text.substr(i, 1);
            deviations += doInterval(text, interval, selector, i, currentString, deviationArray[i], deviations);
        }
    }, delay);
    return returnVal;
}

function doInterval(text, interval, selector, i, currentString, deviation, deviations) {
    
    setTimeout(function() {
        $(selector).html(currentString);
        if ((i + 1) == text.length) {
            $(selector).addClass('done');
        }
    }, ((interval * (i + 1) + deviation) + deviations));
    
    return deviation;
}