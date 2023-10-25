/* eslint-disable @typescript-eslint/no-explicit-any */
import CloudUpload from "@public/assets/images/icons/cloudupload.svg";
import Progress from "@public/assets/images/icons/progress.svg";
import Image from "next/image";
import React, { FormEvent, useRef, useState } from "react";
import EnableButton from "../Button/EnableButton";

function UploadModal({ handleClick, onChange }: { handleClick: () => void; onChange: (e: any) => void }) {
    const [image, setImage] = useState();
    const ref = useRef<any>(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (image) {
            onChange(URL.createObjectURL(image));
        }
    };

    const handleFile = (img: any) => {
        if (img.type.includes("image")) {
            setImage(img);
        }
    };
    const handleDrag = function (e: any) {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = function (e: any) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = function (e: any) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const onButtonClick = () => {
        ref.current?.click();
    };

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={handleClick}></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
                <form
                    onDragEnter={handleDrag}
                    onSubmit={onSubmit}
                    onDrop={handleDrop}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    className="relative flex flex-col justify-center items-center w-full max-w-2xl p-4 mx-auto bg-app-black-modal rounded-xl shadow-lg xs:px-12 xs:py-12 px-0 py-0 text-lg"
                >
                    <div className=" text-3xl font-bold text-center mb-6">Drop here to upload</div>
                    <div className="h-auto w-full py-6 px-8 bg-app-black flex justify-center items-center rounded-lg">
                        <div
                            onClick={onButtonClick}
                            className="flex flex-col justify-center py-10 px-16 border border-dashed items-center"
                        >
                            <Image
                                src={image ? URL.createObjectURL(image) : CloudUpload}
                                width={194}
                                height={114}
                                className="mt-6"
                                alt=""
                            />
                            {image ? <h2>Change Image</h2> : <Image src={Progress} className="mt-6" alt="" />}
                            <input type="file" name="image" className="hidden" ref={ref} onChange={handleChange} />
                        </div>
                    </div>
                    <EnableButton
                        type="submit"
                        className="bg-app-green w-fit mt-10 hover:bg-app-green-hover !px-14 !py-5"
                        title="Upload"
                    />
                </form>
            </div>
        </div>
    );
}

export default UploadModal;
