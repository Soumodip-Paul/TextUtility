import React, { useContext, useState } from 'react'
import AlertContext from '../../context/alertContext'
import { ThemeContext } from '../../context/darkmode'

const Home = () => {

    const theme = useContext(ThemeContext)
    const setAlert = useContext(AlertContext)
    const [text, setText] = useState("")

    const clearText = e => {
        setText("");
        text.length!==0 && setAlert('Text cleared')
    }

    const toUpperCase= e => {
        setText(text.toLocaleUpperCase())
        text.length!==0 && setAlert("Text convered to uppercase")
    }
    
    const toLowerCase= e => {
        setText(text.toLocaleLowerCase())
        text.length!==0 && setAlert("Text convered to lowercase")
    }

    const copyToClipboard = e => {
        window.navigator.clipboard.writeText(text)
        text.length!==0 && setAlert("Text copied  to clipboard")
    }

    const removeExtraSpace = e => {
        setText(text.split(/\s+/).filter(e =>{ return e.length !== 0}).join(" "))
        text.length!==0 && setAlert("Extra space removed")
    }

    const calculateWords= () => {
        return `${text.split(/\s+/).filter(e => {return e.length !== 0}).length}`
    }

    return (
        <div className={`${theme.darkMode && "bg-secondary text-light"}`} style={{ minHeight: "85.4vh" }}>
            <div className={`p-4 container `}>
                <h2 className="p-2 text-center heading">Text Utility</h2>
                <label htmlFor="texgtInput" className="form-label hand-written">Enter Your Text</label>
                <textarea className={`form-control ${theme.darkMode && "bg-secondary text-light"}`} id="texgtInput" rows="6" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <p className="mx-2 my-3 hand-written">Words : {calculateWords()} &emsp;&emsp; Characters : {text.length}</p>
                <button type="button" className="py-2 px-3 m-2 btn btn-primary" onClick={toUpperCase}>Uppercase</button>
                <button type="button" className="py-2 px-3 m-2 btn btn-success" onClick={toLowerCase}>Lowercase</button>
                <button type="button" className="py-2 px-3 m-2 btn btn-info" onClick={removeExtraSpace}>Remove extra space</button>
                <button type="button" className="py-2 px-3 m-2 btn btn-warning" onClick={copyToClipboard}>Copy</button>
                <button type="button" className="py-2 px-3 m-2 btn btn-danger" onClick={clearText}>Clear</button>
            </div>
        </div>
    )
}

export default Home;
