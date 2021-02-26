class GuaAnimation {
    constructor(game, name) {
        this.game = game
        this.animations = {
            idle: [],
        }
        for (var i = 1; i < 4; i++) {
            var n = name + i
            var t = game.textureByName(n)
            this.animations['idle'].push(t)
        }
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3

        this.flipX = false
        this.w = this.texture.width
        this.h = this.texture.height
    }
    static new(game, name) {
        return new this(game, name)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        // 操作坐标系
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    move(x, keyStatus) {
        this.flipX = (x < 0)
        this.x += x

        // 改变状态
        // var animationNames = {
        //     down: 'run',
        //     up: 'idle',
        // }
        // var name = animationNames[keyStatus]
        // this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}