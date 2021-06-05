import { Button, TextField } from "@material-ui/core";
import React from "react";

const Transactions = ({ meraFunctionHai }) => {
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  return (
    <div>
      <h6>Text</h6>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <h6>Amount</h6>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div>
        <Button onClick={() => meraFunctionHai(text, amount)}>
          Add Transactions
        </Button>
      </div>
    </div>
  );
};

export default Transactions;
