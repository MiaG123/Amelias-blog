import GameControl from './GameControl.js';
import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class breakjumpPlatform extends GameObject {
    constructor(canvas, image, data, xPercentage, yPercentage, name) {
        super(canvas, image, data, 0.4, -0.2);
        this.platformX = xPercentage * GameEnv.innerWidth;
        this.platformY = yPercentage;
        this.data = data;
        //integration notes:
        //currently there are two variables each for the x and y position of the platform
        //this is because two people fixed the same issue independently
        //this may need to be returned to RIGHT NOW
        this.name = name;
        this.relativeX = ""; //used for the item block's spritesheet.
    }

    // Required, but no update action
    update() {
        this.collisionChecks();
    }

    collisionAction() {
        // Collision only detects Mario and it only applies to the item block
        if (this.collisionData.touchPoints.other.id === "player" && this.name === "itemBlock") {
            // Trigger random event when collision occurs
            GameControl.startRandomEvent();
    
            // Remove the block from the canvas
            this.removeBlock();
        }
    }
    
    removeBlock() {
        // Assuming this is an HTML5 canvas-based game
        // Clear the area occupied by the block
        this.context.clearRect(this.relativeX, this.relativeY, this.width, this.height);
    
        // Optionally, you might want to update any internal state or data structures related to the block here
    }
    

    // Set platform position
    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = GameEnv.innerHeight * (this.data.sizeRatio / 832);
        const scaledWidth = GameEnv.innerHeight * .1;  // width of jump platform is 1/10 of height
        const platformX = this.platformX
        const platformY = (GameEnv.bottom - scaledHeight) * this.platformY;
        this.x = platformX
        this.y = platformY

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

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, this.relativeX, 0, this.canvas.width / this.data.widthRatio, this.canvas.height / this.data.heightRatio);
    }
}

export default disappearingjumpPlatform;