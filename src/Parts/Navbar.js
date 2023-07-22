import { Link } from "react-router-dom"
import React from "react"

export default function Navbar() {
    return (
        <header id="navbar">
            <div id="container">
                <h1>Jayden No</h1>
                |
                <div>
                    <nav id="navbar-list">
                        <a href="#about">About Me</a>
                        <a href="#skill">Skills</a>
                        <a href="#project">Projects</a>
                        <a>LinkedIn</a>
                        <a>GitHub</a>
                        <a>Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}