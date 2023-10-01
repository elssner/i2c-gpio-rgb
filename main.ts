input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    X6 += -1
    qwiicgpio.writeOUTPUT_PORT(i2cAdr, X6)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    X6 += 1
    qwiicgpio.writeOUTPUT_PORT(i2cAdr, X6)
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    basic.showNumber(qwiicgpio.bitwise(qwiicgpio.readINPUT_PORT(i2cAdr), qwiicgpio.eBit.AND, 7))
})
let X6 = 0
let i2cAdr = 0
i2cAdr = qwiicgpio.qwiicgpio_eADDR(qwiicgpio.eADDR.GPIO_x26)
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
