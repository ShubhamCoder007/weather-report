import React, { Component } from 'react';
import tachyon from 'tachyons';

class Weather extends Component{
    render() {
        return(
            <div className="Weather">
                <p className="heading dim"> <strong>Weather Details</strong> </p>
                {
                    this.props.count && this.props.city && <p className="text grow">Location: <span>   
                        {this.props.city}, {this.props.count}
                    </span></p>
                }
                {
                    this.props.temp && <p className="text grow">Temperature: {this.props.temp}</p>
                }
                {
                    this.props.humid && <p className="text grow">Humidity: {this.props.humid}</p> 
                }
                {
                    this.props.des &&  <p className="text grow">Condition: {this.props.des}</p>
                }
                {
                    this.props.error && <p className="text grow">{this.props.error}</p>
                }

                <p>{this.props.errorMessage}</p>
            </div>
        )
    };
};

export default Weather;