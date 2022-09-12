import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.fillStyle = '#000000'
    // ctx.beginPath()
    // ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    // ctx.fill()
    ctx.moveTo(250, 0)
    ctx.lineTo(250, 250)
    ctx.stroke()
  }

  const drawAgain = (ctx) => {
    ctx.moveTo(200, 0)
    ctx.lineTo(200, 200)
    ctx.stroke()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      drawAgain(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas id='canvas' ref={canvasRef} />
}

export default Canvas