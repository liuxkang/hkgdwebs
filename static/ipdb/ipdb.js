window.onload = initAll;

function initAll()
{
	alert("页面加载完成");
	document.getElementById("edit_button").innerHTML = "点我";
	document.getElementById("edit_button").onclick = change_value;
}

function change_value()
{
	this.innerHTML="chang_value函数调用";
}