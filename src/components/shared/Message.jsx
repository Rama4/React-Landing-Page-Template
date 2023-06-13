import React, { useMemo, useEffect } from "react";

const Message = (props) => {
    const {text, className, MessageType} = props;
    
    useEffect(()=>{
    },[]);

    const getClassName = useMemo(() => {
        let btnClass = "";
        if(MessageType && MessageType === 2  ) {
            btnClass += "alert alert-danger";
        }
        else {
            btnClass += 'alert alert-success';
        }

        if(className && className !== "") {
            btnClass += className;
        }
        return btnClass;
    }, [MessageType, className]);

    return (
        <>
        {text && (
            <div
            className={getClassName}
            role="alert"
            >
                {text}
            </div>
        )}  
        </>
    );
}

export default Message;