import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const getStoredBooks = ()=>{
    const storedBook = localStorage.getItem('Bookslistread')
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}

const saveBooks = id =>{
const storedBooks = getStoredBooks();
const exists = storedBooks.find(bookId => bookId === id);
if(!exists){
    storedBooks.push(id);
    localStorage.setItem('Bookslistread', JSON.stringify(storedBooks));
    toast.success("Added ReadList Succesfully")
}else{
    toast.error("Allrady Added!");
}

}

export {getStoredBooks, saveBooks};

