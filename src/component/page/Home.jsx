import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/darkmode'

export const Home = () => {

    const theme = useContext(ThemeContext)
    const [text, setText] = useState("")

    const clearText = e => {
        setText("");
    }

    const toUpperCase= e => {
        setText(text.toLocaleUpperCase())
    }
    
    const toLowerCase= e => {
        setText(text.toLocaleLowerCase())
    }

    const copyToClipboard = e => {
        window.navigator.clipboard.writeText(text)
    }

    const removeExtraSpace = e => {
        setText(text.split(/\s+/).filter(e =>{ return e.length !== 0}).join(" "))
    }

    return (
        <div className={`${theme.darkMode && "bg-secondary text-light"}`} style={{ minHeight: "91.5vh" }}>
            <div className={`p-4 container `}>
                <label htmlFor="texgtInput" className="form-label">Your Text</label>
                <textarea className={`form-control ${theme.darkMode && "bg-secondary text-light"}`} id="texgtInput" rows="6" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <button type="button" className="p-2 m-2 btn btn-primary" onClick={toUpperCase}>Uppercase</button>
                <button type="button" className="p-2 m-2 btn btn-success" onClick={toLowerCase}>Lowercase</button>
                <button type="button" className="p-2 m-2 btn btn-info" onClick={removeExtraSpace}>Remove extra space</button>
                <button type="button" className="p-2 m-2 btn btn-warning" onClick={copyToClipboard}>Copy</button>
                <button type="button" className="p-2 m-2 btn btn-danger" onClick={clearText}>Clear</button>
            </div>
        </div>
    )
}
