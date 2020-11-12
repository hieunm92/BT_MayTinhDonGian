let num1, num2;
let cal;
function addNum(num) {
    document.getElementById('srceen').value += num;
}
function pheptinh(A){
    if (A!=='=') cal = A;
    if (A === '=') {
        let arr = document.getElementById('srceen').value.split(cal);
        num1 = +arr[0]
        num2 = +arr[1];
        switch (cal){
            case '+':
                alert(num1+num2);
                break;
            case '*':
                alert(num1*num2);
                break;
            case '-':
                alert(num1-num2);
                break;
            case '/':
                alert(num1/num2);
                break;
        }
    }
    document.getElementById('srceen').value += A;
}