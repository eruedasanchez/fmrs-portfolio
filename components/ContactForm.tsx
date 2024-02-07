const ContactForm = () => {
    return (
        <div className="box w-full">
            <form action="" className="space-y-5">
                <div className="flex gap-5 max-tablet:flex-col">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="flex gap-5 max-tablet:flex-col">
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                </div>
                <textarea placeholder="Message" className="min-h-[200px]"></textarea>
                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </form>
        </div>
    );
}

export default ContactForm;