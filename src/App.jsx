import * as Pages from "./pages";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.Cart />} />
        <Route path="checkout" element={<Pages.Checkout />} />
        <Route path="*" element={<Pages.NotFound />} />
      </Route>
    </Routes>
  );
}


export default App
