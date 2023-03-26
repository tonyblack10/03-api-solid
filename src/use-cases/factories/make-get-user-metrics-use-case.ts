import { PrismaCheckInsRepostory } from '@/repositories/prisma/prisma-check-ins-repostory'
import { GetUserMetricsUseCase } from '../get-user-metrics'

export function makeGetUserMetricsUseCase() {
  const checkInsRepostory = new PrismaCheckInsRepostory()
  const useCase = new GetUserMetricsUseCase(checkInsRepostory)

  return useCase
}
