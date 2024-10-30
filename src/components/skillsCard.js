import { useTranslation } from 'react-i18next';
import SkillProgressBar from './skillProgressBar';

const SkillsCard = ({ title, icon, text, progress }) => {
    const { t } = useTranslation();

    return (
        <article className='group'>
            <span>{icon}</span>
            <h4 className="mt-6 font-bold">{title}</h4>
            <p className=" hidden group-hover:block mt-2 text-zinc-500">{t(text)}</p>
            <SkillProgressBar progress={progress} />
        </article>
    );
}

export default SkillsCard;