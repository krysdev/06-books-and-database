import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = axios.get('http://localhost:3001/books')
    
    setBooks(response.data)
  };

  // receives title from BookCreate.js (it is called 'word' there)
  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title: title,
    });

    // response > data  is the object returned by the JSON server: { id : given by server, title: SomeTitle }
    const updatedBooksArrayState = [...books, response.data];
    setBooks(updatedBooksArrayState);
  };

  const deleteBookByID = (idToRemove) => {
    // console.log(idToRemove)
    const updatedBooks = books.filter((booksArrayElement, index) => {
      return booksArrayElement.id !== idToRemove;
    });
    setBooks(updatedBooks);
  };

  const editBookByID = (idToEdit, titleToBeChanged) => {
    const updatedBooks = books.map((el) => {
      if (el.id === idToEdit) {
        return { ...el, title: titleToBeChanged };
      }
      // else
      return el;
    });
    setBooks(updatedBooks);
    // console.log(idToEdit, titleToBeChanged)
  };

  return (
    <div className="app">
      {/* books.length: {books.length} */}
      <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
