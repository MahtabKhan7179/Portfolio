export default function SkillProgressBar({ progress }) {

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="mt-2 ml-auto text-lg font-semibold">{progress}%</p>
            <div className="relative w-full max-w-md h-3 bg-zinc-200
rounded-full overflow-hidden">
                <div
                    className="absolute h-full bg-red-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>);
}