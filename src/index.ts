import { Hono } from "hono";
import { expensesRoute } from "./routes/expenses";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => {
  return c.text("Hello from Expense Tracker!");
});
app.route("/api/expenses", expensesRoute);

export default app;
