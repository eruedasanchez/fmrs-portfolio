import { skills } from "@/constants/constants";
import Image from "next/image";

const Skills = () => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
            {
                skills.map((skill, index) => (
                    <div key={index} className="box flex flex-col items-center gap-5">
                        <div className="w-16 h-16 rounded bg-purple 
                        flex items-center justify-center flex-shrink-0 mb-2">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={35}
                                height={35}
                            />
                        </div>
                        <div className="text-center">
                            <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                            <p className="text-grey-600">{skill.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Skills;