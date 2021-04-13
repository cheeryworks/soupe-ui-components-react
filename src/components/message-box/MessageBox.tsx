import React from 'react'

export interface MessageBoxProps {

}

const MessageBox: React.FC<MessageBoxProps> = (props) => {
  return (
    <div>Message Box</div>
  )
}

MessageBox.defaultProps = {}

MessageBox.propTypes = {}

export default MessageBox