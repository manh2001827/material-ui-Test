import React from 'react'
import Header from './header/header'
import Section from './section/section'
import Step from './step/step'
import Offer from './offer/offer'
import Target from './target/target'
import Review from './review/review'
import Policy from './policy/policy'
import Gallery from './gallery/gallery'
import Footer from './footer/footer'
import Phone from './phone/phone'
export default function index() {
    return (
        <div>
            <Header />
            <Section />
            <Step />
            <Offer />
            <Target />
            <Review />
            <Policy/>
            <Gallery />
            <Footer/>
            <Phone/>
        </div>
    )
}
