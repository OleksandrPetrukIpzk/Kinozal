
export const TimeSlot = ({changeDate, time, activeTime}) => {

    return <button className={activeTime !== time ? 'commonTimeSlot' : 'activeTimeSlot'} onClick={() => changeDate(time)}>{time}</button>
}