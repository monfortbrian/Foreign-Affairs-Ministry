import Link from "next/link"

const ForeignAffairsMenu = () => {
    return (
        <div className="z-10 ">
            <div className="max-w-6xl mx-auto flex justify-center px-4 lg:py-4 py-0">
                <nav className="w-full py-4 lg:py-0">
                    <ul className="flex justify-center space-x-5 text-gray-500">
                        <li><Link href="/foreign-affairs/au"><a className="text-sm hover:text-gray-400">AU</a></Link></li>
                        <li><Link href="/foreign-affairs/eac"><a  className="text-sm hover:text-gray-400">EAC</a></Link></li>
                        <li><Link href="/foreign-affairs/comeca"><a  className="text-sm hover:text-gray-400">COMESA</a></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ForeignAffairsMenu
