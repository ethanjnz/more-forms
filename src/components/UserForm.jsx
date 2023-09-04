import { useState } from "react";
import DisplayInfo from "./DisplayInfo";

// first create your props for the form => what each input will be

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmited, setHasBeenSubmited] = useState(false)
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


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
        setHasBeenSubmited(true)
    };

    // validations
    const isValid = (e) => {
        e.preventDefault();

        let isValidForm = true;

        // first name
        if (firstname.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
            isValidForm = false;
        } else {
            setFirstNameError("")
        }

        //last name
        if (lastname.length < 2) {
            setLastNameError("Last name must be at least 2 characters");
            isValidForm = false;
        } else {
            setLastNameError("")
        }

        // email
        if (email.length < 5) {
            setEmailError("Email must be at least 5 characters");
            isValidForm = false;
        } else {
            setEmailError("")
        }

        // password
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
            isValidForm = false;
        } else {
            setPasswordError("")
        }

        // confirm password
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords must match!");
            isValidForm = false;
        } else {
            setConfirmPasswordError("")
        }



        if (isValidForm) {
            createUser(e);
        }

    }
    return (
        <div>
            <div className="mx-auto m-5">
                {
                    hasBeenSubmited ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form</h3>

                }

            </div>
            <form className="card w-25 mx-auto m-5 shadow" onSubmit={isValid}>
                <div className="card-body">
                    <div className="m-3">
                        <label className="form-label" htmlFor="firstname">First Name:</label>
                        <input className="form-control" type="text" name="firstname" id="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstname} />
                        {
                            firstNameError ?
                                <p className="alert alert-warning m-2 lh-1" role="alert">{firstNameError}</p> :
                                ""
                        }
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="lastname">Last Name:</label>
                        <input className="form-control" type="text" name="lastname" id="lastname" onChange={(e) => setLastName(e.target.value)} value={lastname} />
                        {
                            lastNameError ?
                                <p className="alert alert-warning m-2 lh-1" role="alert">{lastNameError}</p> :
                                ""
                        }
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="email">Email:</label>
                        <input className="form-control" type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        {
                            emailError ?
                                <p className="alert alert-warning m-2 lh-1" role="alert">{emailError}</p> :
                                ""
                        }
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="password">Password:</label>
                        <input className="form-control" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        {
                            passwordError ?
                                <p className="alert alert-warning m-2 lh-1" role="alert">{passwordError}</p> :
                                ""
                        }
                    </div>
                    <div className="m-3">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                        <input className="form-control" type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                        {
                            confirmPasswordError ?
                                <p className="alert alert-warning m-2 lh-1" role="alert">{confirmPasswordError}</p> :
                                ""
                        }
                    </div>
                    <input className="btn btn-primary" type="submit" value="Create User" />
                </div>
            </form>
            <DisplayInfo firstname={firstname} lastname={lastname} email={email} password={password} confirmPassword={confirmPassword} />
        </div>
    );
};

export default UserForm

