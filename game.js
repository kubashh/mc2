const canvas = document.createElement('canvas');
canvas.width = 1920;
canvas.height = 1080;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

const pixelSize = 40;

function drawBox(x, y, w, h, color = "white")  {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}


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
    drawBox(self.x * pixelSize, self.y * pixelSize, pixelSize, pixelSize, this.color);
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
