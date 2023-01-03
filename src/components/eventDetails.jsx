import { NavLink, useLocation } from "react-router-dom";
import '../details.css'
function EventDetails() {
    const location = useLocation()
    const start = location.state.startDate
    const end = location.state.endDate
    return (
        <div>
            <h1>{location.state.eventName}</h1>
            <p className="detailsText">
                {`From: ${start.slice(8,10)}/${start.slice(5,7)}/${start.slice(0,4)} To: ${end.slice(8,10)}/${end.slice(5,7)}/${end.slice(0,4)}`}
            </p>
            <br/>
            <p className="dText">{location.state.description}</p>
            <NavLink to='/eventList'>
                <button className="backButton">BACK</button>
            </NavLink>
        </div>
    )
}
export default EventDetails