import {RentalBanners} from "../RentalBanner/RentalBannerss";
import styled from "styled-components";
import {Show_one} from "../vehicles/show-vehicle/Show-vehicle";

function Show({miniHead, miniSubHead, data}) {
    const Container = styled.div`
        width: 100%;
        border: 1px solid black;
        // height: 1000px;

    `
    const Step_container =  styled.div`
        width: 100%;
        height: 100px;
        // border : 1px solid black;
        background-color: #f8f4f4;
        // display: flex;
        // flex-wrap: wrap;
        // align-items : center;
    `
    const ItemContainer = styled.div`
        // padding: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items : center;
        margin-left: 20%;

    `
    const Item = styled.div`
        padding: 20px;
        width: 340px;
        display: flex;
        // flex-wrap: wrap;
        align-items : center;
        flex-direction: row;

    `
    const Number = styled.div`
        float: left;
        width: 60px;
        height: 40px;
        border-radius: 50%;
        background-color: tomato;
        color: white;
        align-items: center;
        text-align: center;
        padding-top: 10px;
        font-weight: bolder;
    `
    const Text = styled.div`
        float : left;
        margin-left: 20px;
    `
    const Vehicle_container = styled.div`
        background-color: #dfe7fd;
        width: 100%;
        height: 100%;
        
        

    `
    const Item_cont = styled.div`

        margin: auto;
        padding: 20px;
        width: 1000px;
        // height: 1000px;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-gap: 20px;
    `
    const Covid_guidline = styled.div`
        width: 100%;
        // border: 1px solid black;
        // height: 1000px;
    `
    const Covid_area = styled.div`
        width: 1000px;
        // border: 1px solid black;
        margin: auto;
        // height: 100%;
        margin-top: 20px;
    
    `
    const Covid_heading = styled.h2`

    `
    const Covid_zone = styled.div`
        width: 100%;
        // border: 1px solid black;
        display: flex;
        // grid-gap: 5px;
        flex-wrap: wrap;
        padding: 20px;
        align-item: space-between;
    `
    const Zone_name = styled.div`
        height: 40px;
        border-radius: 15px;
        padding: 5px;
        margin: 10px;
        border: 2px solid black;
        font-weight: bolder;
    `
    const Guide_table = styled.table`
        width: 100%;
        border: 1px solid red;
        border-radius: 10px;
        border-collapse: collapse;

    `
    const Tr = styled.tr`
        border: 1px solid red;
        
    `
    const Tda = styled.td`
        padding: 15px;
        border: 1px solid red;
        border-right: 0px solid red;
        border-collapse: collapse;

    `
    const Tdb = styled.td`
        padding: 15px;
        border: 1px solid red;
        border-left: 0px solid red;
        border-collapse: collapse;

    `
    const Mini = styled.h3`
    
    `
    const Mini_details = styled.div`
        width: 100%;
    `
    return (
        <div>
            <RentalBanners bannerHeading = {miniHead} bannerSubHeading = {miniSubHead}/>
            <Container>
                <Step_container>
                    <ItemContainer>
                        <Item>
                            <Number>1</Number>
                            <Text>Click on "HIRE A VEHICLE" and give your trip details</Text>
                        </Item>
                        <Item>
                            <Number>2</Number>
                            <Text>We work with best operators to get the best prices</Text>
                        </Item>
                        <Item>
                            <Number>3</Number>
                            <Text>Select the vehicle of yoru choise and go on tyour trip.</Text>
                        </Item>
                    </ItemContainer>
                </Step_container>
                <Vehicle_container>
                    <Item_cont>
                        {
                            data[0].map((e) => (
                                <Show_one data = {e}></Show_one>
                            ))
                        }
                       
                    </Item_cont>
                </Vehicle_container>
                <Covid_guidline>
                        <Covid_area>
                            <Covid_heading>COVID-19 Travel Guidelines</Covid_heading>
                            <Covid_zone>
                                <Zone_name>BANGALORE</Zone_name>
                                <Zone_name>HYDERABAD</Zone_name>
                                <Zone_name>KOLKATA</Zone_name>
                                <Zone_name>AHMEDABAD</Zone_name>
                                <Zone_name>MADURAI</Zone_name>
                                <Zone_name>PUNE</Zone_name>
                                <Zone_name>VISAKHAPATNAM</Zone_name>
                                <Zone_name>VADODARA</Zone_name>
                                <Zone_name>MYSORE</Zone_name>
                                <Zone_name>SURAT</Zone_name>
                                <Zone_name>COIMBATORE</Zone_name>
                                <Zone_name>CHENNAI</Zone_name>
                                <Zone_name>MUMBAI</Zone_name>
                                <Zone_name>DELHI</Zone_name>
                                

                            </Covid_zone>
                            <Covid_heading>Karnataka Lockdown Guidlines</Covid_heading>
                            <Guide_table>
                                <Tr>
                                    <Tda>Last Updated on</Tda>
                                    <Tdb>3rd August 2021</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Guidelines Validity</Tda>
                                    <Tdb>Unlocked</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Complete Lockdown</Tda>
                                    <Tdb>Unlocked</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Relaxation timings</Tda>
                                    <Tdb>NA</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>(Section 144) Active</Tda>
                                    <Tdb>NA</Tdb>
                                </Tr><Tr>
                                    <Tda>Restriction within interstate travel</Tda>
                                    <Tdb>Interstate - Epasss Required for interstate movement</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Restriction iwthin intrastate travel</Tda>
                                    <Tdb>No</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Restriction within Local city travel</Tda>
                                    <Tdb>No</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>RTPCR Negative Test required to enter the state</Tda>
                                    <Tdb>NO</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>RTPCR Negative Test report required to travel Outstation</Tda>
                                    <Tdb>Yes (Only inter state movement)</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Occupancy restriction</Tda>
                                    <Tdb>100% Inter district -Upto 70%Inter state</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Tourist Destinations </Tda>
                                    <Tdb>Open</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>E-Pass required to travel</Tda>
                                    <Tdb>No</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>Entry to the Specific States which are Not allowed from the above source</Tda>
                                    <Tdb>E-Pass is Required for interstate movement RTCPR mandatory to travel to OOty while passengers from MH/ Kerala had to product RTPCR report destination State guidline to be followed</Tdb>
                                </Tr>
                                <Tr>
                                    <Tda>E-Pass Link</Tda>
                                    <Tdb>NA</Tdb>
                                </Tr>
                            </Guide_table>
                            

                            <Mini>
                                What is a minibus?
                                
                            </Mini>
                            <Mini_details>
                                A minibus is, ast he name sugests, the smaller version of a large luxury bus with sligtly more number of sea sthan a minivan can accomodate. The concept her eis to allow people to choose a smaller bus when they do not need a regular size bus and can still have the same comfort and amenties thae larger buses can offer. The number of seats that a minibus can accommodate ranges between 15 - 25 depending upon its size. The front-engine, front-entrance minibuses are ideal for a smaller group to travel ogether without havint to spend more. RedBus if offering a wider range of such buses to choose from to suit your demands and destination.
                            </Mini_details>
                        </Covid_area>
                </Covid_guidline>    
            </Container>
            
        </div>
    )
}
export {Show};