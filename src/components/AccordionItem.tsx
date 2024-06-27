

import { FC, RefObject, useRef, useState } from "react"
type AccordionItemProps = {
    title: string,
    content: string
}

const AccordionItem: FC<AccordionItemProps>= ({title, content}) => {
    const [isActive, setIsActive] = useState(false)
    const panelRef: RefObject<HTMLDivElement> = useRef(null)

    const toggleAccordion = () => {
        setIsActive(!isActive)
        if (panelRef.current) {
            if (panelRef.current.style.maxHeight) {
                panelRef.current.style.maxHeight = ''
            } else {
                panelRef.current.style.maxHeight = panelRef.current.scrollHeight + 'px'
            }    
        }
    };

    return (
        <div>
            <button className={`accordion w-full border-1 rounded-4px flex justify-between items-center px-6 py-4 ${isActive ? 'active' : ''}`} onClick={() => toggleAccordion()}>{title}</button>
            <div ref={panelRef} className="panel px-6">
                <p>{content}</p>
            </div>    
        </div>
    )
}

export default AccordionItem