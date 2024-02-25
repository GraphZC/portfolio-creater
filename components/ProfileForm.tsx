'use client'

export default function ProfileForm() {
    return (
        <div>
            <form action="">
                <div className="mt-3">
                    <label htmlFor="name" className="block">ชื่อ</label>
                    <input 
                        type="text" 
                        className="input-field" 
                        required={true}
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="description" className="block">คำอธิบายตัวเองสั้นๆ</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        className="input-field" 
                        rows={2} 
                    ></textarea>
                </div>
                {/* Social */}
                <div className="mt-3">
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
