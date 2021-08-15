import React from 'react'
import ice4 from "../img/slide/bg_slide-icecube4.png"
import ice3 from "../img/slide/bg_slide-icecube3.png"
import ice2 from "../img/slide/bg_slide-icecube2.png"
import ice1 from "../img/slide/bg_slide-icecube1.png"

function SecondPage(){
    return(
        <div className="second_page content">
            <div className="second_page_title">
                Основа терапии -<br/> патогенез СД2
            </div>
            <img alt="ice" src={ice4} className="second_page_ice_4"/>
            <img alt="ice" src={ice3} className="second_page_ice_3"/>
            <img alt="ice" src={ice2} className="second_page_ice_2"/>
            <img alt="ice" src={ice1} className="second_page_ice_1"/>
        </div>
    )
}
export default SecondPage