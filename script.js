const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red'

function draw(x, y){
  const circle = new Path2D();
  circle.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill(circle)
}


canvas.addEvenListener('mousedown',(e) => {
  const {
    clientX, clientY
  } = e
  
  draw(clientX, clientY)
})