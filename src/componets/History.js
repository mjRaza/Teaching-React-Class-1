import React from 'react'

const History = ({ transactions }) => {
    console.log(transactions)
    return (
        <div style={{ display: "flex", flexDirection: "column", width: '20%', justifyContent: "space-between" }}>
            {transactions.map((x) => (<div style={{ backgroundColor: `${x.amount > 0 ? "blue" : "brown"}` }} >{x.text}  - {x.amount}</div>))}
        </div>
    )
}

export default History
