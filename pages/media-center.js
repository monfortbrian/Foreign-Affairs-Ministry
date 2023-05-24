import Image from "next/image" 
import Link from "next/link"
import BtnScrollTop from "../components/BtnScrollTop"
import DocMediaMenu from "../components/DocMediaMenu"
import Header from "../components/Header"

function MediaCenter() {
    return (
        <div className="text-gray-600 text-sm">
            <Header/>
            <DocMediaMenu/>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-2xl font-bold mb-10">News rooms</h1>
                <div className="rounded-md overflow-hidden max-w-2xl">
                    <Image src="/Palais-Ntare.jpg" alt="abc" width={700} height={400} className="object-cover"/>
                    <div className="p-4">
                        <h2 className="font-semibold mb-4">Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quis viverra nibh cras pulvinar mattis. </h2>
                        <p className="text-gray-400 mb-4">Cursus mattis molestie a iaculis at erat. Cras adipiscing enim eu turpis egestas.</p>
                        <Link href="/"><a className="text-green-400">Read more</a></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="md:grid md:grid-cols-3 gap-3">
                    <div className="rounded-md overflow-hidden">
                        <Image src="/Palais-Ntare.jpg" alt="abc" width={420} height={300} className="object-cover"/>
                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-base">Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quis viverra nibh cras pulvinar mattis. </h2>
                            <p className="text-gray-400 mb-4">Cursus mattis molestie a iaculis at erat. Cras adipiscing enim eu turpis egestas.</p>
                            <Link href="/"><a className="text-green-400">Read more</a></Link>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden">
                        <Image src="/Palais-Ntare.jpg" alt="abc" width={420} height={300} className="object-cover"/>
                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-base">Congue nisi vitae suscipit tellus mauris a diam maecenas.</h2>
                            <p className="text-gray-400 mb-4">Cursus mattis molestie a iaculis at erat. Cras adipiscing enim eu turpis egestas.</p>
                            <Link href="/"><a className="text-green-400">Read more</a></Link>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden">
                        <Image src="/Palais-Ntare.jpg" alt="abc" width={420} height={300} className="object-cover"/>
                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-base">Tellus integer feugiat scelerisque varius morbi enim. </h2>
                            <p className="text-gray-400 mb-4">Phasellus vestibulum lorem sed risus ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quis viverra nibh cras pulvinar mattis. </p>
                            <Link href="/"><a className="text-green-400">Read more</a></Link>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden">
                        <Image src="/drummers.jpg" alt="abc" width={420} height={300} className="object-cover"/>
                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-base">Tellus integer feugiat scelerisque varius morbi enim. </h2>
                            <p className="text-gray-400 mb-4">Phasellus vestibulum lorem sed risus ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quis viverra nibh cras pulvinar mattis. </p>
                            <Link href="/"><a className="text-green-400">Read more</a></Link>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden">
                        <Image src="/burundi2.jpg" alt="abc" width={420} height={300} className="object-cover"/>
                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-base">Tellus integer feugiat scelerisque varius morbi enim. </h2>
                            <p className="text-gray-400 mb-4">Phasellus vestibulum lorem sed risus ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quis viverra nibh cras pulvinar mattis. </p>
                            <Link href="/"><a className="text-green-400">Read more</a></Link>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden">
                        <Image src="/man.jpg" alt="abc" width={420} height={300} className="object-cover"/>
                        <div className="p-4">
                            <h2 className="font-semibold mb-4 text-base">Tellus integer feugiat scelerisque varius morbi enim. </h2>
                            <p className="text-gray-400 mb-4">Phasellus vestibulum lorem sed risus ultricies. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Quis viverra nibh cras pulvinar mattis. </p>
                            <Link href="/"><a className="text-green-400">Read more</a></Link>
                        </div>
                    </div>

                </div>
            </div>
            <BtnScrollTop/>
        </div>
    )
}

export default MediaCenter
