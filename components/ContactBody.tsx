import { contactData, socialLinks } from "@/constants/constants";
import ContactDetail from "./ContactDetail";
import Link from "next/link";
import ContactForm from "./ContactForm";
import FaqsContainer from "./FaqsContainer";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const ContactBody = () => {
    return (
        <>
            <section className={`${lora.className} max-width section-padding flex max-tablet:flex-col gap-16`}>
                <div className="tablet:max-w-md w-full">
                    <div className="space-y-4">
                        {
                            contactData.map((info,index) => (
                                <ContactDetail key={index} info={info}/>
                            ))
                        }
                    </div>
                    <h6 className="mt-10 mb-3 text-gray-700 max-tablet:text-center">
                        My Social Profiles
                    </h6>
                    <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
                        {
                            socialLinks.map((link, index) => (
                                <Link
                                    href={link.url}
                                    key={index}
                                    className="w-10 h-10 bg-peach border border-brown-700 rounded-full text-brown-700 flex justify-center items-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <link.icon size={19} strokeWidth={0} fill="currentColor"/>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <ContactForm/>
            </section>
            <FaqsContainer/>
        </>
    )
}

export default ContactBody;