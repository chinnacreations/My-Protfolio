import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';

import python from '../../public/images/Technologies/python.png'
import react from '../../public/images/Technologies/react.png'
import mysql from '../../public/images/Technologies/mysql.png'
import typescript from '../../public/images/Technologies/Tyscript.png'
import exel from '../../public/images/Technologies/exel.png'
import ppt from '../../public/images/Technologies/ppt.png'
import html from '../../public/images/Technologies/html.png'
import css from '../../public/images/Technologies/css.png'
import word from '../../public/images/Technologies/word.png'
import redux from '../../public/images/Technologies/redux.png'
import js from '../../public/images/Technologies/js.png'
import node from '../../public/images/Technologies/node js.png'
import mongodb from '../../public/images/Technologies/mongodb.png'

import 'swiper/css'; 
import 'swiper/css/bundle';

const technologiesData = [
    {
        image: python,
        alt: 'python Logo',
    },
    {
        image: react,
        alt: 'react Logo',
    },
    {
        image: typescript,
        alt: 'typescript',
    },
    {
        image: mysql,
        alt: 'mysql Logo',
    },
    {
        image: exel,
        alt: 'exel Logo',
    },
    {
        image: js,
        alt: 'js Logo',
    },
    {
        image: redux,
        alt: 'redux Logo',
    },
    {
        image: word,
        alt: 'word Logo',
    },
    {
        image: css,
        alt: 'css Logo',
    },
    {
        image: html,
        alt: 'html Logo',
    },
    {
        image: ppt,
        alt: 'ppt Logo',
    },
    {
        image: mongodb,
        alt: 'mongodb Logo',
    },
    {
        image: node,
        alt: 'node Logo',
    },
    
   
];


const Technologies = () => {
    const [slider, setSlider] = useState(null);
    useEffect(() => {
        if (!slider) {
            const brandSlider = new Swiper('#brandSlider1', {
                breakpoints: {
                    0: { slidesPerView: 7 },
                    576: { slidesPerView: 5 },
                    768: { slidesPerView: 5 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 5 },
                    1400: { slidesPerView: 6 },
                },
                loop: true, // Enable continuous loop
            });
            setSlider(brandSlider);
        }
    }, [slider]);

    useEffect(() => {
        const slideNextWithDelay = () => {
            if (slider) {
                setTimeout(() => {
                    slider.slideNext();
                    slideNextWithDelay();
                }, 3000);
            }
        };

        slideNextWithDelay();

        return () => clearTimeout();
    }, [slider]);

    return (
        <div className='mb-4'>
             <div className="section-title">
             <h3 className='text-center mt-5'>MY SKILLS</h3>
            <div className="bar"></div>
          </div>
            <div className="brand-area mt-1">
                <div className="container th-container">
                    <div className="swiper th-slider" id="brandSlider1">
                        <div className="swiper-wrapper">
                            {technologiesData.map((tech, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="brand-box">
                                        <img src={tech.image} alt={tech.alt} height={50} width={100} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;

