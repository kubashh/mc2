const canvas = document.createElement('canvas');
canvas.width = 1920;
canvas.height = 1080;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
