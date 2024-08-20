import React from 'react'
import ImageSupervisor from '../assets/images/icon-supervisor.svg'
import ImageTeamBuilder from '../assets/images/icon-team-builder.svg'
import ImageKarma from '../assets/images/icon-karma.svg'
import ImageCalculator from '../assets/images/icon-calculator.svg'

const FeatureSection = () => {

    // Feature Card Objects 
    const featureCards = [{
        heading: 'Supervisor',
        text: 'Monitors activity to identify project roadblocks',
        image: ImageSupervisor,
        topBorder: 'bg-Cyan'
    }, {
        heading: 'Team Builder',
        text: 'Scans our talent network to create the optimal team for your project',
        image: ImageTeamBuilder,
        topBorder: 'bg-Red'
    }, {
        heading: 'Karma',
        text: 'Regularly evaluates our talent to ensure quality',
        image: ImageKarma,
        topBorder: 'bg-Orange'
    }, {
        heading: 'Calculator',
        text: 'Uses data from past projects to provide better delivery estimates',
        image: ImageCalculator,
        topBorder: 'bg-Blue'
    }]

    return (
        <div className=' xl:max-w-[70rem] lg:max-w-[90%] max-w-[85%] m-auto my-16 lg:my-10'>
            {/* Headings  */}
            <h1 className=' text-center text-Very-Dark-Blue font-extralight text-2xl lg:text-5xl'>Reliable, efficient delivery </h1>
            <h1 className=' text-center text-Very-Dark-Blue font-semibold text-2xl lg:text-5xl py-2 lg:py-4'> Powered by Technology</h1>
            {/* Paragraph  */}
            <p className=' text-center text-Grayish-Blue lg:w-1/2 mx-auto tracking-tight'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            {/* Feature Cards  */}
            <div className='grid lg:grid-cols-3  items-center gap-6 lg:gap-3 pt-14 md:w-1/2 md:mx-auto lg:w-full' >
                <FeatureCard card={featureCards[0]} />
                <div className='grid gap-6 lg:gap-3'>
                    <FeatureCard card={featureCards[1]} />
                    <FeatureCard card={featureCards[2]} />
                </div>
                <FeatureCard card={featureCards[3]} />
            </div>
        </div>
    )
}

const FeatureCard = (props) => {
    return (
        <div>
            <div className={` bg-white p-8 lg:p-6 rounded-lg grid gap-2 lg:gap-3 shadow-lg relative overflow-hidden`}>
                <div className={`absolute h-1 w-full top-0 left-0 ${props.card.topBorder}`}></div>
                <h2 className=' text-Very-Dark-Blue font-semibold text-xl'>{props.card.heading}</h2>
                <p className=' text-Grayish-Blue text-[15px] tracking-tight'>{props.card.text}</p>
                <img className='place-self-end pt-10 lg:pt-7' src={props.card.image} alt={props.card.heading} />
            </div>
        </div>
    )
}

export default FeatureSection