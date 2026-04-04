import { createContext, useState, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "Apr 2, 2026", desc: "Uber Ride", category: "Transport", type: "expense", amount: 250 },
    { id: 2, date: "Apr 1, 2026", desc: "Salary", category: "Salary", type: "income", amount: 50000 },
    { id: 3, date: "Mar 28, 2026", desc: "Groceries", category: "Food", type: "expense", amount: 1200 },
    { id: 4, date: "Mar 25, 2026", desc: "Freelance Project", category: "Business", type: "income", amount: 8000 },
    { id: 5, date: "Mar 20, 2026", desc: "Electricity Bill", category: "Bills", type: "expense", amount: 1500 },
    { id: 6, date: "Mar 18, 2026", desc: "Netflix", category: "Entertainment", type: "expense", amount: 499 },
  ]);

  
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    const unique = new Set(transactions.map((t) => t.category));
    return ["all", ...unique];
  }, [transactions]);

  const stats = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((a, b) => a + b.amount, 0);

    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((a, b) => a + b.amount, 0);

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        transactions,
        setTransactions,

        
        search,
        setSearch,
        type,
        setType,
        category,
        setCategory,

        categories,
        stats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};