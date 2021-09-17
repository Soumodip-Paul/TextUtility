import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/darkmode'

export const Accordion = ({id,children}) => {
    return (
        <div className="accordion" id={id}>
            {children}
        </div>
    )
}

export const AccordionItem = ({header,id,expanded,children,parentId}) => {
    const darkTheme = useContext(ThemeContext)
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button className={`accordion-button ${!expanded && "collapsed"} ${darkTheme.darkMode && "bg-secondary text-light"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={expanded} aria-controls="collapseThree">
                   {header}
                </button>
            </h2>
            <div id={`collapse${id}`} className={`accordion-collapse collapse ${expanded && "show"} ${darkTheme.darkMode && "bg-secondary text-light"}`} aria-labelledby={id} data-bs-parent={`#${parentId}`}>
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

AccordionItem.propTypes ={
    header: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    parentId: PropTypes.string.isRequired,
}
