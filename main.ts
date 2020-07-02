input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 350)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(1000)
strip.clear()
strip.show()
