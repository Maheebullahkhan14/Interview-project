const images = document.querySelectorAll('.images')
const Apptab = document.querySelector('.App')
const Ballbtn = document.querySelectorAll('.ball')
const slider = document.querySelector('.slider')
const Activetestimonial = document.querySelectorAll('.T')

//Tabs
const AllTab = document.querySelectorAll('.alltab li')

AllTab.forEach(Tab =>{
    Tab.addEventListener('click' , () =>{
        resetTab();
        Tab.classList.add('Active')
    })
})

function resetTab(){
    AllTab.forEach(Tab =>{
        Tab.classList.remove('Active')
    })
}

// Filter Images
images.forEach(img =>{
    
    var imgDataType  = img.getAttribute('data-image-type')
    const ActiveTab = document.getElementsByClassName('.Active')
    console.log(ActiveTab)
})

AllTab.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        e.preventDefault()
        const filter = e.target.dataset.filter


        images.forEach((item) =>{
            if(filter === 'all'){
                item.style.display = 'block'
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }
                else{
                    item.style.display = 'none'
                }
            }
        })
    })
})


Ballbtn.forEach((btn ,index) =>{
    btn.addEventListener('click' , () =>{
        resetActive()
        let ActiveSlider = Activetestimonial[index]
        btn.classList.add('Active')
        ActiveSlider.classList.add('Active')
    })
})





function resetActive(){
    Ballbtn.forEach((Tab,index) =>{
        Tab.classList.remove('Active')

    })
    Activetestimonial.forEach(Tab =>{
        Tab.classList.remove('Active')
    })

}
const Nav = document.querySelector('.nav')


window.addEventListener('scroll' ,function(){
    var header = document.getElementById('Nav')
    header.classList.toggle('sticky' , window.scrollY > 0)
})












// setInterval(()=>{
//     Ballbtn[index].classList.add('Active')
//     Activetestimonial[index].classList.add('Active')
//     index++
//     if(index >= Ballbtn.length - 1){
//         index = 0
//         Ballbtn.forEach((btn) =>{
//             btn.classList.remove('Active')
//         })
//     }
//     else{
//         Ballbtn[index].classList.add('Active')
//     Activetestimonial[index].classList.add('Active')
    
//     }
    
// }, 1000)




