const SkillsCard = ({ title, icon, text }) => {

    return (
        <article>
            <span text-6xl>{icon}</span>
            <h4 className="mt-6 font-bold">{title}</h4>
            <p className="mt-2 text-zinc-500">{text}</p>
        </article>
    );
}

export default SkillsCard;