const btnLogin = document.getElementById('js-btn-login');
const btnDef = document.querySelectorAll('.js-btn-def');

// Animation for btn login
gsap.to(btnLogin, {background: 'linear-gradient(45deg, #C89AFC, #7C6AFA)'});

btnLogin.addEventListener('pointerover', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #9435FF, #C89AFC)', duration: .7});
});

btnLogin.addEventListener('pointerout', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #C89AFC, #7C6AFA)', duration: .7});
});

btnLogin.addEventListener('pointerdown', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #9435FF, #C89AFC)', duration: .3});
});

btnLogin.addEventListener('pointerup', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #C89AFC, #7C6AFA)', duration: .3});
});

//Animation for default btn\

gsap.to(btnDef, {background: 'linear-gradient(45deg, #DF5950, #451046)'});

for (let i = 0; i < btnDef.length; i++) {

    btnDef[i].addEventListener('pointerover', ()=>{
        gsap.to(btnDef[i], {background: 'linear-gradient(45deg, #451046, #DF5950)', duration: .7});
    });

    btnDef[i].addEventListener('pointerout', ()=>{
        gsap.to(btnDef[i], {background: 'linear-gradient(45deg, #DF5950, #451046)', duration: .7});
    });

    btnDef[i].addEventListener('pointerdown', ()=>{
        gsap.to(btnDef[i], {background: 'linear-gradient(45deg, #451046, #DF5950)', duration: .3});
    });

    btnDef[i].addEventListener('pointerup', ()=>{
        gsap.to(btnDef[i], {background: 'linear-gradient(45deg, #DF5950, #451046)', duration: .3});
    });
    
}