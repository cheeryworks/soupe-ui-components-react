import React from 'react'
import Card from '../../../components/card/Card'
import CardHeader from '../../../components/card/CardHeader'
import CardContent from '../../../components/card/CardContent'

function CardDemo() {
  return (
    <div>
      <Card>
        <CardHeader>Normal Card</CardHeader>
        <CardContent>
          These are content of card.
        </CardContent>
      </Card>
      <Card className="is-primary">
        <CardHeader>Primary Card</CardHeader>
        <CardContent>
          These are content of card.
        </CardContent>
      </Card>
      <Card className="is-info">
        <CardHeader>Info Card</CardHeader>
        <CardContent>
          These are content of card.
        </CardContent>
      </Card>
      <Card className="is-success">
        <CardHeader>Success Card</CardHeader>
        <CardContent>
          These are content of card.
        </CardContent>
      </Card>
      <Card className="is-warning">
        <CardHeader>Warning Card</CardHeader>
        <CardContent>
          These are content of card.
        </CardContent>
      </Card>
      <Card className="is-danger">
        <CardHeader>Danger Card</CardHeader>
        <CardContent>
          These are content of card.
        </CardContent>
      </Card>
    </div>
  )
}

export default CardDemo
