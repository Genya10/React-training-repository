import React,{useState} from 'react';

export const LoginForm =()=>{
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    return (
      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <button>Login</button>
        <button>Registration</button>
      </div>
    );
}

