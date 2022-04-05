import React from 'react';
import "./Blog.css"

const Blogs = () => {
    return (
        <div className='blog-design'>
            <h2>Q1: What is context api?</h2>
            <p>Ans: Context api is actually an alternative of prop deillimg.It makes developers life easier .Without this, we had to pass props in child component which is kind of boaring.</p>
            <h2>Q2: What is semantic tag?</h2>
            <p>Ans: Semantic tag is a special kind of html tag.Because these tags gives details about what they are containing/ provide additional information about that document.Its also good practice to use semantic tag in your code.Example of some semantic tag:span, div, del, h1, abbr etc.</p>
        </div>
    );
};

export default Blogs;