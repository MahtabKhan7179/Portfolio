import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb"
import { useTranslation } from 'react-i18next';

const ProjectsCard = ({ url, img, github, title, text }) => {
    const { t } = useTranslation();

    return (
        <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
            <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64" />
            <div className="capitalize p-8">
                <h2 className="text-xl tracking-wide font-medium" >{t(title)}</h2>
                <p className="mt-4 text-slate-700 leading-loose">{t(text)}</p>
                <div className="mt-4 flex gap-x-4 text-xl">
                    <a href={github} className="text-zinc-500 hover:text-red-600"><FaGithub /></a>
                    <a href={url} className="text-zinc-500 hover:text-red-600"><TbWorldWww /></a>
                </div>
            </div>

        </article>
    );
}

export default ProjectsCard;