import { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [output, setOutput] = useState("");

  function handleInput(e) {
    setOutput(output.concat(e.target.value));
  }

  function clearInput() {
    setOutput("");
  }

  function handleChange(e) {
    setOutput(e.target.value);
  }

  function getOutput() {
    var ans = 0;
    var calc = "";
    var numbers = [];
    var symbols = [];

    for (var i = 0; i < output.length; i++) {
      var char = output.charAt(i);
      if (char <= 9 && char >= 0) {
        calc += char;
      }
      if (char === "+" || char === "-" || char === "*" || char === "/") {
        numbers.push(parseInt(calc, 10));
        calc = "";
        symbols.push(char);
      }
    }
    numbers.push(parseInt(calc, 10));

    ans += numbers[0];
    var k = 0;

    for (var j = 1; j < numbers.length; j++) {
      switch (symbols[k]) {
        case "+":
          ans += numbers[j];
          break;
        case "-":
          ans -= numbers[j];
          break;
        case "*":
          ans *= numbers[j];
          break;
        case "/":
          ans /= numbers[j];
          break;
        default:
          return "Invalid";
      }
      k++;
    }
    setOutput(ans);
  }

  return (
    <div className="calc">
      <h4 className="heading"> Simple Calculator </h4>
      <input
        className="ans"
        type="text"
        value={output}
        onChange={handleChange}
      />

      <div className="row1">
        <button className="button" value="9" onClick={handleInput}>
          9
        </button>
        <button className="button" value="8" onClick={handleInput}>
          8
        </button>
        <button className="button" value="7" onClick={handleInput}>
          7
        </button>
        <button className="button" value="*" onClick={handleInput}>
          x
        </button>
      </div>
      <div className="row2">
        <button className="button" value="6" onClick={handleInput}>
          6
        </button>
        <button className="button" value="5" onClick={handleInput}>
          5
        </button>
        <button className="button" value="4" onClick={handleInput}>
          4
        </button>
        <button className="button" value="/" onClick={handleInput}>
          /
        </button>
      </div>
      <div className="row3">
        <button className="button" value="3" onClick={handleInput}>
          3
        </button>
        <button className="button" value="2" onClick={handleInput}>
          2
        </button>
        <button className="button" value="1" onClick={handleInput}>
          1
        </button>
        <button className="button" value="=" onClick={getOutput}>
          =
        </button>
      </div>

      <div className="row4">
        <button className="button" value="+" onClick={handleInput}>
          +
        </button>
        <button className="button" value="0" onClick={handleInput}>
          0
        </button>
        <button className="button" value="-" onClick={handleInput}>
          -
        </button>
        <button className="button" value="clear" onClick={clearInput}>
          Cl
        </button>
      </div>
    </div>
  );
}

export default Calculator;
