import React, { useState } from "react";
import { useFetchBooks, useFetchPurchase } from "../../services/book/Book_ser";
import { BooksContext, ToggleContext } from "./BookContext";

export default function BookProvider({ children }) {
  console.log("one");
  const [swKey, setSwKey] = useState("");
  console.log("two");
  const { message, isLoadingP } = useFetchPurchase(swKey);  
  console.log("tree");   
  const { books, isLoading } = useFetchBooks(swKey);    
  console.log("four");
  function onPurchase(keyButton) {
    console.log("onPurchase " + keyButton);    
    setSwKey(keyButton+" ");    
    console.log("five");    
    // if(message =="Purchase successful"){
    //   setSwKey("");  
    // }
  }  
  console.log("six");   
  return (
    <BooksContext.Provider value={{ books, isLoading }}>
      <ToggleContext.Provider value={{ onPurchase, message, isLoadingP }}>
        {children}
      </ToggleContext.Provider>
    </BooksContext.Provider>
  );
}
