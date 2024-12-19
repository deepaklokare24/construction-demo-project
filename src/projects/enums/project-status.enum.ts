import { registerEnumType } from '@nestjs/graphql';

export enum ProjectStatus {
  PLANNING = 'PLANNING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD'
}

registerEnumType(ProjectStatus, {
  name: 'ProjectStatus',
  description: 'The status of a project',
}); 