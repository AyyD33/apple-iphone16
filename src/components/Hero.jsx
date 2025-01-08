import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

    const handleResize = () => {
        const mobileView = window.innerWidth < 760;
        setIsMobile(mobileView);
        setVideoSrc(mobileView ? smallHeroVideo : heroVideo);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useGSAP(() => {
        const heroAnimation = gsap.to("#hero", {
            opacity: 1,
            delay: 2,
            y: isMobile ? 0 : 180, // Adjust y-axis for desktop view
        });

        gsap.to('#cta', {
            opacity: 1,
            y: -100,
            delay: 2.25,
        });

    }, [isMobile]);

    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                {/* Adjust the <p> dynamically */}
                <p
                    id="hero"
                    className={`hero-title color-azure opacity-0 translate-y--10 text-3xl md:text-5xl font-bold`}>
                    iPhone 16 Pro
                </p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href='#highlights' className='btn'>Buy</a>
                <p className='font-normal text-xl'>From ₹10/month or ₹100</p>
            </div>
        </section>
    );
};

export default Hero;
