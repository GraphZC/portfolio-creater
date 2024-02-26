'use client'

import { signIn } from "next-auth/react";

export default function Home() {
	return (
		<>
			<h1 className="text-3xl text-center my-5">สร้าง Portfolilo ของคุณ</h1>

			<div className="flex justify-center">
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded-full"
					onClick={() => {
						signIn("google", {
							callbackUrl: "/manage/",
						});
					}}
				>
					สร้างเลย
				</button>
			</div>
		</>
	);
}
