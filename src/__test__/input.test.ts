import { render } from "@testing-library/react"
import InputComponent from '../components/input'

const mockFnResult = jest.fn()
const mockFnMenu = jest.fn()

describe('Testing: Input Component', () => {
    it('Should run setMenu function properly', () => {
        render(<Input />)
    })
})