import React from 'react'

export interface TreeProps {

}

const Tree: React.FC<TreeProps> = (props) => {
  return (
    <div>Tree</div>
  )
}

Tree.defaultProps = {}

Tree.propTypes = {}

export default Tree