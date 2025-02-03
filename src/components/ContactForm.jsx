import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const ContactForm = () => {
    return (
        <div className="bg-white-color px-[73px] py-[60px] rounded-2xl shadow-lg w-[938px] mx-auto mt-10 relative z-1">
            <div className="flex justify-center items-center z-10 mb-[42px]">
                <SectionTitle firstPart={"Get in"} lastWord={"Touch"}></SectionTitle>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-500 text-sm mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Lorem Ipsum"
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 py-2 text-black font-semibold"
                    />
                </div>
                <div>
                    <label className="block text-gray-500 text-sm mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="LoremIpsum@mail.com"
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 py-2 text-black font-semibold"
                    />
                </div>
                <div>
                    <label className="block text-gray-500 text-sm mb-1">Phone</label>
                    <input
                        type="text"
                        placeholder="+0 968 856 1524"
                        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 py-2 text-black font-semibold"
                    />
                </div>
                <div>
                    <label className="block text-gray-500 text-sm mb-1">Subject</label>
                    <select className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-yellow-500 py-2 text-black font-semibold">
                        <option>Choose your subject</option>
                        <option>Support</option>
                        <option>Feedback</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                    <Button title={"Submit"}></Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
