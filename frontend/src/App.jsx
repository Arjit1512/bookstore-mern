import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import CreateBooks from '../pages/CreateBooks';
import ShowBook from '../pages/ShowBook';
import DeleteBook from '../pages/DeleteBook';
import EditBook from '../pages/EditBook';

export const App = () => {
  return (
     
     <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/books/create' element={<CreateBooks></CreateBooks>} />
        <Route path='/books/details/:id' element={<ShowBook></ShowBook>} />
        <Route path='/books/edit/:id' element={<EditBook></EditBook>} />
        <Route path='/books/delete/:id' element={<DeleteBook></DeleteBook>} />
     </Routes>    
  )
}

export default App;