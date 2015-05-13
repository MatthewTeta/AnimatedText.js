# AnimatedText.js
Animate Text With One Function Easily

### Requirements

Jquery is the only requirement for this.

### Animation Effects

For now, the only animation effect is a blinking cursor that types out the words with a little bit of randomness to make it seem more natural. The `animateText` function returns the totoal delay time for it to finish animating and it takes in these parameters:
1. Text - The text the selected element will animate into and end on
2. Interval - This is the interval between each character in milliseconds without the random added delay
3. Selector - this is a jquery selector string for the element you want to animate
4. Delay - This is the initial delay before starting the animation in milliseconds
5. RandomFactor - This is the maximum amount of randomness

Example Code:
```
animateText("Example", 400, '#header', 100, 200);
```
