import { useState, useEffect } from 'react'

const colors = ['#FFF8F0', '#F5F0FF', '#FFD6E8', '#D4F1E8', '#FFE8B8']

function useScrollColor() {
  const [bgColor, setBgColor] = useState(colors[0])

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0

      const segment = 1 / (colors.length - 1)
      const index = Math.min(Math.floor(scrollProgress / segment), colors.length - 2)
      const localProgress = (scrollProgress - index * segment) / segment

      const color = interpolateColor(colors[index], colors[index + 1], localProgress)
      setBgColor(color)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return bgColor
}

function interpolateColor(hex1, hex2, factor) {
  const c1 = hexToRgb(hex1)
  const c2 = hexToRgb(hex2)
  const r = Math.round(c1.r + (c2.r - c1.r) * factor)
  const g = Math.round(c1.g + (c2.g - c1.g) * factor)
  const b = Math.round(c1.b + (c2.b - c1.b) * factor)
  return `rgb(${r}, ${g}, ${b})`
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  }
}

export default useScrollColor