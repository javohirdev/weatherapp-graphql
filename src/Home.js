import React, {useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from './Queries';

const Home = () => {

    const [citySearched, setCitySearched] = useState("");
    const [getWeather, {loading, data, error}] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { name: citySearched },
    })

    if (error) return <h1>Error );</h1>
    if (loading) return <h1>Loading...</h1>
    if (data) {
        console.log(data)
    }

    return (
        <div>
            <h1>Search</h1>
            <input 
                type="text" 
                placeholder="City name..." 
                onChange={(event) => {
                    setCitySearched(event.target.value);
                }}
            />
            <button onClick={() => getWeather()}>Search..</button>

            <div className="weather">
                {data && (
                    <>
                        <h1>{data.getCityByName.name}</h1>
                        <h1>{data.getCityByName.weather.temperature.actual}</h1>
                        <h1>{data.getCityByName.weather.summary.title}</h1>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;