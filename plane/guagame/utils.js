var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    if (a.x > b.x + b.w || a.y > b.y + b.h || b.x > a.x + a.w || b.y > a.y + a.h) {
        return false
    }
    return true
}

const randomBetween = function (start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(start + n)
}
