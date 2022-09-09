
// select elements
const imgContainer = document.getElementById('img-box');
const loader =  document.getElementById('loader');


// load image function
let ready = false;
let imgload = 0
let totalImg = 0

function imgloaded(){

    imgload++;
    // console.log(imgload)

if(imgload === totalImg){

    loader.hidden = true
    ready = true
    // console.log('ready =', ready )
}

}

// getting value from obj
function setAttributes(element,att){
    for(const key in att){
        element.setAttribute(key, att[key])
    }
}

// create elements for links & photos, add to DOM
function displayPhotos(photos){

    // condition for load images   
    imgload = 0;
    totalImg = photos.length
    // console.log('total images',totalImg) 

    for(let result of photos){

        // create <anchor> link unplash images
        const item = document.createElement('a'); 
        setAttributes(item, {
            href: result.links.html,
            target: '_blank'
        } );

        // Create image for requests api
        const imge = document.createElement('img')
        setAttributes(imge, {
            src: result.urls.regular,
            alt: result.alt_description,
            title: result.alt_description
        } );

        // Event when image is loaded
        imge.addEventListener('load',imgloaded )

        // Append
        item.append(imge)
        imgContainer.append(item)
    }

}


// scroll implementation
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight -1000 && ready ){
        getPhotos()
        ready = false
        
    }
})
 


// fetch api request
const getPhotos = async() =>{

    // unsplash API
    const count = 10;
    const apiKey = '2E8UB9PBKfUwUUpDb0YCkvdhSq8bcifkhi5maahRI18'
    const api = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

    try{

        const res = await axios.get(api);
        displayPhotos(res.data)

    }catch (err){
        // error
    }
}

getPhotos()




