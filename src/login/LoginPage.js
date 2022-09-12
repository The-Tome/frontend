import './LoginStyle.css'

export default function LoginPage() {
    return (
        <div className='centered'>
            <h1>The Tome</h1>
            <label for='username'>Username: </label>
                <input id="username" type='text'></input>
            <label className='label' for='password'>Password: </label>
                <input id="password" type='password'></input>
            <div>
                <p className='block'>Create Account</p>
                <p className='block'>Sign In</p>
            </div>
            <p>Forgot Password</p>
        </div>
    )
}