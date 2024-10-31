import { useTranslation } from 'react-i18next';

const SectionTitle = ({ text }) => {
    const { t } = useTranslation();
    return (
        <div className="border-b border-gray-200 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize ">{t(text)}</h2>
        </div>
    );
}

export default SectionTitle;