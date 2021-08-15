import React from 'react'
import liver from "../img/element/element-liver.png"
import muscle from "../img/element/element-muscle.png"
import brain from "../img/element/element-brain.png"
import fat from "../img/element/element-fat.png"
import kidneys from "../img/element/element-kidneys.png"
import infestains from "../img/element/element-infestains.png"
import infection from "../img/element/element-infection.png"
import stomach from "../img/element/element-stomach.png"
import line3 from "../img/lines/line3.svg"
import line4 from "../img/lines/line4.svg"
import ice3 from "../img/slide/bg_tab-icecube3.png"
import ice2 from "../img/slide/bg_tab-icecube2.png"
import ice1 from "../img/slide/bg_tab-icecube1.png"


function ThirdPageThree(){
    return(
        <div className="third_page content">
            <div className="third_page_title">
                Звенья патогенеза СД2
            </div>
            <div className="third_page_container third_page_three_container_0">
                <div className="third_page_number">1</div>
                <p className="third_page_elem">B-Клетки</p>
                <div className="circle_image circle_image_fixed"><p className="circle_image_content">β</p></div>
            </div>
            <div className="third_page_container third_page_three_container_2">
                <p className="circle_image_content">2</p>
                <p className="third_page_elem_2">↓ инкретинового эффекта</p>
            </div>
            <div className="third_page_container third_page_three_container_3">
                <p className="circle_image_content">3</p>
                <p className="third_page_elem_3">Дефект α-клеток</p>
            </div>
            <div className="third_page_container third_page_three_container_4">
                <div className="third_page_number third_page_number_right third_page_number_right_4">4</div>
                <p className="third_page_elem third_page_elem_right third_page_elem_right_4">Жировые клетки</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={fat}/></div>
            </div>
            <div className="third_page_container third_page_three_container_5">
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={muscle}/></div>
                <div className="third_page_number third_page_number_right third_page_number_right_5">5</div>
                <p className="third_page_elem third_page_elem_right third_page_elem_right_5">Мышцы</p>
            </div>
            <div className="third_page_container third_page_three_container_6">
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={liver}/></div>
                <div className="third_page_number third_page_number_right third_page_number_right_6">6</div>
                <p className="third_page_elem third_page_elem_right third_page_elem_right_6">Печень</p>
            </div>
            <div className="third_page_container third_page_three_container_7">
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={brain}/></div>
                <div className="third_page_number third_page_number_down third_page_number_right_7">7</div>
                <p className="third_page_elem third_page_elem_right_7">Головной мозг</p>
            </div>
            <div className="third_page_container third_page_three_container_8">
                <div className="third_page_number third_page_number_right_8">8</div>
                <p className="third_page_elem third_page_elem_right_8">Микрофлора кишечника</p>
                <div className="circle_image "><img alt="muscle" className="circle_image_content_img" src={infestains}/></div>
            </div>
            <div className="third_page_container third_page_three_container_9">
                <div className="third_page_number third_page_number_right_9">9</div>
                <p className="third_page_elem third_page_elem_right_9">Нарушение иммунной<br/>регуляции/воспаление</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={infection}/></div>
            </div>
            <div className="third_page_container third_page_three_container_10">
                <div className="third_page_number third_page_number_right_10">10</div>
                <p className="third_page_elem third_page_elem_right_10">Желудок</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={stomach}/></div>
            </div>
            <div className="third_page_container third_page_three_container_11">
                <div className="third_page_number third_page_number_right_11">11</div>
                <p className="third_page_elem third_page_elem_right_11">Почки</p>
                <div className="circle_image"><img alt="muscle" className="circle_image_content_img" src={kidneys}/></div>
            </div>
            <div className="third_page_elem_right_amilin">↓ амилин</div>
            <div className="third_page_elem_right_glukagon">↑ глюкагон</div>
            <div className="third_page_elem_right_giperglikenia"> Гипергликемия</div>
            <div className="third_page_elem_right_insulin">Инсулинорезистентность</div>
            <div className="third_page_elem_container"></div>
            <img alt="line" className="third_page_three_elem_line_1" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_2" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_3" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_4" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_5" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_6" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_7" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_8" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_9" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_10" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_11" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_12" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_13" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_14" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_15" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_16" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_17" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_18" src={line3}/>
            <img alt="line" className="third_page_three_elem_line_19" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_20" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_21" src={line4}/>
            <img alt="line" className="third_page_three_elem_line_22" src={line4}/>
            <img alt="ice" src={ice3} className="third_page_ice_3"/>
            <img alt="ice" src={ice2} className="third_page_ice_2"/>
            <img alt="ice" src={ice1} className="third_page_ice_1"/>
            </div>
    )
}
export default ThirdPageThree