import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-text'>
                <h2>some text</h2>
            </div>
            <div className='home-img'>
                <img src='http://www.sup.org/img/covers/large/pid_32708.jpg' alt=''></img>
            </div>
        </div>
    );
};

export default Home;