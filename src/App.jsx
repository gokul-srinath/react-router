import { Link, Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="invoices">Invoices</Link> | {" "}
        <Link to="expenses">Expenses</Link>
      </nav>
      <div>
        <Outlet/>
      </div>

    </div>
  );
}

export default App;
