class GuaScene {
    constructor(game) {
        this.game = game
        this.debugModeEnabled = true
        this.elements = []
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    addElement(guaImage) {
        guaImage.scene = this
        this.elements.push(guaImage)
    }

    draw() {
        for (var e of this.elements) {
            e.draw()
        }
    }

    update() {
        // if (this.debugModeEnabled) {
        //     for (var i = 0; i < this.elements.length; i++) {
        //         var e = this.elements[i]
        //         e.debug && e.debug()
        //     }
        // }
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }
    }
}
