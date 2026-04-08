

const mobileSideNav = document.getElementById('mobileSideNav');
const hamburger = document.getElementById('hamburger');
const closeHamburger = document.getElementById('closeHamburger');

let isNavCollapsed = true;

if (localStorage.getItem('hamState') === 'open') {
        mobileSideNav.classList.remove('hidden');
        isNavCollapsed = true;
}

if (localStorage.getItem('hamState') === 'close') {
        mobileSideNav.classList.add('hidden');
         isNavCollapsed = true;
}

hamburger.addEventListener('click', () => {
        mobileSideNav.classList.remove('hidden');
        localStorage.setItem('hamState', 'open');
         isNavCollapsed = !isNavCollapsed;
});


  closeHamburger.addEventListener('click', () => {
        mobileSideNav.classList.add('hidden');
        localStorage.setItem('hamState', 'close');

 isNavCollapsed = !isNavCollapsed;
  }); 





    const sideNav = document.getElementById('sideNav');
    const smallNav = document.getElementById('smallNav');
    const bigNav = document.getElementById('bigNav');
    const mainContainer = document.querySelector('.main-container');

    let isCollapsed = true;

    const savedState = localStorage.getItem('navState');
        if (savedState === 'collapsed' ) {
        bigNav.classList.add('hidden');
        smallNav.classList.remove('hidden');
        mainContainer.style.width = '95%';
        isCollapsed = true;
       }
       else {
        bigNav.classList.remove('hidden');
        smallNav.classList.add('hidden');
        mainContainer.style.width = '85%';
        isCollapsed = true;
       }
    
    sideNav.addEventListener('click', () => {

       if (isCollapsed ) {
        bigNav.classList.add('hidden');
        smallNav.classList.remove('hidden');
        mainContainer.style.width = '95%';
        localStorage.setItem('navState', 'collapsed')
       }
       else {
        bigNav.classList.remove('hidden');
        smallNav.classList.add('hidden');
        mainContainer.style.width = '85%';
        localStorage.setItem('navState', 'expand')
       }

       isCollapsed = !isCollapsed;
    });

    


    const userInput = document.getElementById('username');
    const specializeInput = document.getElementById('specialize');
    const skillsInput = document.getElementById('skills');
    const bioInput = document.getElementById('bio');
    const btnModal = document.getElementById('btnModal');
    const modal = document.getElementById('modal');
    const editModal = document.getElementById('editModal');
    const msg = document.getElementById('msg');
    const myForm = document.getElementById('myForm');



    const savedmodal = localStorage.getItem('savemodal')

     modal.addEventListener('click', () => {
        
        editModal.classList.toggle('hidden');
        localStorage.setItem('savemodal', 'openModal')
 

    });

    myForm.addEventListener('submit', (e) => {
     e.preventDefault();

     if (userInput.value === '' && specializeInput.value === '' && skillsInput.value === '' && bioInput.value === '') {
         return;
     }
     else {
      msg.innerHTML = 'Added Successfully';
      msg.style.color = 'green';
     }
       
    });



