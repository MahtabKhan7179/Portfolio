import heroImg from '../assets/hero.png';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className='bg-zinc-200 py-24'>
            <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-zinc-800 font-bold text-8xl tracking-wider'>{t("developerIntro")}</h1>
                    <p className='text-zinc-600 text-4xl capitalize tracking-wide mt-4'>{t("developerRole")}</p>
                    <p className='text-zinc-400 text-2xl capitalize tracking-wide mt-2'>{t("developerWork")}</p>
                    <div className='flex gap-x-6 mt-4 text-zinc-500 text-2xl '>
                        <a className='hover:text-red-600 duration-300 z-10' href='https://github.com/MahtabKhan7179'><FaGithub /></a>
                        <a className='hover:text-red-600 duration-300 z-10' href='https://www.linkedin.com/in/khanmahtab/'><FaLinkedinIn /></a>
                        {/* <a className='hover:text-red-600 duration-300' href='#'><FaTwitterSquare /></a> */}
                    </div>

                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} className='h-80 lg:h-96' alt="Hero" />
                </article>

            </div>

        </section>
    );
}

export default Hero;