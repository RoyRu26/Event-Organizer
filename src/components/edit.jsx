import { eventContext } from "../App";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import '../details.css'
function Edit() {
    const { eventList } = useContext(eventContext)
    const location = useLocation()
    const start = eventList[location.state.index].startDate
    const end = eventList[location.state.index].endDate
    const [tempKey, setTempKey] = useState('')
    const [tempValue, setTempValue] = useState('')

    function onClick(key) {
        if (key !== tempKey) {
            setTempKey(key);
            setTempValue("");
        }
        else {
            setTempKey("");
        }
    }
    const onChange = e => {
        setTempValue(e.target.value)
    }

    const editObject = () => {
        eventList[location.state.index][tempKey] = tempValue;
        setTempValue("");
        setTempKey("");
    }
    const textArr = ['EVENT NAME', 'START DATE', 'END DATE', 'DESCRIPTION']
    return (
        <div>
            <h1>{`EDIT ${eventList[location.state.index].eventName}`}</h1>
            <p className="detailsText">{`From: ${start.slice(8, 10)}/${start.slice(5, 7)}/${start.slice(0, 4)} To: ${end.slice(8, 10)}/${end.slice(5, 7)}/${end.slice(0, 4)}`}</p>
            <br />
            <p className="dText">{eventList[location.state.index].description}</p>
            {location.state && Object.keys(eventList[location.state.index]).map((key, index) => <button className="editButton" onClick={() => onClick(key)}> {textArr[index]} </button>)}
            {tempKey &&
                <div>
                    {tempKey==='eventName'&&<input value={tempValue} type='text' onChange={onChange} placeholder='EVENT NAME'></input>}
                    {tempKey==='description'&&<input value={tempValue} type='text' onChange={onChange} placeholder='DESCRIPTION'></input>}
                    {tempKey==='startDate'&&<input value={tempValue} type='date' onChange={onChange} placeholder='START DATE'></input>}
                    {tempKey==='endDate'&&<input value={tempValue} type='date' onChange={onChange} placeholder='END DATE'></input>}
                    <button className="saveButton" onClick={editObject}>save</button>
                </div>
            }
        </div>
    )
}
export default Edit