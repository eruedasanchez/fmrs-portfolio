import Image from "next/image";
import { Lora } from "next/font/google";
import '../app/styles/dream-avenue.css';

const lora = Lora({ subsets: ["latin"] });

const ContactHeader = () => {
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
                <h2 className="font-dream-avenue tracking-wide text-grey-700">I&apos;d love to hear from you</h2>
                <p className="text-grey-600">Hello! I would love to get to know you better. 
                So please don&apos;t hesitate to leave me a message, share your ideas to connect and explore opportunities. 
                I&apos;m excited to learn more about you and how we can work together to do amazing things.
                </p>
            </div>
        </section>
    );
}

export default ContactHeader;