//Creating a bunch of constants elements that will be referred to in the JS
//Selecting all images that have the .gallery-img class tag
const galleryimg = document.querySelectorAll('.gallery-img')
//Placing all galleryimgs in an array to be used for clicking through them
const galleryArray = Array.from(galleryimg)
//Grabbing the elements of the light box
const lightboxCont = document.querySelector('.lightbox-container')
const lightboxImage = document.querySelector('.lightbox-img')
//Creaing button constants
const lightboxbtns = document.querySelectorAll('.lightbox-btn')
const lightboxbtnRight= document.querySelectorAll('#right')
const lightboxbtnLeft = document.querySelectorAll('#left')
let activeImage;
//Creating constant element of the wrappers that exist in the CSS
const imageWrapper = document.querySelector('.lightbox-image-wrapper')
const buttonWrapper = document.querySelector('.button-wrapper')
const buttonWrapper2 = document.querySelector('.button-wrapper2')
//Function expressions are used to save loading time on the website becuase function expressions
//Are only loaded when the that line of code is called or loaded.
//Adding the active tag to the lightbox to make it display
const showLightBox = () => {lightboxCont.classList.add('active')}
//Removing the active tag from the lightbox to hide it
const hideLightBox = () => {lightboxCont.classList.remove('active')}
// => is an arrow function, function(image) and (image) => are the same
const setActiveImage = (image) => {
    //If and else statement to check if the image is a tall-image
    //If so then change the height and width of image and button to the correct option
    if(image.id === "tall-image"){
        imageWrapper.style.height = '100vh'
        imageWrapper.style.width = 'auto'
        buttonWrapper.style.width = '10%'
        buttonWrapper2.style.width = '10%'
    } else {
        imageWrapper.style.height = 'auto'
        imageWrapper.style.width = '65vw'
        buttonWrapper.style.width = '5%'
        buttonWrapper2.style.width = '5%'
    }
    //Getting the source of the image that is selected and then assigning that to the
    //lightboxImage constant which is the element that will be displayed in the lightbox
    lightboxImage.src = image.getAttribute('src')
    //Finding position of the image selected and keeping track of it, to figure out where our position is in the array
    // so we know what image is next when the button is clicked.
    activeImage = galleryArray.indexOf(image)
}

const transitionSlideLeft = () => {
    //A ternary expression which is just and IF ELSE statement
    //Checking if we are at the first image if not then remove 1 from the activeImage so we move left through the images
    //if we are at 0 then go the end of the images
    activeImage === 0 ? setActiveImage(galleryArray[galleryArray.length-1]) : setActiveImage(galleryArray[activeImage - 1])
}


const transitionSlideRight = () => {
    //A ternary expression which is just and IF ELSE statement
    //checking if we are at the end of the image if so return to image 1 else just increase active image to move right through the images
    activeImage === (galleryArray.length-1) ? setActiveImage(galleryArray[0]) : setActiveImage(galleryArray[activeImage + 1])
}

const transitionSlideHandler = (moveitem) => {
    //Checking which button was pressed. If the button contain the tag left then move call transitionSlideLeft()
    //else call transitionSlideRight(). This works as there are only two button to press
    if(moveitem.includes('left')){
        transitionSlideLeft()
    } else {
        transitionSlideRight()
    }
}



galleryimg.forEach(image => {
    //Adding a event listener to every image that exist in with the gallery-img tag
    image.addEventListener('click', (e) =>{
        //The listener is checking for clicks on the image and if clicked then the lightbox
        // is shown via showLightBox() & the image clicked is displayed in the lightbox via
        //showLightBox()
        showLightBox()
        setActiveImage(image)
    })
})

lightboxCont.addEventListener('click',() => {
    //Checking if anywhere in the lightbox container was clicked if so then hide the lightbox
    //but if a button was pressed it doesn't do anything due to the lightboxbtns.forEach
    console.log('container clicked')
    hideLightBox()})

lightboxbtns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        //Checking to see if the buttons are clicked if so then calls transitionSlideHandler
        //the e.stopPropagation() is there to stop the event from continuing up to lightboxCont.addEventListener function
        // meaning that once button event has occurred no other event will occur from that event.
        e.stopPropagation()
        // console.log('button clicked')
        transitionSlideHandler(e.currentTarget.id)
        // console.log(e.currentTarget.id)
    })
})