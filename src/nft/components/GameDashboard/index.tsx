import React, { useState } from "react";
import ImageSection from "./ImageSection";
import BioSection from "./BioSection";
import PixpelStudios from "./PixpelStudios";
import UploadModal from "./UploadModal";
import TextModal from "./TextModal";

function GameDashboardPage({ edit }: { edit?: boolean }) {
    const [modal, setModal] = useState<{ id: number; type: string }>({ id: 2, type: "" });
    const [images, setImages] = useState({
        banner: "",
        banner2: "",
        banner3: "",
    });
    const [texts, setTexts] = useState<{
        top: { title: string; desc: string };
        bottom: { title: string; desc: string };
    }>({
        top: {
            title: "",
            desc: "",
        },
        bottom: {
            title: "",
            desc: "",
        },
    });

    function closeModal() {
        setModal({ id: 2, type: "" });
    }

    function openModal(id: number, type: string) {
        setModal({ id, type });
    }

    function setNewImages(name: string, img: string) {
        setImages((pre) => ({ ...pre, [name]: img }));
        setModal({ id: 2, type: "" });
    }
    function setNewTexts(name: string, newdesc: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setTexts((pre: any) => ({
            ...pre,
            [name]: { title: pre[name]?.title, desc: newdesc },
        }));
        setModal({ id: 2, type: "" });
    }

    function handleInputChange(val: string, type: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setTexts((pre: any) => ({
            ...pre,
            [type]: { desc: pre[type]?.desc, title: val },
        }));
    }

    return (
        <div>
            <ImageSection openModal={openModal} banner={images.banner} edit={edit} />
            <BioSection
                openModal={openModal}
                onChange={(val) => handleInputChange(val, "top")}
                banner={images.banner2}
                edit={edit}
                {...texts.top}
            />
            <BioSection
                onChange={(val) => handleInputChange(val, "bottom")}
                openModal={openModal}
                banner={images.banner3}
                left
                edit={edit}
                {...texts.bottom}
            />
            <PixpelStudios edit={edit} />
            {modal &&
                (modal.id === 0 ? (
                    <UploadModal
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={(image: string) => setNewImages(modal.type, image)}
                        handleClick={closeModal}
                    />
                ) : (
                    modal.id === 1 && (
                        <TextModal
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            text={
                                modal.type === "top"
                                    ? texts["top"].desc
                                    : modal.type === "bottom"
                                    ? texts["bottom"].desc
                                    : ""
                            }
                            onChange={(desc: string) => setNewTexts(modal.type, desc)}
                            handleClick={closeModal}
                        />
                    )
                ))}
        </div>
    );
}

export default GameDashboardPage;
