// src/projects/project.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './dto/project.dto';
import { ProjectStatus } from './enums/project-status.enum';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => [Project])
  async projects() {
    return this.projectService.getAllProjects();
  }

  @Query(() => Project)
  async project(@Args('id') id: string) {
    return this.projectService.getProjectById(id);
  }

  @Mutation(() => Project)
  async createProject(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('startDate') startDate: Date,
    @Args('endDate') endDate: Date,
    @Args('status', { type: () => ProjectStatus }) status: ProjectStatus,
    @Args('location') location: string,
  ) {
    return this.projectService.createProject({
      name,
      description,
      startDate,
      endDate,
      status,
      location,
    });
  }

  @Mutation(() => Project)
  async updateProjectStatus(
    @Args('id') id: string,
    @Args('status', { type: () => ProjectStatus }) status: ProjectStatus,
  ) {
    return this.projectService.updateProject(id, { status });
  }
}