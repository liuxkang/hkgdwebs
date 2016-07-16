$(document).ready(initAll);

var ip_value;
var mac_value;
var dept_value;
var noted_value;

function initAll()
{
	$('button[id^="edit"]').click(edit_mode);				//设置“修改”按钮的点击事件
	$('button[id^="no"]').click(watch_mode);				//设置“取消”按钮的点击事件	
	$('.page_a').click(change_page);
	$('input[id^="vlan_"]').click(vlan_checked);
}	



function edit_mode()			//编辑模式
{
	ip_value = this.name;
	$('button[id^="edit"]').removeClass("show_mode").addClass("hide_mode");
	$('button[id^="delete"]').removeClass("show_mode").addClass("hide_mode");
	$('button[id="ok_'+ip_value+'"]').removeClass("hide_mode").addClass("show_mode");
	$('button[id="no_'+ip_value+'"]').removeClass("hide_mode").addClass("show_mode");
	$('div[id*="'+ip_value+'"]').removeClass("show_mode").addClass("hide_mode");
	$('input[id*="'+ip_value+'"]').removeClass("hide_mode").addClass("show_mode");
	$('select[id*="'+ip_value+'"]').removeClass("hide_mode").addClass("show_mode");
	
	mac_value = $('div[id="div_mac_'+ip_value+'"]').text();
	dept_value = $('div[id="div_dept_'+ip_value+'"]').text();
	$('select[id="dept_'+ip_value+'"]').val(dept_value);
	noted_value = $('div[id="div_noted_'+ip_value+'"]').text();
	return true;
}

function watch_mode()				//查看模式
{
	$('button[id^="edit"]').removeClass("hide_mode").addClass("show_mode");
	$('button[id^="delete"]').removeClass("hide_mode").addClass("show_mode");
	$('button[id^="ok"]').removeClass("show_mode").addClass("hide_mode");
	$('button[id^="no"]').removeClass("show_mode").addClass("hide_mode");
	$('input[id$="'+ip_value+'"]').removeClass("show_mode").addClass("hide_mode");
	$('div[id^="div"]').removeClass("hide_mode").addClass("show_mode");
	$('select[id^="dept"]').removeClass("show_mode").addClass("hide_mode");
	
	$('input[id=mac_"'+ip_value+'"]').val(mac_value);
	$('select[id="dept_'+ip_value+'"]').val(dept_value);
	$('input[id=noted_"'+ip_value+'"]').val(noted_value);
	return true;
}

function change_page()
{
	var page = this.id;
	$('#page_form').append('<input type="hidden" name="page" value="'+page+'" />');
	$('#page_form').submit();
}

function vlan_checked()
{
	if(this.checked == true)
	{
		this.value = "1";
	}
	else
	{
		this.value = "0";
	}
	$('#vlan_form').submit();
}