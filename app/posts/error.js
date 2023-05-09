'use client';
import e from "express";
import { useEffect } from "react";
const Error = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2> Something went wrong!</h2>
            <button
                onclick={
                    // Attempt to recover by trying to render the segment
                    () => reset()
                }
            >
                Try Again
            </button>
        </div>
    );
}
export default Error; 
