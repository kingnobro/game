class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        game.registerAction('c', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
    setup() {
        // bg
        var bg = GuaImage.new(this.game, 'bg')
        this.addElement(bg)

        // pipes
        var ps = Pipes.new(this.game)
        this.addElement(ps)

        // text
        var gameover = GuaImage.new(this.game, 'gameover')
        gameover.x = 50
        gameover.y = 150
        this.addElement(gameover)

        // ground
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = Ground.new(this.game, 'ground')
            g.x = i * 19
            g.y = 450
            this.addElement(g)
            this.grounds.push(g)
        }
    }
}
