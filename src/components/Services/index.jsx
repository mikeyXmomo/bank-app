import React from 'react'
import Icon1 from '../../Images/svg-4.svg'
import Icon2 from '../../Images/svg-5.svg'
import Icon3 from '../../Images/svg-6.svg'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElement'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce our fees and increase your overal revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can acces our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP>
                </ServicesCard>
            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services
