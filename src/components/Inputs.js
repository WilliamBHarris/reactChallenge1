import React from 'react';

const Inputs = (props) => {

    const handleSubmit = () => {
        props.setName(props.name)
    }

    return (
        <div>
            <input placeholder='name' onChange={(e) => props.setName(e.target.value)} type="text" value={props.name} />            
            <input placeholder='age' onChange={(e) => props.setAge(e.target.value)} type="text" value={props.age} />            
            <input placeholder='hobbies' onChange={(e) => props.setHobbies(e.target.value)} type="text" value={props.hobbies} />
            <button onSubmit={handleSubmit} type='submit'>Submit</button>            
        </div>
    )
}

export default Inputs
