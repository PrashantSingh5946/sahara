import React, { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../util/firebase-util";
import { useEffect } from "react";


export const UserContext = createContext(null);

export default function UserContextProvider(props) {
  const [user, setUser] = useState();
  useEffect(()=>{
    let unsubscribe = onAuthStateChanged(auth,(data)=>{
      if(data){
        setUser(data);
      }
      
    });
    return unsubscribe;
  },[])
  
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
