import React from 'react'

const Button = (props) => {
    return (
        <>
            <a href='#' className={` ${props.class} h-10 p-2 rounded-md flex items-center justify-center font-semibold`}>{props.text.charAt(0).toUpperCase() + props.text.slice(1)}</a>
        </>
    )
}

export default Button
