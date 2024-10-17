const path ="http://localhost:8000";//"https://160b-181-115-171-225.ngrok-free.app";//"http://localhost:8000";

export const getBooks = async () =>{
    const url = `${path}/books`;
    const response = await fetch(url);
    //var xres = await response.json();    
    const {books} = await response.json();
    
    const eBook = books.map(book=>({
        id: book.id,      
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        price: book.price,
        availableStock: book.availableStock       
    }));
  
    //console.log(JSON.stringify(eBook));
    console.log(eBook);
    return eBook;
  }

  export const getBook = async (id) =>{    
    const url = `${path}/books/${id}`;
    const response = await fetch(url);    
    const {book} = await response.json();    
  
    //console.log(JSON.stringify(book));
    console.log(book);
    return book;
  }

  export const exePurchase = async (id) =>{
    if (id == "") {
      return "-";
    }
    const url = `${path}/books/${id}/purchase`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ }),
    };
    const response = await fetch(url,requestOptions);
    const {message} = await response.json();    
  
    console.log(JSON.stringify(message));
    return message;
  }