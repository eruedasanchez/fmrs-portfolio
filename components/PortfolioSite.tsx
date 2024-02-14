import Image from "next/image";
import '../app/styles/dream-avenue.css';
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const PortfolioSite = () => {
    return (
        <section className={`${lora.className} max-width section-padding`}>
            <div className="box text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded bg-brown-700 flex items-center justify-center flex-shrink-0 mb-5">
                    <Image
                        src={"/stars.svg"}
                        alt='icon'
                        width={35}
                        height={35}
                    />
                </div>
                <h2 className="font-dream-avenue text-grey-700 tracking-wider">Immerse yourself in unique experiences</h2>
                <p className="text-grey-600">
                    Embark on a journey through my experiences as a tour guide. From the streets of ancient cities to the paths less traveled, 
                    I invite you to discover the world through my eyes. Take a look at my work as a guide and get ready to live unforgettable adventures!
                </p>
            </div>
        </section>

    );
}

export default PortfolioSite;