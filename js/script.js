collapsibles = document.querySelectorAll(".collapsible");
M.Collapsible.init(collapsibles, {
	accordion: false,
});
collheaders = document.querySelectorAll(".collapsible-header");
collbodies = document.querySelectorAll(".collapsible-body");
collbodies.forEach((elem)=>{
	elem.style.border = "solid 0px";
});
collheaders.forEach((elem)=>{
	elem.style.border = "solid 0px";
});
collapsibles.forEach((elem)=>{
	elem.style.border = "solid 0px";
});
expand = document.querySelector("#expand");
ch = collheaders[0];
var chPressed = 1;
ch.addEventListener("click", function(e){
	chPressed *= -1;
	if (chPressed === 1) expand.innerText = "chevron_right";
	else if (chPressed === -1) expand.innerText = "expand_less";
});
scrollbtn = document.querySelector("#scrollbtn");
if (scrollbtn !== null){
scrollbtn.addEventListener("click", (e)=>{
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
})}