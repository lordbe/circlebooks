import React, { useContext, useState } from 'react'
import { ToggleContext} from '../pages/context/BookContext';

export default function ButtonBuy_cmp({keyButton}) {
   //console.log("seven");
    const {onPurchase, message, isLoadingP} = useContext(ToggleContext);    
    const [currentMessage, setCurrentMessage] = useState("");
    
    const onClick = () =>{      
      onPurchase(keyButton)
      setCurrentMessage(message);
      console.log("eigth");
    }
    //console.log("nine");
    return (
      <>
        {isLoadingP && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <text style={{'font-size': '6px'}}>{currentMessage}</text>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={onClick}
        >
          Buy
        </button>
      </>
    );
}
