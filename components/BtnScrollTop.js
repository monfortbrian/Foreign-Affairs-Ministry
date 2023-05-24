const BtnScrollTop = () => {

    const scrollTop = ()=> window.scrollTo({
        top:0,
        behavior:"smooth"
      })

    return (
        <button onClick={scrollTop} className="scrollTop hidden fixed bottom-8 right-4 border shadow-md py-4 px-3 rounded-md bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
        </button> 
    )
}

export default BtnScrollTop
