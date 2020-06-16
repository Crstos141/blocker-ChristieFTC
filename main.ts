namespace SpriteKind {
    export const block = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.setVelocity(sprite.vx * -1, -1 * sprite.vy)
})
function getPos (sprite: Sprite, othersprite: Sprite) {
	
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx * -1, sprite.vy * -1)
})
let tile: Sprite = null
let tilePick = 0
let x = 0
scene.setBackgroundColor(4)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . 4 f f f f f f f f f f f f f 4
    . 4 4 1 4 1 4 1 4 1 4 1 4 1 4 4
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(75, 100)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 4 4 4 4 4 4 4 . . . .
    . . . . 4 . 1 1 1 1 1 . 4 . . .
    . . . . 4 1 f f f f f 1 4 . . .
    . . . . 4 1 f 1 1 1 f 1 4 . . .
    . . . . 4 1 f 1 f 1 f 1 4 . . .
    . . . . 4 1 f 1 1 1 f 1 4 . . .
    . . . . 4 1 f f f f f 1 4 . . .
    . . . . 4 . 1 1 1 1 1 . 4 . . .
    . . . . . 4 4 4 4 4 4 4 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, mySprite, 50, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, true)
projectile.setFlag(SpriteFlag.BounceOnWall, true)
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = Math.randomRange(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
                9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
