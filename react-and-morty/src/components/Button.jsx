import React from "react";

function ButtonList(props) {
    const button1 = props.charText;
    const button2 = props.locText;
    const showChar = props.showChar;
    const showLoc = props.showLoc;

    let content = 
    <div className="buttonW">
        <button className="cha" onClick={showChar}><span>{button1}</span></button>
        <button className="loc" onClick={showLoc}><span>{button2}</span></button>
    </div>;

    return content;
 }

 export default ButtonList;