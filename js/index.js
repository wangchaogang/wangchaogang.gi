body.style.height = window.innerHeight+'px'

names.onclick= function(){
	text.innerHTML = "姓名：王超岗<br>性别：男<br>年龄：20<br>职业：web前端工程师<br>QQ：765483472<br> 性格：活泼开朗，乐于助人。 <br>自我介绍：喜欢唱歌、画画、并且有很高的天赋，活泼开朗，无不良嗜好，有很高的社会适应能力"
}
 var dax = text.getElementsByTagName('div')
 for(var i=0;i<dax.length;i++){
 	dax[i].style.top = hans(1,30)+'%'
 	dax[i].style.left = hans(1,30)+'%'
 	dax[i].style.transform = 'rotate('+hans(1,360)+'deg)'
 }
function hans(a,b){
	return parseInt(Math.random()*(b-a)+b)
}
var left = 0;
var top = 0
for(var i=0;i<dax.length;i++){
   	dax[i].addEventListener('touchstart',function(){
   		left = event.touches[0].clientX-this.offsetLeft;
   		top = event.touches[0].clientY-this.offsetTop;
   		
   	},false)
      
 	dax[i].addEventListener('touchmove',function(){
 		lefts = event.touches[0].clientX;
 		tops = event.touches[0].clientY;
 		this.style.top = tops+'px'
 		this.style.left = lefts+'px'

 	},false)

 }
