import React,{useContext,useEffect,useState} from 'react';
import './App.css';
import  LoginForm  from './components/LoginForm';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import {IUser} from './models/IUser';
import UserService from './services/UserService';

function App() {
  const {store} = useContext(Context);
  const [users,setUsers] = useState<IUser[]>([])

  useEffect(()=>{
    if(localStorage.getItem('token')){
      store.checkAuth()
    }
  },[]);

  async function getUsers(){
    try{
     const response = await UserService.fetchUsers();
     setUsers(response.data)
    }catch(e){
      console.log(e)
    }
  }

  if(store.isLoading){
    return <div>loading...</div>
  }

  if(!store.isAuth){
    return (
      <div>
      <LoginForm />
      <button onClick={getUsers}>Get users</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className='title'>
        {store.isAuth
          ? `User auth: ${store.user.email}`
          : "You need authorization"}
      </h1>
      <h2 className='title-2'>{store.user.isActivated ? 'Account confirmed' : 'You need confirm account!'}</h2>
      <button className='btn' onClick={() => store.logout()}>Logout</button>
      <div>
        <button className='btn' onClick={getUsers}>Get users</button>
        </div>
        {users.map((user) => {
          return <h3 className='list-gmail' key={user.email}>{user.email}</h3>;
        })}
      
    </div>
  );
}

export default observer(App) ;
