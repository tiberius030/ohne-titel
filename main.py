def on_sound_loud():
    if input.temperature() == 24:
        basic.pause(100000)
        music.play_melody("E B C5 A B G A F ", 120)
        music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                1600,
                1,
                255,
                0,
                300,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
        basic.clear_screen()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_a():
    for index in range(6):
        basic.pause(10000)
        basic.set_led_color(0xff0000)
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
        basic.clear_screen()
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    for index2 in range(600):
        basic.pause(100000)
        music.play_tone(262, music.beat(BeatFraction.BREVE))
        basic.set_led_color(0xff0000)
        basic.clear_screen()
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    for index3 in range(60):
        basic.pause(100000)
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
        basic.set_led_color(0xff0000)
        basic.clear_screen()
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

basic.show_icon(IconNames.ARROW_EAST)
music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.create_sound_expression(WaveShape.SQUARE,
        1600,
        1,
        255,
        0,
        300,
        SoundExpressionEffect.NONE,
        InterpolationCurve.CURVE),
    music.PlaybackMode.UNTIL_DONE)
basic.show_icon(IconNames.YES)
basic.clear_screen()