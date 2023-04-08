const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementsSize;

function setCanvasSize(){
  canvasSize = (Math.min(window.innerHeight,window.innerWidth)*0.75)
  // if (window.innerHeight>window.innerWidth){
  //   canvasSize = window.innerWidth*0.75;
  // }else{
  //   canvasSize = window.innerHeight*0.75;
  // }
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);
  elementsSize = (canvasSize/10)-1;
  startGame();
}

function startGame(){
  // game.fillRect(x,y,w,h);
  // game.clearRect(x,y,w,h);
  // game.font = '25px Verdana';
  // game.fillStyle = 'purple';
  // game.textAlign = 'center';
  // game.fillText('Texto', x,y);
  game.font = elementsSize+'px sans-seriff';
  game.textAlign = 'start';
  game.textBaseline = 'top';
  const mapRows = maps[3].trim().split('\n');
  const mapDividedRows = mapRows.map(row => row.trim().split(''));
  for (let i=0;i<10;i++){
    for (let j=0;j<10;j++){
      game.fillText(emojis[mapDividedRows[i][j]], elementsSize*j, elementsSize*i);
    }
  }
}
