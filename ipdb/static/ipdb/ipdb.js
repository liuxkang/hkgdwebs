window.onload = initAll;

function initAll()
{
	var btns = document.getElementsByTagName("button");
	for(var i =0;i<btns.length;i++)
	{
		btns[i].onclick = edit_mode;
	}
}


function edit_mode()
{
	//alert("点到我了");
	var mac_col;
	var dept_col;
	var noted_col;
	var col_nodes = this.parentNode.parentNode.childNodes;
	for(var i=0;i<col_nodes.length;i++)
	{
		if(col_nodes[i].className == "col_mac")
		{
			mac_col = col_nodes[i];
		}
		
		if(col_nodes[i].className == "col_dept")
		{
			dept_col = col_nodes[i];
		}
		
		if(col_nodes[i].className == "col_noted")
		{
			noted_col = col_nodes[i];
		}		
	}

	mac_value = mac_col.innerHTML;				//记录原来的mac地址
	dept_value = dept_col.innerHTML;			//记录原来的部门名称
	noted_value = noted_col.innerHTML;			//记录原来备注文本
	
	var mac_input_text = document.createElement("input");	//修改mac地址的文本框
	var dept_input_text = document.createElement("input");	//修改部门的下拉框
	var dept_select = document.createElement("select");
	var noted_input_text = document.createElement("input");	//修改备注的文本框
	
	mac_input_text.setAttribute("type","text");
	mac_input_text.setAttribute("name",mac_value);
	dept_input_text.setAttribute("type","text");
	dept_input_text.setAttribute("name",dept_value);
	
	dept_input_text.setAttribute("name","dept_select");
	depts_div = document.getElementById("dept_names");
	var depts_array = get_depts(depts_div);
	for(var i=0;i<depts_array.length;i++)
	{
		dept_select.add
	}
	dept_input_text.appendChild(dept_select);
	mac_col.innerHTML = "";
	mac_col.appendChild(mac_input_text);
	mac_input_text.value=mac_value;
	dept_col.innerHTML = "";	
	dept_col.appendChild(dept_input_text);
	dept_input_text.value=dept_value;
	
}

function get_depts(elem)
{
	//alert("get_depts");
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