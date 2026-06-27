import './App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import HomeworkLayout from "./components/HomeworkLayout";
import TripCalculator from "./components/homework1/TripCalculator";
import SeasonalStyle from "./components/homework1/SeasonalStyle";
import RandomNumberGenerator
  from "./components/homework1/RandomNumberGenerator";
import BankAccount from "./components/homework1/BankAccount";
import LoginForm from "./components/homework2/LoginForm";


function App() {
  const homework1Tasks = [
    TripCalculator,
    SeasonalStyle,
    RandomNumberGenerator,
    BankAccount,
    () => <div>Task 1.5 has not yet been done</div>,
  ];

  const homework2Tasks = [
    LoginForm,
  ];

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/homework1"
          element={<HomeworkLayout
            title="Homework №1"
            tasks={homework1Tasks}
          />}
        />
        <Route
          path="/homework2"
          element={<HomeworkLayout
            title="Homework №2"
            tasks={homework2Tasks}
          />}
        />
      </Routes>
    </HashRouter>
  )
}

export default App
