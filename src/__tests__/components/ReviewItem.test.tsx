import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ReviewItem from '../../components/ReviewItem'

describe('ReviewItem', () => {
    it('renders the ReviewItem component with props', () => {
        render(<ReviewItem img="test-img" stars={4.5} author="John Doe" text="Great service!" />)
        expect(screen.getByText('Great service!')).toBeInTheDocument()
        expect(screen.getByText('John Doe')).toBeInTheDocument()
        expect(screen.getByRole('img', { hidden: true })).toHaveClass('test-img testy__img rounded-full')
    })
})
