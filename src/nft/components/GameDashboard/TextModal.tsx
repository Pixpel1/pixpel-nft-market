import React, { FormEvent } from "react";
import EnableButton from "../Button/EnableButton";

function TextModal({
    handleClick,
    onChange,
    text,
}: {
    handleClick: () => void;
    onChange: (e: string) => void;
    text: string;
}) {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData);
        if (formValues.desc) {
            onChange(formValues.desc as string);
        }
    };

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={handleClick}></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
                <form
                    onSubmit={onSubmit}
                    className="relative flex flex-col justify-center items-center w-full max-w-2xl p-4 mx-auto bg-app-black-modal rounded-xl shadow-lg xs:px-12 xs:py-12 px-0 py-0 text-lg"
                >
                    <div className=" text-3xl font-bold text-center mb-6">Input Text</div>
                    <textarea
                        required
                        rows={15}
                        name="desc"
                        className="h-auto text-base font-medium placeholder:text-base placeholder:font-medium text-app-black-duration placeholder:text-app-black-duration w-full py-4 px-6 outline-none bg-app-black flex justify-center items-center rounded-lg"
                        placeholder="Type text here"
                        defaultValue={text}
                    />
                    <EnableButton
                        type="submit"
                        className="bg-app-green uppercase w-fit mt-10 hover:bg-app-green-hover !px-14 !py-5"
                        title="Save Changes"
                    />
                </form>
            </div>
        </div>
    );
}

export default TextModal;
