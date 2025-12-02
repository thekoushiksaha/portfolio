const para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		if(entry.isIntersecting){
			//console.log(entry.target);
			entry.target.classList.add("show");	
		}
		else{
			entry.target.classList.remove("show");
		}
	})
},{threshold: .5, rootMargin: "10px"})



function onLoad(){
	/*document.getElementById("container1").innerHTML = `<nav class="header"><ul id="ul_menu_item"></ul></nav>`
	for(let i = 1; i<=5; i++){
		document.getElementById("ul_menu_item").innerHTML += `<li><a href="#card${i}">Card-${i}</a></li>`
	}*/
	/*for(let i = 1; i<=5; i++){
		document.getElementById("container2").innerHTML += `<section class="card" id="card${i}"><div class="card_header" id="card_header">Card ${i}</div><div class="card_content" id="card_content">${para}</div></section>`;
	}*/	
	
	const listElement = document.querySelectorAll(".card");
	listElement.forEach(el => observer.observe(el));
}
	
