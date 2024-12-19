// src/projects/project.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project, ProjectStatus } from '@prisma/client';

@Resolver('Project')
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query('projects')
  async getProjects(): Promise<Project[]> {
    return this.projectService.getProjects();
  }

  @Query('project')
  async getProjectById(@Args('id') id: string): Promise<Project | null> {
    return this.projectService.getProjectById(id);
  }

  @Mutation('createProject')
  async createProject(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('startDate') startDate: Date,
    @Args('endDate') endDate: Date,
    @Args('status') status: ProjectStatus,
    @Args('location') location: string
  ): Promise<Project> {
    return this.projectService.createProject({
      name,
      description,
      startDate,
      endDate,
      status,
      location
    });
  }

  @Mutation('updateProjectStatus')
  async updateProjectStatus(
    @Args('id') id: string,
    @Args('status') status: ProjectStatus
  ): Promise<Project> {
    return this.projectService.updateProjectStatus(id, status);
  }
}