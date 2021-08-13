import React from 'react'
import circle from "../img/circle.svg"
import circle2 from "../img/circle2.svg"

function FirstPage(){
    return(
        <div className="content first_page">
            <div className="first_page_title">
                Всегда ли цели терапии СД2<br/> на поверхности?
            </div>
            <div className="first_page_text1 first_page_text">Цель по HbA1c</div>
            <div className="first_page_circle1">
                <img alt="circle" src={circle}/>
                <img className="first_page_circle1_anim_1" alt="circle" src={circle2}/>
                <img className="first_page_circle1_anim_2" alt="circle" src={circle2}/>
            </div>
            <div className="first_page_text2 first_page_text">Гипогликемия</div>
            <div className="first_page_circle2">
                <img alt="circle" src={circle}/>
                <img className="first_page_circle1_anim_1" alt="circle" src={circle2}/>
                <img className="first_page_circle1_anim_2" alt="circle" src={circle2}/>
            </div>
            <div className="first_page_text3 first_page_text">Осложнения СД</div>
            <div className="first_page_circle3">
                <img alt="circle" src={circle}/>
                <img className="first_page_circle1_anim_1" alt="circle" src={circle2}/>
                <img className="first_page_circle1_anim_2" alt="circle" src={circle2}/>
            </div>
            <div className="first_page_text4 first_page_text">СС риски</div>
            <div className="first_page_circle4">
                <img alt="circle" src={circle}/>
                <img className="first_page_circle1_anim_1" alt="circle" src={circle2}/>
                <img className="first_page_circle1_anim_2" alt="circle" src={circle2}/>
            </div>
        </div>
    )
}
export default FirstPage