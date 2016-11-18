# JavaScript #

#### JavaScript语法
	
> 变量 

	在JavaScript中用var 来表示变量
	
> 变量的命名规则

	1. 必须以字母，下划线或者美元符号开头，后面可以跟字母，下划线，美元符号和数字
	2. 变量名区分大小写
	3. 可以连续声明多个变量用逗号隔开
	4. 不允许使用JavaScript关键字和保留字做变量名

![](http://img.mukewang.com/529c07c000014f5103080447.jpg)

> 二维数组

	var arr=[[1,2,3],[2,5,8]];
	var arr=new Array();
	for(var i=0;i<length;i++){
		arr[i]=new Array();
		for(var j=0;j<length;j++){
			arr[i][j]=value;
		}
	}

#### JavaScript事件
	
![](http://img.mukewang.com/53e198540001b66404860353.jpg)

#### JavaScript方法 

> Document.write()

	可用于直接向HTML输出流写内容，简单的说就是直接在页面上输出内容。
	输出空格：用&nbsp代替空格，或者利用标签。
> Alert 消息对话框

	只会显示一个确定按钮。不点击确定对话框不会消失。

> Confirm 消息对话框

	选择对话框：包含一个确定和一个取消按钮
	有返回值，点击确定返回true，相反则，返回false 
> Prompt 消息提示输入框

	显示一个输入框、确定和取消按钮
	prompt(str1,str2)
	str1:要显示的消息对话框的文本，不可修改。
	str2:文本框中的内容，可以修改
	有返回值，取消返回null，确定返回输入的内容

> Window.open 打开新的网页

	格式：window.open([URL],[窗口名称],[参数字符串])
	window.open('http://www.baidu.com','_blank')
	URL:可选参数，在窗口中要显示的网址或路径。如果省略这个参数，或者他的值为空字符串，那么窗口就不显示任何文档（你不会有任何反应）
	窗口参数:可选参数，被打开窗口的名称：
		1. _blank:在新的窗口显示目标网页
		2. _self:在当前窗口显示目标网页
		3. _top:框架网页中在上部窗口中显示目标网页
	参数字符串:可选参数，设置窗口参数，用逗号隔开
![](http://img.mukewang.com/52e3677900013d6a05020261.jpg)

> Window.close 关闭网页

	window.close();
	<窗口对象>.close();

#### Javascript属性

> document.getElmentById

	获取元素对象，从而进行操作
	返回null ,或者标签对象

> innerHTML

	用于获取或替换HTML元素的内容
	Object.innerHTML

> Object.style.property=属性值

	用于修改HTML的元素样式
	Object是通过document.getElementById获取的对象
![](http://img.mukewang.com/52e4d4240001dd6c04850229.jpg)

> display

	网页中经常会看到显示和隐藏的效果，可以通过display属性来设置
	Object.style.display=value
![](http://img.mukewang.com/52e4dba5000179da04110095.jpg)

> className

	用于修改元素的class 的名字从而修改样式
	Object.className=value