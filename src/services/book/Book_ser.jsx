import { useEffect, useState } from "react";
import { exePurchase, getBook, getBooks } from "../../helpers/book/Book_hel";



export const useFetchBooks = (id) => {
    const [books,setBooks] =useState([]);    
    const [isLoading, setIsLoading] =useState(true);

    const getListBooks = ()=>{
      const timeout = setTimeout(async () => {
        const newBooks = await getBooks();
        setBooks(newBooks);
        setIsLoading(false);                
      }, 100);        
    }

    useEffect(() =>{
      getListBooks();  
    },[id]);  

  //   onPurchase = () =>{
  //     console.log('Purchase');
  // }

  return {
    books,
    isLoading
  }

  }

  export const useFetchBook = (id) => {
    const [xbook,setxBook] =useState([]);    
    const [isLoadingB, setIsLoadingB] =useState(true);    

    const getxBook = async(id)=>{
        const newBook = await getBook(id);
        setxBook(newBook);       
        setIsLoadingB(false);          
    }

    useEffect(() =>{
      getxBook(id);        
    },[id]);  

  return {
    xbook,
    isLoadingB
  }

  }

  export const useFetchPurchase = (id) => {
    
    const [message,setMessage] = useState([]);    
    const [isLoadingP, setIsLoadingP] = useState(true);    

    const ExePurchase = async(id)=>{              
        const newMessage = await exePurchase(id);
        setMessage(newMessage);               
        setIsLoadingP(false);           
    }

    useEffect(() => {
      ExePurchase(id);
    },[id]);  

  return {
    message,
    isLoadingP
  }

  }
