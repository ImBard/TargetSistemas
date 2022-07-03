import { Route, Routes } from "react-router-dom";
import { Fibonacci } from "./pages/Fibonacci";
import { Billing } from "./pages/Billing";
import { Home } from "./pages/Home";
import { Reverse } from "./pages/Reverse";
import { Percentual } from "./pages/Percentual";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fibonacci" element={<Fibonacci />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/reverse" element={<Reverse />} />
      <Route path="/percentual" element={<Percentual />} />
    </Routes>
  )
}