import Image from "next/image";
import Stats from "./Stats";

const MilestoneHero = () => {
    return (
        <section className=" max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
                <div className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]">
                    <Image
                        src={"/about.png"}
                        fill
                        alt="about img"
                        className="object-cover"
                    />
                </div>
                <div className="tablet:w-1/2">
                    <div className="space-y-3 max-tablet:text-center flex flex-col">
                        <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded
                        tablet:w-max max-tablet:mx-auto">
                            Welcome to the world of captivating Tourist Guide!
                        </p>
                        <h1 className="text-grey-700">I&apos;m Flor RS</h1>
                        <p className="text-grey-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Hic sit laborum nobis corporis porro aliquid officia temporibus magnam sint! 
                            Dolorem voluptatibus exercitationem sunt, recusandae adipisci voluptatem esse 
                            animi iusto enim.
                            lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Hic sit laborum nobis corporis porro aliquid officia temporibus magnam sint! 
                            Dolorem voluptatibus exercitationem sunt, recusandae adipisci voluptatem esse 
                            animi iusto enim.
                        </p>
                    </div>
                    <Stats 
                        containedStyles="bg-peach-400 rounded-;g tablet:rounded-none tablet:bg-transparent
                        tablet:border-t-2 tablet:border-b-2 tablet:border-purple
                        w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col
                        tablet:flex-row"
                        statsDetailStyles="flex justify-center items-center gap-10 tablet:block"
                    />
                </div>
            </section>
    );
}

export default MilestoneHero;