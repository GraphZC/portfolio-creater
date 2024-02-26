'use client'

import useUser from "@/api-hook/user/useUser";
import Require from "../Require";
import { useForm } from "react-hook-form";
import User from "@/interface/User";

interface ProfileFormProps {
    username: string;
    handleEdit: (user: User) => void;
};

export default function ProfileForm({ 
    username,
    handleEdit
}: ProfileFormProps) {

    const { data: user, isPending, error } = useUser(username);
    const { register, handleSubmit, formState: { errors } } = useForm<User>();

    if (isPending) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleEdit)}>
                <input 
                    type="hidden" 
                    value={ username } 
                    {...register("username")}
                />
                <div className="mt-3">
                    <label htmlFor="name" className="block">ชื่อ <Require /></label>
                    <input 
                        type="text" 
                        className="input-field" 
                        required={true}
                        defaultValue={user?.name}
                        {...register("name")}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="description" className="block">คำอธิบายตัวเองสั้นๆ</label>
                    <textarea 
                        id="description" 
                        className="input-field" 
                        rows={2} 
                        defaultValue={user?.description ?? ""}
                        {...register("description")}
                    ></textarea>
                </div>

                {/* <div className="mt-3">
                    <label htmlFor="facebook" className="block">Facebook</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="instagram" className="block">Instagram</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="line" className="block">Line</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="linkedin" className="block">Linkedin</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="tiktok" className="block">Tiktok</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="twitter" className="block">Twitter</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="youtube" className="block">Youtube</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="github" className="block">Github</label>
                    <input 
                        type="text" 
                        className="input-field" 
                    />
                </div> */}

                <div className="mt-3">
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                    >
                        บันทึก
                    </button>
                </div>
            </form>
        </div>
    )
}
