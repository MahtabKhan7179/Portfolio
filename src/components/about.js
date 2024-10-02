import aboutSVG from "../assets/about.svg"
import SectionTitle from "./sectionTitle";

const About = () => {
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 item-center gap-16">
                <img src={aboutSVG} className="w-full h-64" />
                <article>
                    <SectionTitle text="code and coffee" />
                    <p className="text-zinc-800 mt-8 leading-loose">

                    </p>
                </article>

            </div>
        </section>
    );
}

export default About;