import BtnScrollTop from '../../components/BtnScrollTop'
import Footer from '../../components/Footer'
import ForeignAffairsMenu from '../../components/ForeignAffairsMenu'
import Header from '../../components/Header'

const Foreign = () => {

    return (
        <div className="text-gray-600 text-sm">
            <Header sticky={true}/>
            <ForeignAffairsMenu/>
            <div className="bg-cover bg-bottom bg-fixed" style={{backgroundImage:"url('/Palais-Ntare-House.jpg')"}}>
                <div className="mx-auto max-w-6xl text-white pt-16 px-4">
                <h1 className="text-xl py-6 font-bold">Foreign Policy, Diplomacy and Cooperation</h1>
                <p className="max-w-3xl">Nunc lobortis mattis aliquam faucibus purus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Posuere urna nec tincidunt praesent semper feugiat nibh. Eu ultrices vitae auctor eu augue ut. Libero nunc consequat interdum varius sit amet mattis vulputate. Convallis aenean et tortor at risus. Orci nulla pellentesque dignissim enim. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.</p>
                </div>
                <div className="max-w-6xl mx-auto md:flex px-4 mt-20">
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">29</h3>
                        <p className="text-gray-600">Burundian diplomatic missions covering 147 countries</p>
                    </div>
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">41</h3>
                        <p className="text-gray-600">Honorary councils in 17 countries</p>
                    </div>
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">190</h3>
                        <p className="text-gray-600">Membership in International Organizations</p>
                    </div>
                    <div className="bg-white p-10 w-full shadow-sm hover:shadow-lg border-gray-200 border">
                        <h3 className="text-2xl text-green-500">20</h3>
                        <p className="text-gray-600">Foreign diplomatic missions in Burundi</p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-20 px-4 md:flex text-justify md:space-x-10">
                <div>
                <h2 className="text-lg font-semibold my-4">Foreign policy</h2>
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
            <BtnScrollTop/>
            <Footer/>
        </div>
    )
}

export default Foreign
