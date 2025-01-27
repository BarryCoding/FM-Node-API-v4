import { myPrisma } from '../db'
import { comparePasswords, createJWT, hashPassword } from '../utils/auth'

export const createUser = async (req: any, res: any) => {
  const hashedPassword = await hashPassword(req.body.password)

  const user = await myPrisma.user.create({
    data: {
      username: req.body.username,
      password: hashedPassword,
    },
  })

  const token = createJWT(user)
  res.json({ token })
}

export const signIn = async (req: any, res: any) => {
  const user = await myPrisma.user.findUnique({
    where: { username: req.body.username },
  })

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  const passwordMatch = await comparePasswords(req.body.password, user.password)

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid user or password' })
  }

  const token = createJWT(user)
  res.json({ token })
}
