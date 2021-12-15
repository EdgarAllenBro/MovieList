console.log('its alive!')
const message = document.querySelector('#message')
const addMovie = (e)=>{
    event.preventDefault()
const inputfield = document.querySelector('input')
let movie = document.createElement('li')
let movieTitle = document.createElement('span')
movieTitle.textContent = inputfield.value
movieTitle.addEventListener('click',crossOff)
movie.appendChild(movieTitle)
let list = document.querySelector('ul')
list.appendChild(movie)
let deleteBtn = document.createElement('button')
deleteBtn.textContent='X'
movie.appendChild(deleteBtn)
deleteBtn.addEventListener('click', deleteMovie)
inputfield.value=''
}

const deleteMovie = (e)=>{
    event.target.parentNode.remove()
    message.textContent =  `Deleted`
}

const crossOff = (e)=>{
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
message.textContent = `was the movie good?`
    } else {
        message.textContent = `movie readded`
    }
}
let Btn = document.querySelector('button')
Btn.addEventListener('click', addMovie)


