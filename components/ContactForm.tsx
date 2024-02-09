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
    const { register, handleSubmit, formState: {errors}} = useForm<Inputs>({
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
                    <div className="w-full">
                        <input 
                            type="text" 
                            id="firstName" 
                            placeholder="First Name"
                            {...register('firstName')}
                            className={`${errors.firstName?.message && 'w-full border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.firstName?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.firstName?.message}</p>
                        }
                    </div>
                    <div className="w-full">
                        <input 
                            type="text" 
                            id="lastName" 
                            placeholder="Last Name"
                            {...register('lastName')}
                            className={`${errors.lastName?.message && 'border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.lastName?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.lastName?.message}</p>
                        }
                    </div>
                </div>
                <div className="flex gap-3 max-tablet:flex-col">
                    <div className="w-full"> 
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email"
                            {...register('email')}
                            className={`${errors.email?.message && 'border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.email?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.email?.message}</p>
                        }
                    </div>
                    
                    <div className="w-full">
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder="Phone"
                            {...register('phone')}
                            className={`${errors.phone?.message && 'border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.phone?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.phone?.message}</p>
                        }
                    </div>
                </div>
                <textarea 
                    id="message" 
                    placeholder="Message" 
                    {...register('message')}
                    className={`min-h-[200px] ${errors.message?.message && 'border-2 border-red-400 bg-red-200'}`}
                ></textarea>
                {
                        errors.message?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.message?.message}</p>
                    }
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;


