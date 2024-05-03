 const wrapper= document.querySelector('.wrapper');
const btnPopup= document.querySelector('.btnLogin-popup');




loginLink.addEventListener('click',()=>
{wrapper.classlist.remove('active');});


btnPopup.addEventListener('click',()=>
{wrapper.classlist.add('active-popup');});

iconClose.addEventListener('click',()=>
{wrapper.classlist.remove('active-popup');});
