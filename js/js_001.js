var btnSwitch = document.querySelector('.theme-toggler');
btnSwitch.onclick = () => {
  btnSwitch.classList.toggle('active');
  if(btnSwitch.classList.contains('active')){
    // document.body.classList.add('active');
    document.querySelector(':root').classList.add('active');
  }
  else{
    // document.body.classList.remove('active');
    document.querySelector(':root').classList.remove('active');
  }
}

document.querySelectorAll('.theme-colors .color').forEach( color => {
  color.onclick = () => {
    let background = color.style.background;
    document.querySelector(':root').style.setProperty('--main-color', background);
    // document.querySelector('body.active').style.setProperty('--main-color', background);
  }
});

var btnOpen = document.querySelector('#theme-open');
var btnClose = document.querySelector('#theme-close');

var themeContainer = document.querySelector('.themes-container');
btnOpen.onclick = () => {
  themeContainer.classList.add('open');
}
btnClose.onclick = () => {
  themeContainer.classList.remove('open');
}