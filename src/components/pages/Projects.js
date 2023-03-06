import React, { Component } from "react";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";
import Title from "../Title";
import projectInfo from "../projects.json";

class Projects extends Component {
    state = {
        projectInfo
    };

    render() {
        return (
            <Wrapper>
                <Title>Projects</Title>
                {this.state.projectInfo.map(projectInfo => (
                <ProjectCard
                    name={projectInfo.name}
                    image={projectInfo.image}
                    description={projectInfo.description}
                    sourceCodeUrl={projectInfo.sourceCodeUrl}
                    deployedSite={projectInfo.deployedSite}
                />
                ))}
            </Wrapper>
        );
    }
}

export default Projects;
