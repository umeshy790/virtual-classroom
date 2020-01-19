import React, { useState, useEffect } from "react";

function Vedio(props) {
  const { classes } = props;
  const [duration, setDuration] = useState(3600);

  /**
   * 
   * @param {*} secs 
   * 
   * convert seconds to hour, minutes and seconds as string.
   */
  const secondsToTime = secs => {
    if (!secs) {
      return `00:00:00`;
    }

    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    return `${formate(hours)}:${formate(minutes)}:${formate(seconds)}`;
  };

  /**
   * 
   * @param {*} value 
   * 
   * formating hour/min/sec to hh/mm/ss
   */
  const formate = value => (value.toString().length === 1 ? `0${value}` : `${value}`);
 
  useEffect(() => {
    if (duration) {
      setTimeout(() => {
        setDuration(duration => duration - 1);
      }, 1000);
    }
  }, [duration]);

  return (
    <div className={classes.vedio}>
      <div className={classes.heading}>
        <span>Computer Science</span>
        <span>{secondsToTime(duration)}</span>
      </div>
    </div>
  );
}

export default Vedio;
