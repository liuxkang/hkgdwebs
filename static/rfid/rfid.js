$(document).ready(initAll);

var rfid_value;
var type_value;
var sn_value;
var user_value;
var dept_value;
var time_value;

function initAll()
{
	$('button[value="edit_button"]').click(edit_mode);				//设置“修改”按钮的点击事件
	$('button[value="no_button"]').click(watch_mode);				//设置“取消”按钮的点击事件
	$('input').addClass("hide_mode");
	$('select').addClass("hide_mode");
	$('button[value="edit_button"]').addClass("show_mode");
	$('button[value="ok_button"]').addClass("hide_mode").click(Check_2_Submit);
	$('button[value="no_button"]').addClass("hide_mode");
	$('.page_a').click(submit);
}	



function edit_mode()			//编辑模式
{
	$('input').removeClass().addClass("hide_mode");
	$('select').removeClass().addClass("hide_mode");
	$('button[value="edit_button"]').removeClass().addClass("hide_mode");
	$('button[value="ok_button"]').removeClass().addClass("hide_mode");
	$('button[value="no_button"]').removeClass().addClass("hide_mode");
	
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
	
	sn_value = $('div[id="th_sn_'+this.id+'"]').text();
	$('input[id="dept_'+this.id+'"]').val(sn_value);
	
	user_value = $('div[id="th_user_'+this.id+'"]').text();
	$('input[id="user_'+this.id+'"]').val(user_value);
	
	dept_value = $('div[id="th_dept_'+this.id+'"]').text();
	$('select[id="dept_'+this.id+'"]').val(dept_value);

	type_value = $('div[id="th_type_'+this.id+'"]').text();
	$('select[id="type_'+this.id+'"]').val(type_value);
	
	time_value = $('div[id="th_time_'+this.id+'"]').text();
	time_value = time_value.replace("年","-");
	time_value = time_value.replace("月","-");
	time_value = time_value.replace("日","");
	$('input[id="time_'+this.id+'"]').val(time_value);
	
	rfid_value = $('button[value="edit_button"]').get(0).id;
	return true;
}

function watch_mode()				//查看模式
{

	$('button[value="edit_button"]').removeClass().addClass("show_mode");
	$('button[value="ok_button"]').removeClass().addClass("hide_mode");
	$('button[value="no_button"]').removeClass().addClass("hide_mode");
	$('input').removeClass().addClass("hide_mode");
	$('select').removeClass().addClass("hide_mode");
	$('div').removeClass().addClass("show_mode");

	$('div[id="th_sn_'+this.id+'"]').val(sn_value);
	$('div[id="th_user_'+this.id+'"]').val(user_value);
	$('div[id="th_dept_'+this.id+'"]').val(dept_value);
	$('div[id="th_type_'+this.id+'"]').val(type_value);
	$('div[id="th_time_'+this.id+'"]').val(time);
	return true;
}

function submit()
{
	var page = this.id;
	$('#page_form').append('<input type="hidden" name="page" value="'+page+'" />');
	$('#page_form').submit();
}

function Check_2_Submit()
{
	var time_value = $('input[id="time_'+rfid_value+'"]').val();
	var re = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
	var result = re.test(time_value);
	if(result == true){
		if(RegExp.$1 > 2020 || RegExp.$1 < 1980 || RegExp.$2 > 12 || RegExp.$2 < 1 || RegExp.$3 > 31 || RegExp.$3 < 1)
		{
			$('input[id="time_'+rfid_value+'"]').addClass("invalid");
			return false;
		}
		$('form[class="'+rfid_value+'"]').submit();
		return true;
	}
	else{
		$('input[id="time_'+rfid_value+'"]').addClass("invalid");
		return false;
	}
}