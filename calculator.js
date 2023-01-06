const oper = {
    sum: '+',
    substract: '-',
    mul: '*',
    division: '/'
}

function calculate({a, b, opera}){
    let result = null;
    switch(opera){
        case oper.sum:
            result = sum(a, b);
            break;
        case oper.substract:
            result = substract(a, b);
            break;
        case oper.mul:
            result = mul(a, b);
            break;
        case oper.division:
            result = division(a, b);
            break;
        default:
            break;    
    }
    return result;
}