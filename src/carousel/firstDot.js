import React from 'react'
import PropTypes from 'prop-types'

function Dot (props) {
  return (
    <span style={{
      display: 'inline-block',
      height: '12px',
      width: '12px',
      borderRadius: '6px',
      backgroundColor:  props.selected ? 'orange' : 'white',
      margin: '7px 2px',
      opacity: props.selected ? '1' : '0.5',
      transitionDuration: '300ms',
    }} />
  )
}

export default function IndicatorDots (props) {
  const wrapperStyle = {
    position: 'absolute',
    width: '15px',
    height:'470px',
    zIndex: '100',
    left: "1002px",
    bottom: '0px',
    textAlign: 'right',
  }

    return (
      <div style={wrapperStyle}>{
        Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />
        })
      }</div>
    )
  }

IndicatorDots.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}
