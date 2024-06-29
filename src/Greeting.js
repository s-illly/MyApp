import React from "react";
export const Greeting = ({name, numberOfMessages})=>{   
    if(!name)
        return null 
    let isMorning = (new Date()).getHours() < 12;
    return isMorning
      ?<h3>Good Morning! {name} </h3>
      :
      <>
        <h3>Good Evening! {name} </h3>
        <p>You have {numberOfMessages} messages</p>
      </>
}
