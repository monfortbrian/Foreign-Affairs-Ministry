import Header from "../components/Header"
import Image from "next/image"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from "../components/Footer";
import BtnScrollTop from "../components/BtnScrollTop";

const headquarters = () => {
    return (
        <div className="text-gray-600 text-sm">
            <Header sticky={true}/>
            <div className="bg-cover bg-bottom pt-40" style={{backgroundImage:"url('/burundi2.jpg')"}}>
                <div className="md:flex justify-center px-4 md:max-w-6xl mx-auto">
                    <div className="bg-white md:p-8 p-4 md:w-4/6 border">
                        <h1 className="text-2xl font-semibold mb-4">About the Ministry</h1>
                        <p className="text-gray-500">Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate, Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate. Select the number of characters, words, sentences or paragraphs, and hit generate!</p>
                    </div>
                    <div className="bg-white md:p-8 p-4 border">
                        <p className="mb-3 ">
                            <strong>Toll free:</strong><br/>
                            <span className="text-gray-500 text-sm">2525 (local) / +25768125043 (international)</span>
                        </p>
                        <p className="mb-3 ">
                            <strong>Email:</strong><br/>
                            <span className="text-gray-500 text-sm">info@lorem.gov.bi</span>
                        </p>
                        <p>
                            <strong>P.O. Box:</strong><br/>
                            <span className="text-gray-500 text-sm">179 Bujumbura - Burundi</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:flex md:space-x-6 py-28">
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-semibold mb-2">Mission</h1>
                    <p className="mb-3">Malesuada fames ac turpis egestas sed. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>

                    <h1 className="text-2xl font-semibold mb-2">Vision</h1>
                    <p className="mb-3">Malesuada fames ac turpis egestas sed. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>

                    <h1 className="text-2xl font-semibold mb-2">Mission</h1>
                    <p>Malesuada fames ac turpis egestas sed. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-semibold mb-2">Key Properties</h1>
                    <p className="pb-2">Malesuada fames ac turpis egestas sed. Scelerisque varius morbi enim nunc faucibus.</p>

                    <p className="py-2">Lacus laoreet non curabitur gravida arcu ac. Lacus laoreet non curabitur</p>

                    <p className="py-2">Malesuada Lorem dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div>
                        <h1 className="text-2xl font-bold mb-8">The Minister</h1>
                        <div className="md:flex md:space-x-5">
                            <Image src="/man.jpg" alt="abc" width={500} height={400} className="object-cover"/>
                            <div className="md:w-3/4">
                                <h1 className="text-2xl font-bold">Dr. Gilbert NAHAYO</h1>
                                <p className="text-sm text-gray-400">Minister of Foreign Affairs and International Cooperation</p>

                                <p className="py-6">Odio euismod lacinia at quis risus sed. Eget duis at tellus at urna condimentum mattis pellentesque id. Arcu cursus vitae congue mauris. Euismod in pellentesque massa placerat duis ultricies. Aliquam nulla facilisi cras fermentum odio eu. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Integer vitae justo eget magna</p>
                                <p>Arcu cursus vitae congue mauris. Euismod in pellentesque massa placerat duis ultricies. Aliquam nulla facilisi cras fermentum odio eu.</p>
                                <div className="mt-2">
                                    <a href="fb.com"><FacebookIcon fontSize="small" className="text-gray-400 mr-1"/></a>
                                    <a href="twitter.com"><TwitterIcon fontSize="small" className="text-gray-400"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-20">
                        <h1 className="text-2xl font-bold mb-8">Permanent secretary</h1>
                        <div className="md:flex md:space-x-5">
                            <Image src="/woman.jpg" alt="abc" width={500} height={400} className="object-cover"/>
                            <div className="md:w-3/4">
                                <h1 className="text-2xl font-bold">Ms. Josephine TUYISENGE</h1>
                                <p className="text-sm text-gray-400">Permanent Secretary</p>

                                <p className="py-6">Odio euismod lacinia at quis risus sed. Eget duis at tellus at urna condimentum mattis pellentesque id. Arcu cursus vitae congue maurisA diam sollicitudin tempor id eu nisl nunc mi ipsum. Integer vitae justo eget magna</p>
                                <p>Arcu cursus vitae congue mauris. Euismod in pellentesque massa placerat duis ultricies. Aliquam nulla facilisi cras fermentum odio eu.</p>
                                <p className="py-3">congue mauris, Euismod in pellentesque massa placerat duis ultricies. Aliquam nulla facilisi cras fermentum odio eu.</p>
                                <div className="mt-2">
                                    <a href="fb.com"><FacebookIcon fontSize="small" className="text-gray-400 mr-1"/></a>
                                    <a href="twitter.com"><TwitterIcon fontSize="small" className="text-gray-400"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BtnScrollTop/>
            <Footer/>
        </div>
    )
}

export default headquarters
