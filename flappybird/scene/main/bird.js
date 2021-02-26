class Bird extends GuaAnimation{
    constructor(game, name) {
        super(game, name)
        this.birdSpeed = config.bird_speed
        this.rotationAngle = 0
        // 重力和加速度
        this.gy = 10
        this.vy = 0
    }
    jump() {
        this.vy = -5
        this.rotationAngle = -45
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
        context.globalAlpha = this.alpha
        context.rotate(this.rotationAngle * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)
        context.restore()
    }

    // 更新角度
    update() {
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.1
        // touch ground
        var h = 415
        if (this.y > h) {
            this.y = h
        }
        if (this.rotationAngle < 45) {
            this.rotationAngle += 5
        }
        super.update()
    }
}