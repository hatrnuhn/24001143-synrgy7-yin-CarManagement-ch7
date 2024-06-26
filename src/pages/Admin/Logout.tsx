import axios from "axios"

const Logout = () => {
    const onClick = () => {
        axios.post('http://localhost:3000/api/auth/logout', {role: 'admin'}, {withCredentials: true})
        localStorage.removeItem('accessToken')
        window.location.href='/'

    }
    return (
        <>
            <button type='button' onClick={() => onClick()}>Log Out</button>
        </>
    )
}

export default Logout