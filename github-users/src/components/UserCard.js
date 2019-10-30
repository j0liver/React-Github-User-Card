import React from 'react';



const UserCard = (props) =>{

    return (
        <div>
            <section>

                <img src={props.avatar} alt='profile'/>
                <h1>{props.name}</h1>
            </section>
        </div>
    )
}


export default UserCard