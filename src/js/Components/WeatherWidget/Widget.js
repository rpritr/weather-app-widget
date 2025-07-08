import React from "react";
import styles from "./Widget.scss";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
const Widget = (props) => {
    const {city, current_temperature, state} = props.data;
    console.log(city);
    return (
        <section className="widget__section">
            <Header city={city} temp={current_temperature} state={state}></Header>
            <HourlyForecast/>
        </section>
    )
}

export default Widget;