import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const TEST = [
  { id: 1, title: 'AaaAaa' },
  { id: 2, title: 'BbbBbbb' },
];

function App() {
  const [books, setBooks] = useState([]);
  
  const createBook = (title) => {    // receives title from BookCreate.js (it is called 'word' there)
    // console.log('Title/word from CREATE:', title)
    const randomID = Math.round(Math.random() * 99999);
    const updatedBooksArrayState = [...books, { id: randomID, title: title }];
    setBooks(updatedBooksArrayState);
  };

  const deleteBookByID = (idToRemove) => {
    // console.log(idToRemove)
    const updatedBooks = books.filter((booksArrayElement, index) => {      //index not needed here
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
