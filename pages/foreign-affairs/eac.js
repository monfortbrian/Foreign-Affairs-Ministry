import React from 'react'
import BtnScrollTop from '../../components/BtnScrollTop'
import Footer from '../../components/Footer'
import ForeignAffairsMenu from '../../components/ForeignAffairsMenu'
import Header from '../../components/Header'

const eac = () => {
    return (
        <div className="text-gray-600">
            <Header sticky={true}/>
            <ForeignAffairsMenu/>
            <div className="bg-cover bg-bottom bg-fixed" style={{backgroundImage:"url('/Palais-Ntare-House.jpg')"}}>
                <div className="mx-auto max-w-6xl text-white pt-16 px-4">
                <h1 className="text-xl py-6 font-bold">East African Community</h1>
                <p className="max-w-3xl">Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque.</p>
                </div>
                <div className="max-w-6xl mx-auto md:flex px-4 mt-20">
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">29</h3>
                        <p className="text-gray-600">Member states</p>
                    </div>
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">Addis Ababa</h3>
                        <p className="text-gray-600">Headquarters</p>
                    </div>
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">1963</h3>
                        <p className="text-gray-600">Date of creation</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto py-20 px-4">
                <h1 className="text-2xl font-bold my-10">Overview</h1>
                <div className="md:flex text-justify md:space-x-10">
                    <div>
                    <h2 className="text-lg font-semibold my-4">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                        <h2 className="text-lg font-semibold my-4">Elit duis tristique sollicitudin nibh sit amet.</h2> 
                        <ul className="space-y-2">
                            <li>1° Condimentum vitae sapien pellentesque habitant.</li>
                            <li>2° Pretium quam vulputate dignissim suspendisse in est ante.</li>
                            <li>3° Condimentum vitae sapien pellentesque habitant.</li>
                            <li>4° Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.</li>
                        </ul>   
                        <h2 className="text-lg font-semibold my-4">consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Pretium quam vulputate dignissim sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                        <h2 className="text-lg font-semibold my-4">consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                        <h2 className="text-lg font-semibold my-4">Incididunt ut labore et dolore magna aliqua.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Pretium quam vulputate dignissim suspendisse in est ante. Sed pulvinar proin gravida hendrerit lectus. Orci dapibus ultrices in iaculis nunc.
                        </p>
                    </div>
                </div>
            </div>
            <BtnScrollTop/>
            <Footer/>
        </div>
    )
}

export default eac
