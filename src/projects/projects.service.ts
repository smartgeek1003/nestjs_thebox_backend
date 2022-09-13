import { HttpException, Injectable } from '@nestjs/common';
import { PROJECTS } from './projects.mock';

@Injectable()
export class ProjectsService {
    projects = PROJECTS;
    getProjects(): Promise<any> {
        return new Promise(resolve => {
            console.log([Date.now()], " - Got request for all projects")
            resolve(this.projects)
        });
    }

    getProjectFromId(projectId): Promise<any> {
        return new Promise(resolve => {
            console.log("Using ProjectID: %d", projectId);
            const project = this.projects.find(project => Number(project.id) == Number(projectId));
            if (!project) {
                throw new HttpException('Project Does Not Exist!!', 404)
            }
            resolve(project);
        });
    }

    addProjects(projectInput): Promise<any> {
        return new Promise(resolve => {
            console.log("Using ProjectID: %d", projectInput.id);
            let index = this.projects.findIndex(projects => Number(projects.id) == Number(projectInput.id));
            if (index != -1) {
                throw new HttpException(`Project with ID ${projectInput.id} already exists`, 404)
            }
            this.projects.push(projectInput)
            resolve(this.projects)
        });
    }

    deleteProjectFromId(projectQuery): Promise<any> {
        return new Promise(resolve => {
            console.log("Using ProjectID: %d", projectQuery.id);
            let index = this.projects.findIndex(project => Number(project.id) == Number(projectQuery.id));
            console.log("Matched Index: %d", index);
            if (index === -1) {
                throw new HttpException('Project Does Not Exist!!', 404)
            }
            this.projects.splice(index, 1);
            resolve(this.projects);
        });
    }
}
