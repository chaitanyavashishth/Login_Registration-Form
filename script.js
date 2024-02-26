const wrapper = document.querySelector('.wrapper') ;
const loginLink = document.querySelector('.Register-link') ;
const registerLink = document.querySelector('.loginlink') ;

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

const loginButton = document.querySelector('.btnLogin-popup') ;
const exitButton = document.querySelector('.icon-close')

loginButton.addEventListener('click',()=>{
    wrapper.classList.add('show') ;
});

exitButton.addEventListener('click',()=>{
    wrapper.classList.remove('show') ;
})

