import { compare } from 'bcryptjs'
import { randomUUID } from 'node:crypto'
import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register User Case', async () => {
  it('shoud hash user password upon registration', async () => {
    const registerUserCase = new RegisterUseCase({
      async findByEmail(email: string) {
        return null
      },
      async create(data) {
        return {
          id: randomUUID(),
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerUserCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBeTruthy()
  })
})
