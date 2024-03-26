import BlockPlatform from './BlockPlatform.js';
import GameEnv from './GameEnv.js';
export class Disappearingblockplatform extends BlockPlatform {
    constructor(canvas, image, data, xPercentage, yPercentage) {
        super(canvas, image, data, 0.0, 0.0);
        this.platformX = xPercentage * GameEnv.innerWidth;
        this.platformY = yPercentage;
    }

    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerWidth * (1/27);
        const scaledWidth = scaledHeight;  // width of jump platform is 1/10 of height
        const platformX = this.platformX;
        const platformY = (GameEnv.bottom - scaledHeight) * this.platformY;
        // set variables used in Display and Collision algorithms
        this.bottom = platformY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
        //this.canvas.width = this.width;
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${platformX}px`;
        this.canvas.style.top = `${platformY}px`;
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