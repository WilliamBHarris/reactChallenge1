import React from 'react';


const View = (props) => {
    console.log(props)

    return (
        <div>
            <h3>Name: {props.nameView}</h3>
            <h3>Age: {props.ageView}</h3>
            <h3>Hobbies: {props.hobbiesView}</h3>
        </div>
    )
}

export default View
