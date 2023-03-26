import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      < div className='home-container-2'>
        <QuestionDetails/>
        <RightSidebar />
      </div>
    </div>
  )
}

export default DisplayQuestion