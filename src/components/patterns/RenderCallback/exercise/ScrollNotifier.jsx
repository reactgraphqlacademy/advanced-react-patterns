import React from 'react'

const ScrollNotifier = ({ buffer, onScrollAtTheBottom, style, children }) => {
  const handleScroll = event => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    const isAtTheBottom = scrollTop + clientHeight >= scrollHeight - buffer

    if (isAtTheBottom && onScrollAtTheBottom)
      onScrollAtTheBottom()
  }

  return (
    <div
      className="scroll-notifier"
      style={{ ...style }}
      onScroll={ handleScroll }
    >
    {children}
   </div>
  )
}

ScrollNotifier.propTypes = {
  buffer: React.PropTypes.number.isRequired,
  onScrollAtTheBottom: React.PropTypes.func
},

ScrollNotifier.defaultProps = {
  buffer: 300
}

export default ScrollNotifier
