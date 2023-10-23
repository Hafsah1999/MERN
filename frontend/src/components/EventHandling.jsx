import React from 'react'

const EventHandling = () => {
  //Event creation
  const handleButtonClick = () => {
    alert(" You are at the right place😁")
  }
  return (
    <>
    <h1>Event Handling Example</h1>
    {/* EventListener */}
    <button onClick={handleButtonClick}>Click Me</button>
    </>
  )
}

export default EventHandling