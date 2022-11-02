
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SharedLayout from "./component/Shared/SharedLayout";
import Dashboard from "./component/pages/Dashboard"
import Products from "./component/pages/Products"
import Customers from "./component/pages/Customers"
import Orders from "./component/pages/Orders"
import Transaction from "./component/pages/Transactions"
import Message from "./component/pages/Messages"
import Settings from "./component/pages/Settings";
import Profile from "./component/pages/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Orders />} />
          <Route path="product" element={<Products />} />
          <Route path="customer" element={<Customers />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="message" element={<Message />} />
          <Route path="setting" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

