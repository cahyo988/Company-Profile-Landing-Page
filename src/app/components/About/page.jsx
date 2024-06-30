import React from 'react';
import AboutBackground from "../../Assets/about-background.png"
import AboutBackGroundImage from "../../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Image from 'next/image';

const About = () => {
    return (

        <div className='about-section-container'>
            <div className='about-background-image-container'>
                <Image src={AboutBackground} alt='ABOUTBACKROUNDIMG' width={500} />
            </div>
            <div className='about-section-image-container'>
                <Image src={AboutBackGroundImage} alt='ABOUTBGIMG' width={700} />

            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className='primary-heading'>
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, nemo.
                </p>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptates. Fugit, officia nobis?
                </p>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </div>

    )
}

export default About