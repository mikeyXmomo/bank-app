import React from 'react'
import { Button } from '../Button'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElement'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, buttonLabel, alt, primary, dark }) => {
    return (
        <InfoContainer lightBg={lightBg} id={id} >
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headLine}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button to="signup" smooth={true} duration={500} spy={true} offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>

            </InfoWrapper>

        </InfoContainer>
    )
}

export default InfoSection
