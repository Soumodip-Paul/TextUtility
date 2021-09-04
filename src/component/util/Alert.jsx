import React, { useContext } from 'react'
import { ThemeContext } from '../../context/darkmode'

export const Alert = ({ children }) => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ height: "40px" }} className={` ${theme.darkMode && "bg-secondary"}`}>
            {children && <div className="alert alert-success" role="alert">{children}
            </div>}
        </div>
    )
}

Alert.propTypes = {

}
