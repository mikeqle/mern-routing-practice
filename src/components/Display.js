import React from 'react';

const Display = (props) => {
    const optionalStyle = props.optionalStyle.split("/");

    console.log(optionalStyle);
    const pStyle = {
        color: optionalStyle.length === 2? optionalStyle[0]:null,
        backgroundColor: optionalStyle.length === 2? optionalStyle[1]:null
    };
    

    console.log(pStyle);

    return(
        <div>
            {
                isNaN(+ props.content) ?
                <p style={pStyle}>The word is: { props.content }</p> :
                <p>The number is: { props.content }</p>
            }
        </div>
    );
}

export default Display;