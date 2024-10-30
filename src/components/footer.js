import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-b-xl lg:border-0 lg:bg-gray-200 lg:p-0 lg:dark:bg-zinc-800/30 mx-0 max-w-7xl sm:0 lg:0">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300  bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border-0 lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                {t("footerCraftedBy")} &nbsp;
                <code className="font-mono font-bold">{t("footerCopyright")}</code>
            </p>
        </div>

    );
}