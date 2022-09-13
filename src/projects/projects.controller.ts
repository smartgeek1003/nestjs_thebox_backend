import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { ProjectsService } from './projects.service';
import { CreateProjectDTO } from './createProject-dto';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Get()
    async getProjects() {
        return await this.projectsService.getProjects();
    }

    @Get(':projectId')
    async getProjectFromId(@Param('projectId') projectId) {
        return await this.projectsService.getProjectFromId(projectId);
    }

    @Post()
    async addProjects(@Body() createProjectDTO: CreateProjectDTO) {
        return await this.projectsService.addProjects(createProjectDTO);
    }

    @Delete()
    async deleteProject(@Query() query) {
        return await this.projectsService.deleteProjectFromId(query);
    }
}
