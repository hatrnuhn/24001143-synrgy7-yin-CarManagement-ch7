import '@testing-library/jest-dom'
import AccordionItem from "../../components/AccordionItem"
import { render, screen, fireEvent } from '@testing-library/react'

describe(AccordionItem, () => {
    const title = 'Sample title'
    const content = 'Sample content'

    it("should show the right title and content texts", () => {
        render(<AccordionItem title={title} content={content}  />)

        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(content)).toBeInTheDocument()
    })

    it('toggles accordion panel on button click', () => {
        render(<AccordionItem title={title} content={content} />)
        
        const button = screen.getByText(title)
        const panel = screen.getByText(content).parentElement as HTMLElement
    
        // Initially the panel should be closed
        expect(panel.style.maxHeight).toBe('')
    
        // Click to open the panel
        fireEvent.click(button)
        expect(panel.style.maxHeight).toBe(`${panel.scrollHeight}px`)
    
        // Click again to close the panel
        fireEvent.click(button)
        expect(panel.style.maxHeight).toBe('')
    })
})