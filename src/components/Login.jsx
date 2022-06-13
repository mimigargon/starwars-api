import { useState } from 'react';

const Login = (prop) => {
    const [form, setForm] = useState({email: '', password: ''});

    const submitLogin = ev => {
        ev.preventDefault();
        prop.loginUser(form);
    }

    const handleInput = ev => setForm({...form, [ev.target.name]: ev.target.value})

    return (
        <form onSubmit ={submitLogin}>

            <label>
                <p>Email</p>
                <input name='email' type='email' value={form.email} onChange={handleInput}/>
            </label>

            <label>
                <p>Contraseña</p>
                <input name='password' type='password' value={form.password} onChange={handleInput}/>
            </label>

            <div>
                <button type='submit'>Acceder</button>
            </div>
        </form>
    )
}

export default Login; 