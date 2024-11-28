import { Hono } from "hono";

type Expense = {
  id: number;
  title: string;
  amount: number;
};
const fakeExpenses: Expense[] = [
  {
    id: 1,
    title: "Groceries",
    amount: 10,
  },
  {
    id: 2,
    title: "Utilities",
    amount: 20,
  },
  {
    id: 3,
    title: "Rent",
    amount: 1000,
  },
];

export const expensesRoute = new Hono()
  .get("/", async (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const expense = await c.req.json();
    console.log({ expense });
    return c.json(expense);
  });
