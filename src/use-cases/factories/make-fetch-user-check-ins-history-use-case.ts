import { PrismaCheckInsRepostory } from '@/repositories/prisma/prisma-check-ins-repostory'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepostory = new PrismaCheckInsRepostory()
  const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepostory)

  return useCase
}
