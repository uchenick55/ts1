import React from "react";

interface CardProps {
    width?: string; // параметр width необязательный поскольку стоит ?
    height?: string;// параметр height необязательный поскольку стоит ?
    children?: React.ReactChild | React.ReactNode // тип содержимого карточки
}

const Card = ({width, height, children}: CardProps)=> {
    // указали какие типизированные пропсы отностятся к параметру width
    return <div style={{width, height, border: '1px solid red'}}>
        {children}
    </div>
}
export default Card

