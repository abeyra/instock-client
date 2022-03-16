import './Button.scss';
import React, { useState } from "react";

export default function Button({ text }) {
    return (
        <>
        <button 
        className="button"
        type="submit">
            {text}
        </button>
        </>
    )
}