import { useState, useEffect } from 'react';


export const useTimer = (hours=0, minutes=0, seconds=0) => {
    const [Seconds, setSeconds] = useState(seconds);
    const [Minutes, setMinutes] = useState(minutes);
    const [Hours, setHours] = useState(hours);

    let timeInterval;
    useEffect(() => {
        timeInterval = setInterval(() => {
            if (Seconds < 1 && Minutes < 1 && Hours < 1) {


                return <></>

            }



        }, 1000);




    }, [Seconds])

}