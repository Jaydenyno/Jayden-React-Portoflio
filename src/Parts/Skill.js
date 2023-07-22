import { Link } from "react-router-dom"
import React from "react"

export default function Skill() {
    return (
        <section id="skill">
            <div id="container">
                <div>
                    <h1>Skills</h1>
                </div>
                <div id="skill-list-grid">
                    <div id="grid"><h3>HTML / CSS</h3></div>
                    <div id="grid"><h3>JavaScript</h3></div>
                    <div id="grid"><h3>Python</h3></div>
                    <div id="grid"><h3>MySQL</h3></div>
                    <div id="grid"><h3>React</h3></div>
                    <div id="grid"><h3>Node.js / Express</h3></div>
                    <div id="grid"><h3>MongoDB</h3></div>
                    <div id="grid"><h3>Java / Spring Boot</h3></div>
                    <div id="grid"><h3>Node.js</h3></div>
                </div>
            </div>
        </section>
    );
}