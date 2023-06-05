import React, { useMemo, useEffect } from "react";

const defaultRows = 4;
const defaultColumns = 20;

const Textinput = (props) => {
    const {label, name, className, multiline, rows, cols, inputType} = props;
    useEffect(()=>{
    },[]);

    const getClassName = useMemo(() => {
        let btnClass = "coloredBorder ";
        if(!multiline) {
            btnClass += "textInputHeight textInputWidth";
        }
        if(className && className !== "") {
            btnClass += className;
        }
        console.log(btnClass);
        return btnClass;
    }, [multiline, className]);

    const getRows = useMemo(() => {
        return rows ? rows : defaultRows;
    }, [rows]);
    
    const getCols = useMemo(() => {
        return cols ? cols : defaultColumns;
    }, [cols]);

    const renderTextInput = () => {
        if(multiline) {
            return <textarea className={getClassName} name={name} rows={getRows} cols={getCols}></textarea>;
        }
        else
            return <input className={getClassName} name={name} type={inputType ?? "text"} />;
    }

    return (
        <>
            {label && <label for={name}>{label}</label>}
            {renderTextInput()}
        </>
    );
}

export default Textinput;