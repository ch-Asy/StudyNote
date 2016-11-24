####CSS动画属性:

> @keyframes 属性 使用@keyframes规则你可以创建动画
	
	语法：@keyframes 动画的名字（自己定义）{
		0%{开始时是什么效果}
		.中间可以写任意个
		.
		100%{结束时是什么效果}
	}

![](http://i.imgur.com/d5BoF2k.png)

	事例：<style> 
			div{
			  width:100px;
			  height:100px;
			  background:red;
			  position:relative;
			  animation:mymove 5s infinite;
			  -webkit-animation:mymove 5s infinite; /* Safari and Chrome */
			}

			@keyframes mymove{
			  0%   {top:0px; left:0px; background:red;}
		   	 25%  {top:0px; left:100px; background:blue;}
			 50%  {top:100px; left:100px; background:yellow;}
			 75%  {top:100px; left:0px; background:green;}
			 100% {top:0px; left:0px; background:red;}
			}

			@-webkit-keyframes mymove /* Safari and Chrome */
			{
			 0%   {top:0px; left:0px; background:red;}
			 25%  {top:0px; left:100px; background:blue;}
		   	50%  {top:100px; left:100px; background:yellow;}
			75%  {top:100px; left:0px; background:green;}
			100% {top:0px; left:0px; background:red;}
			}
	</style>
[http://www.runoob.com/try/try.php?filename=trycss3_keyframes4](http://www.runoob.com/try/try.php?filename=trycss3_keyframes4 "演示效果")

>animation属性
	
- animation-name 指定要绑定到选择器的`@keyframes`的名称
	 
		语法：animation-name:name	
		简写：animation：name 3s infinte	(none 0 ease 0 1 normal)
		name=none表示没有动画
		js语法：object.object.style.animationName="name"
- animation-duration 指定动画在多少秒内完成
	
		语法：animation-duration:time
		time=0表示没有动画效果
		js语法：object.object.style.animatonDuration="time"
- animation-timing-function 设置动画将如何完成一个周期

		语法：animation-timing-function:ease
		默认值为:ease
		js语法：object.object.style.animationTimingFuncion="type"
	type:	
	1. linear:动画从头到尾的速度是相同的，匀速。
	2. ease:默认。动画以低速开始，然后加快，在结束前变慢。
	3. ease-in:动画以低速开始。
	4. ease-out:动画以低速结束。
	5. ease-in-out:动画以低速开始和结束。
	6. cubic-bezier(n,n,n,n):n为从0到1的值
	
[http://www.runoob.com/try/try.php?filename=trycss3_animation-timing-function2](http://www.runoob.com/try/try.php?filename=trycss3_animation-timing-function2 "效果演示")

- animation-delay 设置动画在启动前的延迟间隔
		
		语法：animation-delay:time
		time:可以为秒或者毫秒，允许负值使动画马上开始但是要跳过time的时间进入动画
		js语法：object.object.style.animationDelay="time"
- animation-iteration-count 定义动画的播放次数
		
		语法：animation-iteration-count:num
		num:默认为1
		num=infinite指定动画播放无限次
		js语法：object.object.style.animationIterationCount=num
- animation-direction 指定是否应该轮流反向播放动画

		语法：animation-direction:values
		values:默认值为normal，动画只播放一次该属性不起作用
		js语法：object.object.style.animationDirection="values"
	values:
	1. normal:默认值。动画正常播放。
	2. reverse:动画反向播放。
	3. alternate:先正向1次再反向一次，循环播放。
	4. alternate-reverse:先反向1次再正向一次，循环播放。
	5. inital:设置该属性为他的默认值。
	6. inherit:从父元素继承该属性。
- animation-fill-mode 规定当动画不播放时（动画完成时，或当动画有一个延迟开始播放时），要应用到元素的样式。

		默认情况下，css动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。animation-fill-mode可以重写该行为。
		语法：animation-fill-mode:values
		values:默认为none
		js语法：object.object.style.animationFillMode="values"
	type:
	1. none：默认值，动画在执行之前和之后不会应用任何样式到目标元素。
	2. forwards:在动画结束后（由animation-iteration-count觉定），动画将应用该属性值。
	3. backwards:动画将应用在animation-delay定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都和from关键帧中的值（当animation-direction为"normal"或"alternate"时 ）或to关键帧中的值（当animation-direction"reverse"或"alternate-reverse"时）。
	4. inital：设置该属性为它的默认值。
	5. inherit:从父元素继承该属性。
- animation-play-state 指定动画是否正在运行或已停止

		语法：animation-play-state:paused | running
		js语法：object.object.style.animationPlayState=""

  
    <!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8"> 
	<title>菜鸟教程(runoob.com)</title>
	<style> 
	div
		{
		width:100px;
		height:100px;
		background:red;
		position:relative;
		animation-name:myfirst;
		animation-duration:5s;
		animation-timing-function:linear;
		animation-delay:2s;
		animation-iteration-count:3;
		animation-direction:alternate;
		animation-fill-mode:forwards;
		animation-play-state:running;
		/* Safari and Chrome: */
		-webkit-animation-name:myfirst;
		-webkit-animation-duration:5s;
		-webkit-animation-timing-function:linear;
		-webkit-animation-delay:2s;
		-webkit-animation-iteration-count:3;
		-webkit-animation-direction:alternate;
		-webkit-animation-fill-mode:forwards;
		-webkit-animation-play-state:running;
		}

	@keyframes myfirst
	{
		0%   {background:red; left:0px; top:0px;}
		25%  {background:yellow; left:200px; top:0px;}
		50%  {background:blue; left:200px; top:200px;}
		75%  {background:green; left:0px; top:200px;}
		100% {background:red; left:0px; top:100px;}
		}

	@-webkit-keyframes myfirst /* Safari and Chrome */
	{
		0%   {background:red; left:0px; top:0px;}
		25%  {background:yellow; left:200px; top:0px;}
		50%  {background:blue; left:200px; top:200px;}
		75%  {background:green; left:0px; top:200px;}
		100% {background:red; left:0px; top:100px;}
	}
	</style>
	</head>
	<body>

	<p><b>注意:</b> 该实例在 Internet Explorer 9 及更早 IE 版本是	无效的。</p>

	<div></div>

	</body>
	</html>`

- 如果每次都写这么一大堆的属性会显得很啰嗦。所以我们一般用简写的方式：（animation: animation: name duration timing-function delay iteration-count direction fill-mode play-state;;）

		animation:myfirst 5s linear 2s infinite alternate;
		/* Firefox: */
		-moz-animation:myfirst 5s linear 2s infinite alternate;
		/* Safari and Chrome: */
		-webkit-animation:myfirst 5s linear 2s infinite alternate;
		/* Opera: */
		-o-animation:myfirst 5s linear 2s infinite alternate;
####CSS背景属性

> background 复合属性。设置对象的背景特性
	
	背景缩写属性可以在一个声明中设置所有的背景属性。
	可以设置的属性分别是:background-color,background-position,background-size,background-repeat,background-origin,background-clip,background-attachment,和background-image,如果上述值缺少一个也不要紧，是允许的
	语法：background: color position size repeat origin clip attachment image;
	js语法：object.object.style.background="red url(png..) top left no repeat"
[http://www.runoob.com/try/try.php?filename=trycss_background](http://www.runoob.com/try/try.php?filename=trycss_background "效果演示")

![](http://i.imgur.com/EqG6qUn.png)

- background-color 指定使用的背景颜色

		元素的背景是元素的总大小，包括填充和边界，不包括边距
		默认为透明：transparent
		inherit：继承父元素的颜色
		语法：background-color:red/#00ff00/rgb(11,11,11)/hsl/hsla/147自定义
		js语法：object.object.style.backgroundColor=""
- background-position 指定背景图像的位置

		是指图像的起始位置
		默认值为：0%0%
		语法:background-position:values
		js语法:object.object.style.backgroundPosition=values
	属性值：
	1. left top|left center|left bottom|right top|right center| right bottom|center top|center center|center bottom :如果只指定一个关键字，其他值将会是center
	2. x%y% :第一个值是水平位置，第二个是垂直，左上角是0%0%。右下角是100%100%。如果仅指定了一个值，其他值将是50%。默认值为0%0%.
	3. xpos ypos:第一个值是水平位置，第二个是垂直。左上角是0，单位可以是像素或者任何其他CSS单位。如果仅指定了一个值，其他值将是50%，你也可以混合使用%和positions。
	4. inherit 指定该属性从父元素继承。
- background-size 指定背景图片的大小

		只能在支持CSS3的浏览器版本中使用
		语法：background-size: length|percentage|cover|contain;
		js语法：object.object.style.backgroundSize=""

	1. length:设置背景图片的高度和宽度，第一个值为宽度，第二个值为高度，如果只设置一个值，第二个值为“auto（自动）”
	2. percentage:将计算相对于背景区域的百分比，第一个只设置宽度，第二个值设置高度，如果只设置一个值，第二个值为“auto（自动）”
	3. cover:此时会保持图像的纵横比并将图片缩放成将完全覆盖背景定位区域的最小大小
	4. contain:此时会保持图像的纵横比并将图片缩放成将适合背景定位区域的最大大小
- background-repeat 指定如何重复背景图像

		设置如何平铺对象的，background-image属性
		默认情况下，重复background-image的垂直和水平方向
		语法：background-repeat:values
		js语法：object.object.style.backgroundRepeat=values
	1. repeat:背景图像将会垂直和水平方向重复。这是默认
	2. repeat-x:只有水平位置会重复背景图像
	3. repeat-y:只有垂直位置会重复背景图像
	4. no-repeat:不重复
	5. inherit：该属性从父元素继承
- background-origin 指定背景图像的定位区域

		background-origin属性指定background-position属性应该是相对位置。
		注意：如果背景图像background-attachment是“固定”这个属性没有任何效果
		语法：background-origin：padding-box
		js语法：object.object.style.backgroundOrigin=""
	values:
	1. padding-box：背景图像填充框的相对位置，默认值
	2. border-box：背景图像边界框的相对位置
	3. content-box：背景图像的相对位置的内容框
- background-clip 指定背景图像的绘画区域

		语法：background-clip: border-box|padding-box|content-box;
		js语法：object.object.style.backgroundClip=""
	values：
	1. padding-box：背景绘制在边框方框内，默认值
	2. border-box：背景绘制在内边距方框内
	3. content-box：背景绘制在内容框内

[http://www.runoob.com/try/try.php?filename=trycss3_background-clip](http://www.runoob.com/try/try.php?filename=trycss3_background-clip "效果演示")

- background-attachment 设置图像是否固定或者随着页面的其余部分滚动

		语法：background-attachment:""
		js语法：object.object.style.backgroundAttachment=""
	
 	  values:

		1. scroll:背景图片随着页面的其余部分滚动，这是默认的
		2. fixed：背景图像是固定的
		3. inherit：该属性继承父元素的值
- background-image 指定要使用的一个或多个背景图像

		background-image属性设置一个元素的背景图像。
		元素的背景是元素的总大小，包括填充和边界（但不包括边距）
		默认情况下，background-image放置在元素的左上角，并重复垂直和书评方向。
		语法：background-image:url(),url(),...
		js语法：object.object.style.backgroundImage=""

[http://www.runoob.com/try/try.php?filename=trycss3_background_multiple](http://www.runoob.com/try/try.php?filename=trycss3_background_multiple "效果演示，示例代码")
	
#### 边框（Border）和轮廓（Outline）属性

> border 复合属性。设置对象边框的特性。（CSS1）


		缩写边框属性设置在一个声明中所有的边框属性。
		可以设置的属性分别是（按顺序）：border-width,border-style,和border-color.
		如果上述值缺少有个没有关系，是允许的。
		语法：border:5px solid red;
		js语法：object.object.style.border="3px solid blue"
- `border-width`：指定边框的宽度。

	`border-width属性设置一个元素的四个边框的宽度，因此该属性可以有1-4个值。`
		
		1. border-width:thin medium thick 10px:
			- 上边框是细边框
			- 有边框是中等边框
			- 下边框是粗边框
			- 右边框是10px宽的边框
		2. border-width:thin medium thick;
			- 上边框是细边框
			- 右边框和左边框是中等边框
			- 下边框是粗边框
		3. border-width:thin medium;
			- 上边框和下边框是细边框
			- 右边框和左边框师是中等边框
		4. border-width:thin;
			- 所有4个边框都是细边框
		
		`js语法：object.style.borderWidth="thin thick"`	
	- thin 定义细边框
	- medium 默认，定义中等边框
	- thick 定义粗的边框
	- length 允许自定义边框的宽度。
	- inherit 继承父元素的属性值
- `border-style` 指定边框的样式
			
	     border-style属性设置一个元素的四个边框的宽度，因此该属性可以有1-4个值。
		 1. border-style:dotted solid double dashed;
		   - 上边框是点状
           - 右边框是实线
           - 下边框是双线
           - 左边框是虚线
        2. border-style:dotted solid double;
           - 上边框是点状
           - 右边框和左边框是实线
           - 下边框是双线
        3. border-style:dotted solid;
           - 上边框和下边框是点状
           - 右边框和左边框是实线
        4. border-style:dotted;
           - 所有4个边框都是点状
      
		`js语法：object	object.style.borderStyle="dotted double"`
	1. none 定义无边框
	2. hidden 与“none”相同。不过应用于表时除外，对于表，hidden用于解决边框冲突 隐藏边框
	3. dotted 定义点状的边框，在大多数浏览器中呈现为实线
	4. dashed 定义虚线。在大多数浏览器呈现实线
	5. silid 定义实线
	6. double 定义双线，双线的宽度等于border-width的值
	7. groove 定义3D凹槽边框，其效果取决于border-color的值
	8. ridge 定义3D垄状边框，其效果取决于border-color的值
	9. inset 定义inset边框，其效果取决于border-color的值
	10. outset 定义outset边框，其效果取决于border-color的值
	11. inherit 继承父元素的属性值

 [http://www.runoob.com/try/try.php?filename=trycss_border-style](http://www.runoob.com/try/try.php?filename=trycss_border-style "效果演示")

- border-color 指定边框颜色

	    `border-color属性设置一个元素的四个边框颜色。此属性可以有一到四个值。`
		1. border-color:红，绿，蓝，粉红；
			- 上边框是红色
			- 右边框是绿色
			- 下边框是蓝色
			- 左边框是粉色
		2. border-color：红，绿，蓝；
			- 上边框是红色
			- 右边框和左边框是绿色
			- 下边框是蓝色
		3. border-color：红，绿；
			- 上边框和下边框是红色
			- 右边框设左边框是绿色
		4. border-color：红
			- 4个边框都是红色

		`js语法:object.object.style.borderColor="#FF0000 blue"`

	1. color： 指定背景颜色。任意颜色的形式均可
	2. transparent：指定边框的颜色是透明的，这是默认
	3. inherit： 指定边框的颜色，应该从父元素继承
	4. `inherit` 指定应该从父元素继承border的属性值
- 因为边框的特殊性（具有4个边框）所以属性也有了衍生
	1. border-bottom：复合属性。设置对象底部边框的的性
		- border-bottom-color：设置或检索对象的底部边框颜色
		- border-bottom-style：设置或检索对象的底部边框样式
		- border-bottom-width：设置或检索对象的底部边框宽度
	2. border-top:复合属性。设置对象顶部边框的的性
		- border-top-color：设置或检索对象的顶部边框颜色
		- border-top-style：设置或检索对象的顶部边框样式
		- border-top-width：设置或检索对象的顶部边框宽度
	3. border-left:复合属性。设置对象左边边框的的性
		- border-left-color：设置或检索对象的左边边框颜色
		- border-left-style：设置或检索对象的左边边框样式
		- border-left-width：设置或检索对象的左边边框宽度
	4. border-right:复合属性。设置对象右边边框的的性
		- border-right-color：设置或检索对象的右边边框颜色
		- border-right-style：设置或检索对象的右边边框样式
		- border-right-width：设置或检索对象的右边边框宽度
- outline 复合属性，设置或检索对象外的线条轮廓 （CSS2）

		outline(轮廓)是绘制于元素周围的一条线，位于边框边缘的外围，可以起到元素的作用。
		和border相似。不过只能同时设置四个边框不能分开设置
	[http://www.runoob.com/try/try.php?filename=trycss_outline-color](http://www.runoob.com/try/try.php?filename=trycss_outline-color "实例代码和运行效果")
> border-radius 复合属性，设置或检索对象的圆角边框。（CSS3）

	提供2个参数，2个阐述以空格为分隔，每个参数允许设置1个参数值，第一个参数表示水平半径，第二个参数表示垂直半径，如果第2个参数省略，则默认等于第一个参数。
	语法：border-radius: 1-4 length|% / 1-4 length|%;
	js语法：object.object.style.borderRadius="5px"
		
    1. length:定义左下角的形状，任意一个为0，则没有效果
	2.  %：使用%定义左下角的形状，水平半径的百分比是指边界框的宽度，而垂直半径的百分比是指边界框的高度。
- 因为角的特殊性所以衍生了其他的设置每个角的属性
	- border-bottom-left-radius 设置或检索对象的左下角圆角边框。
	- border-bottom-right-radius 设置或检索对象的右下角圆角边框。
	- border-top-left-radius 设置或检索对象的左上角圆角边框的形状。
	- border-top-right-radius 设置或检索对象右上角圆角边框的形状。
> border-image 设置或检索对象的边框样式使用图像来填充。（CSS3）

		border-image属性是速记属性用于设置：
			1.border-image-source
			2.border-image-slice
			3.border-image-width
			4.border-image-outset
			5.border-image-repeat
		如果有省略值，则设置为他们的默认值。
		提示：使用border-image-*属性可以来构建可扩展按钮。
		语法：border-image:none 100% 1 0 stretch;
		js语法：object.style.borderImage="url(border.png) 30 30 round"
- border-image-source 用于指定用来绘制边框的图像来源

		如果值为“none”或者如果无法显示图像，边框样式不会被使用
		语法：border-image-source: none|image;
		js语法：object.style.borderImageSource="url()"
- border-image-slice 属性指定图像的边界向内偏移

		此属性指定顶部，右部，底部，左边元的图像向内偏移，分为9个区域：4个角，4个边和中间。图像中间部分将被丢弃（完全透明的处理），除非填写关键字。
		如果省略第4个数字/百分比，他和第二个相同。
		如果省略第三个，他和第一个相同。
		如果省略了第二个，他和第一个相同。
		默认值：100%；
		语法：border-image-slice：number|%|fill；
		js语法：	object.style.borderImageSlice="50% 50%"
	1. number：数字表示图像的像素（位图图像）或向量的坐标（如果图像是矢量图像）。
	2. %：百分比图像的大小是相对的，水平偏移图像的宽度，垂直偏移图像的高度。
	3. fill：保留图像的中间部分。
- border-image-width 指定图像边界的宽度

		border-image -width的4个值指定用于把border图像区域分为九个部分。他们代表上，右，底部，左，两侧向内距离。
		如果第四个值被省略，它和第二个是相同的。
		如果也省略了第三个，它和第一个是相同的。
		如果也省略了第二个，它和第一个是相同的。负值是不允许的。
		默认值：1
		语法：border-image-width: number|%|auto;
		js语法：	object.style.borderImageWidth="30 30"
	1. number：表示响应恩德border-width的倍数
	2. %边界图像区域的大小：横向偏移的宽度的面积，垂直偏移的高度的面积。
	3. auto：如果指定了，宽度是相应的image slice的内在宽度或高度。
- border-image-outset 用于指定在边框外部绘制border-image-area的量

		 border-image-outset用于指定在边框外部绘制 border-image-area 的量。包括上下部和左右部分。
		 如果第四个值被省略，它和第二个是相同的。
		 如果也省略了第三个，它和第一个是相同的。
		 如果也省略了第二个，它和第一个是相同的。不允许border-im-outset拥有负值。
		 默认值：0
		 语法：border-image-outset: length|number;
		 js语法：object.style.borderImageOutset="30 30"
	1. length
	2. number：代表响应的border-width的倍数

- border-image-repeat 用于图像边界是否应重复（repeated）、拉伸（stretched）或铺满（rounded）。

		该属性规定如何延展和铺排边框图像的边缘和中间部分。因此，您可以规定两个值。如果省略第二个值，则采取与第一个值相同的值。
		默认值：stretch
		语法：border-image-repeat: stretch|repeat|round|initial|inherit;
		js语法：object.style.borderImageRepeat="round"
	1. stretch：默认值，拉伸图像来填充区域。
	2. repeat：平铺图像来填充区域。
	3. round：类似repeat值，如果无法完整平铺所有图像，则对图像进行缩放以适应区域。
	4. space：类似repeat值，如果无法完整平铺所有图像，扩展空间会分布在图像周围。
	5. initial：将此属性设置为默认值。
	6. inherit：从父元素继承该属性。
[http://www.runoob.com/try/playit.php?f=playcss_border-image-repeat&preval=stretch](http://www.runoob.com/try/playit.php?f=playcss_border-image-repeat&preval=stretch "效果演示")

> box-shadow 向方框添加一个或多个阴影

		box-shadow属性把一个或多个下拉阴影添加到框上。该属性是用一个逗号分隔阴影的列表，每一个阴影由2-4个长度值，一个可选的颜色值和一个可选的inset关键字来规定，省略长度的值是0。
		语法：box-shadow: h-shadow v-shadow blur spread color inset;
		事例：box-shadow: 10px 10px 5px #888888,100px 100px 50px #8ff8ff;
		js语法：	object.style.boxShadow="10px 10px 5px #888888"
   - 
	1. h-shadow:必须得，水平阴影的位置。允许负值
	2. v-shadow:必需的，垂直阴影的位置。允许负值
	3. blur：可选，模糊距离
	4. spread：可选，阴影的大小
	5. color：可选，阴影的颜色
	6. inset：可选，从外层的阴影（开始时）改变阴影内侧阴影

####盒子（box）属性
