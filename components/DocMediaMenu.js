import Link from "next/link"

const DocMediaMenu = () => {
    const toggleSubMenu = ()=>{
        document.querySelector(".submenu").classList.toggle("hidden")
    }
    return (
        <div className=" sticky top-0 z-10 bg-gray-50">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between px-4 py-4">
                <h1 className="text-2xl font-bold">Docs & Media</h1>
                <svg onClick={toggleSubMenu} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-auto cursor-pointer lg:hidden" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <nav className="hidden lg:block lg:w-auto w-full py-4 lg:py-0 submenu">
                    <ul className="flex lg:flex-row flex-col lg:space-x-5 space-y-2 lg:space-y-0 text-gray-500">
                        <li><Link href="/document"><a className="text-sm hover:text-gray-400">DOCUMENT</a></Link></li>
                        <li><Link href="/news"><a  className="text-sm hover:text-gray-400">NEWS</a></Link></li>
                        <li><Link href="/events"><a  className="text-sm hover:text-gray-400">EVENTS</a></Link></li>
                        <li><Link href="/"><a  className="text-sm hover:text-gray-400">SPEECH</a></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default DocMediaMenu
