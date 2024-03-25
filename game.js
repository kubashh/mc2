const canvas = document.createElement('canvas');
canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
document.body.appendChild(ctx);

const pixelSize = 10;

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

let block = new Block(3, 3, "red");
block.draw();
