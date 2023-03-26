import React from 'react'
import './RightSidebar.css'
import Widget from '../../Components/RightSidebar/Widget'
import WidgetTags from '../../Components/RightSidebar/WidgetTags'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>

    </aside>
  )
}

export default RightSidebar