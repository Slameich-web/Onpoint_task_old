import React from 'react'
import liver from "../img/element/element-liver.png"
import muscle from "../img/element/element-muscle.png"
import brain from "../img/element/element-brain.png"
import fat from "../img/element/element-fat.png"
import kidneys from "../img/element/element-kidneys.png"
import line from "../img/lines/line.svg"
import ice3 from "../img/slide/bg_tab-icecube3.png"
import ice2 from "../img/slide/bg_tab-icecube2.png"
import ice1 from "../img/slide/bg_tab-icecube1.png"


function ThirdPageTwo(){
    return(
        <div className="third_page content">
            <div className="third_page_title">
                Смертельный октет
            </div>
            <div>
            <div className="third_page_two_container_0">
                <p className="third_page_elem_text">Гирепгликемия</p>
            </div>
            <div className="third_page_container third_page_two_container_1">
                <div className="circle_image circle_image_fixed"><p className="circle_image_content">2</p></div>
            </div>
            <div className="third_page_container third_page_two_container_2">
                <div className="third_page_number">1</div>
                <p className="third_page_elem">B-Клетки</p>
                <div className="circle_image circle_image_fixed"><p className="circle_image_content">β</p></div>
            </div>
            <div className="third_page_container third_page_two_container_3">
                <div className="circle_image circle_image_fixed"><p className="circle_image_content">3</p></div>
            </div>
            <div className="third_page_container third_page_two_container_4">
                <div className="third_page_number third_page_number_left">8</div>
                <p className="third_page_elem third_page_elem_left">Почки</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={kidneys}/></div>
            </div>
            <div className="third_page_container third_page_two_container_5">
                <div className="third_page_number third_page_number_right">4</div>
                <p className="third_page_elem third_page_elem_right">Жировые<br/> клетки</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={fat}/></div>
            </div>
            <div className="third_page_container third_page_two_container_6">
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={muscle}/></div>
                <div className="third_page_number third_page_number_down">5</div>
                <p className="third_page_elem third_page_elem_down">Мышцы</p>
            </div>
            <div className="third_page_container third_page_two_container_7">
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={liver}/></div>
                <div className="third_page_number third_page_number_down">6</div>
                <p className="third_page_elem third_page_elem_down">Печень</p>
            </div>
            <div className="third_page_container third_page_two_container_8">
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={brain}/></div>
                <div className="third_page_number third_page_number_down">7</div>
                <p className="third_page_elem third_page_elem_down">Головной<br/>мозг</p>
            </div>
            </div>
            <div>
                <img alt="line" className="third_page_two_elem_line_1" src={line}/>
                <img alt="line" className="third_page_two_elem_line_2" src={line}/>
                <img alt="line" className="third_page_two_elem_line_3" src={line}/>
                <img alt="line" className="third_page_two_elem_line_4" src={line}/>
                <img alt="line" className="third_page_two_elem_line_5" src={line}/>
                <img alt="line" className="third_page_two_elem_line_6" src={line}/>
                <img alt="line" className="third_page_two_elem_line_7" src={line}/>
                <img alt="line" className="third_page_two_elem_line_8" src={line}/>
                <img src={ice3} className="third_page_ice_4"/>
                <img src={ice2} className="third_page_ice_5"/>
                <img src={ice2} className="third_page_ice_6"/>
                <img src={ice1} className="third_page_ice_7"/>
            </div>
                
            </div>
    )
}
export default ThirdPageTwo