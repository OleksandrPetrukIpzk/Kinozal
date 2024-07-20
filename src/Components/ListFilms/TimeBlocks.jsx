import {TimeSlot} from "./TimeSlot";

export const TimeBlocks = ({changeDate, activeTime}) =>{

    return (<div className='date'>
        <TimeSlot time={'8:00'} activeTime={activeTime} changeDate={changeDate}/>
        <TimeSlot time={'15:00'} activeTime={activeTime} changeDate={changeDate}/>
        <TimeSlot time={'18:00'} activeTime={activeTime} changeDate={changeDate}/>
    </div>)
}