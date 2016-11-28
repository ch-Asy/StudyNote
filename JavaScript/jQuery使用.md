#jQuery

####说明
> jQuery是JavaScript的一个库，提供了JavaScript支持，兼容各种浏览器的使用和CSS样式，AJAX的支持

1.  jQuery有两个版本1.x和2.x，2.x是为了在移动端的支持，它省去了对IE6.0 7.0 8.0的支持所以说更加轻量
2.  引入
		
		<script type="text/javascript" src="http://
		libs.baidu.com/jquery/1.9.1/jquery.js"></script>
		弹出对话空表示引入成功
####使用
1. $(document).ready()

		当页面中的document元素加载完成以后再执行后续代码
2. $(document).html()

		在元素中添加内容
		相当于document.innerHTML=""
3. $(document)[index] || $(document).get(index);

		将jQuery对象转换成DOM对象，获取第几个要查询的元素
4. $(obj)

		将DOM对象装化成jQuery对象，
5. jQuery.first()

		获取类数组jQuery对象里的第一个元素

> jQuery选择器

		兼容问题：
		1.ＩＥ会将注释节点实现为元素，所以在IE中调用
		getElementsByTagName（）里面会包含注释节点，这个通常是
		不应该的。
		2.getElementById的参数在IE8及以下较低的版本中布局分大小
		写。
		3.IE7及较低的版本中，表单元素中，如果表单A的name属性名用
		了另一个元素B的ID名并且A在B之前，那么getElementByID会选
		中A。
		4.IE8及较低的版本，浏览器不支持getElementsByClassName

- id选择器 $('#id'):

	    1. 一个用来查找的ID，即元素的id属性
		2.id选择器也是基本的选择器，jQuery内部使用JavaScript函
		数document.getElementById()来处理ID的获取，原生的语法
		支持总是非常高效的，所以在操作DOM的获取上，如果能才从id的
		话尽然考虑这个选择器。
- class选择器 $('.className')

		1. 通过class样式类名来获取节点
		2. 类选择器，相对于id选择器来说，效率会低一点，但是优势就是可以多选
		3.同样的jQuery在实现上，对于类选择器，如果浏览器支持，
		jQuery使用JavaScript的原生getElementsByClassName()函
		数来实现的。
		4.jQuery处理选择上的简单，而且也没有再次使用循环的处理
- element选择器 $('element')

		1.根据给定的HTML标记名称选择所有的元素
		2.搜索指定元素标签名的所有节点，这个是一个集合的支持，同
		  样也有原生方法getElementsByTagName()的支持.
- 全选择器 $('*')

		1.通配符*意味着给所有的元素设置默认的边距。jQuery中我们也
		可以通过传递*选择器来选中文档页面中的元素
		2.抛开jQuery，如果要获取文档中的所有元素，通过document.getElementByTagName()中传递*同样可以去到.
- 层级选择器

	![](http://img.mukewang.com/5590e98b0001f60d06130229.jpg)
- 基本筛选选择器

	![](http://img.mukewang.com/57cd1df2000146de06020498.jpg)
		
		1.:eq :lt :gt :even :odd 用来筛选他们前面的匹配表达式
		的集合元素，根据之前匹配的元素在进一步筛选，注意jQuery合
		集都是从0开始检索。
		2.：gt 是段落筛选，从指定索引的下一个开始，gt(1)实际是从
			2开始。
		3.过滤选择器：$("input:not(:checked) + p")
- 内容筛选选择器

	![](http://img.mukewang.com/57cd20bf0001a97f05290214.jpg)

		1.:contains与:has都有查找的意思，但是contains查找包含“指定文本”的元素，has查找包含“指定元素”的元素
		2.如果:contains匹配的文本包含在元素的子元素中，同样认为是符合条件的。
		3.:parent与:empty是相反的，两者所涉及的子元素，包括文本节点
- 可见性筛选选择器
		
	![](http://img.mukewang.com/5590f6de0001e2b204460106.jpg)

		1.几种方式可以隐藏一个元素：
			CSS display的值是none。
			type="hidden"的表单元素。
			宽度和高度都显式设置为0。
			一个祖先元素是隐藏的，该元素是不会在页面上显示
			CSS visibility的值是hidden
			CSS opacity的指是0
		2.Query的:hidden选择器用于匹配所有不可见的元素，将其封装为jQuery对象并返回。

		与该选择器相对的是:visible选择器，用于匹配所有可见的元素。

		注意：

		在jQuery中，visibility: hidden;和opacity: 0;都被视作可见的，因为它们在页面上占据了相应的物理空间。

		所以$(':hidden')肯定匹配不到你要的元素。