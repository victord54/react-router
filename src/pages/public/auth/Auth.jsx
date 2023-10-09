import React, { useState } from "react";

function Auth(props) {
    const [credentials, setCredentials] = useState({ mail: "", password: "" });

    function onChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(credentials);
    }

    return (
        <>
            <h1>Authentication</h1>
            <section>
                <form onSubmit={(e) => onSubmit(e)}>
                    <label htmlFor="mail">Mail</label>
                    <input
                        type="email"
                        name="mail"
                        id="mail"
                        value={credentials.mail}
                        onChange={(e) => onChange(e)}
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={credentials.password}
                        onChange={(e) => onChange(e)}
                    />
                    <input type="submit" value="Connexion" />
                </form>
            </section>
        </>
    );
}

export default Auth;
