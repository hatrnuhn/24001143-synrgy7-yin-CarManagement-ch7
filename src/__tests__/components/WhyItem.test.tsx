import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import WhyItem from '../../components/WhyItem'

describe(WhyItem, () => {
    it('renders the WhyItem component with props', () => {
        const {container} = render(<WhyItem icon="some-icon" color="red" main="Main text" desc="Description text" />)

        const divElement = container.querySelector('.some-icon.thumb-icon.icon--20px.svg.bg-white')

        expect(screen.getByText('Main text')).toBeInTheDocument()
        expect(screen.getByText('Description text')).toBeInTheDocument()
        expect(divElement).toBeInTheDocument()
        expect(divElement).toHaveClass('some-icon thumb-icon icon--20px svg bg-white')
    })
})