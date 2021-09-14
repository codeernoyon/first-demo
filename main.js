const header = document.querySelector('#header__area');
const contentBox = document.querySelector('.info');
const toggleBtn = document.querySelector('.toggle__btn');

//header area function
function contentBoxShow(){
    //Header area Content box show
    contentBox.addEventListener('click', ()=>{
        if(!contentBox.classList.contains('show')){
            contentBox.classList.add('show');
        }
        else{
            contentBox.classList.remove('show');
        }
    });
    //Header area Content box add
    toggleBtn.addEventListener('click', (e)=>{
        e.stopPropagation()
        if(contentBox.classList.contains('show')){
            contentBox.classList.remove('show');
        }
        
        
    });
};

contentBoxShow();


//Click button for navber
const navIcon = document.querySelector('.nav__icon');
navIcon.addEventListener('click', ()=>{
    header.classList.toggle('show__nav__bar');
    
})



