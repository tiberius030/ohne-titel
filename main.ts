input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 6; index++) {
        basic.pause(530)
        basic.pause(530)
        basic.pause(530)
        basic.pause(530)
        basic.pause(530)
        basic.pause(530)
        basic.pause(530)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let index = 0; index < 60; index++) {
    	
    }
})
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Yes)
