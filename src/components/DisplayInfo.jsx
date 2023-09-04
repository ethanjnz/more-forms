import React from 'react'

export const DisplayInfo = (props) => {
    return (
        <div className='card shadow w-25 mx-auto'>
            <h2>Your Form Data</h2>
            <p>First Name: {props.firstname}</p>
            <p>Last Name: {props.lastname}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>Confirm Password: {props.confirmPassword}</p>

        </div>
    )
}

export default DisplayInfo
