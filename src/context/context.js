import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
	const [transactions, dispatch] = useReducer(contextReducer, initialState);

	//Action creators
	const deleteTransaction = (id) => {
		dispatch({ type: "DELETE_TRANSACTION", payload: id });
	};
	const addTrannsaction = (transaction) => {
		dispatch({ type: "ADD_TRANSACTION", payload: transaction });
	};

	return (
		<ExpenseTrackerContext.Provider
			value={{
				deleteTransaction,
				addTrannsaction,
			}}>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
