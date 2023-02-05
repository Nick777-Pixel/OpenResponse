/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={style["footer-main"]}>
            <div className={style["footer-wrapper"]}>
                <div className={style["divider"]}></div>
                <div className={style["footer-text"]}>
                    <div className={style["footer-logo-column"]}>
                        <svg
                            className={style["footer-logo"]}
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.333 4.00016C19.333 4.3735 19.0397 4.66683 18.6663 4.66683C18.293 4.66683 17.9997 4.3735 17.9997 4.00016C17.9997 3.62683 18.293 3.3335 18.6663 3.3335C19.0397 3.3335 19.333 3.62683 19.333 4.00016ZM7.99967 6.66683C7.26634 6.66683 6.66634 7.26683 6.66634 8.00016C6.66634 8.7335 7.26634 9.3335 7.99967 9.3335C8.73301 9.3335 9.33301 8.7335 9.33301 8.00016C9.33301 7.26683 8.73301 6.66683 7.99967 6.66683ZM7.99967 12.0002C7.26634 12.0002 6.66634 12.6002 6.66634 13.3335C6.66634 14.0668 7.26634 14.6668 7.99967 14.6668C8.73301 14.6668 9.33301 14.0668 9.33301 13.3335C9.33301 12.6002 8.73301 12.0002 7.99967 12.0002ZM6.66634 18.6668C6.66634 17.9335 7.26634 17.3335 7.99967 17.3335C8.73301 17.3335 9.33301 17.9335 9.33301 18.6668C9.33301 19.4002 8.73301 20.0002 7.99967 20.0002C7.26634 20.0002 6.66634 19.4002 6.66634 18.6668ZM6.66634 24.0002C6.66634 23.2668 7.26634 22.6668 7.99967 22.6668C8.73301 22.6668 9.33301 23.2668 9.33301 24.0002C9.33301 24.7335 8.73301 25.3335 7.99967 25.3335C7.26634 25.3335 6.66634 24.7335 6.66634 24.0002ZM3.33301 13.3335C3.33301 12.9602 3.62634 12.6668 3.99967 12.6668C4.37301 12.6668 4.66634 12.9602 4.66634 13.3335C4.66634 13.7068 4.37301 14.0002 3.99967 14.0002C3.62634 14.0002 3.33301 13.7068 3.33301 13.3335ZM28.6663 13.3335C28.6663 13.7068 28.373 14.0002 27.9997 14.0002C27.6263 14.0002 27.333 13.7068 27.333 13.3335C27.333 12.9602 27.6263 12.6668 27.9997 12.6668C28.373 12.6668 28.6663 12.9602 28.6663 13.3335ZM18.6663 9.3335C19.3997 9.3335 19.9997 8.7335 19.9997 8.00016C19.9997 7.26683 19.3997 6.66683 18.6663 6.66683C17.933 6.66683 17.333 7.26683 17.333 8.00016C17.333 8.7335 17.933 9.3335 18.6663 9.3335ZM3.99967 18.0002C3.62634 18.0002 3.33301 18.2935 3.33301 18.6668C3.33301 19.0402 3.62634 19.3335 3.99967 19.3335C4.37301 19.3335 4.66634 19.0402 4.66634 18.6668C4.66634 18.2935 4.37301 18.0002 3.99967 18.0002ZM12.6663 28.0002C12.6663 27.6268 12.9597 27.3335 13.333 27.3335C13.7063 27.3335 13.9997 27.6268 13.9997 28.0002C13.9997 28.3735 13.7063 28.6668 13.333 28.6668C12.9597 28.6668 12.6663 28.3735 12.6663 28.0002ZM13.333 4.66683C13.7063 4.66683 13.9997 4.3735 13.9997 4.00016C13.9997 3.62683 13.7063 3.3335 13.333 3.3335C12.9597 3.3335 12.6663 3.62683 12.6663 4.00016C12.6663 4.3735 12.9597 4.66683 13.333 4.66683ZM14.6663 8.00016C14.6663 8.7335 14.0663 9.3335 13.333 9.3335C12.5997 9.3335 11.9997 8.7335 11.9997 8.00016C11.9997 7.26683 12.5997 6.66683 13.333 6.66683C14.0663 6.66683 14.6663 7.26683 14.6663 8.00016ZM13.333 16.6668C12.2263 16.6668 11.333 17.5602 11.333 18.6668C11.333 19.7735 12.2263 20.6668 13.333 20.6668C14.4397 20.6668 15.333 19.7735 15.333 18.6668C15.333 17.5602 14.4397 16.6668 13.333 16.6668ZM22.6663 18.6668C22.6663 17.9335 23.2663 17.3335 23.9997 17.3335C24.733 17.3335 25.333 17.9335 25.333 18.6668C25.333 19.4002 24.733 20.0002 23.9997 20.0002C23.2663 20.0002 22.6663 19.4002 22.6663 18.6668ZM23.9997 22.6668C23.2663 22.6668 22.6663 23.2668 22.6663 24.0002C22.6663 24.7335 23.2663 25.3335 23.9997 25.3335C24.733 25.3335 25.333 24.7335 25.333 24.0002C25.333 23.2668 24.733 22.6668 23.9997 22.6668ZM22.6663 13.3335C22.6663 12.6002 23.2663 12.0002 23.9997 12.0002C24.733 12.0002 25.333 12.6002 25.333 13.3335C25.333 14.0668 24.733 14.6668 23.9997 14.6668C23.2663 14.6668 22.6663 14.0668 22.6663 13.3335ZM23.9997 6.66683C23.2663 6.66683 22.6663 7.26683 22.6663 8.00016C22.6663 8.7335 23.2663 9.3335 23.9997 9.3335C24.733 9.3335 25.333 8.7335 25.333 8.00016C25.333 7.26683 24.733 6.66683 23.9997 6.66683ZM27.333 18.6668C27.333 18.2935 27.6263 18.0002 27.9997 18.0002C28.373 18.0002 28.6663 18.2935 28.6663 18.6668C28.6663 19.0402 28.373 19.3335 27.9997 19.3335C27.6263 19.3335 27.333 19.0402 27.333 18.6668ZM18.6663 22.6668C17.933 22.6668 17.333 23.2668 17.333 24.0002C17.333 24.7335 17.933 25.3335 18.6663 25.3335C19.3997 25.3335 19.9997 24.7335 19.9997 24.0002C19.9997 23.2668 19.3997 22.6668 18.6663 22.6668ZM17.9997 28.0002C17.9997 27.6268 18.293 27.3335 18.6663 27.3335C19.0397 27.3335 19.333 27.6268 19.333 28.0002C19.333 28.3735 19.0397 28.6668 18.6663 28.6668C18.293 28.6668 17.9997 28.3735 17.9997 28.0002ZM13.333 11.3335C12.2263 11.3335 11.333 12.2268 11.333 13.3335C11.333 14.4402 12.2263 15.3335 13.333 15.3335C14.4397 15.3335 15.333 14.4402 15.333 13.3335C15.333 12.2268 14.4397 11.3335 13.333 11.3335ZM11.9997 24.0002C11.9997 23.2668 12.5997 22.6668 13.333 22.6668C14.0663 22.6668 14.6663 23.2668 14.6663 24.0002C14.6663 24.7335 14.0663 25.3335 13.333 25.3335C12.5997 25.3335 11.9997 24.7335 11.9997 24.0002ZM18.6663 16.6668C17.5597 16.6668 16.6663 17.5602 16.6663 18.6668C16.6663 19.7735 17.5597 20.6668 18.6663 20.6668C19.773 20.6668 20.6663 19.7735 20.6663 18.6668C20.6663 17.5602 19.773 16.6668 18.6663 16.6668ZM16.6663 13.3335C16.6663 12.2268 17.5597 11.3335 18.6663 11.3335C19.773 11.3335 20.6663 12.2268 20.6663 13.3335C20.6663 14.4402 19.773 15.3335 18.6663 15.3335C17.5597 15.3335 16.6663 14.4402 16.6663 13.3335Z"
                                fill="#E7E7E7"
                            />
                        </svg>
                    </div>
                    <div className={style["footer-text-column-wrapper"]}>
                        <div className={style["footer-text-column"]}>
                            <span className={style["footer-logo-font"]}>
                                OpenResponse
                                <span className={style["footer-notes"]} id={style["footer-notes-first"]}>
                                    was built using OpenAI
                                    NextJS + React. This application does not collect or store any data.
                                </span>
                            </span>
                        </div>
                        <div className={style["footer-text-column"]} id={style.side}>
                            <span className={style["footer-notes"]}>GPT-3 was trained with data up to 2021. It is not intended to be used to query current events, but rather to be used as a Natural Language Processor.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
