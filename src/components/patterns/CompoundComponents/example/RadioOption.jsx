import React from 'react'
import PropTypes from 'prop-types'

const RadioOption = ({ onClick, isSelected, children }) => (
  <div onClick={ onClick }>
    <span
      className={ isSelected? 'fa fa-circle': 'fa fa-circle-o' }
      style={ {paddingRight: '10px', cursor: 'pointer'} }
    />
    { children }
  </div>
)

RadioOption.propTypes = {
  value: PropTypes.string
}

export default RadioOption
