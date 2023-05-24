import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OfferIcon from '@material-ui/icons/LocalOffer';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LangIcon from '@material-ui/icons/LanguageRounded';
import BtnScrollTop from '../components/BtnScrollTop'

export default function Home() {
  const [btnTop, setbtnTop] = useState(false);

  return (
    <div className='text-gray-600 text-sm'>
      <Head>
        <title>Ministry of Burundi | Home</title>
      </Head>
      <div
        className='bg-bottom bg-cover min-h-screen'
        style={{ backgroundImage: "url('/Palais-Ntare-House.jpg')" }}
      >
        <div className='max-w-6xl px-4 m-auto py-10'>
          <div className='w-min lg:ml-auto m-auto lg:m-0'>
            <div className='flex justify-between text-gray-100 mb-3'>
              <Link href='https://ntarehouse-gov.netlify.app/' >
                <a className='hover:text-green-400' target='_blank'>Ntare House</a>
              </Link>
              <p className='cursor-pointer'>
                <LangIcon fontSize='small' />
                EN
              </p>
            </div>
            <div className='flex items-center bg-white rounded-full px-2'>
              <input
                type='text'
                className='bg-transparent border-none p-2 focus:outline-none'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='#000'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>

          <div className='lg:flex items-center text-center lg:text-left mt-8'>
            <Image
              src='/Blason_du_Burundi.svg'
              width={230}
              height={300}
              alt='abc'
            />
            <div className='text-gray-50 lg:max-w-3xl lg:ml-8'>
              <h2 className='lg:text-3xl text-2xl mb-3'>Welcome</h2>
              <h1 className='lg:text-6xl text-4xl font-semibold'>
                Ministry of Foreign Affairs and Cooperation
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Header sticky={true} />

      <div className='py-32'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='text-6xl font-bold mb-6'>Lorem ipsum</h1>
          <p className='max-w-lg text-2xl font-light'>
            Ministry of Foreign Affairs and International Cooperation
          </p>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 md:flex md:space-x-6 justify-center'>
        <div className='p-6 bg-white md:w-1/2 border shadow-lg rounded-xl'>
          <OfferIcon fontSize='large' className='text-green-400' />
          <h1 className='text-2xl font-semibold my-2'>COVID-19 Info</h1>
          <p className='py-4 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href='/'>
            <a className='text-green-400'>Learn more</a>
          </Link>
        </div>
        <div className='p-6 bg-white md:w-1/2 border shadow-lg rounded-xl'>
          <OfferIcon fontSize='large' className='text-green-400' />
          <h1 className='text-2xl font-semibold my-2'>Lorem ipsum</h1>
          <p className='py-4 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href='/'>
            <a className='text-green-400'>Learn more</a>
          </Link>
        </div>
        <div className='p-6 bg-white md:w-1/2 border shadow-lg rounded-xl'>
          <OfferIcon fontSize='large' className='text-green-400' />
          <h1 className='text-2xl font-semibold my-2'>Diplomatic Missions</h1>
          <p className='py-4 text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href='/'>
            <a className='text-green-400'>Learn more</a>
          </Link>
        </div>
      </div>

      <div className='bg-gray-50 mt-28 mb-20 pt-12 pb-8'>
        <div className='max-w-6xl mx-auto px-4'>
          <h2 className='text-2xl font-semibold'>Latest news</h2>
          <div className='md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 justify-center py-16'>
            <div
              className='bg-center bg-cover rounded-3xl text-gray-700 cursor-pointer'
              style={{ backgroundImage: `url('/woman.jpg')` }}
            >
              <div className='p-10 top-0 bg-gray-50 bg-opacity-80 hover:bg-opacity-95'>
                <h1 className='text-lg font-semibold py-3'>
                  Eu augue ut lectus arcuteri bium at gringo
                </h1>
                <p className='py-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <Link href='/'>
                  <a className='flex items-center text-green-400 pb-4 pt-3'>
                    <span>Read more</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className='bg-center bg-cover rounded-3xl text-gray-700 cursor-pointer'
              style={{ backgroundImage: `url('/woman.jpg')` }}
            >
              <div className='p-10 top-0 bg-gray-50 bg-opacity-80 hover:bg-opacity-95'>
                <h1 className='text-lg font-semibold py-3'>
                  Eu augue ut lectus arcuteri bium at gringo
                </h1>
                <p className='py-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <Link href='/'>
                  <a className='flex items-center text-green-400 pb-4 pt-3'>
                    <span>Read more</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className='bg-center bg-cover rounded-3xl text-gray-700 cursor-pointer'
              style={{ backgroundImage: `url('/woman.jpg')` }}
            >
              <div className='p-10 top-0 bg-gray-50 bg-opacity-80 hover:bg-opacity-95'>
                <h1 className='text-lg font-semibold py-3'>
                  Eu augue ut lectus arcuteri bium at gringo
                </h1>
                <p className='py-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
                <Link href='/'>
                  <a className='flex items-center text-green-400 pb-4 pt-3'>
                    <span>Read more</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 pb-10 md:flex md:justify-between'>
        <div>
          <TwitterIcon className='text-blue-400 mb-6' fontSize='large' />
          <div className='space-y-6'>
            <div className='md:max-w-md py-4'>
              <h3 className='text-blue-400 mb-4 font-bold'>@loremIpsum</h3>
              <p className='text-gray-500 border-b text-sm pb-2 font-semibold text-justify'>
                Bt <span className='text-blue-400'>@loremCartem</span> Pretium
                lectus quam id leo in vitae. Lorem ipsum dolor sit amet
                consectetur adipiscing elit.
              </p>
              <div className='text-xs flex justify-between text-blue-400 mt-3'>
                <p>22hours ago</p>
                <p>
                  <span className='text-gray-500'>Retweeted by</span> Ministry
                  of foreign
                </p>
                <TwitterIcon fontSize='small' />
              </div>
              <p className='text-xs text-blue-400'>Affairs & lorem ipsum</p>
            </div>

            <div className='md:max-w-md py-4'>
              <h3 className='text-blue-400 mb-4 font-bold'>@loremIpsum</h3>
              <p className='text-gray-500 border-b text-sm pb-2 font-semibold text-justify'>
                Bt <span className='text-blue-400'>@loremCartem</span> Pretium
                lectus quam id leo in vitae. Lorem ipsum dolor sit amet
                consectetur adipiscing elit.
              </p>
              <div className='text-xs flex justify-between text-blue-400 mt-3'>
                <p>22hours ago</p>
                <p>
                  <span className='text-gray-500'>Retweeted by</span> Ministry
                  of foreign
                </p>
                <TwitterIcon fontSize='small' />
              </div>
              <p className='text-xs text-blue-400'>Affairs & lorem ipsum</p>
            </div>

            <div className='md:max-w-md py-4'>
              <h3 className='text-blue-400 mb-4 font-bold'>@loremIpsum</h3>
              <p className='text-gray-500 border-b text-sm pb-2 font-semibold text-justify'>
                Bt <span className='text-blue-400'>@loremCartem</span> Pretium
                lectus quam id leo in vitae. Lorem ipsum dolor sit amet
                consectetur adipiscing elit.
              </p>
              <div className='text-xs flex justify-between text-blue-400 mt-3'>
                <p>22hours ago</p>
                <p>
                  <span className='text-gray-500'>Retweeted by</span> Ministry
                  of foreign
                </p>
                <TwitterIcon fontSize='small' />
              </div>
              <p className='text-xs text-blue-400'>Affairs & lorem ipsum</p>
            </div>
          </div>
        </div>

        <div>
          <FacebookIcon className='text-blue-600 mb-6' fontSize='large' />
          <div className='space-y-6'>
            <div className='md:max-w-md py-4'>
              <h3 className='text-blue-600 mb-4 font-bold'>#loremIpsum</h3>
              <p className='text-gray-500 border-b text-sm pb-2 font-semibold text-justify'>
                Bt <span className='text-blue-600'>#loremCartem</span> Pretium
                lectus quam id leo in vitae. Lorem ipsum dolor sit amet
                consectetur adipiscing elit.
              </p>
              <div className='text-xs flex justify-between text-blue-600 mt-3'>
                <p>22hours ago</p>
                <p>
                  <span className='text-gray-500'>Posted by</span> Ministry of
                  foreign
                </p>
              </div>
            </div>

            <div className='md:max-w-md py-4'>
              <h3 className='text-blue-600 mb-4 font-bold'>#loremIpsum</h3>
              <p className='text-gray-500 border-b text-sm pb-2 font-semibold text-justify'>
                Bt <span className='text-blue-600'>#loremCartem</span> Pretium
                lectus quam id leo in vitae. Lorem ipsum dolor sit amet
                consectetur adipiscing elit.
              </p>
              <div className='text-xs flex justify-between text-blue-600 mt-3'>
                <p>22hours ago</p>
                <p>
                  <span className='text-gray-500'>Posted by</span> Ministry of
                  foreign
                </p>
              </div>
            </div>

            <div className='md:max-w-md py-4'>
              <h3 className='text-blue-600 mb-4 font-bold'>#loremIpsum</h3>
              <p className='text-gray-500 border-b text-sm pb-2 font-semibold text-justify'>
                Bt <span className='text-blue-600'>#loremCartem</span> Pretium
                lectus quam id leo in vitae. Lorem ipsum dolor sit amet
                consectetur adipiscing elit.
              </p>
              <div className='text-xs flex justify-between text-blue-600 mt-3'>
                <p>22hours ago</p>
                <p>
                  <span className='text-gray-500'>Posted by</span> Ministry of
                  foreign
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BtnScrollTop/>
      <Footer/>
    </div>
  );
}
