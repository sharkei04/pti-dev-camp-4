import { useForm, usePage } from "@inertiajs/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactForm() {
    const { flash = {} } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();

    post("/contact", {
        onSuccess: () => reset(),
    });
    };

    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/keisya-rizkyka",
        instagram: "https://www.instagram.com/keisyarzkaa",
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/*Background Setengah*/}
            <div className="h-56 bg-gradient-to-r from-blue-600 to-cyan-500"></div>

            {/*Card*/}
            <div className="-mt-36 mx-auto w-full max-w-4xl rounded-2xl bg-white p-10 shadow-2xl">

                {/*Header*/}
                <div className="mb-10 text-center">

                    <h1 className="text-4xl font-bold text-gray-800">
                        Contact Us
                    </h1>

                    <p className="mt-3 text-gray-500">
                        We'd love to hear from you ^^ Fill out the form below.
                    </p>

                </div>

                {/*Sukses Selalu*/}
                {flash?.success && (
                    <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
                        {flash.success}
                    </div>
                )}

                <form
                    onSubmit={submit}
                    className="space-y-6"
                >
                    {/*Nama buat Absen*/}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                First Name
                            </label>

                            <input
                                type="text"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                placeholder="Enter your first name"
                                className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 outline-none
                                    ${
                                        errors.first_name
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    }`}
                            />

                            {errors.first_name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.first_name}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Last Name
                            </label>

                            <input
                                type="text"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                placeholder="Enter your last name"
                                className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 outline-none
                                    ${
                                        errors.last_name
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    }`}
                            />

                            {errors.last_name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.last_name}
                                </p>
                            )}
                        </div>

                    </div>

                    {/*email no hp*/}
                    <div className="grid gap-6 md:grid-cols-2">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="example@email.com"
                                className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 outline-none
                                    ${
                                        errors.email
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    }`}
                            />

                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Phone Number
                            </label>

                            <input
                                type="text"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                placeholder="+62 812 3456 7890"
                                className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 outline-none
                                    ${
                                        errors.phone
                                            ? "border-red-500"
                                            : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    }`}
                            />

                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                    </div>
                    
                    {/*Subjek*/}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Subject
                        </label>

                        <input
                            type="text"
                            value={data.subject}
                            onChange={(e) =>
                                setData("subject", e.target.value)
                            }
                            placeholder="Enter the subject"
                            className={`w-full rounded-lg border px-4 py-3 transition-all duration-200 outline-none
                                ${
                                    errors.subject
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                }`}
                        />

                        {errors.subject && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.subject}
                            </p>
                        )}
                    </div>

                    {/*Pesan Hari Ini*/}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Message
                        </label>

                        <textarea
                            rows={6}
                            value={data.message}
                            onChange={(e) =>
                                setData("message", e.target.value)
                            }
                            placeholder="Write your message here..."
                            className={`w-full resize-none rounded-lg border px-4 py-3 transition-all duration-200 outline-none
                                ${
                                    errors.message
                                        ? "border-red-500"
                                        : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                }`}
                        />

                        <div className="mt-2 flex items-center justify-between">
                            {errors.message ? (
                                <p className="text-sm text-red-500">
                                    {errors.message}
                                </p>
                            ) : (
                                <span></span>
                            )}

                            <p className="text-sm text-gray-400">
                                {2000 - data.message.length} characters remaining
                            </p>
                        </div>
                    </div>

                    {/*Tombol Ngirim*/}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {processing ? "Sending..." : "Send Message"}
                    </button>

                </form>

                {/*Sosmed me, Follow me*/}
                <div className="mt-10 border-t border-gray-200 pt-6">

                    <p className="mb-4 text-center text-sm text-gray-500">
                        Connect with us
                    </p>

                    <div className="flex justify-center gap-5">

                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-300 p-3 text-gray-600 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-300 p-3 text-gray-600 transition-all duration-200 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                        >
                            <FaInstagram size={22} />
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}