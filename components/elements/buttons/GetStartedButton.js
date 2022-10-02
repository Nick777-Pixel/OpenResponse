import React from "react";
import styles from './GetStartedButton.module.css';

export default function GetStartedButton () {
    return (
        <button className={styles["get-started-button-wrapper"]}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5209 0.625003C14.5209 0.963336 14.255 1.22917 13.9167 1.22917C13.5784 1.22917 13.3125 0.963336 13.3125 0.625003C13.3125 0.286669 13.5784 0.0208359 13.9167 0.0208359C14.255 0.0208359 14.5209 0.286669 14.5209 0.625003ZM4.25004 3.04167C3.58546 3.04167 3.04171 3.58542 3.04171 4.25C3.04171 4.91459 3.58546 5.45834 4.25004 5.45834C4.91462 5.45834 5.45837 4.91459 5.45837 4.25C5.45837 3.58542 4.91462 3.04167 4.25004 3.04167ZM4.25004 7.875C3.58546 7.875 3.04171 8.41875 3.04171 9.08334C3.04171 9.74792 3.58546 10.2917 4.25004 10.2917C4.91462 10.2917 5.45837 9.74792 5.45837 9.08334C5.45837 8.41875 4.91462 7.875 4.25004 7.875ZM3.04171 13.9167C3.04171 13.2521 3.58546 12.7083 4.25004 12.7083C4.91462 12.7083 5.45837 13.2521 5.45837 13.9167C5.45837 14.5813 4.91462 15.125 4.25004 15.125C3.58546 15.125 3.04171 14.5813 3.04171 13.9167ZM3.04171 18.75C3.04171 18.0854 3.58546 17.5417 4.25004 17.5417C4.91462 17.5417 5.45837 18.0854 5.45837 18.75C5.45837 19.4146 4.91462 19.9583 4.25004 19.9583C3.58546 19.9583 3.04171 19.4146 3.04171 18.75ZM0.020874 9.08334C0.020874 8.745 0.286707 8.47917 0.625041 8.47917C0.963374 8.47917 1.22921 8.745 1.22921 9.08334C1.22921 9.42167 0.963374 9.6875 0.625041 9.6875C0.286707 9.6875 0.020874 9.42167 0.020874 9.08334ZM22.9792 9.08334C22.9792 9.42167 22.7134 9.6875 22.375 9.6875C22.0367 9.6875 21.7709 9.42167 21.7709 9.08334C21.7709 8.745 22.0367 8.47917 22.375 8.47917C22.7134 8.47917 22.9792 8.745 22.9792 9.08334ZM13.9167 5.45834C14.5813 5.45834 15.125 4.91459 15.125 4.25C15.125 3.58542 14.5813 3.04167 13.9167 3.04167C13.2521 3.04167 12.7084 3.58542 12.7084 4.25C12.7084 4.91459 13.2521 5.45834 13.9167 5.45834ZM0.625041 13.3125C0.286707 13.3125 0.020874 13.5783 0.020874 13.9167C0.020874 14.255 0.286707 14.5208 0.625041 14.5208C0.963374 14.5208 1.22921 14.255 1.22921 13.9167C1.22921 13.5783 0.963374 13.3125 0.625041 13.3125ZM8.47921 22.375C8.47921 22.0367 8.74504 21.7708 9.08337 21.7708C9.42171 21.7708 9.68754 22.0367 9.68754 22.375C9.68754 22.7133 9.42171 22.9792 9.08337 22.9792C8.74504 22.9792 8.47921 22.7133 8.47921 22.375ZM9.08337 1.22917C9.42171 1.22917 9.68754 0.963336 9.68754 0.625003C9.68754 0.286669 9.42171 0.0208359 9.08337 0.0208359C8.74504 0.0208359 8.47921 0.286669 8.47921 0.625003C8.47921 0.963336 8.74504 1.22917 9.08337 1.22917ZM10.2917 4.25C10.2917 4.91459 9.74796 5.45834 9.08337 5.45834C8.41879 5.45834 7.87504 4.91459 7.87504 4.25C7.87504 3.58542 8.41879 3.04167 9.08337 3.04167C9.74796 3.04167 10.2917 3.58542 10.2917 4.25ZM9.08337 12.1042C8.08046 12.1042 7.27087 12.9138 7.27087 13.9167C7.27087 14.9196 8.08046 15.7292 9.08337 15.7292C10.0863 15.7292 10.8959 14.9196 10.8959 13.9167C10.8959 12.9138 10.0863 12.1042 9.08337 12.1042ZM17.5417 13.9167C17.5417 13.2521 18.0855 12.7083 18.75 12.7083C19.4146 12.7083 19.9584 13.2521 19.9584 13.9167C19.9584 14.5813 19.4146 15.125 18.75 15.125C18.0855 15.125 17.5417 14.5813 17.5417 13.9167ZM18.75 17.5417C18.0855 17.5417 17.5417 18.0854 17.5417 18.75C17.5417 19.4146 18.0855 19.9583 18.75 19.9583C19.4146 19.9583 19.9584 19.4146 19.9584 18.75C19.9584 18.0854 19.4146 17.5417 18.75 17.5417ZM17.5417 9.08334C17.5417 8.41875 18.0855 7.875 18.75 7.875C19.4146 7.875 19.9584 8.41875 19.9584 9.08334C19.9584 9.74792 19.4146 10.2917 18.75 10.2917C18.0855 10.2917 17.5417 9.74792 17.5417 9.08334ZM18.75 3.04167C18.0855 3.04167 17.5417 3.58542 17.5417 4.25C17.5417 4.91459 18.0855 5.45834 18.75 5.45834C19.4146 5.45834 19.9584 4.91459 19.9584 4.25C19.9584 3.58542 19.4146 3.04167 18.75 3.04167ZM21.7709 13.9167C21.7709 13.5783 22.0367 13.3125 22.375 13.3125C22.7134 13.3125 22.9792 13.5783 22.9792 13.9167C22.9792 14.255 22.7134 14.5208 22.375 14.5208C22.0367 14.5208 21.7709 14.255 21.7709 13.9167ZM13.9167 17.5417C13.2521 17.5417 12.7084 18.0854 12.7084 18.75C12.7084 19.4146 13.2521 19.9583 13.9167 19.9583C14.5813 19.9583 15.125 19.4146 15.125 18.75C15.125 18.0854 14.5813 17.5417 13.9167 17.5417ZM13.3125 22.375C13.3125 22.0367 13.5784 21.7708 13.9167 21.7708C14.255 21.7708 14.5209 22.0367 14.5209 22.375C14.5209 22.7133 14.255 22.9792 13.9167 22.9792C13.5784 22.9792 13.3125 22.7133 13.3125 22.375ZM9.08337 7.27084C8.08046 7.27084 7.27087 8.08042 7.27087 9.08334C7.27087 10.0863 8.08046 10.8958 9.08337 10.8958C10.0863 10.8958 10.8959 10.0863 10.8959 9.08334C10.8959 8.08042 10.0863 7.27084 9.08337 7.27084ZM7.87504 18.75C7.87504 18.0854 8.41879 17.5417 9.08337 17.5417C9.74796 17.5417 10.2917 18.0854 10.2917 18.75C10.2917 19.4146 9.74796 19.9583 9.08337 19.9583C8.41879 19.9583 7.87504 19.4146 7.87504 18.75ZM13.9167 12.1042C12.9138 12.1042 12.1042 12.9138 12.1042 13.9167C12.1042 14.9196 12.9138 15.7292 13.9167 15.7292C14.9196 15.7292 15.7292 14.9196 15.7292 13.9167C15.7292 12.9138 14.9196 12.1042 13.9167 12.1042ZM12.1042 9.08334C12.1042 8.08042 12.9138 7.27084 13.9167 7.27084C14.9196 7.27084 15.7292 8.08042 15.7292 9.08334C15.7292 10.0863 14.9196 10.8958 13.9167 10.8958C12.9138 10.8958 12.1042 10.0863 12.1042 9.08334Z" fill="#2E2E2E"/>
            </svg>
            <h3 className={styles["get-started-button-label"]}>
                Get Started
            </h3>
        </button>
    );
}