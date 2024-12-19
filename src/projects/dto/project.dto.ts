import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ProjectStatus } from '../enums/project-status.enum';

@ObjectType()
export class Project {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field(() => ProjectStatus)
  status: ProjectStatus;

  @Field()
  location: string;

  @Field()
  createdAt: Date;
} 