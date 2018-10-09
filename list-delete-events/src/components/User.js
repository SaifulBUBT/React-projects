import React from 'react'

const User = (props) =>{
    return(
        <li>
            <span>Name: {props.children}, age: {props.age} </span>
            <button onClick={props.delEvent}>delete</button>
        </li>
    )
}

export default User;