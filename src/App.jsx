import './App.css'
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import HomeworkLayout from "./components/HomeworkLayout";
import TripCalculator from "./components/homework1/TripCalculator";
import SeasonalStyle from "./components/homework1/SeasonalStyle";
import RandomNumberGenerator
  from "./components/homework1/RandomNumberGenerator";
import BankAccount from "./components/homework1/BankAccount";
import UserAuthenticator from "./components/homework1/UserAuthenticator";
import LoginForm from "./components/homework2/LoginForm";
import FlightServiceSelector
  from "./components/homework2/FlightServiceSelector";
import VocabularyTrainer from "./components/homework2/VocabularyTrainer";
import WorkersSalaryList from "./components/homework2/WorkersSalaryList";
import SearchResults from "./components/homework2/SearchResults";
import KitchenKanbanBoard from "./components/homework2/KitchenKanbanBoard";
import SmConverter from "./components/homework3/SmConverter";
import TemperatureColorMapper
  from "./components/homework3/TemperatureColorMapper";
import Saper from "./components/homework3/Saper";


function App() {
  const homework1Tasks = [
    TripCalculator,
    SeasonalStyle,
    RandomNumberGenerator,
    BankAccount,
    UserAuthenticator
  ];

  const homework2Tasks = [
    LoginForm,
    FlightServiceSelector,
    VocabularyTrainer,
    WorkersSalaryList,
    SearchResults,
    KitchenKanbanBoard
  ];

  const homework3Tasks = [
    SmConverter,
    TemperatureColorMapper,
    Saper
  ]

  const homework4Tasks = [
    () => {
      'HomeWork 4 Task 1'
    },
  ]

  const homework5Tasks = [
    () => {
      'HomeWork 5 Task 1'
    },
  ]

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
        <Route
          path="/homework3"
          element={<HomeworkLayout
            title="Homework №3"
            tasks={homework3Tasks}
          />}
        />
        <Route
          path="/homework4"
          element={<HomeworkLayout
            title="Homework №4"
            tasks={homework4Tasks}
          />}
        />
        <Route
          path="/homework5"
          element={<HomeworkLayout
            title="Homework №5"
            tasks={homework5Tasks}
          />}
        />
      </Routes>
    </HashRouter>
  )
}

export default App
