import React from "react";
import Card from "./Card";
import "./ThankYou.css"
import thankYouImg from '../images/illustration-thank-you.svg'

export default function ThankYou({rating}) {
    return (
        <Card>
            <div className="thank-you-img-container">
                <img src={thankYouImg} alt="" />
            </div>
            <div className="selected">
                <p>You selected {rating} out of 5</p>
            </div>

            <h2 className="thank-you-title">Thank you!</h2>
            <p className="thank-you-text">
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </Card>
    )
}