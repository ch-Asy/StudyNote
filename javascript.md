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


#### JavaScript事件
	
![](http://img.mukewang.com/53e198540001b66404860353.jpg)

#### JavaScript对象

> Date日期对象

	var date=new Date();获取当前电脑系统时间
	var date=new Date(2012,2,31);
	var date=new Date('Oct 1,2012');自定义时间初始值
![](http://img.mukewang.com/555c650d0001ae7b04180297.jpg)

- getDay()返回星期，返回的是0-6的数字。0表示星期日，如果要返回星期几，可以用一维数组来完成。
- get/setTime()返回/设置时间，单位毫秒数，计算从1970年1月1日0时到日期对象所指的日期的毫秒数。

> String 字符串对象

- length 赶回字符串的长度，空格也算一个字符
- toUpperCase() 将字符串全部小写字母转换为大写
- toLowerCase() 将字符串全部大写字母转换为小写
- charAt(index) 返回字符串第index的字符
- indexOf(substring,startpos) 返回指定字符串值在字符串中首次出现的位置。
		
	    区分大小写
		如果字符串中不包含要查询的字符串值则返回  -1；
![](http://img.mukewang.com/53853d4200019feb04920149.jpg)
- split(separator,limit) 将字符串分隔为字符串数组，并且返回此数组

		如果以“”空串分隔则把每一个字符都分割
![](http://img.mukewang.com/532bee4800014c0404230108.jpg)
- substring(startPos,stopPos) 用于提取字符串中介于两个指定下标之间的字符。

		返回的内容是从start开始（包含start位置的字符）到stop-1出的所有字符，其长度为stop-start；
		如果start=stop则返回一个长度为0的空字符串
		如果start>stop那么该方法在提取字符串之前会先交换这两个参数。
![](http://img.mukewang.com/532bf1bb000151af04450082.jpg)

- substr(startPos,length) 用于提取从startPos开始指定长度的字符串

		 如果参数startPos是负数，从字符串的尾部开始算起，也就是说，最后一个字符是-1，倒数第二个字符是-2，以此类推。
		 如果startPos为负数，且绝对值大于字符串的长度，startPos为0.
![](http://img.mukewang.com/532bf2e00001105305100098.jpg)

> Math对象

	Math对象，提供对数据的数学计算。
	Math对象是一个固有的对象，无需创建他，直接把Math作为对象使用就可以调用其所有的属性和方法。
- Math对象属性
![](http://img.mukewang.com/532fe7cf0001e7b505170269.jpg)
- Math对象方法
![](http://img.mukewang.com/532fe841000174db05160622.jpg)

> Array对象

- 二维数组

	    var arr=[[1,2,3],[2,5,8]];
		var arr=new Array();
		for(var i=0;i<length;i++){
		arr[i]=new Array();
		for(var j=0;j<length;j++){
			arr[i][j]=value;
			}
		}
![](http://img.mukewang.com/533295ab0001dead05190599.jpg)

> window对象

	window对象是BOM的核心，window对象值得是当前的浏览器窗口
![](http://img.mukewang.com/535483720001a54506670563.jpg)

- JavaScript计时器

	JavaScript中，我们可以在设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行
	- 计时器类型
		1. 一次性计时器：尽在指定的延迟时间之后触发一次
		2. 间隔性触发计时器：每隔一定的时间间隔就触发一次
	- 计时器方法
		![](http://img.mukewang.com/56976e1700014fc504090143.jpg)
	- setInterval（方法，时间） 在执行时从载入页面后每隔指定的时间执行代码。
			
			方法=function/"function()"
			返回一个可以传递给clearInterval从而汽车小对方法的周期性执行的值
	- clearInterval（id）取消由setInterval（）设置的交互时间
	- setTimeout(方法，延迟时间) 在载入后延迟指定时间后，去执行一次表达式，仅执行一次。
	- clearTimeout(id) 停止计时器。
- History对象

	    history对象记录了用户曾经浏览过的页面（URL）。并可以实现浏览器前进与后退的相似导航的功能。
	    window.history.[属性|方法]
![](http://img.mukewang.com/53548c030001759e05840068.jpg)
![](http://img.mukewang.com/53548c200001228206210123.jpg)
	- back()加载history列表的前一个URL
			
			相当于window.history.go(-1);
	- forward()加载history列表中的下一个URL

			相当于window.history.go(1);
	- go() 根据当前所处的页面，加载history列表中的某个对象的页面
![](http://img.mukewang.com/5354947e00011a9a06490153.jpg)

- Location对象

		location用于获取或这只窗体的URL，并且可以用于解析URL。
		location.[属性|方法]
![](http://img.mukewang.com/53605c5a0001b26909900216.jpg)
![](http://img.mukewang.com/5354b1d00001c4ec06220271.jpg)
![](http://img.mukewang.com/5354b1eb00016a2405170126.jpg)

- Navigator对象

		navigator对象包含有关浏览器的信息，通常用于检测浏览器与操作系统的版本。
		使用时：navigator--“N”要小写，小心别被坑
![](http://img.mukewang.com/5354cff70001428b06880190.jpg)

- screen对象

		用于获取用户的屏幕信息
		window.screen.属性
		单位以像素计
		可以不使用window前缀
![](http://img.mukewang.com/5354d2810001a47706210213.jpg)
	- 屏幕分辨率的高和宽
		
				window.screen对象包含有用户的屏幕信息
				1. screen.height返回屏幕分辨率的高
				2. screen.width返回屏幕分辨率的宽
	- 屏幕可用高和宽度
	
				不同的系统的任务栏默认高度不一样，以及任务栏的位置可在屏幕上下左右任何位置，所以有可能可用宽度和高度不一样。
				1. screen.availWidth属性返回访问者屏幕的宽度，减去界面特性，比如任务栏
				2. screen.availHeight属性返回访问者屏幕的高度。

#### DOM

![](http://img.mukewang.com/5375c953000117ee05240129.jpg)

- nodeName属性：节点的名称，是只读的
	1. 元素节点的nodeName与标签名相同
	2. 属性节点的nodeName是属性的名称
	3. 文本节点的nodeName永远是#text
	4. 文档节点的nodeName永远是#document
- nodeValue属性：节点的值
	1. 元素节点的nodeValue是undefined或null
	2. 文本节点的nodeValue是文本自身
	3. 属性节点的nodeValue是属性的值
- nodeType属性：节点的类型，是只读的

		元素类型    节点类型
		元素        1
		属性        2
		文本        3
		注释        8
		文档        9

![](http://img.mukewang.com/53f17a6400017d2905230219.jpg)

- document.childNodes
	1. 访问选定元素节点下的所有子节点的列表，返回的值可以看做是一个数组它具有length属性
	2.  节点之间的空白符，在firefox、chrome、opera、safari浏览器是文本节点
	3.  只是一级子节点 

![](http://img.mukewang.com/538d29da000152db05360278.jpg)

> getElementsByName()

		返回带有指定名称的节点对象的集合
		1. 因为文档中的name属性不唯一，所以getElementsByName()方法返回的是元素的数组，而不是一个元素。
		2. 和数组类似也有length属性可以和访问数组一样的方法来访问，从0开始。

> getElementsByTagName()

		返回带有指定标签名的节点对象的集合。返回元素的顺序是他们在文档中的顺序
		1. TagName是标签的名称，如：p a input
		2. 和数组类似也有length属性可以和访问数组一样的方法来访问，从0开始。

![](http://img.mukewang.com/5405263300018bcf05760129.jpg)

> getAttribute(name)

		通过元素节点的属性名称获取属性的值
		name：想要查询的元素节点的属性名称
> setAttribute(name,value)

		增加一个指定名称和值得新属性，或者把一个现有的属性设定为指定的属性
		name:要设置的属性名
		value:要设置的属性值
		1. 把现有的属性设置为指定的值，如果不存在具有指定名称的属性，该方法将创建一个新的属性
		2. 类似于getAttribute()方法，setAttribute()只能通过元素节点对象调用的属性。

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