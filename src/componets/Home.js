import { Button } from "@material-ui/core";
import React, { useState } from "react";
import History from "./History";
import IncomeExpense from "./IncomeExpense";
import ShowBalacnce from "./ShowBalacnce";
import Transactions from "./Transactions";

const Home = () => {
  const [showTransButton, setShowTransButton] = React.useState(false);

  const [trans, setTrans] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const getTransactions = (text, amount) => {
    amount > 0
      ? setIncome((prevState) => prevState + amount)
      : setExpense((prevState) => prevState + amount);
    setTrans((prev) => [...prev, { text, amount }]);
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Expense Tracker</h1>
      <ShowBalacnce />
      <IncomeExpense income={income} expense={expense} />
      <History transactions={trans} />
      <Button onClick={() => setShowTransButton((prevState) => !prevState)}>
        Add new transaction
      </Button>

      {showTransButton && <Transactions meraFunctionHai={getTransactions} />}
    </div>
  );
};

export default Home;
