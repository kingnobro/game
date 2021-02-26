class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        var game = this.game
        this.numberOfEnemies = 10
        this.bg = GuaImage.new(game, 'bg')
        this.cloud = Cloud.new(game, 'cloud')

        this.player = Player.new(game)
        this.player.x = 100
        this.player.y = 400

        // 先画的在底层
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        //
        this.addEnemies()
    }

    addEnemies() {
        var es = []
        for (var i = 0; i < this.numberOfEnemies; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemies = es
    }

    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('s', function () {
            s.player.moveDown()
        })
        g.registerAction('f', function () {
            s.player.fire()
        })
    }

    update() {
        // 敌机和玩家碰撞
        // for (var e of this.enemies) {
        //     if (rectIntersects(e, this.player)) {
        //         e.collide()
        //         this.player.collide()
        //     }
        // }
        // 子弹碰撞
        for (var e of this.enemies) {
            // 敌机子弹
            for (var b of e.bullets) {
                if (rectIntersects(b, this.player)) {
                    b.collide()
                    this.player.collide()
                }
            }
            // 玩家子弹
            for (var b of this.player.bullets) {
                if (e.alive && rectIntersects(b, e)) {
                // if (rectIntersects(b, e)) {
                    b.collide()
                    e.collide()
                }
            }
        }
        super.update()
    }
}
