let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
function myfunction(){
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var choconame = document.getElementById('choconame').value;
	var number = document.getElementById('number').value;
	
	if (var name !=" " && var email !=" " &&  var number !=" " && var choconame !=" " ){
		alert (" Confirm Your Order ");
	} else {
		alert (" complete Your Details ");
	}
}
	


window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}