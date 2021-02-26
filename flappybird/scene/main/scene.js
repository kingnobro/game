class Scene extends GuaScene {
    constructor(game) {
        super(game)

        // bg
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        // pipe
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)

        // ground
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = Ground.new(game, 'ground')
            g.x = i * 19
            g.y = 450
            this.addElement(g)
            this.grounds.push(g)
        }

        // bird
        var b = Bird.new(game, 'b')
        b.x = 100
        b.y = 150
        this.bird = b
        this.addElement(b)

        this.setupInputs()
    }
    debug() {
        this.birdSpeed = config.bird_speed.value
    }
    update() {
        super.update()
        // 与管子碰撞
        for (var p of this.pipe.pipes) {
            if (rectIntersects(this.bird, p)) {
                var s = SceneEnd.new(this.game)
                this.game.replaceScene(s)
            }
        }
        // 与地面碰撞
        for (var g of this.grounds) {
            if (rectIntersects(this.bird, g)) {
                var s = SceneEnd.new(this.game)
                this.game.replaceScene(s)
            }
        }
    }
    setupInputs() {
        var self = this
        var b = this.bird
        self.game.registerAction('a', function(keyStatus) {
            b.move(-self.birdSpeed, keyStatus)
        })
        self.game.registerAction('d', function(keyStatus) {
            b.move(self.birdSpeed, keyStatus)
        })
        self.game.registerAction('j', function(keyStatus) {
            b.jump()
        })
    }
}
