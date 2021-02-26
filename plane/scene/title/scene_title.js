class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        var ready = GuaImage.new(game, 'ready')
        ready.x = 150
        ready.y = 250
        this.addElement(ready)

        game.registerAction('r', function(){
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }
}
