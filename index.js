//declare variables 
const btns = document.querySelectorAll("button")
const dollarInput = document.getElementById('DollarInput');

btns.forEach(btn=>{
	if(btn.previousElementSibling.classList.contains("nairaInput")){
		btn.addEventListener("click",function convertNtoD() {
	let input = btn.previousElementSibling;
	let result = input.value*1 / 650 ;
	let x = btn.nextElementSibling;
	x.textContent =  `$${result}`	
	input.value = `${input.value}`;
	})
}

else if (btn.previousElementSibling.classList.contains("dollarInput")){
		btn.addEventListener("click",function convertDtoN() {
	let input = btn.previousElementSibling;
	input.value = `${input.value*1}`;
	let result = Math.floor(input.value*1 * 650) ;
	let x = btn.nextElementSibling;
	x.textContent =  `N${result}`	
	input.value = `${input.value}`;

})
}

else if (btn.previousElementSibling.classList.contains("poundInput")){
		btn.addEventListener("click",function convertPtoKg(){
	let input = btn.previousElementSibling;
	let result = Math.floor(input.value*1 / 2.205);
	let x = btn.nextElementSibling;
	x.textContent =  `${result}Kg`	
	input.value = `${input.value}`;
})
}

else if (btn.previousElementSibling.classList.contains("kgInput")){
		btn.addEventListener("click",function convertKgtoP(){
	let input = btn.previousElementSibling;
	let result = Math.floor(input.value*1 * 2.205);
	let x = btn.nextElementSibling;
	x.textContent =  `${result}Pounds`	
	input.value = `${input.value}`;
})
}


})
	




