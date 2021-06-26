// We have to make 3 variables for the rectangle

let context, controller, controller1, Rectangle, loop;

// we now have to slect the canvas html5 element and get the context
context = document.querySelector("canvas").getContext('2d');

// we have to define the dimessions of the html5 canvas 

context.canvas.height = 180;
context.canvas.width = 320;

// define the propteries and dimesion of the rectangle



Rectangle = function(height, width, jumping, x_velocity, x, y_velocity, y, color, name) {
    this.height = height;
    this.width = width;
    // we have access to this prop so when it's jumping we define 
    // flase in the air
    this.jumping = jumping;
    this.x_velocity = x_velocity;
    this.x = x; // on the ground
    this.y_velocity = y_velocity;
    this.y = y;
    this.color = color;
    this.name = name;

}

Rectangle.prototype = {
    input1: function() {
        if(controller.up && this.jumping == false) {
            this.y_velocity -= 20;
            this.jumping = true;
        }
    
        // left controlloer input
        if(controller.left) {
            this.x_velocity -= 0.2;
        }
    
        // right controller input 
        if(controller.right) {
            this.x_velocity += 0.2;
        }
    
        // physics
    
        // velocity is 1.5 every frame
        this.y_velocity += 0.4; // gravity of the canvas
        this.x += this.x_velocity;
        this.y += this.y_velocity;
    
        // friction -> slow gradually
    
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;
    
        // ground detection
    
        if ( this.y > 180 - 16 - 32 ) {
    
            this.jumping = false;
            this.y = 180 - 16 - 32;
    
            // once the this hits the ground, your veclocity should stop
            // instantly
            this.y_velocity = 0;
    
        }
    },
    input2: function() {
        
        if(controller1.up && this.jumping == false) {
            this.y_velocity -= 20;
            this.jumping = true;
        }
    
        // left controlloer input
        if(controller1.left) {
            this.x_velocity -= 0.2;
        }
    
        // right controller1 input 
        if(controller1.right) {
            this.x_velocity += 0.2;
        }
    
        // physics
    
        // velocity is 1.5 every frame
        this.y_velocity += 0.4; // gravity of the canvas
        this.x += this.x_velocity;
        this.y += this.y_velocity;
    
        // friction -> slow gradually
    
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;
    
        // ground detection
    
        if ( this.y > 180 - 16 - 32 ) {
    
            this.jumping = false;
            this.y = 180 - 16 - 32;
    
            // once the this hits the ground, your veclocity should stop
            // instantly
            this.y_velocity = 0;
    
        }
    }, 
    draw: function() {
        // we have to give the canvas gray filling
    
    // This keeps the player stroking the canvas

    // i don't want both to be red
    context.fillStyle = this.color;// layer color: ;
    // makes a new square
    context.beginPath();
    // the dimessional of the player
    context.rect(this.x, this.y, this.width, this.height);
    // so blue is working now! just no input

    context.fill();
    }
}



red = new Rectangle(32, 32, true, 0, 144, 0, 0, '#eb4334', 'red');
blue = new Rectangle(32, 32, true, 0, 100, 0, 0, '#3477eb');





// controllers

/* 

    we have to bind the addEventListeners to the window object

*/

// so blue needs a second controller to play now

controller = {

    left: false,
    right: false,
    up: false,
    keyListener: (event) => {
        // state of the key

        console.log(event.keyCode)

        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {

            case 37: // left key
            controller.left = key_state;
            break;
            case 38: // up key
            controller.up = key_state;
            break;
            case 39: // right key
            controller.right = key_state;
            break;


        }
    }

}

controller1 = {

    left: false,
    right: false,
    up: false,
    keyListener: (event) => {
        // state of the key

        let key_state = (event.type == "keydown") ? true : false;

        switch(event.keyCode) {

            case 65: // left key
            controller.left = key_state;
            break;
            case 87: // up key
            controller.up = key_state;
            break;
            case 68: // right key
            controller.right = key_state;
            break;

        }
    }

}


// now let's merge the controller logic with the physics

loop = function() {

    context.fillStyle = '#202020';
    // This erases the color behind and around the square, because it
    // didn't we will get a contiouns stroke
    context.fillRect(0, 0, 320, 180);

    // so we fill the canvas and then import the rectangle and use the draw and input function

    red.input1();
    red.draw();
    

    window.requestAnimationFrame(loop);

};

// player 1

// so why is the controller defined but the controller 1 isn't

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);

// player 2

window.requestAnimationFrame(loop);

Object.defineProperty()
