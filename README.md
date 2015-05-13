# AnimatedText.js
Animate Text With One Function Easily

### Requirements

JQuery is the only requirement for this.

### Animation Effects

For now, the only animation effect is a blinking cursor that types out the words with a little bit of randomness to make it seem more natural. The `animateText` function returns the totoal delay time for it to finish animating and it takes in these parameters:
* Text - The text the selected element will animate into and end on
* Interval - This is the interval between each character in milliseconds without the random added delay
* Selector - this is a jquery selector string for the element you want to animate
* Delay - This is the initial delay before starting the animation in milliseconds
* RandomFactor - This is the maximum amount of randomness

Example Code:
```
animateText("Example", 400, '#header', 100, 200);
```

###Recommendations
The element that is being animated can be hidden in css and the taxt can be grabbed from the element contents in jQuery.
CSS:
```
div h3 {
  display: none;
}
```
JS:
```
animateText($('div h3').html(), 400, 'div h3', 100, 200);
```
