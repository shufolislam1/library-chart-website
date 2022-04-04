import React from 'react';
import "./Home.css"
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-text'>
                <h1>Find Unique And Popular Books!</h1>
                <h1>In Your Favourite Book Store...</h1>
                <p>Books are our all time friends.And it is one of the most valuable thing in our life.You can find any kind of books in our store.So, find your desired book and grow your knowledge by reading book.We also do home delivery.If needed, Please let us Know</p>
                <Button variant="success">Order Now</Button>
            </div>
            <div className='home-img'>
                <img src='http://www.sup.org/img/covers/large/pid_32708.jpg' alt=''></img>
            </div>
        </div>
    );
};

export default Home;