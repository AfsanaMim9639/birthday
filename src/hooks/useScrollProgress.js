import { useState, useEffect } from 'react'

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const p = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
      setProgress(p)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

export default useScrollProgress