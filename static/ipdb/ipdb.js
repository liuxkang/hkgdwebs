$(document).ready(initAll);

var mac_value;
var dept_value;
var noted_value;

function initAll()
{
	$('.edit_button').click(edit_mode);				//设置“修改”按钮的点击事件
	$('.no_button').click(watch_mode);				//设置“取消”按钮的点击事件	
	$('.edit_button').css("display","inline");
	$('.delete_button').css("display","inline");
	$('.ok_button').css("display","none");
	$('.no_button').css("display","none");
	$('.page_a').click(submit);
}	



function edit_mode()			//编辑模式
{
	$('.edit_button').css("display","none");
	$('.delete_button').css("display","none");
	$('.ok_button').css("display","none");
	$('.no_button').css("display","none");
	document.getElementById("ok_"+this.name).style.display = "inline";
	document.getElementById("no_"+this.name).style.display = "inline";
	
	mac_value = document.getElementById("th_mac_"+this.name).innerHTML;
	dept_value = document.getElementById("th_dept_"+this.name).innerHTML;
	noted_value = document.getElementById("th_noted_"+this.name).innerHTML;
	
	var mac_edit_input = document.getElementById("mac_"+this.name);
	var noted_edit_input = document.getElementById("noted_"+this.name);
	mac_edit_input.setAttribute("type","text");
	mac_edit_input.value = document.getElementById("mac_"+this.name).value;
	noted_edit_input.setAttribute("type","text");
	noted_edit_input.value = document.getElementById("noted_"+this.name).value;
	
	dept_select = document.getElementById("dept_"+this.name);
	dept_select.style.display = "inline";
	document.getElementById("th_dept_"+this.name).style.display = "none";
	for(var i=0;i<dept_select.options.length;i++)
	{
		if(dept_select.options[i].value == dept_value)
		{
			dept_select.options[i].selected = true;
		}
	}
	document.getElementById("th_mac_"+this.name).style.display = "none";
	document.getElementById("th_noted_"+this.name).style.display = "none";
	
	return true;
}

function watch_mode()				//查看模式
{
	$('.edit_button').css("display","inline");
	$('.delete_button').css("display","inline");
	$('.ok_button').css("display","none");
	$('.no_button').css("display","none");
	var mac_edit_input = document.getElementById("mac_"+this.name);
	var noted_edit_input = document.getElementById("noted_"+this.name);
	mac_edit_input.setAttribute("type","hidden");
	noted_edit_input.setAttribute("type","hidden");
	
	document.getElementById("dept_"+this.name).style.display = "none";
	document.getElementById("th_dept_"+this.name).innerHTML = dept_value;
	document.getElementById("th_noted_"+this.name).innertHTML = noted_value;
	document.getElementById("th_mac_"+this.name).innerHTML = mac_value;
	document.getElementById("th_dept_"+this.name).style.display = "inline";
	document.getElementById("dept_"+this.name).style.display = "none";
	document.getElementById("th_noted_"+this.name).style.display = "inline";
	document.getElementById("th_mac_"+this.name).style.display = "inline";

	return true;
}

function submit()
{
	var page = this.id;
	$('#page_form').append('<input type="hidden" name="page" value="'+page+'" />');
	$('#page_form').submit();
}