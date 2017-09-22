function Timer(output) {
  this.hour=0;
  this.minute=0;
  this.second=0;

  this.stop=false;
  this.output=output;
}

//output in element

//start counting

Timer.prototype.drop=function(){
    this.hour=this.second=this.minute=0;
    this.stop=true;
    this.printIntoOutput();
};
Timer.prototype.start=function(){

    var that=this;
    this.stop=false;
    setInterval(function () {
        if(that.stop===false){
            if (that.second >= 60) {
                that.second = 0;
                if (that.minute >= 60) {
                    that.second = 0;
                    that.minute=0;
                    that.hour++;
                }
                if (that.hour >= 24) {
                    that.drop();
                    return;
                }
                that.minute++;
            }
            that.printIntoOutput();
            //last and first second are not noticed
            that.second++;
        }
    },1000);
};
Timer.prototype.stopTimer=function () {
    this.stop=true;
};
Timer.prototype.resumeTimer=function () {
    this.stop=false;
};
Timer.prototype.printIntoOutput=function(){
    var output=pad(this.hour,2,'0')+':'+pad(this.minute,2,'0')+':'+pad(this.second,2,'0');

    document.getElementById(this.output).innerHTML=output;
};
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}