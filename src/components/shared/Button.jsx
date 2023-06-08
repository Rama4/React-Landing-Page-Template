/* eslint-disable no-useless-concat */
import React, { useState, useEffect } from "react";
import { useMemo } from "react";

const Button = (props) => {
    const {title, colorType, onPress, className} = props;

    useEffect(()=>{
        console.log(title)
        console.log(colorType);
    },[colorType, title]);

    const getClassName = useMemo(() => {
        
        const btnclass = "Button" + " " + 
            (className?.length > 0 ? className : '') + " " +
            (colorType === 'Pink' ? "button-pink" : colorType === 'Blue' ? "button-blue" : "button-black");
        return btnclass;
    }, [colorType, className]);

    return (
        <button onClick={onPress} className={getClassName} >{title}</button>
    );
}

export default Button;