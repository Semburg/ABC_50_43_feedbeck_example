//example with event bubbling

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')

const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e)=>{

    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML


        // CHECK for bubbling test
        // console.log('Class clicked')

    }


    // console.log('click')
    // console.log(e.target)
})


sendBtn.addEventListener('click', ()=>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedbeck: ${selectedRating}</strong>
        <p>We'll use your feed for improvements!</p>


    `
})

function removeActive() {
    // for (let index = 0; index < ratings.length; index++) {
    //     ratings[index].classList.remove('active')
    
    // }

    ratings.forEach(rating => rating.classList.remove('active'))
}
