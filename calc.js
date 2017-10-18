    var results="";   //输入的字符串
    var calresults="";  //显示的计算结果
    var lastkey="";   //最后一次输入的字符
    var re1=/^[\*|\/].+/;   //正则匹配第一个是运算符
    var re2=/.+[\*|\/]$/;   //正则匹配最后一个运算符
    var re3=/(\+|-|\*|\/|\.)/;  //匹配运算符
    //计算
    function calculater () {
        if (event.srcElement.innerText=="=") {     //“=”输出显示结果
            return;
        }
        if (event.srcElement.innerText=="c") {    //显示清零
            results="";
            display.innerText="0";
            return;
        }
        if(event.srcElement.innerText=="ce"){    //删除最后一个输入字符
        	results=results.substring(0,results.length-1);
        	display.innerText=results;
        	return;
        }
         if(event.srcElement.innerText=="二"){    //二进制转换
         	(function (){
         		 let num=results;
                 let arr=new Array();
                 let i;
                 let ssum="";
                 for(i=0;1;i++){
                 	if(num/2>=1){
                 		arr[i]=num%2;
                 		num=parseInt(num/2)
                 	}
                 	else{
                 		arr[i]=1;
                 		break;
                 	}
                 }
                 for(i=arr.length;i>0;i--){
                 	num=arr[i-1];
                 	ssum+=num;
                 } 
                 results=ssum;                
         	})();
         	display.innerText=results;
         	return ;
         }
        if(event.srcElement.innerText=="十六"){
        	results=Number(results).toString(16);
        	display.innerText=results;
        	return;
        }


        if (results.match(re1)) {
         display.innerText="输入错误";
         results="";
         return;
      }
        if(lastkey.match(re3)&&event.srcElement.innerText.match(re3)){
            return;
        }
        if(lastkey=="="&&event.srcElement.innerText.match(re3)){
           results=calresults;
        }
       
       results+=event.srcElement.innerText;
       lastkey=event.srcElement.innerText;
       display.innerText=results;
          }
   //输出       
function calcresult(){    
      if(results.match(re1)||results.match(re2)){
      	display.innerText="不符合计算要求";
      	results="";
      	return;
      }
      lastkey="=";
	  calresults=eval(results);
      display.innerText=calresults;
      
}
