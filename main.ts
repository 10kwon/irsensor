DFRobotMaqueenPlus.I2CInit()
basic.showIcon(IconNames.Heart)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.RED)
DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L3) <= 3000) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
        while (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L1) >= 3000) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.CYAN)
        }
    } else if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R3) <= 3000) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 50)
        while (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R1) >= 3000) {
            DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
            DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.CYAN)
            DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
        }
    }
    if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.L2) <= 3000) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    } else if (DFRobotMaqueenPlus.readPatrolVoltage(Patrol.R2) <= 3000) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.CYAN)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.CYAN)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.CYAN)
    }
})
