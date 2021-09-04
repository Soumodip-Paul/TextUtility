import React from 'react'
import PropTypes from 'prop-types'

const Switch = props => {
    return (
        <div className="form-check form-switch">
            <input className={`${props.anim && "anim"} form-check-input`} type="checkbox" id={props.id} checked={props.value} onChange={()=> {props.onChange(!props.value)}}/>
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
