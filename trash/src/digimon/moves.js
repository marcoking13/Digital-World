function ShadowArsenal(btarget,ztarget,color,time){
  console.log(ztarget);
  var space = 2;
  space = space * 1000;
  changebackground(btarget,color,time);
  animate(ztarget,"./images/darkness.jpg","dark","./audio/dexplosion.wav");
  setTimeout(()=>{
    animate(ztarget,"./images/shadow.gif","shadow","./audio/dexplosion.wav");
  },time);
  setTimeout(()=>{
    animate(ztarget,"./images/dblast.gif","eblast","./audio/dexplosion.wav");
  },time+space);
  setTimeout(()=>{
    remove(".move");
  },time+(space*2));
}

function Spark(btarget,ztarget,color,time){
  changebackground(btarget,"black",time);
  setTimeout(()=>{
    animate(ztarget,"./images/spark.gif","spark","./audio/spark.wav");
  },time);
  setTimeout(()=>{
    remove(".move");
    var audio = document.querySelector(".audi");
    audio.pause();
},time*4)
}

function Bubble(btarget,ztarget,color,time){
  console.log(true);
  animate(ztarget,"./images/bubble.gif","bubble","./audio/bubbles.wav");
  setTimeout(()=>{
    remove(".move");
  },time)
}

function remove(target){
  $(target).remove();
}

function changebackground(target,color,time){

  $(target).animate({
    backgroundColor:color
  },time);
}

function animate(target,image,className,mp3,atype){
  $(".move").remove();
  $(".audi").empty();

  var audio = new Audio(mp3);
  audio.play();
  $("<img>").attr("src",image).addClass("move "+className).appendTo(target);
}
function multianimate(target,image,className,k){
  var positions = ["bubble m","bubble l","bubble r"];
  for (var i =0; i<positions.length; i++){
    console.log("..")
    animate(target,image,positions[i]);

  }
}
var audio = document.querySelector(".audi2");
$(document).on("click",()=>{
  audio.play();
})
$(".col-2").on("click",(event)=>{
  var target = event.target.classList.value;
  target = target.split("col-2 ");
  target = "."+target[1];
   //ShadowArsenal(".l",target,"black",2000);
   //Spark(".l",target,"black",1000);
 //Bubble(null,target,null,3000);
});
export default ShadowArsenal;
