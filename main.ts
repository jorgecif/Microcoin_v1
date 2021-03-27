input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    coins = blockchain.valuesFrom(blockchain.id()).length
    basic.showNumber(coins)
    basic.showString("SUBACOINS")
})
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    basic.clearScreen()
    basic.pause(500)
    if (randint(0, 2) == 0) {
        blockchain.addBlock(1)
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showNumber(blockchain.length())
    basic.showString("BLOQUES")
})
let coins = 0
basic.showString("A=SUBACOINS B=BLOQUES SHAKE=MINAR")
basic.forever(function () {
	
})
