import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const getStoredBooks = ()=>{
    const storedBook = localStorage.getItem('Bookslist')
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
    localStorage.setItem('Bookslist', JSON.stringify(storedBooks));
    toast.success("Added ReadList Succesfully")
}else{
    toast.error("Allrady Added!");
}

}

export {getStoredBooks, saveBooks};


// export const saveToLocalStorage = (data) => {
//     const saveData = JSON.parse(localStorage.getItem("read") || []);
//     const existsData = saveData.find((item) => item.id == data.id);
//     if(!existsData){
//         saveData.push(data);
//         localStorage.setItem('read', JSON.stringify(saveData));
//         alert(' added succesfully')
//     }else{
//         alert("alrady added");
//     }
// }