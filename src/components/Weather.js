
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import bgimg from '../assert/images/main.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner'

const Weather = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({});


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/weather', {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        
                        Accept: "appllication/json",
                        "Content-Type": "application/json",
                        
                    },
                    credentials: "include"
                });

                const data = await res.json();
                console.log(data);
                setUser(data)


                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;

                }
            } catch (e) {
                console.error(e);
                navigate('/login')
            }
        };
        fetchData();
    }, [navigate]);


    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [loader, setLoader] = useState(false)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=216ae54bafcdf9c0bc96a98328907424`


    const searchLocation = (e) => {
        setLoader(true);
        axios.get(url).then((response) => {
            setLoader(false);
            setData(response.data)
            console.log(response.data)
            setLoader(false);
        }).catch((e) => {
            console.log(toast.error("something wrong"))
            setLoader(false);
        })



    }
    return (
        <>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />

            <section class="text-gray-600 h-[701px] body-font bg-cover bg-center justify-center " style={{ backgroundImage: `url(${bgimg})` }}>

                <div className='container mx-auto grid grid-cols-1 justify-items-center font '>
                    <h1 className='p-3 text-3xl mt-4 font-bolder text-white font text-center'>welcome! {user.name}</h1>
                    <div className=' pt-10 lg:w-2/4 md:w-2/4 '>
                        <input value={location}
                            onChange={event => setLocation(event.target.value)}
                            type="email" id="email" name="email" placeholder='Enter your city name' class="w-full o bg-slate-600 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-white outline-none text-lg py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button className='text-gray-900 mt-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={searchLocation}> Search</button>

                    </div>
                    <div className='text-white w-56 rounded-lg mt-8'>

                        {
                            loader ?
                                <TailSpin
                                    height="80"
                                    width="80"
                                    color="#FFFFFF"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                                :

                                <div className='p-10'>
                                    <p className='text-2xl'>{data.name}</p>
                                    {data.main ? <h1 className='text-4xl text-yellow-50 mt-2 mb-2'>{data.main.temp} 'C</h1> : null}
                                    {data.weather ? <h1>{data.weather[0].main}</h1> : null}
                                </div>
                        }


                    </div>
                </div>



            </section>

        </>
    )
}

export default Weather