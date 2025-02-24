import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './component/HomePage';
import BusinessPage from './component/BusinessPage';
import NoMatch from './component/pages/NoMatch.jsx';
import DirectPage from './component/DirectPage';

// import Form from './component/Form';
import Table from './component/Table';
import Form from './component/Form';
import RejisterForm from './component/RejisterForm';
import TrainerPage from './component/TrainerPage';
import TrainerMeal from './component/TrainerMeal';
import ComingSoon from './component/ComingSoon';
import Card from './component/Card';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/form" element={<Form />}></Route>
          <Route exact path="/card" element={<Card />}></Route>
          <Route exact path="/rejister" element={<RejisterForm />}></Route>
          <Route exact path="/table" element={<Table />}></Route>
          <Route exact path="/trainer" element={<TrainerPage />}></Route>
          <Route exact path="/meal" element={<TrainerMeal />}></Route>
          <Route exact path="/search" element={<BusinessPage />}></Route>
          <Route exact path="/" element={<ComingSoon />}></Route>
          <Route exact path="/direct" element={<DirectPage />}></Route>
          <Route exact path="/gp" element={<ComingSoon />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
