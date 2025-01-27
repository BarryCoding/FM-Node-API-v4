import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createJWT = (user: { id: string; username: string }) =>
  jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET!)

// a middleware
export const protectedRoute = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(' ')[1] // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Authorization token missing' })
  }

  try {
    // Replace 'your_secret_key' with your actual secret key
    const secretKey = process.env.JWT_SECRET as string
    if (!secretKey) {
      throw new Error('JWT_SECRET is not defined in environment variables')
    }

    // Verify token and attach user information to the request
    const decoded = jwt.verify(token, secretKey)
    req.user = decoded

    // Proceed to the next middleware
    next()
  } catch (error) {
    console.error('JWT verification failed:', error)
    res.status(403).json({ message: 'Invalid or expired token' })
  }
}

export const hashPassword = (password: string) => bcrypt.hash(password, 10)
export const comparePasswords = (password: string, hash: string) => bcrypt.compare(password, hash)
