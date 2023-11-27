import React,{useState,useContext} from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import cl from './LoginForm.module.css'

const LoginForm = ()=>{
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const{store} = useContext(Context)

    return (
      <div className={cl.loginForm}>
        <div className={cl.container}>
        <input className={cl.input}
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          className={cl.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <div>
        <button className={cl.btn}
           onClick={()=>store.login(email,password)}>Login</button>
        <button className={cl.btn}
           onClick={()=>store.registration(email,password)}>Registration</button>
        </div>
       </div>
      </div>
    );
}

export default observer(LoginForm);