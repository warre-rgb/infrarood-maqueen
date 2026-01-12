let vooruit = 0
let achteruit = 0
let links = 0
let rechts = 0
let IR_waarde = 0
basic.forever(function () {
    vooruit = 229
    achteruit = 6
    links = 15
    rechts = 71
})
basic.forever(function () {
    let stop = 0
    if (IR_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (IR_waarde == stop) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (IR_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (IR_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (IR_waarde == achteruit) {
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
    if (vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    }
    if (links) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
    if (rechts) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
basic.forever(function () {
    IR.IR_init()
})
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
