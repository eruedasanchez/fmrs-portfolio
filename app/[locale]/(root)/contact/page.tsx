import ContactContainer from "@/components/ContactContainer";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Contact | Florencia Rueda Sanchez"
};

const ContactPage = () => {
    return (
        <ContactContainer/>
    )
}

export default ContactPage;