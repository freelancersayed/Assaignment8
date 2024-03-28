import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const getStoredBooksWish = ()=>{
    const storedBookWish = localStorage.getItem('Bookslists')
    if(storedBookWish){
        return JSON.parse(storedBookWish);
    }
    return [];
}

const saveBooksWish = id =>{
const storedBooksWish = getStoredBooksWish();
const exists = storedBooksWish.find(bookId => bookId === id);
if(!exists){
    storedBooksWish.push(id);
    localStorage.setItem('Bookslists', JSON.stringify(storedBooksWish));
    toast.success("Added WishList Succesfully")
}else{
    toast.error("Allrady Added!");
}

}

export {getStoredBooksWish, saveBooksWish}