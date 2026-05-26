import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 22000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.4,
        hue: 250 + Math.random() * 60,
      }))
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dxm = p.x - mouse.x
        const dym = p.y - mouse.y
        const dm = Math.sqrt(dxm * dxm + dym * dym)
        if (dm < 120) {
          p.x += (dxm / dm) * 0.6
          p.y += (dym / dm) * 0.6
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.7)`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `hsla(${(p.hue + p2.hue) / 2}, 80%, 70%, ${0.18 * (1 - d / 110)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-full w-full opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 bg-grid-pattern bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
      />
    </>
  )
}
