import React from 'react';

const Home = (props) => {
    const {name} = props
    return (
        <div>
            hi {name.id}, you logged in succesfully.
        </div>
    );
};

export default Home;