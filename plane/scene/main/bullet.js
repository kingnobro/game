class Bullet extends GuaImage {
    constructor(game, name) {
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = config.bullet_speed
    }
    update() {
        this.y -= this.speed
    }
    collide() {
        this.alive = false
    }
    draw() {
        if (this.alive) {
            super.draw();
        }
    }
}