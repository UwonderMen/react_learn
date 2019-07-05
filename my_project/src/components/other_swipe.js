import ReactSwipe from "react-swipe";
import React from "react";

export default function OtherSwipe(props) {
    return <ReactSwipe
        className={props.className}
        swipeOptions={{
            speed: 300,
            startSlide: 1,
            auto: 1000
        }}>
        {
            props.data.map((item, index) => {
                return <li key={index}>
                    <img src={item.pic} alt={item.title} />
                </li>
            })
        }
    </ReactSwipe>
}

