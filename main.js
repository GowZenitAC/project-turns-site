
const togglebtn=document.querySelector('.toggle_btn')
const togglebtnicon=document.querySelector('.toggle_btn i')
const dropdownmenu=document.querySelector('.dropdown_menu')

togglebtn.onclick= function() {
   dropdownmenu.classList.toggle('open')
   const isopen =dropdownmenu.classList.contains('open')
   
   togglebtnicon.classList=isopen
   ?'fa-solid fa-xmark'
   :'fa-solid fa-bars'
}
//*texto */



/*galria */


const imagenes=document.querySelectorAll('.img-galeria')
const imageneslight=document.querySelector('.agregar-imagen')
const contenedorlight=document.querySelector('.imagen-light')

//console.log(imagenes)
//console.log(imageneslight)
//console.log(contenedorlight)
imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>
{
   aparecerimagen(imagen.getAttribute('src'))
    
})
})
contenedorlight.addEventListener('click',(e)=>{
  if (e.target !== imageneslight){
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimage')
  }

    
})

const aparecerimagen =(imagen)=>{
    imageneslight.src=imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimage')
}
