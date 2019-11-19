import React from 'react';
import Friend from './Friend'

export default function FriendList(props){
    const mappedList = props.list.map((name, index) => {
        return <Friend key={index} name={name}/>
    });
    return <div>
        {mappedList}
    </div>
}