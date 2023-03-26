import { PrismaCheckInsRepostory } from '@/repositories/prisma/prisma-check-ins-repostory'
import { ValidateCheckInUseCase } from '../validate-check-in'

export function makeValidateCheckInUseCase() {
  const checkInsRepostory = new PrismaCheckInsRepostory()
  const useCase = new ValidateCheckInUseCase(checkInsRepostory)

  return useCase
}
