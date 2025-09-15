function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Không thể chia cho 0.");
  return a / b;
}

function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
function sqrt(base: number, root: number): number {
  if (root === 0) throw new Error("Không thể căn bậc 0.");
  return Math.pow(base, 1 / root);
}
function factorial(n: number): number {
  if (n < 0) throw new Error("Không tính giai thừa số âm.");
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

function handleOperation(op: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const resultDisplay = document.getElementById("result") as HTMLElement;

  let num1 = Number(input1);
  let num2 = Number(input2);

  if (isNaN(num1) || (op !== "!" && isNaN(num2))) {
    resultDisplay.innerText = "Kết quả: Lỗi - Vui lòng nhập số hợp lệ.";
    return;
  }

  try {
    let result: number;

    switch (op) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      case "^":
        result = power(num1, num2);
        break;
      case "√":
        result = sqrt(num1, num2);
        break;
      case "!":
        result = factorial(num1);
        break;
      default:
        throw new Error("Phép toán không hợp lệ.");
    }

    resultDisplay.innerText = `Kết quả: ${result}`;
  } catch (err: any) {
    resultDisplay.innerText = `Kết quả: Lỗi - ${err.message}`;
  }
}

(window as any).handleOperation = handleOperation;

