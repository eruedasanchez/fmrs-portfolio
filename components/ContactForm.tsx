'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userContactSchema } from "@/validations/userContactSchema";

type Inputs = {
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string,
    message: string
};

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
        resolver: zodResolver(userContactSchema)
    });

    console.log('errors:', errors);
    
    return (
        <div className="box w-full">
            <form
                className="space-y-5"
                onSubmit={handleSubmit(data => {console.log('data completada:', data)})}
            >
                <div className="flex gap-5 max-tablet:flex-col">
                    <label htmlFor="first-name" hidden>First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        placeholder="First Name"
                        {...register('firstName')}
                    />
                    {
                        errors.firstName?.message && <p>{errors.firstName?.message}</p>
                    }
                    
                    <label htmlFor="last-name" hidden>Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Last Name"
                        {...register('lastName')}
                    />
                    {
                        errors.lastName?.message && <p>{errors.lastName?.message}</p>
                    }
                </div>
                <div className="flex gap-5 max-tablet:flex-col">
                    <label htmlFor="email" hidden>Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        {...register('email')}
                    />
                    {
                        errors.email?.message && <p>{errors.email?.message}</p>
                    }
                    
                    <label htmlFor="phone" hidden>Phone</label>
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="Phone"
                        {...register('phone')}
                    />
                    {
                        errors.phone?.message && <p>{errors.phone?.message}</p>
                    }
                </div>
                
                <label htmlFor="message" hidden>Message</label>
                <textarea 
                    id="message" 
                    placeholder="Message" 
                    className="min-h-[200px]"
                    {...register('message')}
                ></textarea>
                {
                        errors.message?.message && <p>{errors.message?.message}</p>
                    }
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

            <div>
                {JSON.stringify(watch(), null, 2)}
            </div>
        </div>
    );
}

export default ContactForm;


