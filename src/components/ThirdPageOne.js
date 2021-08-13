import React from 'react'
import liver from "../img/element/element-liver.png"
import muscle from "../img/element/element-muscle.png"
import line from "../img/lines/line.svg"
import line2 from "../img/lines/line2.svg"
import ice3 from "../img/slide/bg_tab-icecube3.png"
import ice2 from "../img/slide/bg_tab-icecube2.png"
import ice1 from "../img/slide/bg_tab-icecube1.png"

function ThirdPageOne(){
    return(
        <div className="third_page content">
            <div className="third_page_title">
                Звенья патогенеза СД2
            </div>
            <div className="third_page_container third_page_container_1">
                <div className="third_page_number">1</div>
                <p className="third_page_elem">B-Клетки</p>
                <div className="circle_image circle_image_fixed"><p className="circle_image_content">β</p></div>
            </div>
            <div className="third_page_container third_page_container_2">
                <div className="third_page_number">2</div>
                <p className="third_page_elem">Мышцы</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={muscle}/></div>
            </div>
            <div className="third_page_container third_page_container_3">
                <div className="third_page_number">3</div>
                <p className="third_page_elem">Печень</p>
                <div className="circle_image"><img alt="liver" className="circle_image_content_img" src={liver}/></div>
            </div>
            <div className="third_page_container_4">
                <p className="third_page_elem_text">Гирепгликемия</p>
            </div>
            <div>
                <img alt="line" className="third_page_one_elem_line_1" src={line}/>
                <img alt="line" className="third_page_one_elem_line_2" src={line}/>
                <img alt="line" className="third_page_one_elem_line_3" src={line}/>
                <img alt="line" className="third_page_one_elem_line_4" src={line2}/>
                <img alt="line" className="third_page_one_elem_line_5" src={line2}/>
                <img src={ice3} className="third_page_ice_8"/>
                <img src={ice2} className="third_page_ice_9"/>
                <img src={ice1} className="third_page_ice_10"/>
            </div>
            
        </div>
    )
}
export default ThirdPageOne