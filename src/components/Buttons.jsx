const Buttons = (props) => {
  const { calc, setCalc } = props;

  function buttonHandler(num) {
    if (calc === "0") {
      setCalc(num);
    } else {
      setCalc((prev) => prev + num);
    }
  }

  function operatorHandler(operator) {
    if (calc === "0") {
      setCalc("0");
    } else {
      setCalc((prev) => prev + operator);
    }
  }

  return (
    <div className="button-container">
      <div className="common-key" onClick={() => buttonHandler("7")}>
        7
      </div>
      <div className="common-key" onClick={() => buttonHandler("8")}>
        8
      </div>
      <div className="common-key" onClick={() => buttonHandler("9")}>
        9
      </div>
      <div
        className="del"
        onClick={() => {
          if (String(calc)[1] === undefined) {
            setCalc("0");
          } else {
            setCalc((prev) => String(prev).slice(0, -1));
          }
        }}
      >
        DEL
      </div>
      <div className="common-key" onClick={() => buttonHandler("4")}>
        4
      </div>
      <div className="common-key" onClick={() => buttonHandler("5")}>
        5
      </div>
      <div className="common-key" onClick={() => buttonHandler("6")}>
        6
      </div>
      <div className="common-key" onClick={() => operatorHandler("+")}>
        +
      </div>
      <div className="common-key" onClick={() => buttonHandler("1")}>
        1
      </div>
      <div className="common-key" onClick={() => buttonHandler("2")}>
        2
      </div>
      <div className="common-key" onClick={() => buttonHandler("3")}>
        3
      </div>
      <div className="common-key" onClick={() => operatorHandler("-")}>
        -
      </div>
      <div className="common-key" onClick={() => buttonHandler(".")}>
        .
      </div>
      <div className="common-key" onClick={() => buttonHandler("0")}>
        0
      </div>
      <div className="common-key" onClick={() => operatorHandler("/")}>
        /
      </div>
      <div className="common-key" onClick={() => operatorHandler("*")}>
        x
      </div>
      <div className="reset" onClick={() => setCalc("0")}>
        RESET
      </div>
      <div className="equals" onClick={() => setCalc(eval(calc))}>
        =
      </div>
    </div>
  );
};

export default Buttons;
