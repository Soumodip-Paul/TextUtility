import React, { useContext } from 'react'
import { ThemeContext } from '../../context/darkmode'
import { Accordion, AccordionItem } from '../util/Accordion'

export const About = () => {
    const context = useContext(ThemeContext)
    return (
        <div style={{ minHeight: "85.4vh" }} className={` ${context.darkMode && "bg-secondary"}`}>
            <div className="container p-4">
                <Accordion id="about">
                    <AccordionItem id="about1" header="A1" parentId="about" expanded>Some text 1</AccordionItem>
                    <AccordionItem id="about2" header="A2" parentId="about">Some more text</AccordionItem>
                    <AccordionItem id="about3" header="A3" parentId="about">And some more text</AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
