import { useState } from 'react'
import Friend from './Friend';
import './friends.css'
import { useEffect } from 'react';


export default function Friends(){


    const[friends, setfriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    }, [])



    return (
        <div className='box'>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}