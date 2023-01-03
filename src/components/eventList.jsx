import { eventContext } from "../App";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../list.css'
function EventList() {
    const { eventList, setEventList } = useContext(eventContext)
    // console.log(eventList)
    function deleteEvent(i) {
        setEventList(eventList.filter((item, itemIndex) => i !== itemIndex))
    }
    return (
            <ul>
                {eventList.map((event, index) => 
                <li key={index}>
                    <p className="boldName">
                        {`${event.eventName}`}
                    </p>
                    <pre>
                        {`${event.startDate}   to   ${event.endDate}`}
                    </pre>
                    <div className="buttonDiv">
                        <NavLink to={`/eventDetails/${event.eventName}`} state={{ eventName: event.eventName, startDate: event.startDate, endDate: event.endDate, description: event.description }}>
                            <button>Show more</button>
                        </NavLink>
                        <NavLink to="/edit" state={{ index: index }}>
                            <button>Edit</button>
                        </NavLink>
                        <button className="xButton" onClick={() => deleteEvent(index)}>X</button>
                    </div>
                </li>
                )}
            </ul >
    )
}
export default EventList