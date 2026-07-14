class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operands = [];
        let a, b;

        for (let i = 0; i < tokens.length; i++) {
            switch (tokens[i]) {
                case '+':
                    a = operands.pop();
                    b = operands.pop();
                    operands.push(b + a);
                    break;
                case '-':
                    a = operands.pop();
                    b = operands.pop();
                    operands.push(b - a);
                    break;
                case '*':
                    a = operands.pop();
                    b = operands.pop();
                    operands.push(b * a);
                    break;
                case '/':
                    a = operands.pop();
                    b = operands.pop();
                    operands.push(Math.trunc(b / a)); // truncate toward zero
                    break;
                default:
                    operands.push(Number(tokens[i]));
                    break;
            }
        }

        return operands.pop();
    }
}