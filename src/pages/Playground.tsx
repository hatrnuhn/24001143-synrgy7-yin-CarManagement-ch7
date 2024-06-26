import axios from "axios"
import { useEffect } from "react"

const Playground = () => {
    useEffect(() => {
        axios.post('http://localhost:3000/api/playground', {}, {withCredentials: true})
            .then(() => console.log('REQUESTED'))
    }, [])
    return (
        <div>

        </div>
    )
}

export default Playground