import React from 'react' ;
import Style from './Register.module.css' ;

const register =(props)=>{
    const errors = [];
    const sendErrors = (errors)=>{
        props.errorList(errors);
    }

    const validate = ()=>{
        const fullname = document.getElementById('fullname').value;
        const password = document.getElementById('password').value;
        const confirmpassword = document.getElementById('confirmpassword').value;
        if(fullname === '' ){
            errors.push('Fullname is blank');
            sendErrors(errors);
            return;
        }
        if(password !== confirmpassword ){
            errors.push('Password Didnot matched.');
            sendErrors(errors);
            return;
        }
    }

    return(
        <div className={Style.inputBox}>
                Full Name <br/>
                <input type="text" id="fullname" name="fullname" placeholder="Full Name" /> <br/><br/>
                Email <br/>
                <input type="email" id="email" name="email" placeholder="Email" /> <br/><br/>
                Password <br/>
                <input type="password" id="password" name="password" placeholder="Password" /> <br/><br/>
                Confirm Password <br/>
                <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" /> <br/><br/><br/>
                <input type="submit" value="Register" onClick={validate} />
                <a href="/login" id={Style.login}>Already have an account?</a>
        </div>
    );
}

export default register ;