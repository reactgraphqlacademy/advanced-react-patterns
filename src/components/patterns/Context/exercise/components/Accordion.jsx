import React from 'react'

const Accordion = (props) => (
  <div>
    <p>
      { props.header }
      <i className="fa fa-arrow-circle-o-down pull-right"></i>
    </p>
    { props.children }
  </div>
)

export default Accordion
