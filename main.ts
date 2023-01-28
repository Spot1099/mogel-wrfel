input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(randint(1, 5))
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("" + (storage.getNumber(StorageSlots.s1)))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("" + (storage.getNumber(StorageSlots.s3)))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("" + (storage.getNumber(StorageSlots.s2)))
})
storage.putNumber(StorageSlots.s1, 6)
storage.putNumber(StorageSlots.s2, 5)
storage.putNumber(StorageSlots.s3, 4)
