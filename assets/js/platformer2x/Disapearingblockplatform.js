import BlockPlatform from './BlockPlatform.js';
import GameEnv from './GameEnv.js';
export class Disappearingblockplatform extends BlockPlatform {
    constructor(x, y, width, height, canvas, duration, delay) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = canvas;
        this.duration = duration; // Duration of disappearance in milliseconds
        this.delay = delay; // Delay before reappearing in milliseconds
        this.lastChange = 0;
        this.visible = true;
    }

    update() {
        const currentTime = Date.now();
        if (currentTime - this.lastChange >= this.delay) {
            if (currentTime - this.lastChange - this.delay < this.duration) {
                this.visible = false;
            } else {
                this.visible = true;
                this.lastChange = currentTime;
            }
        }
    }

    draw(ctx) {
        if (this.visible) {
            ctx.fillStyle = "#FFFFFF"; // White color
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
export default BlockPlatform;