export {}

declare global {
  interface Document {
    startViewTransition: (callback: () => Promise<void>) => { ready: Promise<void> }
  }
}
