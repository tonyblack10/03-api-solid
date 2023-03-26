import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsUseCase } from '../search-gyms'

export function makeSearchGymsUseCase() {
  const gymsRepostory = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(gymsRepostory)

  return useCase
}
