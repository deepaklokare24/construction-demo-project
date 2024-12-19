import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class CostTracking {
  @Field(() => ID)
  id: string;

  @Field()
  projectId: string;

  @Field()
  financialId: string;

  @Field()
  category: string;

  @Field(() => Float)
  amount: number;

  @Field()
  date: Date;
} 