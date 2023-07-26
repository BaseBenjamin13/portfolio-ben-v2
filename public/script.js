const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
	x: null,
	y: null,
	radius: (canvas.height / 90) * (canvas.width / 90),
}

window.addEventListener('mousemove',
	function (event) {
		mouse.x = event.x;
		mouse.y = event.y;
	}
)

class Particle {
	constructor(x, y, directionX, directionY, size, color) {
		this.x = x;
		this.y = y;
		this.directionX = directionX;
		this.directionY = directionY;
		this.size = size;
		this.color = color;
	}
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 1, true);
		ctx.fillStyle = '#DAA520';
		ctx.fill();
	}
	update() {
		if(this.x > canvas.width || this.x < 0){
			this.directionX = -this.directionX;
		}
		if(this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY;
		}

		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		let distance = Math.sqrt(dx*dx + dy*dy);
		if(distance < mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size * 10){
                this.directionX = -this.directionX;
				this.x += 10;
			}
			if(mouse.x > this.x && this.x > this.size * 10){
                this.directionX = -this.directionX;
                this.x -= 10;
			}
			if(mouse.y < this.y && this.y < canvas.height - this.size * 10){
                this.directionY = -this.directionY;
				this.y += 10;
			}
			if(mouse.y > this.y && this.y > this.size * 10){
                this.directionY = -this.directionY;
				this.y -= 10;
			}
			
		}

		this.x += this.directionX
		this.y += this.directionY
		this.draw();
	}
}


function init() {
	particlesArray = [];
	let numberOfParticles = (canvas.height * canvas.width) / 30000;
	for (let i = 0; i < numberOfParticles; i++){
		let size = (Math.random() * 10) + 5;
		let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
		let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
		let directionX = (Math.random() * 5) - 2.5;
		let directionY = (Math.random() * 5) - 2.5;
		let color = "#DAA520"

		particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
	}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

	for(let i = 0; i < particlesArray.length; i++){
		particlesArray[i].update();
	}
}

init();
animate();