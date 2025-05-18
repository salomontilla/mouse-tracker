import { useState, useEffect } from 'react'
import './index.css'


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  console.log('position', position)
  function MouseTracker() {
  return (
    <div className='breathing-div' style={
    {
      left: -25,
        top: -22,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
    }
    } />
  )
}
  useEffect(() => {
    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      console.log('remove event')
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enabled])

  return (
    <main>
      <h1>Mouse tracker</h1>
      {
        enabled && (<MouseTracker />)
      }
      <button onClick={ () => setEnabled(!enabled) }>
        {enabled ? 'Desactivar': 'Activar' } mouse tracker
      </button>
    </main>
  )
}

export default App
