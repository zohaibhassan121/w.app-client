import React,{useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
const Logout = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(UserContext);

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await fetch('/logout', {
                    method: "GET",
                    headers: {
                        Accept: "appllication/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                dispatch({type: 'USER', payload: false})
                 navigate('/login')
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            } catch (e) {
                console.error(e);
                
            }
        };
        fetchData();
    }, [navigate]);
  return (
    <div>
  loading..........
    </div>
  )
}

export default Logout
