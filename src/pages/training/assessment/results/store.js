import { useSyncExternalStore } from 'react'

// The quiz engine publishes the finished answers here; the results components read them.
let snapshot = null
const listeners = new Set()

export function publishResults(state) {
  snapshot = { ...state }   // a new object each time, so React sees a change
  listeners.forEach((fn) => fn())
}

export function useResults() {
  return useSyncExternalStore(
    (fn) => { listeners.add(fn); return () => listeners.delete(fn) },
    () => snapshot,
  )
}
