function regexsum(exp) {
    var pattern=/^(\d+)([\+\-\*\-]){1}(\d+)$/;

    if(pattern.test(exp)) {
        var numbers=exp.match(pattern);
        var a=parseInt(numbers[1]);
        var b=parseInt(numbers[3]);
        var c=numbers[2];

        return eval(a+c+b);
    }
    return null;
}