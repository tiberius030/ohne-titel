input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 6; index++) {
            basic.pause(10000)
            basic.setLedColor(0xff0000)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.clearScreen()
        }
    } else {
        basic.showIcon(IconNames.ArrowNorth)
        basic.showIcon(IconNames.ArrowEast)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    for (let index = 0; index < 600; index++) {
        basic.pause(10000)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.setLedColor(0xff0000)
        basic.clearScreen()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let index = 0; index < 60; index++) {
        basic.pause(10000)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.setLedColor(0xff0000)
        basic.clearScreen()
    }
})
basic.showIcon(IconNames.ArrowEast)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
