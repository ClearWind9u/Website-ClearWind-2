const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
const $ = document.querySelector.bind(document)

ctx.fillStyle = 'red'

function draw(x, y){
  const circle = new Path2D();
  circle.arc(x, y, 7, 0, 2 * Math.PI);
  ctx.fill(circle)
}

let isMouseDown = false;

canvas.addEventListener('mousedown',(e) => {
  isMouseDown = true;
})

canvas.addEventListener('mouseup',(e) =>{
  isMouseDown = false;
})

canvas.addEventListener('mousemove',(e) =>{
  if (!isMouseDown){
    return
  }
  
  const {clientX, clientY} = e
  
  const react = canvas.getBoundingClientRect()
  draw(clientX - react.left, clientY -react.top)
})

const colorPicker = [...document.querySelectorAll('.color-picker')]
colorPicker.forEach(colorPicker =>{
  colorPicker.addEventListener('click',(e) =>{
    ctx.fillStyle = e.target.style.backgroundColor
  })
})

$('#btn-clear').addEventListener('click',(e) =>{
  ctx.clearRect(0, 0, 600, 600)
})