var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    // log('enable DebugMode')
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('123'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // 为了实现关卡功能, 在Scene中为game注册了新的按键功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function () {
    var images = {
        bg: 'img/bg.png',
        ground: 'img/ground.png',
        pipe: 'img/pipe.png',
        b1: 'img/b1.png',
        b2: 'img/b2.png',
        b3: 'img/b3.png',
        ready: 'img/text_ready.png',
        gameover: 'img/text_gameover.png',
        tutorial: 'img/tutorial.png',
        title: 'img/title.png',
    }
    var game = GuaGame.instance(30, images, function (g) {
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
