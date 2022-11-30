export const onIntersect = (
  elementToWatch,
  callback,
  outCallBack = () => {},
  once = true,
  options = { threshold: 1.0 }
) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      callback(entry.target)

      if (once) {
        observer.unobserve(entry.target)
      }
    } else {
      outCallBack(entry.target)
    }
  }, options)

  observer.observe(elementToWatch)
  return observer
}
