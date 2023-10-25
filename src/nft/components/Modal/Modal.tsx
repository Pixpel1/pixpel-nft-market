import React, { ReactNode } from "react";
import { Tooltip } from "antd";

interface Modal {
    header: ReactNode | string;
    ShoppingListItem?: boolean;
    deleteNftModal?: boolean;
    inviteModal?: boolean;
    nftSet?: boolean;
    handleClose: () => void;
    children?: React.ReactNode;
}

const Modal = (props: Modal) => {
    return (
        <div
            className={
                (props.ShoppingListItem ? "transition-transform transform-gpu" : "") +
                "transition-transform transform-gpu cmodal"
            }
        >
            {props.ShoppingListItem ? (
                <>
                    <div className="flex flex-col items-center justify-center bg-app-black w-full max-w-xl p-7 rounded-md">
                        <div className="modal-head text-lg font-medium mb-5">{props.header}</div>
                        <div className="flex flex-col w-full">
                            <input
                                type="text"
                                name="add"
                                className="bg-app-black-button placeholder:text-app-black-button px-3 py-1 rounded-lg"
                                placeholder="Name of the List"
                            />
                            <div className="flex justify-center gap-3 mt-10">
                                <button
                                    className="bg-app-black-button hover:bg-app-black-select px-3 py-1 rounded-md font-medium"
                                    onClick={props.handleClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-app-green hover:bg-app-green-hover px-3 py-1 rounded-md font-medium"
                                    onClick={props.handleClose}
                                >
                                    Create List
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : props.deleteNftModal ? (
                <>
                    <div className="flex flex-col items-center bg-app-black w-full max-w-[534px] p-7 rounded-md">
                        <div className="modal-head text-lg flex flex-col items-center justify-center font-medium mb-5">
                            <svg
                                width="130"
                                height="130"
                                viewBox="0 0 130 130"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="65" cy="65" r="64.5" stroke="#F6465D" stroke-dasharray="2 2" />
                                <circle cx="65" cy="65" r="50" fill="#F6465D" />
                                <path
                                    d="M69 46.24L68.104 73.288H61.496L60.544 46.24H69ZM64.968 86.392C63.5493 86.392 62.3733 85.9627 61.44 85.104C60.544 84.208 60.096 83.1067 60.096 81.8C60.096 80.4933 60.544 79.4107 61.44 78.552C62.3733 77.656 63.5493 77.208 64.968 77.208C66.3493 77.208 67.488 77.656 68.384 78.552C69.28 79.4107 69.728 80.4933 69.728 81.8C69.728 83.1067 69.28 84.208 68.384 85.104C67.488 85.9627 66.3493 86.392 64.968 86.392Z"
                                    fill="white"
                                />
                            </svg>

                            <h4 className="text-2xl font-semibold mt-[17px]">Confirm Delete</h4>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <p className="text-lg font-medium">Are you sure you want to delete this item?</p>
                            <div className="flex justify-center gap-3 mt-10">
                                <button
                                    className="bg-app-black-button text-lg max-w-[203px] hover:bg-app-black-select px-16 py-5 rounded-md font-medium"
                                    onClick={props.handleClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-app-green text-lg max-w-[203px] hover:bg-app-green-hover  px-8 py-5 rounded-md font-medium"
                                    onClick={props.handleClose}
                                >
                                    Confirm Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : props.nftSet ? (
                <>
                    <div className="flex flex-col items-center bg-app-black w-full max-w-[534px] p-7 rounded-md">
                        <div className="modal-head text-lg font-medium mb-5">
                            <svg
                                width="130"
                                height="130"
                                viewBox="0 0 130 130"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="65" cy="65" r="64.5" stroke="#F6465D" stroke-dasharray="2 2" />
                                <circle cx="65" cy="65" r="50" fill="#F6465D" />
                                <path
                                    d="M69 46.24L68.104 73.288H61.496L60.544 46.24H69ZM64.968 86.392C63.5493 86.392 62.3733 85.9627 61.44 85.104C60.544 84.208 60.096 83.1067 60.096 81.8C60.096 80.4933 60.544 79.4107 61.44 78.552C62.3733 77.656 63.5493 77.208 64.968 77.208C66.3493 77.208 67.488 77.656 68.384 78.552C69.28 79.4107 69.728 80.4933 69.728 81.8C69.728 83.1067 69.28 84.208 68.384 85.104C67.488 85.9627 66.3493 86.392 64.968 86.392Z"
                                    fill="white"
                                />
                            </svg>

                            <h4 className="text-2xl font-semibold">Confirm Delete</h4>
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <p className="text-lg font-medium">Are you sure you want to delete this item?</p>
                            <div className="flex justify-center gap-3 mt-10">
                                <button
                                    className="bg-app-black-button text-lg max-w-[203px] hover:bg-app-black-select px-16 py-5 rounded-md font-medium"
                                    onClick={props.handleClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-app-green text-lg max-w-[203px] hover:bg-app-green-hover  px-8 py-5 rounded-md font-medium"
                                    onClick={props.handleClose}
                                >
                                    Confirm Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : props.inviteModal ? (
                <>
                    <div
                        className="flex flex-col items-center bg-app-black w-full max-w-[360px] p-7 rounded-md"
                        onClick={props.handleClose}
                    >
                        <div className="invite-modal">
                            <div className="flex flex-col items-center justify-center w-full">
                                <h5 className="text-lg font-semibold text-white uppercase ">{props.header}</h5>
                                <Tooltip
                                    placement="top"
                                    overlayClassName="[&>.ant-tooltip-arrow]:before:bg-app-gray-light [&>.ant-tooltip-content>.ant-tooltip-inner]:bg-app-gray-light"
                                    title={"Everyone with the link can watch without making changes."}
                                >
                                    <input
                                        type="text"
                                        value={"Read Only"}
                                        className="px-3 py-1 bg-app-black-button rounded-md text-app-black-light_gray my-4"
                                        placeholder="Read Only"
                                        readOnly
                                    />
                                </Tooltip>
                                <div className="flex w-full pb-3 justify-evenly border-b border-solid border-app-black-duration">
                                    <div className="flex  items-center gap-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_1_17760)">
                                                <path
                                                    d="M10.3538 4.12693L8.85871 5.6235C8.51961 5.96221 8.07974 6.18173 7.6052 6.24906C7.13067 6.3164 6.6471 6.22791 6.22715 5.99691L7.44331 4.77928C7.58351 4.75021 7.71222 4.68098 7.81376 4.58003L9.31034 3.08493C9.37906 3.01638 9.43359 2.93494 9.47079 2.84529C9.50799 2.75564 9.52714 2.65952 9.52714 2.56245C9.52714 2.46539 9.50799 2.36927 9.47079 2.27962C9.43359 2.18997 9.37906 2.10853 9.31034 2.03998L8.96203 1.69314C8.82364 1.55479 8.63597 1.47708 8.44029 1.47708C8.24461 1.47708 8.05694 1.55479 7.91855 1.69314L6.42345 3.18677C6.33403 3.2783 6.27038 3.39185 6.23896 3.5159L4.99772 4.75567C4.77281 4.33661 4.68882 3.85627 4.7582 3.38576C4.82758 2.91525 5.04664 2.4796 5.38293 2.14329L6.87508 0.648192C7.29024 0.233155 7.85325 0 8.44029 0C9.02733 0 9.59033 0.233155 10.0055 0.648192L10.3538 0.995032C10.5595 1.20063 10.7227 1.44475 10.8341 1.71344C10.9454 1.98213 11.0027 2.27013 11.0027 2.56098C11.0027 2.85183 10.9454 3.13983 10.8341 3.40852C10.7227 3.67721 10.5595 3.92133 10.3538 4.12693ZM4.245 7.76801L7.79753 4.21548C7.93453 4.07848 8.0115 3.89266 8.0115 3.69891C8.0115 3.50516 7.93453 3.31934 7.79753 3.18234C7.66052 3.04534 7.47471 2.96837 7.28096 2.96837C7.08721 2.96837 6.90139 3.04534 6.76439 3.18234L3.21776 6.74225C3.14992 6.81009 3.09611 6.89062 3.0594 6.97925C3.02269 7.06789 3.00379 7.16288 3.00379 7.25882C3.00379 7.35476 3.02269 7.44975 3.0594 7.53839C3.09611 7.62702 3.14992 7.70755 3.21776 7.77539C3.2856 7.84323 3.36613 7.89704 3.45477 7.93375C3.5434 7.97046 3.6384 7.98936 3.73433 7.98936C3.83027 7.98936 3.92526 7.97046 4.0139 7.93375C4.10253 7.89704 4.18307 7.84323 4.2509 7.77539L4.245 7.76801ZM5.99543 6.22568L4.77928 7.44331C4.7498 7.58368 4.68004 7.71241 4.57856 7.81376L3.08345 9.31329C2.94507 9.45164 2.7574 9.52936 2.56172 9.52936C2.36604 9.52936 2.17837 9.45164 2.03998 9.31329L1.69166 8.96498C1.55332 8.82659 1.4756 8.63892 1.4756 8.44324C1.4756 8.24756 1.55332 8.05989 1.69166 7.92151L3.18824 6.42198C3.27898 6.33196 3.39209 6.26776 3.5159 6.23601L4.76305 4.99476C4.34398 4.76932 3.86342 4.6849 3.39261 4.75402C2.9218 4.82314 2.48578 5.04212 2.1492 5.3785L0.648192 6.87508C0.233155 7.29024 0 7.85325 0 8.44029C0 9.02733 0.233155 9.59034 0.648192 10.0055L0.996508 10.3538C1.41167 10.7689 1.97468 11.002 2.56172 11.002C3.14876 11.002 3.71176 10.7689 4.12693 10.3538L5.62203 8.85724C5.96074 8.51813 6.18025 8.07826 6.24759 7.60373C6.31492 7.12919 6.22644 6.64562 5.99543 6.22568Z"
                                                    fill="#0196C9"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_17760">
                                                    <rect width="11" height="11" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-base font-semibold capitalize text-white">Link</p>
                                    </div>
                                    <div className="flex  items-center gap-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="11"
                                            viewBox="0 0 14 11"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_1_17764)">
                                                <path
                                                    d="M12.2517 0H1.74824C1.51865 0 1.29132 0.0452046 1.0792 0.133033C0.867093 0.220861 0.674369 0.3496 0.512026 0.511885C0.349682 0.674171 0.220929 0.866826 0.13307 1.07886C0.0452102 1.2909 0 1.51816 0 1.74767V9.28661C0 9.75012 0.184159 10.1946 0.512026 10.5224C0.839893 10.8501 1.28456 11.0343 1.74824 11.0343H12.2517C12.7148 11.0325 13.1584 10.8478 13.4859 10.5204C13.8134 10.193 13.9981 9.74956 13.9999 9.28661V1.74767C13.9981 1.28471 13.8134 0.841243 13.4859 0.513883C13.1584 0.186523 12.7148 0.00180491 12.2517 0ZM9.10474 5.48287L13.4995 2.23427V8.73832L9.10474 5.48287ZM1.74824 0.486609H12.2517C12.5615 0.487108 12.8599 0.603417 13.0882 0.812671C13.3166 1.02192 13.4584 1.30899 13.4857 1.61745L6.99997 6.41495L0.507339 1.61745C0.536343 1.3084 0.679582 1.02127 0.909059 0.812148C1.13854 0.603031 1.43772 0.486957 1.74824 0.486609ZM4.88826 5.48287L0.493614 8.73832V2.27539L4.88826 5.48287ZM12.2517 10.486H1.74824C1.43772 10.4856 1.13854 10.3696 0.909059 10.1604C0.679582 9.95133 0.536343 9.6642 0.507339 9.35515L5.30656 5.79814L6.8423 6.93583C6.88594 6.96794 6.93893 6.9848 6.99311 6.9838C7.04715 6.98383 7.09984 6.96707 7.14392 6.93583L8.67967 5.79814L13.4789 9.35515C13.4515 9.66361 13.3097 9.95068 13.0813 10.1599C12.853 10.3692 12.5546 10.4855 12.2448 10.486"
                                                    fill="#0196C9"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_17764">
                                                    <rect width="14" height="11" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-base font-semibold capitalize text-white">Email</p>
                                    </div>
                                </div>
                                <Tooltip
                                    placement="bottom"
                                    overlayClassName="[&>.ant-tooltip-arrow]:before:bg-app-gray-light [&>.ant-tooltip-content>.ant-tooltip-inner]:bg-app-gray-light"
                                    title={"People invited can add or delete items from the list."}
                                >
                                    <input
                                        type="text"
                                        value={"Edit"}
                                        className="px-3 py-1 bg-app-black-button rounded-md text-app-black-light_gray my-4"
                                        placeholder="Read Only"
                                        readOnly
                                    />
                                </Tooltip>

                                <div className="flex w-full pb-3 justify-evenly">
                                    <div className="flex  items-center gap-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_1_17760)">
                                                <path
                                                    d="M10.3538 4.12693L8.85871 5.6235C8.51961 5.96221 8.07974 6.18173 7.6052 6.24906C7.13067 6.3164 6.6471 6.22791 6.22715 5.99691L7.44331 4.77928C7.58351 4.75021 7.71222 4.68098 7.81376 4.58003L9.31034 3.08493C9.37906 3.01638 9.43359 2.93494 9.47079 2.84529C9.50799 2.75564 9.52714 2.65952 9.52714 2.56245C9.52714 2.46539 9.50799 2.36927 9.47079 2.27962C9.43359 2.18997 9.37906 2.10853 9.31034 2.03998L8.96203 1.69314C8.82364 1.55479 8.63597 1.47708 8.44029 1.47708C8.24461 1.47708 8.05694 1.55479 7.91855 1.69314L6.42345 3.18677C6.33403 3.2783 6.27038 3.39185 6.23896 3.5159L4.99772 4.75567C4.77281 4.33661 4.68882 3.85627 4.7582 3.38576C4.82758 2.91525 5.04664 2.4796 5.38293 2.14329L6.87508 0.648192C7.29024 0.233155 7.85325 0 8.44029 0C9.02733 0 9.59033 0.233155 10.0055 0.648192L10.3538 0.995032C10.5595 1.20063 10.7227 1.44475 10.8341 1.71344C10.9454 1.98213 11.0027 2.27013 11.0027 2.56098C11.0027 2.85183 10.9454 3.13983 10.8341 3.40852C10.7227 3.67721 10.5595 3.92133 10.3538 4.12693ZM4.245 7.76801L7.79753 4.21548C7.93453 4.07848 8.0115 3.89266 8.0115 3.69891C8.0115 3.50516 7.93453 3.31934 7.79753 3.18234C7.66052 3.04534 7.47471 2.96837 7.28096 2.96837C7.08721 2.96837 6.90139 3.04534 6.76439 3.18234L3.21776 6.74225C3.14992 6.81009 3.09611 6.89062 3.0594 6.97925C3.02269 7.06789 3.00379 7.16288 3.00379 7.25882C3.00379 7.35476 3.02269 7.44975 3.0594 7.53839C3.09611 7.62702 3.14992 7.70755 3.21776 7.77539C3.2856 7.84323 3.36613 7.89704 3.45477 7.93375C3.5434 7.97046 3.6384 7.98936 3.73433 7.98936C3.83027 7.98936 3.92526 7.97046 4.0139 7.93375C4.10253 7.89704 4.18307 7.84323 4.2509 7.77539L4.245 7.76801ZM5.99543 6.22568L4.77928 7.44331C4.7498 7.58368 4.68004 7.71241 4.57856 7.81376L3.08345 9.31329C2.94507 9.45164 2.7574 9.52936 2.56172 9.52936C2.36604 9.52936 2.17837 9.45164 2.03998 9.31329L1.69166 8.96498C1.55332 8.82659 1.4756 8.63892 1.4756 8.44324C1.4756 8.24756 1.55332 8.05989 1.69166 7.92151L3.18824 6.42198C3.27898 6.33196 3.39209 6.26776 3.5159 6.23601L4.76305 4.99476C4.34398 4.76932 3.86342 4.6849 3.39261 4.75402C2.9218 4.82314 2.48578 5.04212 2.1492 5.3785L0.648192 6.87508C0.233155 7.29024 0 7.85325 0 8.44029C0 9.02733 0.233155 9.59034 0.648192 10.0055L0.996508 10.3538C1.41167 10.7689 1.97468 11.002 2.56172 11.002C3.14876 11.002 3.71176 10.7689 4.12693 10.3538L5.62203 8.85724C5.96074 8.51813 6.18025 8.07826 6.24759 7.60373C6.31492 7.12919 6.22644 6.64562 5.99543 6.22568Z"
                                                    fill="#0196C9"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_17760">
                                                    <rect width="11" height="11" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-base font-semibold capitalize text-white">Link</p>
                                    </div>
                                    <div className="flex  items-center gap-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="11"
                                            viewBox="0 0 14 11"
                                            fill="none"
                                        >
                                            <g clip-path="url(#clip0_1_17764)">
                                                <path
                                                    d="M12.2517 0H1.74824C1.51865 0 1.29132 0.0452046 1.0792 0.133033C0.867093 0.220861 0.674369 0.3496 0.512026 0.511885C0.349682 0.674171 0.220929 0.866826 0.13307 1.07886C0.0452102 1.2909 0 1.51816 0 1.74767V9.28661C0 9.75012 0.184159 10.1946 0.512026 10.5224C0.839893 10.8501 1.28456 11.0343 1.74824 11.0343H12.2517C12.7148 11.0325 13.1584 10.8478 13.4859 10.5204C13.8134 10.193 13.9981 9.74956 13.9999 9.28661V1.74767C13.9981 1.28471 13.8134 0.841243 13.4859 0.513883C13.1584 0.186523 12.7148 0.00180491 12.2517 0ZM9.10474 5.48287L13.4995 2.23427V8.73832L9.10474 5.48287ZM1.74824 0.486609H12.2517C12.5615 0.487108 12.8599 0.603417 13.0882 0.812671C13.3166 1.02192 13.4584 1.30899 13.4857 1.61745L6.99997 6.41495L0.507339 1.61745C0.536343 1.3084 0.679582 1.02127 0.909059 0.812148C1.13854 0.603031 1.43772 0.486957 1.74824 0.486609ZM4.88826 5.48287L0.493614 8.73832V2.27539L4.88826 5.48287ZM12.2517 10.486H1.74824C1.43772 10.4856 1.13854 10.3696 0.909059 10.1604C0.679582 9.95133 0.536343 9.6642 0.507339 9.35515L5.30656 5.79814L6.8423 6.93583C6.88594 6.96794 6.93893 6.9848 6.99311 6.9838C7.04715 6.98383 7.09984 6.96707 7.14392 6.93583L8.67967 5.79814L13.4789 9.35515C13.4515 9.66361 13.3097 9.95068 13.0813 10.1599C12.853 10.3692 12.5546 10.4855 12.2448 10.486"
                                                    fill="#0196C9"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_17764">
                                                    <rect width="14" height="11" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-base font-semibold capitalize text-white">Email</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="cmodal-container">
                        <div className="cmodal-head">
                            {props.header}
                            <button className="btn btn--secondary close" onClick={props.handleClose}>
                                &times;
                            </button>
                        </div>
                        {props.children ? props.children : null}
                    </div>
                </>
            )}
        </div>
    );
};

export default Modal;
