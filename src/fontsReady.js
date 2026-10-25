// The fonts are already downloading (preloaded in index.html). Waiting for them
// before the first render makes the page appear once with the right typefaces,
// instead of words popping in or swapping. Capped so a slow font never blocks the page.
const FONTS = ['800 1em Montserrat', '400 1em Montserrat', 'italic 600 1em Fraunces', '700 1em Caveat']

export function fontsReady(maxWait = 2500) {
  const loaded = Promise.all(FONTS.map((f) => document.fonts.load(f)))
  const timeout = new Promise((resolve) => setTimeout(resolve, maxWait))
  return Promise.race([loaded, timeout]).catch(() => {})
}
