radio.onReceivedNumber(function (receivedNumber) {
    signalStrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    meter.show(signalStrength)
    meter.use(meter.Styles.Bar, -128, -42)
    // Mapeia a intensidade do sinal para um valor de volume
    volume = Math.map(signalStrength, -128, -42, 0, 255)
    music.setVolume(volume)
    music.playTone(220, music.beat(BeatFraction.Whole))
})
let volume = 0
let signalStrength = 0
radio.setGroup(69)
basic.forever(function () {
    radio.sendNumber(69)
})
