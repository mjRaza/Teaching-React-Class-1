import React from "react";

const IncomeExpense = ({ income, expense }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "30%" }}>
      <div style={{ background: "green" }}>
        <div>INCOME</div>
        <div>+${income}</div>
      </div>
      <div style={{ background: "red" }}>
        <div>Expense</div>
        <div>-${expense}</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
