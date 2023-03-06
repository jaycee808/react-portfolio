import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="card-container">
                <img alt={props.name} src={props.image} />
            </div>
                <div className="card-content">
                    <ul>
                        <li>
                            Name: {props.name}
                        </li>
                        <li>
                            Description: {props.description}
                        </li>
                        <li>
                            Source Code: {props.sourceCodeUrl}
                        </li>
                        <li>
                            Live Demo: {props.deployedSite}
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default ProjectCard;