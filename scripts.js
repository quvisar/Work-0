
const active = document.querySelector(".burger");
const content = document.querySelector(".burger__content");
const childs = document.querySelector(".header__menu").outerHTML;

active.addEventListener("click",burger);

content.addEventListener("click",action);

content.insertAdjacentHTML("afterbegin",childs);

function burger() {
	content.classList.toggle('_active');
	document.querySelector(".burger__line-1").classList.toggle('line-1');
	document.querySelector(".burger__line-2").classList.toggle('line-2');
	document.querySelector(".burger__line-3").classList.toggle('line-3');

	// if(content.classList.contains('header__menu')==false){
	// 	content.insertAdjacentHTML("afterbegin",childs);
	// }	
	// console.log(content.classList.contains('_active'));
	// if(content.classList.contains('_active')==false){
	// 	document.querySelector(".header__menu").outerHTML;
	// }
}
	
function action(){
	content.classList.toggle('_active');
	document.querySelector(".burger__line-1").classList.toggle('line-1');
	document.querySelector(".burger__line-2").classList.toggle('line-2');
	document.querySelector(".burger__line-3").classList.toggle('line-3');
	console.log(content.classList.contains('_active'));
}