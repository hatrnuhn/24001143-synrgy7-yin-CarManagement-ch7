import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CarSearchResultItem from '../../components/CarSearchResultItem'

describe(CarSearchResultItem, () => {
    it('renders the CarSearchResultItem component with car prop', () => {
        const car = {
            image: 'car-image.jpg',
            manufacture: 'Toyota',
            model: 'Camry',
            rate: 500000,
            description: 'A nice car',
            capacity: 5,
            transmission: 'Automatic',
            year: 2020
        }
        render(<CarSearchResultItem car={car} />)
        expect(screen.getByAltText('')).toHaveAttribute('src', 'https://res.cloudinary.com/daeznp0xa/image/upload/f_auto,q_auto/v1/car-image.jpg')
        expect(screen.getByText('Toyota Camry')).toBeInTheDocument()
        expect(screen.getByText('Rp500,000.00 / hari')).toBeInTheDocument()
        expect(screen.getByText('A nice car')).toBeInTheDocument()
        expect(screen.getByText('5 Orang')).toBeInTheDocument()
        expect(screen.getByText('Automatic')).toBeInTheDocument()
        expect(screen.getByText('Tahun 2020')).toBeInTheDocument()
    })
})
