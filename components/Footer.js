import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-green-500 pt-32  text-white">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 border-b lg:text-left text-center border-green-600 pb-10">
                <div>
                    <h2 className="text-green-900 mb-3">NAVIGATION</h2>
                    <ul>
                        <li><Link href="/"><a  className="">Home</a></Link></li>
                        <li><Link href="/"><a  className="">About</a></Link></li>
                        <li><Link href="/"><a  className="">Services</a></Link></li>
                        <li><Link href="/"><a  className="">Highlight</a></Link></li>
                        <li><Link href="/"><a  className="">News</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-green-900 mb-3">GOVERNMENT</h2>
                    <ul>
                        <li><Link href="/"><a className="">Overview</a></Link></li>
                        <li><Link href="/"><a className="">Cabinet</a></Link></li>
                        <li><Link href="/"><a className="">Services</a></Link></li>
                        <li><Link href="/"><a className="">Highlight</a></Link></li>
                        <li><Link href="/"><a className="">News</a></Link></li>
                        <li><Link href="/"><a className="">Highlight</a></Link></li>
                        <li><Link href="/"><a className="">News</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-green-900 mb-3">NAVIGATION</h2>
                    <ul>
                        <li><Link href="/"><a className="">Home</a></Link></li>
                        <li><Link href="/"><a className="">About</a></Link></li>
                        <li><Link href="/"><a className="">Services</a></Link></li>
                        <li><Link href="/"><a className="">Highlight</a></Link></li>
                        <li><Link href="/"><a className="">News</a></Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-green-900 mb-3">NAVIGATION</h2>
                    <ul>
                        <li><Link href="/"><a className="">Home</a></Link></li>
                        <li><Link href="/"><a className="">About</a></Link></li>
                        <li><Link href="/"><a className="">Services</a></Link></li>
                        <li><Link href="/"><a className="">Highlight</a></Link></li>
                        <li><Link href="/"><a className="">News</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-20">
                <Image src="/Blason_du_Burundi.svg" alt="abc" width={40} height={50} />
                <p>© 2021 Republic of Burundi</p>
            </div>
        </footer>
    )
}

export default Footer
