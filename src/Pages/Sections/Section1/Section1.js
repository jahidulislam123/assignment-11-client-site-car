import React from 'react';
import imageSection from'../../../images/pexels-pixabay-159293.jpg'
import imageSection2 from '../../../images/pexels-pixabay-248747.jpg'
import head from '../../../images/gettyimages-165794472-612x612-removebg-preview.png'
import './Section1.css'


const Section1 = () => {
    return (
        <div className='bordre-section' >
            <img className='w-50 img' src={head} alt="" />
            <div className='d-flex-section '>
            <div>
            <img className='imgSection' src={imageSection} alt="" />
            </div>
            <div>
                <h2>Why Our Company ?</h2>
                <h4>Ensure Ensurnce</h4>
                <h4>Refund Confirmation</h4>
                <h4>Number of Choosing Option</h4>
                <h4>Pre Order Service</h4>

            </div>
            <div>
            <img className='imgSection' src={imageSection2} alt="" />

            </div>
            </div>
        </div>
    );
};

export default Section1;