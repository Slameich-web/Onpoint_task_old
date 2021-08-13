import React from "react";
import Carousel from '../carousel/carousel'
import Dot from '../carousel/secondDot'
import ThirdPageOne from "./ThirdPageOne";
import ThirdPageTwo from "./ThirdPageTwo";
import ThirdPageThree from "./ThirdPageThree";

class ThirdPage extends React.Component {
    constructor () {
      super()
      this.state = {
        axis: 'x'
      }
      this.setAxis = axis => {
        return () => this.setState({'axis': axis})
      }
    }
    render () {
      return (
        <div style={{height: '768px'}}>
          <Carousel axis={this.state.axis} widgets={[Dot]} className="custom-class">
            <ThirdPageOne/>
            <ThirdPageTwo/>
            <ThirdPageThree/>
          </Carousel>
        </div>
      )
    }
  }
  export default ThirdPage