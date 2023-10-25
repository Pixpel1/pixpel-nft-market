/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
// import { ChevronLeft } from "@public/assets/images/icons";
// import Image from "next/image";

interface Paginate {
    onPageChange: (val: number) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
    className: string;
}

const Paginate = (props: Paginate) => {
    const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange?.length ? paginationRange?.length! < 2 : 0) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange?.[(paginationRange?.length || 0) - 1];
    return (
        <ul
            className={classnames("pagination-container", {
                [className]: className,
            })}
        >
            {/* Left navigation arrow */}
            <li
                className={classnames("pagination-item", {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path
                        d="M7.79688 14L1.79688 8L7.79688 2"
                        stroke="#C8C8C8"
                        stroke-width="3.25313"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M16.2031 14L10.2031 8L16.2031 2"
                        stroke="#C8C8C8"
                        stroke-width="3.25313"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </li>
            {paginationRange?.map((pageNumber, idx) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li className="pagination-item dots" key={idx}>
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        key={idx}
                        className={classnames("pagination-item text-white", {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber as number)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames("pagination-item", {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path
                        d="M10.1953 14L16.1953 8L10.1953 2"
                        stroke="#C8C8C8"
                        stroke-width="3.25313"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M1.79688 14L7.79688 8L1.79688 2"
                        stroke="#C8C8C8"
                        stroke-width="3.25313"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </li>
        </ul>
    );
};

export default Paginate;
