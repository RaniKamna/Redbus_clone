import { Banner } from "./Banner.jsx/BushireBanner"
import { BookIneasy } from "./BookInEasy/BookIneasy"
import { EasierWith } from "./EasierWithBusHire/EasierWith"
import { Offer } from "./Offer/Offer"
import { VechileType } from "./Vechicle type/VechicleType"
import { WhyBook } from "./WhyBook/WhyBook"
import { WithBusHire } from "./WithBusHire/WithBusHire"
import { Operates } from "./BusOperates/BusOperates"
import FaqSection from "./FAQ/FAQ"
import {Docs} from './HireDocs/Docs'
import {SubFooter} from '../Footer/SubFooter'
import { Footer } from "../Footer/Footer"

export const Bushire=()=>{
    return(
        <div>
            <Banner/>
            <BookIneasy/>
            <Offer/>
            <WithBusHire/>
            <EasierWith/>
            <VechileType/>
            <WhyBook/>
            <Operates/>
            <FaqSection/>
            <Docs/>
            <SubFooter/>
            {/* <Footer/> */}
        </div>
    )
}