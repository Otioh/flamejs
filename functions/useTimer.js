import { useState, useEffect } from 'react';


export const useTimer = (hours, minutes, seconds) => {
    const [Seconds, setSeconds] = useState(seconds);
    const [Minutes, setMinutes] = useState(minutes);
    const [Hours, setHours] = useState(hours);

    let timeInterval;
    useEffect(() => {
        timeInterval = setInterval(() => {
            if (Seconds < 1 && Minutes < 1 && Hours < 1) {


                return

            }



        }, 1000);




    }, [Seconds])

}