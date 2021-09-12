import React from 'react'
import AboutBanner from '../../Components/About/AboutBanner'
import AboutTitle from '../../Components/About/AboutTitle'
import Counting from '../../Components/Counting/Counting'
import Ourchef from '../../Components/Ourchef/Ourchef'

export default function About() {
    return (
        <div>
            <AboutBanner />
            <AboutTitle />
            <Counting />
            <Ourchef />
        </div>
    )
}
