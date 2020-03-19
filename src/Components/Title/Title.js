import React from 'react';
import tachyon from 'tachyons';

const title = (props) => (
    <div className="Title">
        <p className="heading grow color:#FFD700 background-color:#FFD700"><strong>Weather forecast</strong>  </p>
        <p className="text dim"> Just enter the name of the </p><p className="text grow">city and country</p>
    </div>
)

export default title;