import React from "react";
import styles from "./LandingPage.module.css"
import { FaCity } from "react-icons/fa"
const LandingPage = () => {
  return (
    <div>

      <div className={styles.welcome_image}>
        <div className={styles.total_form}>
          <div className={styles.type_from}>
            <input
              type="text"
              placeholder="FROM"
            />
          </div>
          <div className={styles.type_to}>
            <input
              type="text"
              placeholder="TO"
            />
          </div>

          <div className={styles.type_date}>
            <input
              type="date"
              placeholder="DATE" />
          </div>
          <div className={styles.type_search}>
            <button>Search Buses</button>
          </div>
        </div>
        <div className={styles.natak}>
          <img src="https://st.redbus.in/Images/natak/100x100.png" alt="" />
          <div className={styles.prompt}>  <div className={styles.prompt1}>SAVE THE DRAMA FOR THE STAGE!</div> <div className={styles.prompt2}>Book your favourite seat online with redBus.</div> </div>
        </div>
      </div>
      <div className={styles.main} >
        <div className={styles.div}>
          <p>Save up to Rs 150 on bus tickets
          </p>
          <img src="https://st.redbus.in/Images/INDOFFER/Nonatak/new/80x80.png" alt="imag" />
          <p>Use code FIRST</p>
        </div>
        <div className={styles.div}>
          <p>State wise Guidelines</p>
          <img src="https://st.redbus.in/Images/buscommon/guidelines.png" alt="imag" />
          <p>Click here for latest updates</p>
        </div>
        <div className={styles.div}>
          <p>Get 10% off upto Rs 100 on Gujarat routes.

          </p>
          <img src="https://st.redbus.in/Images/INDOFFER/FESTIVE/New/Diwali/274x147.png" alt="imag" />
          <p>Use code LIGHTS10</p>

        </div>
        <div className={styles.div}>
          <p>Flat Rs.300 cashback for first time slice users.
          </p>
          <img src="https://st.redbus.in/Images/slice/247x147.png" alt="imag" />
          <p>Use code SLICEIT</p>
        </div>
        <div className={styles.div}>
          <p>Get upto Rs. 500 on minimum purchase of Rs 300.
          </p>
          <img src="https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png" alt="imag" />
          <p>Pay using Amazon pay</p>
        </div>
        <div className={styles.div}>
          <p>Get 15% off upto Rs 150
          </p>
          <img src="https://st.redbus.in/Images/slice/247x147.png" alt="imag" />
          <p>Use code SLICEIT</p>
        </div>
      </div>
      <div>

      </div>


      <div className={styles.safety}>
        <div className={styles.img2_hero}></div>
        <div>
          <span className={styles.f1}>
            <div className={styles.Title_hero}>Safety+</div>
            <div className={styles.subtext_hero}>
              Opt to Travel Safe with redBus
              <a className={styles.know_more_anchor} href="/SafetyPlus">&nbsp;Know more</a>
            </div>
            <div className={styles.subHeader_hero}>
              <span className={styles.img3_hero}></span>
              <span className={styles.Herotext1}>Look for buses with </span>
              <span className={styles.img4_Hero}></span>
              <span className={styles.text}>   tag while booking your journey, </span>
            </div>
          </span>
        </div>
        <div className={styles.order}>
          <div className={styles.info_hero}>
            <div className={styles.titl_hero}> Sanitized Bus </div>
            <div className={styles.value_hero}> <br /></div>
            <div className={styles.text_hero}>All Safety+ buses are sanitized and disinfected before and after every trip. </div>
          </div>
          <div className={styles.info_hero2}>
            <div className={styles.titl_hero}> Mandatory masks </div>
            <div> <br /></div>
            <div className={styles.text_hero}>Proper masks are mandatory for all passengers and bus staff.</div>
          </div>
          <div className={styles.info_hero3}>
            <div className={styles.titl_hero}> Thermal Screening </div>
            <div className={styles.value_hero}> <br /></div>
            <div className={styles.text_hero}>All passengers will undergo thermal screening. Temperature checks for bus drivers and service staff are done before every trip. </div>
          </div>
        </div>
      </div>


      <div className={styles.pict}>

        <div>

          <div className={styles.pic}>
            <div className={styles.text1} >
              <div className={styles.heading1}>
                Convenience On-the-go.
              </div>
              <div className={styles.opd}> Enjoy the following exclusive features on the redBus app <br /><br /><span >Last Minute Booking</span> - In a hurry to book a bus at the last minute?Choose the bus passing from your nearest boarding point and book in a few easy steps.<br /><span className="Platform-hl">Boarding   Point Navigation</span> -  Never lose your way while travelling to your boarding point! <br /><span className="Platform-hl">Comprehensive Ticket Details </span>- Everything that you need to make the travel hassle free - rest stop details, boarding point images, chat with co-passengers,  wake-up alarm and much more!</div>
              <div >
                <span >Enter your mobile number below to download the redBus mobile app.</span>

                <div >
                  <div >
                    <select name="upphoneCode"><option value="93">93</option><option value="355">355</option><option value="213">213</option><option value="1684">1684</option><option value="376">376</option><option value="244">244</option><option value="1264">1264</option><option value="672">672</option><option value="1268">1268</option><option value="54">54</option><option value="374">374</option><option value="297">297</option><option value="61">61</option><option value="43">43</option><option value="994">994</option><option value="1242">1242</option><option value="973">973</option><option value="880">880</option><option value="1246">1246</option><option value="375">375</option><option value="32">32</option><option value="501">501</option><option value="229">229</option><option value="1441">1441</option><option value="975">975</option><option value="591">591</option><option value="599">599</option><option value="387">387</option><option value="267">267</option><option value="47">47</option><option value="55">55</option><option value="246">246</option><option value="673">673</option><option value="359">359</option><option value="226">226</option><option value="257">257</option><option value="855">855</option><option value="237">237</option><option value="1">1</option><option value="238">238</option><option value="1345">1345</option><option value="236">236</option><option value="235">235</option><option value="56">56</option><option value="86">86</option><option value="61">61</option><option value="61">61</option><option value="57">57</option><option value="269">269</option><option value="242">242</option><option value="243">243</option><option value="682">682</option><option value="506">506</option><option value="385">385</option><option value="53">53</option><option value="599">599</option><option value="357">357</option><option value="420">420</option><option value="225">225</option><option value="45">45</option><option value="253">253</option><option value="1767">1767</option><option value="1809">1809</option><option value="1829">1829</option><option value="1849">1849</option><option value="593">593</option><option value="20">20</option><option value="503">503</option><option value="240">240</option><option value="291">291</option><option value="372">372</option><option value="251">251</option><option value="500">500</option><option value="298">298</option><option value="679">679</option><option value="358">358</option><option value="33">33</option><option value="594">594</option><option value="689">689</option><option value="262">262</option><option value="241">241</option><option value="220">220</option><option value="995">995</option><option value="49">49</option><option value="233">233</option><option value="350">350</option><option value="30">30</option><option value="299">299</option><option value="1473">1473</option><option value="590">590</option><option value="1671">1671</option><option value="502">502</option><option value="44">44</option><option value="224">224</option><option value="245">245</option><option value="592">592</option><option value="509">509</option><option value="672">672</option><option value="379">379</option><option value="504">504</option><option value="852">852</option><option value="36">36</option><option value="354">354</option><option value="91">91</option><option value="62">62</option><option value="98">98</option><option value="964">964</option><option value="353">353</option><option value="44">44</option><option value="972">972</option><option value="39">39</option><option value="1876">1876</option><option value="81">81</option><option value="44">44</option><option value="962">962</option><option value="7">7</option><option value="254">254</option><option value="686">686</option><option value="850">850</option><option value="82">82</option><option value="965">965</option><option value="996">996</option><option value="856">856</option><option value="371">371</option><option value="961">961</option><option value="266">266</option><option value="231">231</option><option value="218">218</option><option value="423">423</option><option value="370">370</option><option value="352">352</option><option value="853">853</option><option value="389">389</option><option value="261">261</option><option value="265">265</option><option value="60">60</option><option value="960">960</option><option value="223">223</option><option value="356">356</option><option value="692">692</option><option value="596">596</option><option value="222">222</option><option value="230">230</option><option value="262">262</option><option value="52">52</option><option value="691">691</option><option value="373">373</option><option value="377">377</option><option value="976">976</option><option value="382">382</option><option value="1664">1664</option><option value="212">212</option><option value="258">258</option><option value="95">95</option><option value="264">264</option><option value="674">674</option><option value="977">977</option><option value="31">31</option><option value="687">687</option><option value="64">64</option><option value="505">505</option><option value="227">227</option><option value="234">234</option><option value="683">683</option><option value="672">672</option><option value="1670">1670</option><option value="47">47</option><option value="968">968</option><option value="92">92</option><option value="680">680</option><option value="970">970</option><option value="507">507</option><option value="675">675</option><option value="595">595</option><option value="51">51</option><option value="63">63</option><option value="870">870</option><option value="48">48</option><option value="351">351</option><option value="1">1</option><option value="974">974</option><option value="40">40</option><option value="7">7</option><option value="250">250</option><option value="262">262</option><option value="590">590</option><option value="290">290</option><option value="1869">1869</option><option value="1758">1758</option><option value="590">590</option><option value="508">508</option><option value="1784">1784</option><option value="685">685</option><option value="378">378</option><option value="239">239</option><option value="966">966</option><option value="221">221</option><option value="381">381</option><option value="248">248</option><option value="232">232</option><option value="65">65</option><option value="1721">1721</option><option value="421">421</option><option value="386">386</option><option value="677">677</option><option value="252">252</option><option value="27">27</option><option value="500">500</option><option value="211">211</option><option value="34">34</option><option value="94">94</option><option value="249">249</option><option value="597">597</option><option value="47">47</option><option value="268">268</option><option value="46">46</option><option value="41">41</option><option value="963">963</option><option value="886">886</option><option value="992">992</option><option value="255">255</option><option value="66">66</option><option value="670">670</option><option value="228">228</option><option value="690">690</option><option value="676">676</option><option value="1868">1868</option><option value="216">216</option><option value="90">90</option><option value="993">993</option><option value="1649">1649</option><option value="688">688</option><option value="256">256</option><option value="380">380</option><option value="971">971</option><option value="44">44</option><option value="1">1</option><option value="1">1</option><option value="598">598</option><option value="998">998</option><option value="678">678</option><option value="58">58</option><option value="84">84</option><option value="1284">1284</option><option value="1340">1340</option><option value="681">681</option><option value="212">212</option><option value="967">967</option><option value="260">260</option><option value="263">263</option></select>
                    <input type="text" placeholder="Enter your mobile number" data-validate="required|phone" maxlength="15" data-message="Enter the mobile number|Invalid Mobile No" />
                    <div>SMS sent with download link</div>
                    <div >Sorry !please try again.We are facing issues in sending SMS</div>
                    <input name="" type="button" value="SMS me the link" />
                  </div>
                </div>

              </div>
              <div >
                <span>
                  <a href="https://itunes.apple.com/in/app/redbus/id733712604?mt=8 target=_blank">
                    <img src="//s2.rdbuz.com/web/images/home/sgp/iPhone_download.png" alt="" />
                  </a>
                </span>
                <span>
                  <a href="https://play.google.com/store/apps/details?id=in.redbus.android&amp;hl=en ">
                    <img src="//s3.rdbuz.com/web/images/home/sgp/Google_download.png" alt="" />
                  </a>

                </span>

              </div>
              <div>

                <a href="https://itunes.apple.com/in/app/redbus/id733712604?mt=8" >


                </a>
                <a href="https://play.google.com/store/apps/details?id=in.redbus.android&amp;hl=en" >

                </a>
              </div>

            </div>
          </div>
          <div className={styles.pic1} >
            <img src="//s1.rdbuz.com/web/images/home/IOS_Android_device.png" alt="" />

          </div>
        </div>



        <div className={styles.bgImgCont}>
          <img className={styles.bg_img} src="http://s2.rdbuz.com/web/images/home/city_scape_app_download.png" alt="" />
        </div>

      </div>


    </div>
  )
}


export { LandingPage }