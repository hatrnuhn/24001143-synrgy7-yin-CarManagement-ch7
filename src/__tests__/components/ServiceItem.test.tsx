import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import ServiceItem from '../../components/ServiceItem';

describe('ServiceItem', () => {
    it('renders the ServiceItem component with service prop', () => {
        render(<ServiceItem service="Test Service" />);
        expect(screen.getByText('Test Service')).toBeInTheDocument();
        expect(screen.getByRole('img', { hidden: true })).toHaveClass('svg tick-icon bg-bcr-blue');
    });
});
