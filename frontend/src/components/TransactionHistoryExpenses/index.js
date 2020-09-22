import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import deleteTransactionStarted from '../../redux/actions/deleteTransaction/deleteTransactionStarted';

function TransactionsHistoryExpense({ id }) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user._id);
  const transactions = useSelector(state => state.transactions);
  const store = useSelector(state => state.categories);
  const transaction = transactions.filter(transaction => {
    return transaction._id === id;
  })[0];
  const [prettyTime, setPrettyTime] = useState('');
  const [nameFrom, setNameFrom] = useState(null);
  useEffect(() => {
    setPrettyTime(new Date(transaction.time).toLocaleString());
    setNameFrom(
      store.filter(category => {
        return category.id === transaction.from;
      })[0]
    );
  }, []);
  console.log(
    userId,
    transaction._id,
    transaction.from,
    transaction.to,
    transaction.amount
  );
  function handleClick() {
    dispatch(
      deleteTransactionStarted(
        userId,
        transaction._id,
        transaction.from,
        transaction.to,
        transaction.amount
      )
    );
  }

  return (
    <span>
      <div style={{ display: 'flex' }}>
        <h2 style={{ margin: '20px' }}>
          ${transaction && transaction.amount}{' '}
        </h2>
        <h2 style={{ margin: '20px' }}> From {nameFrom && nameFrom.name} </h2>
        <h2 style={{ margin: '20px' }}>At time: {prettyTime && prettyTime}</h2>
        <button onClick={handleClick}>Удалить</button>
      </div>
    </span>
  );
}

export default TransactionsHistoryExpense;
