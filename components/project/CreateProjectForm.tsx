'use client'

import Project from "@/interface/Project";
import { useForm } from "react-hook-form";
import Require from "../Require";
import { useSession } from "next-auth/react";
import BackButton from "../BackButton";

interface CreateProjectFormProps {
    handleCreate: (project: Project) => void;
}

export default function CreateProjectForm({
    handleCreate
}: CreateProjectFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Project>();
    const { data: user, status  } = useSession();

    if (status === 'loading') return <div>Loading...</div>

    return (
        <div>
            <div className="mt-4">
                <BackButton 
                    href="/manage/project" 
                />
            </div>
            <form onSubmit={handleSubmit(handleCreate)}>
                <input 
                    type="hidden"
                    value={user?.id}
                    {...register("userId")}
                />
                <div className="mt-3">
                    <label htmlFor="name" className="block">ชื่อโปรเจค <Require /></label>
                    <input 
                        type="text" 
                        className="input-field" 
                        required={true}
                        {...register("name")}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="type" className="block">ประเภท <Require /></label>
                    <input 
                        type="text" 
                        className="input-field" 
                        required={true}
                        {...register("type")}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="description" className="block">คำอธิบายโปรเจค <Require /></label>
                    <textarea 
                        id="description" 
                        className="input-field" 
                        rows={7} 
                        {...register("description")}
                    ></textarea>
                </div>

                <div className="mt-3">
                    <label htmlFor="sourceUrl" className="block">URL ของไฟล์ต้นฉบับ</label>
                    <input 
                        type="text" 
                        className="input-field" 
                        {...register("sourceUrl")}
                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="demoUrl" className="block">URL ที่มีการเผยแพร่</label>
                    <input 
                        type="text" 
                        className="input-field" 
                        {...register("demoUrl")}
                    />
                </div>

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
