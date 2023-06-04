import React, { useState, useEffect } from "react";

const Button = (props) => {
    const {title,colorType} = props;
    useEffect(()=>{
        console.log(title)
        console.log(colorType);
    },[]);
    return (
        <button className={'Button ' + (colorType === 'Pink' ? "button-pink" : colorType === 'Blue' ? "button-blue" : "button-black")}>{title}</button>
    );
}

export default Button;