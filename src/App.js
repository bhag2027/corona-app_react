import logo from './logo.svg';
import './App.css';
import { AddCorona } from './components/AddCorona';
import SearchCorona from './components/SearchCorona';
import DeleteCorona from './components/DeleteCorona';
import ViewCorona from './components/ViewCorona';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddCorona/>}/>
      <Route path='/search'element={<SearchCorona/>}/>
      <Route path='/delete'element={<DeleteCorona/>}/>
      <Route path='/view'element={<ViewCorona/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
