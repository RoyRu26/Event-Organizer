import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { eventContext } from "../App";
import '../form.css'
function EventForm()
{
    const {eventList, setEventList} = useContext(eventContext)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    const onSubmit = data =>
    {
        setEventList([...eventList, {eventName: data.eventName, startDate:data.startDate, endDate: data.endDate, description: data.description}])
        navigate('/eventList')
    }
    return(
        <form onSubmit={handleSubmit(onSubmit) }>
            <input type='text' placeholder="EVENT NAME" {...register('eventName', {required:true})}/>
            <p>STARTS AT:</p>
            <input type='date' {...register('startDate', {required:true})}/>
            <p>ENDS AT:</p>
            <input type='date' {...register('endDate', {required:true})}/>
            <input type='text' placeholder="DESCRIPTION" {...register('description', {required:true})}/>
            {errors.eventName && <p className="error">Please enter event's name</p>}
            {errors.startDate && <p className="error">Please enter start date</p>}
            {errors.endDate && <p className="error">Please enter end date</p>}
            {errors.description && <p className="error">Please add description</p>}
            <input className="submit" type='submit' value='ADD EVENT'/>
        </form>
    )
}
export default EventForm