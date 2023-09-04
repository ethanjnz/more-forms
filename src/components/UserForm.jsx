import { useState } from "react";
import DisplayInfo from "./DisplayInfo";

// first create your props for the form => what each input will be

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    // create a function that handles the refresh of the page whilst putting values in object like db

    const createUser = (e) => {
        // handles the refresh
        e.preventDefault();

        // create the object to handle form data
        const newUser = { firstname, lastname, email, password };
        console.log('hello', newUser);
        // set the inputs back to beginning value => empty string
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div>
            <form className="card w-25 mx-auto m-5 shadow" onSubmit={createUser}>
                <div className="card-body">
                    <div className="m-3">
                        <label className="form-label" htmlFor="firstname">First Name:</label>
                        <input className="form-control" type="text" name="firstname" id="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="lastname">Last Name:</label>
                        <input className="form-control" type="text" name="lastname" id="lastname" onChange={(e) => setLastName(e.target.value)} value={lastname} />
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input className="form-control" type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-control" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                        <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Create User" />
                </div>
            </form>
            <DisplayInfo firstname={firstname} lastname={lastname} email={email} password={password} confirmPassword={confirmPassword} />
        </div>
    );
};

export default UserForm

