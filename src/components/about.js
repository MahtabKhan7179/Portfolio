import aboutSVG from "../assets/about.svg"
import SectionTitle from "./sectionTitle";
import SkillsCard from "./skillsCard";
import { skills } from "../data";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 item-center gap-16">
                <img src={aboutSVG} alt="about" className="w-full h-64" />
                <article className="text-1xl">
                    <SectionTitle text="KnowWhoIAm" />
                    <p className="hover:text-zinc-500 mt-8 leading-loose">
                        {t("KnowWhoIAmP1")}
                        <br />
                        {t("KnowWhoIAmP2")}
                        <br />
                        <br />
                        <p>{t("KnowWhoIAmP3")}
                        </p><br />
                    </p>
                </article>

            </div>
            <section className="py-20 align-element" id="skills">
                <SectionTitle text="skills" />
                <div className="py-16 grid md-grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        skills.map((skill) => {
                            return <SkillsCard key={skill.id} {...skill} />
                        })
                    }
                </div>
            </section>
        </section>


    );
}

export default About;