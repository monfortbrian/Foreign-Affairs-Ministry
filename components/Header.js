import Link from "next/link"
import Image from "next/image"

const Header = ({sticky}) => {

    const toggleMenu = ()=>{
        document.querySelector(".nav").classList.toggle("hidden")
    }
    const classHead = sticky ? "shadow-sm sticky top-0 z-20 py-1 bg-white" : "shadow-sm py-1 bg-white"
    return (
        <header className={classHead}>
            <div className="max-w-6xl mx-auto flex-wrap lg:flex-nowrap flex items-center justify-between py-3 px-4">
                <Link href="/">
                    <a className="inline-flex items-center">
                        <Image src="/Blason_du_Burundi.svg" alt="abc" width={47} height={55}/>
                        <h1 className="text-2xl font-bold ml-2">Republic of Burundi</h1>
                    </a>
                </Link>
                <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto lg:hidden cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <nav className="lg:flex hidden flex-col lg:flex-row lg:w-auto w-full lg:items-center py-6 lg:py-0 nav">
                    <ul className="lg:flex lg:space-x-5 space-y-1 lg:space-y-0 text-gray-500 uppercase lg:text-xs">
                        <li><Link href="/"><a className="hover:text-green-400">Home</a></Link></li>
                        <li><Link href="/headquarters"><a className="hover:text-green-400">Headquarters</a></Link></li>
                        <li><Link href="/foreign-affairs"><a className="hover:text-green-400">Foreign Affairs</a></Link></li>
                        <li><Link href="/"><a className="hover:text-green-400">Diaspora</a></Link></li>
                        <li><Link href="/media-center"><a className="hover:text-green-400">Media center</a></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
