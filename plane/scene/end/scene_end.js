class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        var gameover = GuaImage.new(game, 'gameover')
        gameover.x = 150
        gameover.y = 250
        this.addElement(gameover)

        game.registerAction('c', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
}
