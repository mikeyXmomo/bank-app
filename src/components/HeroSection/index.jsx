import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElement'
import Video from '../../Video/video.mp4'
import { Button } from '../Button';

const HeroSection = () => {
    const [hover, sethover] = useState(false);
    const onHover = () =>{
        sethover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credit towards your next paymnet</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" primary="true" dark="true" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
