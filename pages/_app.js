import { useEffect } from 'react'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const showBtnTop = ()=>{ 
    const btn = document.querySelector(".scrollTop")
    window.pageYOffset > 500 ? btn.classList.remove("hidden") : btn.classList.add("hidden")
  }

  useEffect(() => {
    window.addEventListener("scroll",showBtnTop)
    return () => { window.removeEventListener("scroll",showBtnTop)}
  })

  return <Component {...pageProps} />
}

export default MyApp
