import React, { Component } from 'react';
class Bookings extends Component {
    state = {  }
    render() { 
        let time = new Date();
        const Day = time.getDate();
        const Month = time.getMonth();
        const Year = time.getFullYear()
        const Today = Day + "=" + Month + "=" + Year;
        return (
            <div className = "bookings">
                <input type="date" data-date="" data-date-format="DD MMMM YYYY" value="2019-08-13" className = "date"></input>
                <select className = "select001">
                    <option value="6:00">6:00</option>
                    <option value="7:00" selected>7:00</option>
                    <option value="3 people">8:00</option>
                    <option value="4 people">9:00</option>
                    <option value="5 people">10:00</option>
                    <option value="6 people">11:00</option>
                    <option value="7 people">12:00</option>
                    <option value="8 people">13:00</option>
                    <option value="9 people">14:00</option>
                    <option value="10 people">15:00</option>
                    <option value="11 people">16:00</option>
                    <option value="12 people">17:00</option>
                    <option value="13 people">18:00</option>
                    <option value="14 people">19:00</option>
                    <option value="15 people">20:00</option>
                    <option value="16 people">21:00</option>
                    <option value="17 people">22:00</option>
                    <option value="18 people">23:00</option>
                    <option value="19 people">00:00</option>
                    <option value="20 people">01:00</option>
                    <option value="Larger party">02:00</option>
                    <option value="Larger party">03:00</option>
                    <option value="Larger party">04:00</option>
                    <option value="Larger party">05:00</option>

                </select>
                <select className = "select00">
                    <option value="1 person">1 person</option>
                    <option value="2 people" selected>2 people</option>
                    <option value="3 people">3 people</option>
                    <option value="4 people">4 people</option>
                    <option value="5 people">5 people</option>
                    <option value="6 people">6 prople</option>
                    <option value="7 people">7 people</option>
                    <option value="8 people">8 people</option>
                    <option value="9 people">9 people</option>
                    <option value="10 people">10 people</option>
                    <option value="11 people">11 people</option>
                    <option value="12 people">12 people</option>
                    <option value="13 people">13 people</option>
                    <option value="14 people">14 people</option>
                    <option value="15 people">15 people</option>
                    <option value="16 people">16 people</option>
                    <option value="17 people">17 people</option>
                    <option value="18 people">18 people</option>
                    <option value="19 people">19 people</option>
                    <option value="20 people">20 people</option>
                    <option value="Larger party">Larger party</option>

                </select>
                
            </div>
        );
    }
}
 
export default Bookings;