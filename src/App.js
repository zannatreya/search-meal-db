import "./App.css";
import Restaurant from "./Components/Restaurant/Restaurant";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import MealDetails from "./Components/MealDetails/MealDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/meal/:mealId" element={<MealDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
