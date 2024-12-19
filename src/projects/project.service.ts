// src/projects/project.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PostgresService } from '../prisma/postgres.service';
import { Prisma } from '../../prisma/postgres/generated/postgres';

export type ProjectStatus = 'PLANNING' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD';

@Injectable()
export class ProjectService {
  constructor(private postgres: PostgresService) {}

  async createProject(data: {
    name: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    status: ProjectStatus;
    location: string;
  }) {
    try {
      return await this.postgres.project.create({
        data: {
          ...data,
          startDate: new Date(data.startDate),
          endDate: data.endDate ? new Date(data.endDate) : null,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Failed to create project: ${error.message}`);
      }
      throw error;
    }
  }

  async getAllProjects() {
    try {
      return await this.postgres.project.findMany({
        orderBy: {
          startDate: 'desc',
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch projects: ${error.message}`);
    }
  }

  async getProjectById(id: string) {
    try {
      const project = await this.postgres.project.findUnique({
        where: { id },
      });

      if (!project) {
        throw new NotFoundException(`Project with ID ${id} not found`);
      }

      return project;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to fetch project: ${error.message}`);
    }
  }

  async updateProject(
    id: string,
    data: {
      name?: string;
      description?: string;
      startDate?: Date;
      endDate?: Date;
      status?: ProjectStatus;
      location?: string;
    }
  ) {
    try {
      const project = await this.postgres.project.update({
        where: { id },
        data: {
          ...data,
          startDate: data.startDate ? new Date(data.startDate) : undefined,
          endDate: data.endDate ? new Date(data.endDate) : undefined,
        },
      });

      if (!project) {
        throw new NotFoundException(`Project with ID ${id} not found`);
      }

      return project;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Project with ID ${id} not found`);
        }
      }
      throw new Error(`Failed to update project: ${error.message}`);
    }
  }

  async deleteProject(id: string) {
    try {
      return await this.postgres.project.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Project with ID ${id} not found`);
        }
      }
      throw new Error(`Failed to delete project: ${error.message}`);
    }
  }

  async getProjectsByStatus(status: ProjectStatus) {
    try {
      return await this.postgres.project.findMany({
        where: { status },
        orderBy: {
          startDate: 'desc',
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch projects by status: ${error.message}`);
    }
  }
}