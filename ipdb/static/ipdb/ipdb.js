window.onload = initAll

function initAll()
{
	document.getElementById("test").onclick = disappear;
}

function disappear()
{
	this.innerHTML = "妈的";
}