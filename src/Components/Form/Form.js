import React from 'react';
import '../../App.css';
import tachyon from 'tachyons';

const Form = (props) => {
        return(
            <div className="Form" onSubmit={props.weather}>
                <p className="heading underline"><strong>Enter the city and country </strong> </p>
                <form >
                    <input type ="text" name="city" className= "input_style shadow-2 outline w-30 pa1 mr2" placeholder="City"></input>
                    <input type="text" name="country" className= "input_style shadow-2 outline w-30 pa1 mr2" placeholder="Country"></input>
                    <p>
                        <button className= "button_style grow shadow-5">Get Weather Conditions</button>
                    </p>
                </form>
            </div>
        )
    };

export default Form;