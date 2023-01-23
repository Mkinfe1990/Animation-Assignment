class SailorMercury {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SailorMercury.png"),0 ,0 ,38.8,109, 8,0.2);

        this.x = 0;
        this.y = 0;
        this.speed = 300;
    };
    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x >900 ) this.x = 0; 
    };
    draw(ctx) {

        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}