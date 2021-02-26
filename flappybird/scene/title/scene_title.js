class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        game.registerAction('r', function(){
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }
    setup() {
        var game = this.game
        // bg
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        // pipes
        var ps = Pipes.new(game)
        this.addElement(ps)

        // text
        var ready = GuaImage.new(game, 'ready')
        ready.x = 50
        ready.y = 150
        this.addElement(ready)

        // title
        var title = GuaImage.new(game, 'title')
        title.x = 60
        title.y = 80
        this.addElement(title)


        // tutorial
        var tu = GuaImage.new(game, 'tutorial')
        tu.x = 85
        tu.y = 220
        this.addElement(tu)

        // ground
        this.grounds = []
        for (var i = 0; i < 30; i++) {
            var g = Ground.new(game, 'ground')
            g.x = i * 19
            g.y = 450
            this.addElement(g)
            this.grounds.push(g)
        }
    }
}
