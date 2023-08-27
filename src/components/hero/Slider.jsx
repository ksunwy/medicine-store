import React from 'react';
import { slide } from "../../assets/data/data";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Order = () => {
    return (
        <>
            <div className="slider">
                <div className="container grid">
                    {slide.map((item, i) => (
                        <div className="box" key={i}>
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Order;