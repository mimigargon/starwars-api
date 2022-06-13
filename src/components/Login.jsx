import { useState } from 'react';
import{ connect } from 'react-redux';
import { saveUser } from '../redux/actions/auth.actions';

const Login = (props) => {
    const [form, setForm] = useState({email: '', password: ''});

    const submitLogin = ev => {
        ev.preventDefault();
        props.loginUser(form);
        props.dispatch(saveUser(form));
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

export default connect()(Login); 