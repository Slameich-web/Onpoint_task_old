import React from 'react'
import SwipeDown from "./swipeDown"
import Circle from './Circle'
function FirstPage(){
    return(
        <div className="content first_page">
            <div className="first_page_title">
                Всегда ли цели терапии СД2<br/> на поверхности?
            </div>
            <div className="first_page_text1 first_page_text">Цель по HbA1c</div>
            <Circle classNumber="1"/>
            <div className="first_page_text2 first_page_text">Гипогликемия</div>
            <Circle classNumber="2"/>
            <div className="first_page_text3 first_page_text">Осложнения СД</div>
            <Circle classNumber="3"/>
            <div className="first_page_text4 first_page_text">СС риски</div>
            <Circle classNumber="4"/>
            <SwipeDown/>
        </div>
    )
}
export default FirstPage