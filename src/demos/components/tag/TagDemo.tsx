import React from 'react'
import Tag from '../../../components/tag/Tag'

function TagDemo() {
  return <div>
    <div className="field">
      <label className="label">Normal Tags</label>
      <div className="tags">
        <Tag>Default</Tag>
        <Tag className="is-black">Black</Tag>
        <Tag className="is-dark">Dark</Tag>
        <Tag className="is-light">Light</Tag>
        <Tag className="is-white">White</Tag>
        <Tag className="is-primary">Primary</Tag>
        <Tag className="is-link">Link</Tag>
        <Tag className="is-info">Info</Tag>
        <Tag className="is-success">Success</Tag>
        <Tag className="is-warning">Warning</Tag>
        <Tag className="is-danger">Danger</Tag>
      </div>
    </div>
    <div className="field">
      <label className="label">Selected Normal Tags</label>
      <div className="tags">
        <Tag selected onClick={(e) => {alert(e)}}>Default</Tag>
        <Tag className="is-black" selected>Black</Tag>
        <Tag className="is-dark" selected>Dark</Tag>
        <Tag className="is-light" selected>Light</Tag>
        <Tag className="is-white" selected>White</Tag>
        <Tag className="is-primary" selected>Primary</Tag>
        <Tag className="is-link" selected>Link</Tag>
        <Tag className="is-info" selected>Info</Tag>
        <Tag className="is-success" selected>Success</Tag>
        <Tag className="is-warning" selected>Warning</Tag>
        <Tag className="is-danger" selected>Danger</Tag>
      </div>
    </div>
    <div className="field">
      <label className="label">Medium Tags</label>
      <div className="tags">
        <Tag className="is-medium">Default</Tag>
        <Tag className="is-medium is-black">Black</Tag>
        <Tag className="is-medium is-dark">Dark</Tag>
        <Tag className="is-medium is-light">Light</Tag>
        <Tag className="is-medium is-white">White</Tag>
        <Tag className="is-medium is-primary">Primary</Tag>
        <Tag className="is-medium is-link">Link</Tag>
        <Tag className="is-medium is-info">Info</Tag>
        <Tag className="is-medium is-success">Success</Tag>
        <Tag className="is-medium is-warning">Warning</Tag>
        <Tag className="is-medium is-danger">Danger</Tag>
      </div>
    </div>
    <div className="field">
      <label className="label">Large Addon Tags</label>
      <div className="tags has-addons">
        <Tag className="is-large">Default</Tag>
        <Tag className="is-large is-black">Black</Tag>
        <Tag className="is-large is-dark">Dark</Tag>
        <Tag className="is-large is-light">Light</Tag>
        <Tag className="is-large is-white">White</Tag>
        <Tag className="is-large is-primary">Primary</Tag>
        <Tag className="is-large is-link">Link</Tag>
        <Tag className="is-large is-info">Info</Tag>
        <Tag className="is-large is-success">Success</Tag>
        <Tag className="is-large is-warning">Warning</Tag>
        <Tag className="is-large is-danger">Danger</Tag>
      </div>
    </div>
    <div className="field">
      <label className="label">Medium Rounded Tags</label>
      <div className="tags">
        <Tag className="is-rounded is-medium">Default</Tag>
        <Tag className="is-rounded is-medium is-black">Black</Tag>
        <Tag className="is-rounded is-medium is-dark">Dark</Tag>
        <Tag className="is-rounded is-medium is-light">Light</Tag>
        <Tag className="is-rounded is-medium is-white">White</Tag>
        <Tag className="is-rounded is-medium is-primary">Primary</Tag>
        <Tag className="is-rounded is-medium is-link">Link</Tag>
        <Tag className="is-rounded is-medium is-info">Info</Tag>
        <Tag className="is-rounded is-medium is-success">Success</Tag>
        <Tag className="is-rounded is-medium is-warning">Warning</Tag>
        <Tag className="is-rounded is-medium is-danger">Danger</Tag>
      </div>
    </div>
  </div>
}

export default TagDemo
