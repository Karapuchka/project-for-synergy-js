const btnLogin = document.getElementById('js-btn-login');

gsap.to(btnLogin, {background: 'linear-gradient(45deg, #C89AFC, #7C6AFA)'});

btnLogin.addEventListener('pointerover', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #7C6AFA, #C89AFC)', duration: .7});
});

btnLogin.addEventListener('pointerout', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #C89AFC, #7C6AFA)', duration: .7});
});

btnLogin.addEventListener('pointerdown', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #7C6AFA, #C89AFC)', duration: .3});
});

btnLogin.addEventListener('pointerup', ()=>{
    gsap.to(btnLogin, {background: 'linear-gradient(45deg, #C89AFC, #7C6AFA)', duration: .3});
});