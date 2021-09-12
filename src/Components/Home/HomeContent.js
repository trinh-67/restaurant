import React from 'react'
import AboutTitle from '../About/AboutTitle'
import ContactContent from '../Contact/ContactContent'
import Counting from '../Counting/Counting'
import FoodList from '../Food/FoodList'
import OurChef from '../Ourchef/Ourchef'

export default function HomeContent() {
    return (
        <div>
            <AboutTitle/>
            <FoodList/>
            <Counting/>
            <OurChef/>
            <ContactContent/>
        </div>
    )
}
