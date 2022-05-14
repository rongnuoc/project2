import React from './home.css'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/charts/Chart'
import WidgetLarge from '../../components/widget/WidgetLarge'
import WidgetSmall from '../../components/widget/WidgetSmall'

export default function Home() {
  return (
    <div className="home">
        <Feature/>
        <Chart/>
        <div className="homeWidgets">
            <WidgetLarge/>
            <WidgetSmall/>
        </div>
    </div>
  )
}
