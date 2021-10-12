import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alertContext'

const Switch = props => {
    const setAlert = useContext(AlertContext)
    return (
        <div className="form-check form-switch">
            {props.children && <label style={{padding: '4px'}} className={`form-check-label text-${props.value? "light": "dark"}`} htmlFor={props.id}> &nbsp; {props.children}</label>}
            <input className={`${props.anim && "anim"} form-check-input`} type="checkbox" id={props.id} checked={props.value} onChange={() => { props.onChange(!props.value); setAlert(`${!props.value ? "Darkmode" : "Lightmode"} enabled`) }} />
        </div>
    )
}

Switch.propTypes = {
    id: PropTypes.string.isRequired,
    anim: PropTypes.bool,
}

Switch.defaultProps = {
    anim: false
}

export default Switch
