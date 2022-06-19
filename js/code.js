const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

//엔터키로 전체화면 전환
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    toggleFullScreen();
  }
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

/*
ctx2.shadowOffsetX = 1;
ctx2.shadowOffsetY = 1;
ctx2.shadowBlur = 0;
ctx2.shadowColor = 'white';
*/
class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = '가나다라마바사아자차카타파하고노도로모보소오조초코토포호거너더러머버서어저처커터퍼허구누두루무부수우주추쿠투푸후그느드르므브스으즈츠크트프흐기니디리미비시이지치키티피히개내대래매배새애재채캐태패해게네데레메베세에제체케테페헤アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.text = 'A';
    this.canvasHeight = canvasHeight;
    //this.color = 'hsl(' + this.x * 3+ ', 100%, 50%)';
  }
  draw(context, context2) {
    //context.font = this.fontSize + 'px monospace';
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    //context.fillStyle = this.color;
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    context2.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.97) {
      this.y = 0;
    } else {
      this.y += 0.9;
    }
  }
}

class Effect {
  constructor(canvasWidth, canvasHeight) {
    this.fontSize = 24;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
  initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }
  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }
}
const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 26;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  if (timer > nextFrame) {
    ctx.textAlign = "center";
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = effect.fontSize + 'px monospace';
    ctx.fillStyle = '#03A062';
    ctx.fillStyle = '#0aff0a';

    ctx2.textAlign = "center";
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.font = effect.fontSize + 'px monospace';
    ctx2.fillStyle = 'white';

    effect.symbols.forEach(symbol => symbol.draw(ctx, ctx2));
    timer = 0;
  } else {
    timer += deltaTime;
  }
  requestAnimationFrame(animate);
}
animate(0);

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
  effect.resize(canvas.width, canvas.height);
})
