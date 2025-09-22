radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Strength))
    led.toggle(0, 0)
})
