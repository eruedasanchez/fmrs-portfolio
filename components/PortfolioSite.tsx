import Image from "next/image";

const PortfolioSite = () => {
    return (
        <section className="max-width section-padding">
            <div className="box text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
                    <Image
                        src={"/stars.svg"}
                        alt='icon'
                        width={35}
                        height={35}
                    />
                </div>
                <h2 className="text-grey-700">My Creative Portfolios</h2>
                <p className="text-grey-600">Lorem ipsum dolor sit met consectetur adipiscing elit.
                Vel ullam debitis.
                </p>
            </div>
        </section>

    );
}

export default PortfolioSite;