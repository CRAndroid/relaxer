const button = document.getElementById('button') as HTMLButtonElement
const background = document.getElementById('background') as HTMLDivElement
const repetitionDOM = document.getElementById(
  'repetition'
) as HTMLParagraphElement
const ball = document.querySelector('span') as HTMLSpanElement

const classes: string[] = ['breathe-in', 'hold', 'breathe-out']
let index: number = 0
let repetition: number = 0

button.addEventListener('click', (e: any) => {
  e.target.style.display = 'none'
  background.classList.add(classes[index])
  repetition++
  repetitionDOM.textContent = `${repetition}`

  ball.className = 'ball ball-b-in'
})

background.addEventListener('animationend', (e: Event) => {
  const lastIndex = classes.length - 1

  ball.className = ''

  if (index === lastIndex && repetition === 10)
    return (background.className = '')

  if (index === lastIndex) {
    repetition++
    repetitionDOM.textContent = `${repetition}`
    ball.className = 'ball ball-b-in'
  } else if (index === 1) {
    ball.className = 'ball ball-b-out'
  } else {
    ball.className = 'ball ball-hold'
  }

  index === lastIndex ? (index = 0) : index++
  background.className = `${classes[index]}`
})
