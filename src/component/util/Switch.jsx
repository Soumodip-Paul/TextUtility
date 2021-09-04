import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AlertContext from '../../context/alertContext'

const Switch = props => {
    const setAlert = useContext(AlertContext)
    return (
        <div className="form-check form-switch">
            <input className={`${props.anim && "anim"} form-check-input`} type="checkbox" id={props.id} checked={props.value} onChange={() => { props.onChange(!props.value); setAlert(`${!props.value ? "Darkmode" : "Lightmode"} enabled`) }} />
            {props.children && <label className="form-check-label" htmlFor={props.id}>{props.children}</label>}
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
