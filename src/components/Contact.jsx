import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";
const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});


	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// cleaning the form data
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Shivansh Dwivedi",
					reply_to: user_email,
					to_email: "shivansh.dwivedi.tech@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (

		<div className="relative z-0 bg-black w-full min-h-screen mt-12 flex flex-col items-center justify-center">
			<div className="text-white contact overflow-hidden w-full sm:w-[650px] m-auto p-8 rounded-2xl shadow-lg bg-gray-950 mb-10">
				<p className="font-light text-center">REACH OUT TO ME</p>
				<h2 className="text-5xl font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-400 text-center">
					Contact.
				</h2>
				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
					<label className="flex flex-col">
						<span className="font-medium mb-2">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Enter your name"
							className="py-3 px-5 rounded-lg outline-none border border-gray-700 font-medium bg-gray-900 focus:border-pink-500 transition"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="font-medium mb-2">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Ex: abc@gmail.com"
							className="py-3 px-5 rounded-lg outline-none border border-gray-700 font-medium bg-gray-900 focus:border-pink-500 transition"
							required
						/>
					</label>
					<label className="flex flex-col">
						<span className="font-medium mb-2">Your Message</span>
						<textarea
							rows={5}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Do you have anything to say?"
							className="py-3 px-5 rounded-lg outline-none border border-gray-700 font-medium bg-gray-900 focus:border-pink-500 transition resize-none"
							required
						/>
					</label>

					<div className="flex justify-center mt-4">
						<button
							type="submit"
							className="py-3 px-10 rounded-lg font-bold bg-gray-900 border border-gray-700 hover:bg-gray-800 transition shadow-md"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</div>
				</form>
				<ToastContainer />
			</div>
			<div className="w-full">
			<Footer />
			</div>
		</div>

	);
};

export default Contact;
