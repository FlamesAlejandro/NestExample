import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/CreateUser.dto'
import { UpdateUserDto } from './dto/UpdateUser.dto'

export type User = {
  userId: number
  username: string
  password: string
  status: boolean
}

@Injectable()
export class UsersService {
  private users: User[] = []

  create(createUserDto: CreateUserDto) {
    const userIndex = this.getLastUserIndex() ? this.getLastUserIndex() + 1 : 1
    const newUser: User = {
      userId: userIndex,
      status: true,
      ...createUserDto
    }
    this.users.push(newUser)
    return newUser
  }

  findOne(userId: number): User | undefined {
    return this.users.find((user) => user.userId === userId)
  }

  findAll(): User[] {
    return this.users
  }

  update(updateUserDto: UpdateUserDto) {
    const { userId, ...rest } = updateUserDto

    const userRecord = this.findOne(userId)

    if (!userRecord) return null

    const updatedUser: User = { ...userRecord, ...rest }

    this.users = this.users.map((user) =>
      user.userId === userId ? updatedUser : user
    )

    return updatedUser
  }

  softDelete(userId: number) {
    const userRecord = this.findOne(userId)

    if (!userRecord) return null

    const updatedUser: User = { ...userRecord, status: false }

    this.users = this.users.map((user) =>
      user.userId === userId ? updatedUser : user
    )

    return updatedUser
  }

  hardDelete(userId: number) {
    const userIndex = this.users.findIndex((user) => user.userId === userId)

    if (userIndex === -1) return null

    const deletedUser = this.users[userIndex]
    this.users.splice(userIndex, 1)

    return deletedUser
  }

  getLastUserIndex() {
    const usersList = this.findAll() ? this.findAll() : []

    return usersList.length > 0 ? usersList[usersList.length - 1].userId : 0
  }
}
