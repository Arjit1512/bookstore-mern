import { Axios } from 'axios';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../src/components/BackButton';
import Spinner from '../src/components/Spinner';
import moment from 'moment';
const ShowBook = () => {
  
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);

  const {id} = useParams();

  useEffect( () => {
    setLoading(true);
    axios
    .get(`https://bookstore-mern-backend.onrender.com/books/${id}`)
    .then( (response) => {
       setBook(response.data);
       setLoading(false);
    })
    .catch((error) => {
       console.log(error);
       setLoading(false);
  });
},[]);
  
  
  return (
    <div className='p-4'>
      <BackButton></BackButton>
      <h1 className='text-3x1 my-4'>Show Book</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
           <div className='my-4'>
               <span className='text-xl mr-4 text-gray-500'>Id</span>
               <span>{book._id}</span>
           </div>

           <div className='my-4'>
               <span className='text-xl mr-4 text-gray-500'>Title</span>
               <span>{book.title}</span>
           </div>

           <div className='my-4'>
               <span className='text-xl mr-4 text-gray-500'>Author</span>
               <span>{book.author}</span>
           </div>

           <div className='my-4'>
               <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
               <span>{book.publishYear}</span>
           </div>

           <div className='my-4'>
               <span className='text-xl mr-4 text-gray-500'>Create Time</span>
               <span>{moment(book.createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
           </div>

           <div className='my-4'>
               <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
               <span>{moment(book.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
           </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook;
