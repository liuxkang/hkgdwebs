window.onload = initAll;

function initAll()
{
	var edit_buttons = document.getElementsByClassName("edit_button");		//设置“修改”按钮的点击事件
	for(var i =0;i<edit_buttons.length;i++)
	{
		edit_buttons[i].onclick = edit_mode;
	}
	
	var no_buttons = document.getElementsByClassName("no_button");			//设置“取消”按钮的点击事件
	for(var i =0;i<no_buttons.length;i++)
	{
		no_buttons[i].onclick = watch_mode;									//点击取消按钮后，视图恢复查看状态。
	}
	
	var ok_buttons = document.getElementsByClassName("ok_button");		//设置“确定”按钮的点击事件
	for(var i =0;i<ok_buttons.length;i++)
	{
		ok_buttons[i].onclick = post_data;
	}
	
	set_visible_by_classname("ok_button",false);
	set_visible_by_classname("no_button",false);
}	

var mac_value;				//记录原来的mac地址
var dept_value;				//记录原来的部门名称
var noted_value;			//记录原来备注文本

function edit_mode()			//编辑模式
{
	set_visible_by_classname("edit_button",false);
	set_visible_by_classname("delete_button",false);
	set_visible_by_id("ok_"+this.name,true);
	set_visible_by_id("no_"+this.name,true);
	
	var mac_col;
	var dept_col;
	var noted_col;
	var col_nodes = this.parentNode.parentNode.childNodes;
	for(var i=0;i<col_nodes.length;i++)
	{
		switch(col_nodes[i].className)
		{
			case "mac_col":mac_col=col_nodes[i];break;
			case "dept_col":dept_col=col_nodes[i];break;
			case "noted_col":noted_col=col_nodes[i];
		}

	}
	
	mac_value = mac_col.innerHTML;
	dept_value = dept_col.innerHTML;
	noted_value = noted_col.innerHTML;
	
	var mac_input_text = document.createElement("input");	//修改mac地址的文本框
	var dept_select = document.createElement("select");
	var noted_input_text = document.createElement("input");	//修改备注的文本框
	
	mac_input_text.setAttribute("type","text");				//把mac地址列变成文本框，可编辑状态
	mac_input_text.setAttribute("id",mac_value);
	mac_col.innerHTML = "";
	mac_col.appendChild(mac_input_text);
	mac_input_text.value=mac_value;
	
	noted_input_text.setAttribute("type","text");			//把备注列变成文本框，可编辑状态
	noted_input_text.setAttribute("id",noted_value);
	noted_col.innerHTML = "";
	noted_col.appendChild(noted_input_text);
	noted_input_text.value=noted_value;
	
	depts_div = document.getElementById("dept_names");		//把部门列变为选择下拉框
	var depts_array = get_depts(depts_div);
	for(var i=0;i<depts_array.length;i++)
	{
		var _option = document.createElement("option");
		_option.innerHTML = depts_array[i];
		dept_select.options.add(_option);
		if(depts_array[i] == dept_value)
		{
			_option.selected = true;
		}
	}
	dept_col.innerHTML = "";
	dept_select.setAttribute("id",dept_value);
	dept_col.appendChild(dept_select);
	return true;
}

function watch_mode()				//查看模式
{
	var mac_col;
	var dept_col;
	var noted_col;
	var col_nodes = this.parentNode.parentNode.childNodes;
	for(var i=0;i<col_nodes.length;i++)
	{
		switch(col_nodes[i].className)
		{
			case "mac_col":mac_col=col_nodes[i];break;
			case "dept_col":dept_col=col_nodes[i];break;
			case "noted_col":noted_col=col_nodes[i];
		}
	}
	var mac_childs = mac_col.childNodes;
	for(var i=0;i<mac_childs.length;i++)
	{
		mac_col.removeChild(mac_childs[i]);
	}
	mac_col.innerHTML=mac_value;
	
	var dept_childs = dept_col.childNodes;
	for(var i=0;i<dept_childs.length;i++)
	{
		dept_col.removeChild(dept_childs[i]);
	}
	dept_col.innerHTML = dept_value;
	
	var noted_childs = noted_col.childNodes;
	for(var i=0;i<noted_childs.length;i++)
	{
		noted_col.removeChild(noted_childs[i]);
	}
	noted_col.innerHTML =  noted_value;
	
	set_visible_by_classname("edit_button",true);
	set_visible_by_classname("delete_button",true);
	set_visible_by_classname("ok_button",false);
	set_visible_by_classname("no_button",false);
}

function get_depts(elem)			//获取页面中隐藏的部门
{
	var depts_nodes = elem.childNodes;
	var depts_array = new Array();
	if(depts_nodes)
	{	
		for(var i=0;i<depts_nodes.length;i++)
		{
			
			if(depts_nodes[i].tagName == "P")
			{
				depts_array.push(depts_nodes[i].innerHTML);
			}
			
		}
	}
	return depts_array;
}

function set_visible_by_classname(className,isDisplay)			//通过class名来设置是否显示
{
	var dom_elements = document.getElementsByClassName(className);
	var strDisplayWord = "none";
	if(isDisplay)
		strDisplayWord = "";
	for(var i=0;i<dom_elements.length;i++)
	{
		dom_elements[i].style.display = strDisplayWord;
	}
}


function set_visible_by_id(id,isDisplay)
{
	var dom_element = document.getElementById(id);
	var strDisplayWord = "none";
	if(isDisplay)
		strDisplayWord = "";
	dom_element.style.display = strDisplayWord;
}

function post_data()
{
	var changed_mac_value = document.getElementById(mac_value).value;
	var select_obj = document.getElementById(dept_value);
	var select_index = select_obj.selectedIndex;	
	var changed_dept_value = select_obj.options[select_index].value;
	var changed_noted_value = document.getElementById(noted_value).value;
	var col_nodes = this.parentNode.parentNode.childNodes;
	
	var ip_value;
	for(var i=0;i<col_nodes.length;i++)
	{
		if(col_nodes[i].className == "ip_col")
		{
			ip_value = col_nodes[i].innerHTML;
		}
	}
	
	var temp = '<form id="'+ip_value+'" name="post'+ip_value+'" method="post">';
	document.write('<form id="'+ip_value+'" name="post'+ip_value+'" method="post"');
	document.write('<input type="hidden" name="test_name" value="刘康的地址信息"');
	document.write('</form>');
	document.getElementById(ip_value).submit();
	return true;
}
