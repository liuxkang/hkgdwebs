$(document).ready(initAll);

var rfid_value;
var it_type_value;
var sn_value;
//var dept_value;
var user_value;
var time_value;

function initAll()
{
	$('.edit_button').click(edit_mode);				//设置“修改”按钮的点击事件
	$('.no_button').click(watch_mode);				//设置“取消”按钮的点击事件
	$('input').addClass("hide_mode");
	$('select').addClass("hide_mode");
	$('.edit_button').addClass("show_mode");
	$('.ok_button').addClass("hide_mode");
	$('.no_button').addClass("hide_mode");
	$('.page_a').click(submit);
}	



function edit_mode()			//编辑模式
{
	$('input').removeClass().addClass("hide_mode");
	$('select').removeClass().addClass("hide_mode");
	$('.edit_button').removeClass().addClass("hide_mode");
	$('.ok_button').removeClass().addClass("hide_mode");
	$('.no_button').removeClass().addClass("hide_mode");
	
	$('div[id="th_type_'+this.id+'"]').removeClass().addClass("hide_mode");
	$('div[id="th_sn_'+this.id+'"]').removeClass().addClass("hide_mode");
	$('div[id="th_user_'+this.id+'"]').removeClass().addClass("hide_mode");
	$('div[id="th_time_'+this.id+'"]').removeClass().addClass("hide_mode");
	$('div[id="th_dept_'+this.id+'"]').removeClass().addClass("hide_mode");
	
	$('select[id="type_'+this.id+'"]').removeClass().addClass("show_mode");
	$('input[id="sn_'+this.id+'"]').removeClass().addClass("show_mode");
	$('input[id="user_'+this.id+'"]').removeClass().addClass("show_mode");
	$('input[id="time_'+this.id+'"]').removeClass().addClass("show_mode");
	$('select[id="dept_'+this.id+'"]').removeClass().addClass("show_mode");
	
	$('button[id="ok_'+this.id+'"]').removeClass().addClass("show_mode");
	$('button[id="no_'+this.id+'"]').removeClass().addClass("show_mode");
	
	
	var dept_value = $('div[id="th_dept_'+this.id+'"]').text();
	$('select[id="dept_'+this.id+'"]').val(dept_value);

	var type_value = $('div[id="th_type_'+this.id+'"]').text();
	$('select[id="type_'+this.id+'"]').val(type_value);
	
	var time_value = $('div[id="th_time_'+this.id+'"]').text();
	$('input[id="time_'+this.id+'"]').val(time_value);
	return true;
}

function watch_mode()				//查看模式
{
	/*
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
	*/
	return true;
}

function submit()
{
	var page = this.id;
	$('#page_form').append('<input type="hidden" name="page" value="'+page+'" />');
	$('#page_form').submit();
}