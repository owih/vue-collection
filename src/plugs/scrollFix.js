export default function () {
  document.addEventListener('DOMContentLoaded', () => {
    const resizeObserver = new ResizeObserver(() => {
      if (document.body.scrollHeight > document.body.clientHeight) {
        document.body.classList.remove('scroll-fix');
      } else {
        document.body.classList.add('scroll-fix');
      }
    })
    resizeObserver.observe(document.body)
  })
}
