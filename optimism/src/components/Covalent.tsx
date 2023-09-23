// Your frontend component

import React, { useEffect, useState } from 'react';

const TransactionsComponent = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchContractTransactions = async () => {
    const headers = new Headers();
    headers.set('Authorization', 'Bearer cqt_rQ8WcHrkwv7HQV7t8vKypQRkYmK3');

    const response = await fetch(
      'https://api.covalenthq.com/v1/optimism-goerli/address/0xe2D3C55a61BE30ce58324Be5bd188F1bEAc06f58/transactions_v3/?',
      { method: 'GET', headers: headers }
    );

    const data = await response.json();
    return data.data.items;
  };

  useEffect(() => {
    fetchContractTransactions()
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h2>Contract Transaction</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            Transaction Hash: {transaction.tx_hash}
            {/* Display other transaction details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsComponent;
