import React from 'react'
import Accordion from '../../../components/accordion/Accordion'
import AccordionItem from '../../../components/accordion/AccordionItem'
import AccordionItemTitle from '../../../components/accordion/AccordionItemTitle'
import AccordionItemContent from '../../../components/accordion/AccordionItemContent'

function AccordionDemo() {
  return <Accordion className='hero-body'>
    <AccordionItem>
      <AccordionItemTitle>A</AccordionItemTitle>
      <AccordionItemContent>A</AccordionItemContent>
    </AccordionItem>
    <AccordionItem active>
      <AccordionItemTitle>B</AccordionItemTitle>
      <AccordionItemContent>B</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle alert="20">C</AccordionItemTitle>
      <AccordionItemContent>C</AccordionItemContent>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>D</AccordionItemTitle>
      <AccordionItemContent>D</AccordionItemContent>
    </AccordionItem>
  </Accordion>
}

export default AccordionDemo
