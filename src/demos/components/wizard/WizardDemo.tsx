import React from 'react'
import Wizard from '../../../components/wizard/Wizard'
import WizardItem from '../../../components/wizard/WizardItem'

function WizardDemo() {
  return <Wizard>
    <WizardItem active>A</WizardItem>
    <WizardItem>B</WizardItem>
    <WizardItem>C</WizardItem>
  </Wizard>
}

export default WizardDemo
