input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    x += -1
    qwiicgpio.writeOUTPUT_PORT(i2cAdr, x)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    x += 1
    qwiicgpio.writeOUTPUT_PORT(i2cAdr, x)
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    basic.showNumber(qwiicgpio.readINPUT_PORT(i2cAdr))
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    for (let Index = 0; Index <= 7; Index++) {
        qwiicgpio.writeOUTPUT_PORT(qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27), Index)
    }
})
let x = 0
let i2cAdr = 0
i2cAdr = qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x27)
qwiicgpio.beimStart(i2cAdr)
qwiicgpio.setMode(
i2cAdr,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.IN,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT,
qwiicgpio.eIO.OUT
)
