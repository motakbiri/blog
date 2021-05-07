import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { scale } from '../utils/typography'


import Footer from './footer'
import './global.css'

//use type to change the page type
const Layout = ({ location, title, children, type }) => {
  const isRoot = type === 'root'
  const toggle = (
    <ThemeToggler>
      {({ toggleTheme, theme }) => {
        const isDarkMode = theme === 'dark'
        if (theme == null) {
          return null
        }

        return (
          <button
            aria-label="theme-switch"
            className="p-5"
            onClick={() => toggleTheme(isDarkMode ? 'light' : 'dark')}
          >
            {isDarkMode ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.2822 21.9999H12.1819C10.8075 21.9894 9.44895 21.7048 8.18586 21.1628C6.92278 20.6207 5.78054 19.8321 4.82604 18.8431C3.05606 16.9503 2.04993 14.469 2.00181 11.878C1.95369 9.28699 2.867 6.77001 4.56548 4.81279C5.65973 3.58648 7.03535 2.64418 8.57414 2.06686C8.75369 1.99777 8.94933 1.98182 9.1377 2.02091C9.32607 2.06001 9.49921 2.1525 9.63643 2.28733C9.76353 2.41693 9.85303 2.57862 9.89539 2.75513C9.93775 2.93163 9.93138 3.11633 9.87695 3.2895C9.32772 4.79368 9.21891 6.42332 9.56327 7.98717C9.90764 9.55102 10.6909 10.9842 11.8212 12.1186C12.9619 13.2453 14.3985 14.026 15.9646 14.37C17.5307 14.7141 19.1622 14.6076 20.6703 14.0628C20.8498 13.9996 21.0435 13.9888 21.2289 14.0317C21.4143 14.0746 21.5837 14.1694 21.7172 14.305C21.8507 14.4406 21.9428 14.6114 21.9828 14.7975C22.0228 14.9835 22.009 15.1771 21.943 15.3556C21.4311 16.7222 20.6313 17.9629 19.598 18.9934C18.6367 19.9518 17.4956 20.7108 16.2401 21.2267C14.9846 21.7427 13.6395 22.0054 12.2822 21.9999V21.9999Z"></path>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 6C11.7463 6 11.503 5.89922 11.3236 5.71984C11.1443 5.54046 11.0435 5.29716 11.0435 5.04348V2.95652C11.0435 2.70284 11.1443 2.45954 11.3236 2.28016C11.503 2.10078 11.7463 2 12 2C12.2537 2 12.497 2.10078 12.6764 2.28016C12.8557 2.45954 12.9565 2.70284 12.9565 2.95652V5.04348C12.9565 5.29716 12.8557 5.54046 12.6764 5.71984C12.497 5.89922 12.2537 6 12 6Z"></path>
                <path d="M12 22C11.7463 22 11.503 21.8992 11.3236 21.7198C11.1443 21.5405 11.0435 21.2972 11.0435 21.0435V18.9565C11.0435 18.7028 11.1443 18.4595 11.3236 18.2802C11.503 18.1008 11.7463 18 12 18C12.2537 18 12.497 18.1008 12.6764 18.2802C12.8557 18.4595 12.9565 18.7028 12.9565 18.9565V21.0435C12.9565 21.2972 12.8557 21.5405 12.6764 21.7198C12.497 21.8992 12.2537 22 12 22Z"></path>
                <path d="M16.9191 8.03739C16.73 8.03737 16.5451 7.98127 16.3878 7.87619C16.2306 7.77111 16.108 7.62177 16.0356 7.44704C15.9632 7.27231 15.9442 7.08003 15.9811 6.89452C16.0179 6.709 16.1089 6.53857 16.2426 6.40478L17.7183 4.92912C17.8984 4.75364 18.1405 4.65618 18.392 4.65783C18.6435 4.65949 18.8842 4.76013 19.062 4.93797C19.2399 5.11581 19.3405 5.35654 19.3422 5.60804C19.3438 5.85954 19.2464 6.10157 19.0709 6.28173L17.5952 7.75739C17.5065 7.84628 17.4011 7.91678 17.2851 7.96483C17.1691 8.01288 17.0447 8.03754 16.9191 8.03739Z"></path>
                <path d="M5.60524 19.3513C5.41604 19.3513 5.23111 19.2952 5.07382 19.19C4.91653 19.0849 4.79395 18.9355 4.72158 18.7607C4.64921 18.5859 4.6303 18.3935 4.66725 18.208C4.7042 18.0224 4.79534 17.852 4.92915 17.7183L6.4048 16.2426C6.49318 16.1519 6.59871 16.0796 6.71526 16.03C6.8318 15.9803 6.95704 15.9543 7.08371 15.9535C7.21038 15.9527 7.33596 15.977 7.45315 16.0251C7.57034 16.0732 7.6768 16.1441 7.76638 16.2336C7.85595 16.3232 7.92683 16.4297 7.97492 16.5469C8.02301 16.6641 8.04735 16.7896 8.04651 16.9163C8.04568 17.043 8.01969 17.1682 7.97006 17.2848C7.92044 17.4013 7.84815 17.5068 7.75741 17.5952L6.28176 19.0709C6.19303 19.1599 6.08758 19.2305 5.97148 19.2786C5.85538 19.3267 5.73091 19.3514 5.60524 19.3513Z"></path>
                <path d="M21.0435 12.9565H18.9565C18.7028 12.9565 18.4595 12.8557 18.2802 12.6764C18.1008 12.497 18 12.2537 18 12C18 11.7463 18.1008 11.503 18.2802 11.3236C18.4595 11.1443 18.7028 11.0435 18.9565 11.0435H21.0435C21.2972 11.0435 21.5405 11.1443 21.7198 11.3236C21.8992 11.503 22 11.7463 22 12C22 12.2537 21.8992 12.497 21.7198 12.6764C21.5405 12.8557 21.2972 12.9565 21.0435 12.9565Z"></path>
                <path d="M5.04348 12.9565H2.95652C2.70284 12.9565 2.45954 12.8557 2.28016 12.6764C2.10078 12.497 2 12.2537 2 12C2 11.7463 2.10078 11.503 2.28016 11.3236C2.45954 11.1443 2.70284 11.0435 2.95652 11.0435H5.04348C5.29716 11.0435 5.54046 11.1443 5.71984 11.3236C5.89922 11.503 6 11.7463 6 12C6 12.2537 5.89922 12.497 5.71984 12.6764C5.54046 12.8557 5.29716 12.9565 5.04348 12.9565Z"></path>
                <path d="M18.3948 19.3513C18.2691 19.3514 18.1447 19.3267 18.0286 19.2786C17.9125 19.2305 17.807 19.1599 17.7183 19.0709L16.2426 17.5952C16.0672 17.4151 15.9697 17.173 15.9714 16.9215C15.973 16.67 16.0737 16.4293 16.2515 16.2515C16.4293 16.0736 16.6701 15.973 16.9216 15.9713C17.1731 15.9697 17.4151 16.0671 17.5952 16.2426L19.0709 17.7183C19.2047 17.852 19.2958 18.0224 19.3328 18.208C19.3697 18.3935 19.3508 18.5859 19.2785 18.7607C19.2061 18.9355 19.0835 19.0849 18.9262 19.19C18.7689 19.2952 18.584 19.3513 18.3948 19.3513Z"></path>
                <path d="M7.08085 8.03738C6.95526 8.03763 6.83086 8.01301 6.71482 7.96496C6.59879 7.9169 6.49341 7.84635 6.40477 7.75738L4.92912 6.28173C4.75364 6.10156 4.65618 5.85953 4.65783 5.60803C4.65949 5.35654 4.76013 5.11581 4.93797 4.93797C5.11581 4.76013 5.35653 4.65949 5.60803 4.65783C5.85953 4.65618 6.10156 4.75364 6.28173 4.92912L7.75737 6.40477C7.89106 6.53857 7.98208 6.709 8.01893 6.89451C8.05578 7.08003 8.0368 7.2723 7.96439 7.44703C7.89199 7.62176 7.76941 7.77111 7.61214 7.87618C7.45488 7.98126 7.26999 8.03736 7.08085 8.03738Z"></path>
                <path d="M12 16.4348C11.1229 16.4348 10.2655 16.1747 9.53618 15.6874C8.80689 15.2001 8.23847 14.5075 7.90281 13.6971C7.56715 12.8868 7.47933 11.9951 7.65045 11.1348C7.82157 10.2746 8.24394 9.48435 8.86415 8.86414C9.48437 8.24392 10.2746 7.82155 11.1348 7.65043C11.9951 7.47931 12.8868 7.56714 13.6971 7.9028C14.5075 8.23845 15.2001 8.80687 15.6874 9.53617C16.1747 10.2655 16.4348 11.1229 16.4348 12C16.4334 13.1758 15.9657 14.303 15.1343 15.1343C14.303 15.9657 13.1758 16.4334 12 16.4348Z"></path>
              </svg>
            )}
          </button>
        )
      }}
    </ThemeToggler>
  )

  const navbar = (
    <nav className="container self-center mb-12 px-4">
      <div className="grid grid-cols-10 gap-4 max-w-screen-lg m-auto font-mont">
        <p className="col-span-8 font-bold text-base pt-6 sm:col-span-6">
          <Link
            style={{
              boxShadow: 'none',
              color: isRoot ? 'inherit' : 'var(--textLogo)',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </p>
        <p className="hidden font-medium text-base pt-6  sm:block">
          <Link
            style={{
              boxShadow: 'none',
              color: 'inherit',
            }}
            to={'/blog'}
          >
            Blog
          </Link>
        </p>
        <p className="hidden font-medium text-base pt-6 sm:block">
          <Link
            style={{
              boxShadow: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            About
          </Link>
        </p>
        <p className="hidden font-medium text-base pt-6 sm:block">
          <Link
            style={{
              boxShadow: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Contact
          </Link>
        </p>

        {toggle}
      </div>
    </nav>
  )

  const me = (
    <div className="flex max-w-screen-md self-center m-auto px-4">
      <h1 className="text-4xl text-gray-200 font-semibold leading-12 pb-8">
        Welcome 👋 I am Mohammad Takbiri. Frontend Engineer at{' '}
        <a
          className="no-underline hover:underline shadow-none"
          href="https://klue.com"
        >
          Klue
        </a>
        .
      </h1>
      {/* <img 
      className="w-64 m-0 pl-3"
      src={MohammadTransparent}  
      alt="Mohammad Takbiri profile pic">
    </img>     */}
    </div>
  )

  const recentBlogs = (
    <div className="relative py-4 sm:max-w-3xl sm:mx-auto">
      <div className="absolute inset-0 bg-custom-300  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl m-3"></div>
      <div
        className="relative px-4 py-6 shadow-lg sm:rounded-3xl sm:p-20"
        style={{ backgroundColor: 'var(--lightBg)' }}
      >
        <div className="max-w-lg mx-auto">
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
              <h2 className="mt-0">Recent Blog Posts</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className="container mx-auto transition duration-200 ease-out"
      style={{
        backgroundColor: isRoot ? 'var(--bg)' : 'var(--lightBg)' ,
        color: 'var(--textNormal)',
      }}
    >
      {/* <div className="sidebar">
        <div
          className="md:h-screen p-12 flex flex-col justify-start items-center"
          style={{ minHeight: 200 }}
        >
          {header}
          {toggle}
        </div>
      </div> */}

      
        <main>
          {type === 'root' ? (
            <>
              <div
                className={'text-gray-200'}
                style={{
                  backgroundColor: '#080E24',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23192c70' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%233155dc'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {navbar}
                {me}
              </div>
              {recentBlogs}
            </>
          ) : (
            <>
                {navbar}
              <div className={'flex flex-col max-w-screen-md m-auto relative py-4 sm:max-w-3xl sm:mx-auto px-4'} style={{maxWidth:'800px'}}>
                {children}
              </div>
            </>
          )}

          <Footer />
        </main>
      </div>
  )
}

export default Layout
