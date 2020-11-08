import { Fragment } from 'react';
import Countdown from 'react-countdown';
import { lockdownExpiryDate } from './Constants'

import './TimeLeft.css'

const TimeLeft = () => {
    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return "Ελευθερία!"
        } else {
            // Render a countdown
            return (
                <Fragment>
                    <div>{ days } ημέρες</div>
                    <span>{hours} ω : {minutes} λ : {seconds} δ</span>
                </Fragment>
            );
        }
    };

    return (
        <section className="countdown">
            <div className="countdown__title">Υπομονή για:</div>
            <Countdown date={ lockdownExpiryDate } renderer={ renderer }/>
        </section>
)}

export default TimeLeft;