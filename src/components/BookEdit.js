import { useState } from 'react';

function BookEdit({ book, onSave }) {
  const [updatedTitle, setUpdatedTitle] = useState(book.title);

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book.id, updatedTitle);
    // console.log(book.id, updatedTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <input
        className="input"
        value={updatedTitle}
        onChange={handleChange}
        type="text"
      />
      <button className="button" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}

export default BookEdit;
