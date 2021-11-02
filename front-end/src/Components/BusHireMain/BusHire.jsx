import { Banner } from "./Banner.jsx/BushireBanner"
import { BookIneasy } from "./BookInEasy/BookIneasy"
import { EasierWith } from "./EasierWithBusHire/EasierWith"
import { Offer } from "./Offer/Offer"
import { VechileType } from "./Vechicle type/VechicleType"
import { WithBusHire } from "./WithBusHire/WithBusHire"

export const Bushire=()=>{
    return(
        <div>
            <Banner/>
            <BookIneasy/>
            <Offer/>
            <WithBusHire/>
            <EasierWith/>
            <VechileType/>
        </div>
    )
}