function getSumFromUri(output) {
    var uri=location.href;
    var pointOfStart=uri.indexOf('?');
    if(pointOfStart<0){
        return;
    }
    var argString=uri.substr(pointOfStart+1);
    var args=argString.split('&');
    var aName=args[0].split('=')[0];
    var aVal=args[0].split('=')[1];
    var bName=args[1].split('=')[0];
    var bVal=args[1].split('=')[1];

    if(aName && bName && aVal && bVal){
        var suma= sum(parseInt(aVal),parseInt(bVal));
        printIntoDOM(output,suma);
    }


}
function sum(aVal,bVal) {
    return aVal+bVal;
}
function printIntoDOM(output,string) {
    document.getElementById(output).innerHTML=string;
}