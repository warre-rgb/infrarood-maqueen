let strip: neopixel.Strip = null
let achteruit = 0
let rechts = 0
let links = 0
let stop = 0
let vooruit = 0
let IR_waarde = 0
IR.IR_init()
basic.forever(function () {
    if (IR_waarde == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (IR_waarde == stop) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (IR_waarde == links) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    }
    if (IR_waarde == rechts) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (IR_waarde == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    vooruit = 229
    achteruit = 6
    links = 15
    rechts = 71
    stop = 31
})
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
