import React, { useReducer } from 'react';

export const AccountContext = React.createContext('account-provider');
const { Provider } = AccountContext;

const defaultValues = {
  accountName: 'Default Account Name',
  transactions: [],
  budget: 1000,
};

const ACTION_TYPES = {
  SET_ACCOUNT_NAME: 'setAccountName',
  SET_TRANSACTIONS: 'setTransactions',
  ADD_TRANSACTION: 'addTransaction',
  REMOVE_TRANSACTION: 'removeTransaction',
  SET_BUDGET: 'setBudget',
};

/**
 * START ACTIONS
 */

const setAccountNameAction = accountName => ({
  type: ACTION_TYPES.SET_ACCOUNT_NAME,
  payload: { accountName },
});

const setTransactionsAction = transactions => ({
  type: ACTION_TYPES.SET_TRANSACTIONS,
  payload: { transactions },
});

const addTransactionAction = transaction => ({
  type: ACTION_TYPES.ADD_TRANSACTION,
  payload: { transaction },
});

const removeTransactionAction = transaction => ({
  type: ACTION_TYPES.REMOVE_TRANSACTION,
  payload: { transaction },
});

const setBudgetAction = budget => ({
  type: ACTION_TYPES.SET_BUDGET,
  payload: { budget },
});

/**
 * END ACTIONS
 */

/**
 * START METHODS
 */

const getTransactions = (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transactions = [];
      dispatch(setTransactionsAction(transactions));
      resolve(transactions);
    }, 500);
  });
};

 /**
  * END METHODS
  */

/**
 * START REDUCER
 */

const AccountProvider = props => {
  const [account = defaultValues, dispatch] = useReducer((state, action) => {
    const { payload } = action;
    switch(action.type) {
      case ACTION_TYPES.SET_ACCOUNT_NAME:
        return {
          ...state,
          accountName: payload.accountName,
        };
      case ACTION_TYPES.SET_TRANSACTIONS:
        return {
          ...state,
          transactions: payload.transactions,
        };
      case ACTION_TYPES.ADD_TRANSACTION: {
        const { transactions } = state;

        transactions.push(payload.transaction);

        return state;
      }
      case ACTION_TYPES.REMOVE_TRANSACTION: {
        const { transactions } = state;
        const toRemove = payload.transaction;
        const toRemoveIndex = transactions.indexOf(toRemove);

        if (toRemoveIndex >= 0) {
          transactions.splice(toRemoveIndex, 1);
        }

        return state;
      }
      case ACTION_TYPES.SET_BUDGET: {
        let newBudget = parseInt(payload.budget, 10);
        if (newBudget < 0) {
          newBudget = 0;
        }

        return {
          ...state,
          budget: newBudget,
        };
      }
      default:
        return state;
    }
  }, defaultValues);

  return (
    <Provider
      {...props}
      value={{
        state: account,
        dispatch: {
          setAccountName: name => dispatch(setAccountNameAction(name)),
          getTransactions: () => getTransactions(dispatch),
          addTransaction: transaction => dispatch(addTransactionAction(transaction)),
          removeTransaction: transaction => dispatch(removeTransactionAction(transaction)),
          setBudget: budget => dispatch(setBudgetAction(budget)),
        },
      }}
    />
  );
};

export default AccountProvider;
