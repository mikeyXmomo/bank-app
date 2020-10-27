import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElement'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink>How it works</FooterLink>
                            <FooterLink>Testimonials</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Investors</FooterLink>
                            <FooterLink>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink>Submit Video</FooterLink>
                            <FooterLink>Ambassadors</FooterLink>
                            <FooterLink>Agency</FooterLink>
                            <FooterLink>Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink>Contact</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Destinations</FooterLink>
                            <FooterLink>Sponsorship</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink>Instagram</FooterLink>
                            <FooterLink>Facebook</FooterLink>
                            <FooterLink>Youtube</FooterLink>
                            <FooterLink>Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla &copy; {new Date().getFullYear()} All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
