import React from 'react'
import Image from 'next/image'
import BannerBackground from "../../Assets/home-banner-background.png"
import BannerImage from "../../Assets/home-banner-image.png"
import {
    FiArrowRight
} from "react-icons/fi"
import About from '../About/page'


const Home = () => {
    return (
        <div>
            <div className='home-controller'>
                <div className="home-banner-container">
                    <div className="home-bannerImage-container">
                        <Image src={BannerBackground} alt='bannerbackground' />
                    </div>
                    <div className='home-text-section'>
                        <h1 className='primary-heading'>
                            Your Favorite Food Delivered Hot & Fresh
                        </h1>
                        <p className='primary-text'>
                            Healthy switcher chefs do all the prop work, like pooding, chopping & marinating, so you can cook a fresh food
                        </p>
                        <button className='secondary-button'>
                            Order Now <FiArrowRight />
                        </button>

                    </div>
                    <div className='home-image-container'>
                        <Image src={BannerImage} alt='BannerImage' width={500} />
                    </div>
                </div>

            </div>
            <div>
                <About />
            </div>

        </div>

    )
}

export default Home