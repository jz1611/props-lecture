import React from 'react';

function Input(props){
    return (
    <div>
        <label>Type a name</label>
        <input 
            onChange={props.changeHandler}
            value={props.name}
        />
    </div>
    )
}

export default Input;