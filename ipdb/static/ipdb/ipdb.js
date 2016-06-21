window.onload = initAll;

function initAll()
{
	document.getElementById("edit_button").onclick = to_value;
}

function to_value()
{
	window.location.href=document.URL+"?ip_value="+this.value;
}