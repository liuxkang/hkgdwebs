window.onload = initPage;
function initPage()
{
	document.getElementById("edit_button").innerHTML = "我被改了";
	document.getElementById("edit_button").onclick = change_value;
}

function change_value()
{
	this.innerHTML="chang_value函数调用";
}