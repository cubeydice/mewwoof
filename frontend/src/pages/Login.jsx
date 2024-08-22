import LoginForm from "../components/LoginForm"

// eslint-disable-next-line react/prop-types
function Login({ setLoggedIn }) {
    return <>
        <LoginForm route="/api/token/" method="login" setLoggedIn={setLoggedIn}/>
    </>
}

export default Login;