import circle from "../../img/circle.svg"
import circle2 from "../../img/circle2.svg"

function Circle(props){
    return(
        <div className={"first_page_circle"+props.classNumber}>
                <img alt="circle" src={circle}/>
                <img className="first_page_circle1_anim_1" alt="circle" src={circle2}/>
                <img className="first_page_circle1_anim_2" alt="circle" src={circle2}/>
            </div>
    )
}
export default Circle