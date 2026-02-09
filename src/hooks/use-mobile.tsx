import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

  const getMatches = () => {
    if (typeof window === "undefined") return false
    return window.matchMedia(query).matches
  }

  const [isMobile, setIsMobile] = useState(getMatches)

  useEffect(() => {
    const media = window.matchMedia(query)

    const listener = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    // Compatibilidade
    if (media.addEventListener) {
      media.addEventListener("change", listener)
    } else {
      media.addListener(listener)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [])

  return isMobile
}
