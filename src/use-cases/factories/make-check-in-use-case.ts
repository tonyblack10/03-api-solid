import { PrismaCheckInsRepostory } from '@/repositories/prisma/prisma-check-ins-repostory'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CheckInUseCase } from '../check-in'

export function makeCheckInUseCase() {
  const checkInsRepostory = new PrismaCheckInsRepostory()
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new CheckInUseCase(checkInsRepostory, gymsRepository)

  return useCase
}
