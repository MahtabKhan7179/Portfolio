import { useState } from 'react';
import { links } from '../data.jsx';

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    return (
        <header className='bg-zinc-200'>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <h2 className='text-3xl font-bold'>Mah<span className='text-red-600'>Tab</span></h2>
                    </a>
                </div>
                <div className="hidden sm:flex sm:gap-x-12">
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a key={id} href={href} className="capitalize text-lg hover:text-red-600 duration-300">{text}</a>
                        );
                    })}
                </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className="sm:hidden" role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <h2 className='text-3xl font-bold'>Mah<span className='text-red-600'>Tab</span></h2>
                        </a>
                        <button type="button" onClick={() => { setHamburgerMenu(!hamburgerMenu) }} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                {hamburgerMenu ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
                            </svg>
                        </button>
                    </div>
                    {hamburgerMenu && <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {links.map((link) => {
                                    const { id, href, text } = link;
                                    return (
                                        <a key={id} href={href} className="capitalize text-lg hover:text-red-600 duration-300 -mx-3 block">{text}</a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
