class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(1, 3)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 400)
        this.y = -randomBetween(200, 1000)
        this.cooldown = config.enemy_fire_cooldown
        this.alive = true
        this.life = 1
        this.exploded = false
        this.bullets = []
    }
    collide() {
        this.life--
        if (this.life == 0) {
            this.alive = false
            // 只爆炸一次
            if (!this.exploded) {
                this.exploded = true
                var ps = GuaParticleSystem.new(this.game)
                ps.x = this.x + this.w / 2
                ps.y = this.y + this.h / 2
                this.scene.addElement(ps)
            }
        }
    }
    update() {
        this.bullets = this.bullets.filter(b => b.y < 765 && b.alive)
        if (this.cooldown > 0) {
            this.cooldown--
        }
        this.fire()
        this.y += this.speed
        if (this.y > 852) {
            this.setup()
        }
    }

    draw() {
        if (!this.alive) {
            return
        }
        super.draw();
    }

    fire() {
        if (this.alive && this.cooldown == 0 && this.y > 0) {
            this.cooldown = config.enemy_fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y + this.h
            var b = Bullet.new(this.game, 'enemy_bullet')
            b.x = x
            b.y = y
            b.speed = -config.bullet_speed
            this.scene.addElement(b)
            this.bullets.push(b)
        }
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

}