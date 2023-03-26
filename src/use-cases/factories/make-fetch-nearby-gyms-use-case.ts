import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsUseCase } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepostory = new PrismaGymsRepository()
  const useCase = new FetchNearbyGymsUseCase(gymsRepostory)

  return useCase
}
