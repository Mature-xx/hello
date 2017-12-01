# css垂直居中
		  
   对于水平居中：

 * 如果其为一个行内元素，就对他的父元素使用`text-align:center`
 * 如果它是一个块级元素，就对他使用`margin:auto`

对于垂直居中:
 
  * 表格布局法   
  * 行内块法
  * 对于有固定宽高的元素：
	  
		绝对定位：
		div{
	         position:absolute;
             	 top:50%;
                 left:50%;
	         margin-top:-3em;
                 margin-left:-9em;
                 width:18em;
                 height:6em;
	    }(移动距离相当于它自身宽高的一半)
        借助函数还可以简化为：
          top:calc(50%-3em);
          left:cals(50%-9em);
  
  * 当没有固定尺寸时，可以使用translate()变形函数
  	
		{
          	top:50%;
          	left:50%;(仅有此也可水平居中，translateX（-50%），top同理)
          	transform:translate(-50%,-50%);
        }

 * 基于视口单位的解决方案（因margin百分比值是以父元素的宽度作为解析标准）
 
		vw为视口宽度相关，1vw为视口宽度的1%;
        vh同理
        {
           margin:50vh auto 0;
           transform:translateY(-50%);     
           }

* 最简单 flex布局实现
    
		  body
		{
          	display:flex;
          	min-height:100vh;
		 margin:0;
		}
		div{
      	 	margin:auto;(水平垂直 同时居中)
		}

		根据flex也可以实现内部文本的居中
		{
         	 display:flex;
		  alien-items:center;
		  justify-content:center;
		}



##解决inline的空隙##

display：inline-block的元素之间会有一个字符的间隙，这个间隙导致了最后一个会掉下来。

解决方法：
1、给父元素设置font-size：0px；

2、取消掉换行符，如这样：`<span>aaaa</span><span>aaaa</span><span>aaaa</span>连续`。

或者
			
		<div class="space">
    <a href="##">惆怅</a><!--
    --><a href="##">淡定</a><!--
    --><a href="##">热血</a>
		</div>

		<div class="space">
    <a href="##">惆怅</a
    ><a href="##">淡定</a
    ><a href="##">热血</a>
		</div>

3、使用margin负值。

4、使用浮动。

5、另外还有使用letter-spacing、word-spacing等方法。
		
      
