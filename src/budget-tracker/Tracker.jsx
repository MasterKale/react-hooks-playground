import React, { useContext, useEffect } from 'react';

import './tracker.css';
import { AccountContext } from './contexts/AccountProvider';
import InlineEditor from './components/InlineEditor';

const formatBudget = budget => `$${(budget / 100).toFixed(2)}`;

const Tracker = props => {
  const { state, dispatch } = useContext(AccountContext);

  const {
    accountName,
    transactions,
    budget
  } = state;

  const {
    setAccountName,
    getTransactions,
    setBudget
  } = dispatch;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <React.Fragment>
      <h2>
        Account Name:&nbsp;
        <InlineEditor
          value={accountName}
          onChange={setAccountName}
          name='name'
        />
      </h2>
      <h3>
        Budget:&nbsp;
        <InlineEditor
          value={budget}
          onChange={setBudget}
          name='budget'
          type='number'
          formatDisplay={formatBudget}
        />
      </h3>
      <h3>Transactions:</h3>
      <ul>
        {transactions.map((trans, index) => (
          <li>{index}. {trans.date}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Tracker;
