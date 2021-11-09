import './Footer.css'


export const Footer=()=>{
    return(
        <div className="footer">
           <div className="main">
           <div>
                <ul>
                    <p>Bus Hire Cities</p>
                    <li><a href="">Bus Hire in Ahmedabad</a></li>
                    <li><a href="">Bus Hire in Mumbai</a></li>
                    <li><a href="">Bus Hire in Bangalore</a></li>
                    <li><a href="">Bus Hire in Chennai</a></li>
                </ul>
            </div>
            <div className="p-miss">
                <ul>
                    {/* <p>Bus Hire Cities</p> */}
                    <li><a href="">Bus Hire in Pune</a></li>
                    <li><a href="">Bus Hire in Hyderabad</a></li>
                    <li><a href="">Bus Hire in Delhi</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <p>Tempo Traveller in other cities</p>
                    <li><a href="">Tempo Traveller in Bangalore</a></li>
                    <li><a href="">Tempo Traveller in Ahmedabad</a></li>
                    <li><a href="">Tempo Traveller in Coimbatore</a></li>
                    <li><a href="">Tempo Traveller in Vadodara</a></li>
                    <li><a href="">Tempo Traveller in Kolkata</a></li>
                </ul>
            </div>
            <div className="p-miss">
                <ul>
                    {/* <p>Bus Hire Cities</p> */}
                    <li><a href="">Tempo Traveller in Delhi</a></li>
                    <li><a href="">Tempo Traveller in Pune</a></li>
                    <li><a href="">Tempo Traveller in Mumbai</a></li>
                    <li><a href="">Tempo Traveller in Hyderabad</a></li>
                    <li><a href="">Tempo Traveller in Chennai</a></li>
                </ul>
            </div>
           </div>
        </div>
    )
}