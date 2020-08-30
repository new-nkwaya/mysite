function calculator(num1,num2,op) {
    let num3 = 0;
    switch (op){
      case '+':
        num3 = num1 + num2;
        return num3;
      case '-' :
        num3 = num1 - num2;
        return num3;
      case '*':
        num3 = num1 * num2;
        return num3;
      case '/':
        num3 = num1 / num2;
        return num3;
      default:
        return "Unknown operator";
       
    }
  }
  calculator(20,5,'/');
