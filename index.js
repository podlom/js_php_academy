
//1
var timer=new Timer('output');
document.getElementById('start').onclick=function () {
    timer.start();
};
document.getElementById('stop').onclick=function () {
    var mode=document.getElementById('stop').innerHTML;
    if(mode==='Stop'){
        timer.stopTimer();
        document.getElementById('stop').innerHTML='Resume';
    }
    else{
        timer.resumeTimer();

        document.getElementById('stop').innerHTML='Stop';

    }
};
document.getElementById('drop').onclick=function () {
    timer.drop();
};
//2

getSumFromUri('result');

//3
// alert(document.getElementById('exp'));
document.getElementById('exp').addEventListener('change',function () {
   var exp=document.getElementById('exp').value;
   var result=0;
   if(result=regexsum(exp)){
      document.getElementById('result3').innerText=result;

   }
});