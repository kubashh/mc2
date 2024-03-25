const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const blockSize = 40;

function drawBox(x, y, w, h, color = "white")  {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

drawBox(0, 0, window.innerWidth, window.innerHeight, "black");


class Mob {
  isPlayer = false;
}

class Block {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw = () => {
    drawBox(this.x * blockSize, this.y * blockSize, blockSize, blockSize, this.color);
  }
}

class Item {

}

let blocks = [];

for(let i = 0; i < 10; i++) {
  blocks.push(new Block(i, i, "red"));
}

for(let i = 0; i < 10; i++) {
  blocks[i].draw();
}
