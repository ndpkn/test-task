class Auth {
    auth = (id, token) => {
        localStorage.setItem('idWA', id)
        localStorage.setItem('tokenWA', token)
    }
}

export default Auth