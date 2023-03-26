import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymUseCase } from '../create-gym'

export function makeCreateGymUseCase() {
  const gymsRepostory = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(gymsRepostory)

  return useCase
}
