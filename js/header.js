function mouseover(){
	document.getElementById("bs-example-navbar-collapse-1").onmouseover = activate;
}

function activate(){
	this.className = "active";
}