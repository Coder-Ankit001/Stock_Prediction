import React from 'react'
import { Link } from 'react-router'

const Button = (props) => {
    return (
        <>
            <Link to={`${props.url}`} className={` ${props.class} h-9 p-2 rounded-md flex items-center justify-center font-semibold`}>{props.text.charAt(0).toUpperCase() + props.text.slice(1)}</Link>
        </>
    )
}

export default Button
