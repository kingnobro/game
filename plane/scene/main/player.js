class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 10
        this.cooldown = 0
        this.life = 2
        // 把子弹存在对象的数组中, 用于检测子弹和飞机的碰撞
        this.bullets = []
    }
    update() {
        // 删去多余的子弹, 避免子弹和画布外的飞机相撞
        this.bullets = this.bullets.filter(b => b.y > 0 && b.alive)
        if (this.cooldown > 0) {
            this.cooldown--
        }
        // game over
        if (!this.alive) {
            var s = SceneEnd.new(this.game)
            this.game.replaceScene(s)
        }
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game, 'player_bullet')
            b.x = x
            b.y = y
            this.scene.addElement(b)
            this.bullets.push(b)
        }
    }
    collide() {
        this.life--
        this.alive = (this.life != 0)
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}