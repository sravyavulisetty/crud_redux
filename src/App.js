import './App.css';
import CreateForm from './components/CreateFrom';
import Display from './components/Display';
import UpdateForm from './components/UpdateForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className='text-2xl font-bold'>CRUD operations</h1>
        <BrowserRouter>
        <Routes>
          <Route path='/' Component={Display}></Route> 
          <Route path='/createUser' Component={CreateForm}></Route>
          <Route path='/edit/:id' Component={UpdateForm}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
