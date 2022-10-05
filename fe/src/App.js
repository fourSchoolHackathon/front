import './App.css';

import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/hi" element={<div>ㅎㅇ</div>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
