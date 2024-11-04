import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { links } from '../data.jsx';
import { TbWorld } from "react-icons/tb";


// Contains the value and text for the options
const languages = [
    { value: "en", text: "English (default)" },
    { value: "ur", text: "Urdu" },
];

const Navbar = () => {
    useEffect(() => {
        document.title = 'Mahtab Khan';
    }, []);

    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const [languageBox, setLanguageBox] = useState(false);

    // It is a hook imported from 'react-i18next'
    const { t, i18n } = useTranslation();

    // This function put query that helps to
    // change the language
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguageBox(!languageBox)
    }

    useEffect(() => {
        // After the language direction changes, update the root HTML element
        const rootHtml = document.getElementById("root");
        if (rootHtml) {
            rootHtml.setAttribute("dir", i18n.dir());
        }
    }, [i18n.dir()]);



    return (


        <header className='bg-zinc-200'>
            <nav className="hidden sm:flex mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 px-8 py-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <h2 className='text-3xl font-bold'>Mah<span className='text-red-600'>Tab</span></h2>
                    </a>
                </div>
                <div className="hidden sm:flex sm:gap-x-12">
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a key={id} href={href} className="capitalize text-lg hover:text-red-600 duration-300">{t(text)}</a>
                        );
                    })}
                </div>
                <div className="relative inline-block text-left">
                    <div className='ml-8'>
                        <button type="button" onClick={() => setLanguageBox(!languageBox)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-100 px-2 py-1 text-2xl hover:text-red-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <TbWorld />
                            <svg className="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>


                    {languageBox && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-zinc-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        {languages.map((item) => {
                            return (
                                <div className="py-1" role="none">
                                    <button key={item.value}
                                        value={item.value}
                                        onClick={() => changeLanguage(item.value)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">{item.text}</button>
                                </div>
                            );
                        })}
                    </div>}
                </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className="sm:hidden" role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-10"></div>
                <div className="relative inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <h2 className='text-3xl font-bold'>{t("mah")}<span className='text-red-600'>{t("tab")}</span></h2>
                        </a>
                        <div className="relative inline-block text-left">
                            <div className=''>
                                <button type="button" onClick={() => setLanguageBox(!languageBox)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-100 px-2 py-1 text-2xl hover:text-red-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <TbWorld />
                                    <svg className="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            {languageBox && <div className="fixed right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-zinc-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                {languages.map((item) => {
                                    return (
                                        <div className="py-1" role="none">
                                            <button key={item.value}
                                                value={item.value}
                                                onClick={() => changeLanguage(item.value)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">{item.text}</button>
                                        </div>
                                    );
                                })}
                            </div>}
                        </div>
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

            {/* <nav className='bg-zinc-200'> */}
            {/* <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row 
            sm:gap-x-16 sm:items-center sm:py-8'> */}
            {/* <h2 className='text-3xl font-bold'>{t("mah")}<span className='text-red-600'>{t("tab")}</span></h2> */}
            {/* <div className='flex gap-x-3'>
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a key={id} href={href} className='capitalize text-lg hover:text-red-600 duration-300'>
                                {t(text)}
                            </a>
                        );
                    })}
                </div> */}
            {/* <div className="relative inline-block text-left">
                    <div className=''>
                        <button type="button" onClick={() => setLanguageBox(!languageBox)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-100 px-2 py-1 text-2xl hover:text-red-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <TbWorld />
                            <svg className="-mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>


                    {languageBox && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-zinc-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        {languages.map((item) => {
                            return (
                                <div className="py-1" role="none">
                                    <button key={item.value}
                                        value={item.value}
                                        onClick={() => changeLanguage(item.value)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">{item.text}</button>
                                </div>
                            );
                        })}
                    </div>}
                </div> */}
            {/* </div> */}

            {/* </nav> */}
        </header>
    );
};

export default Navbar;