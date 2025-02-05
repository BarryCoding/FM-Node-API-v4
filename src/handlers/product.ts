import { myPrisma as prisma } from '../db'

/**
 * @description Get all products of the current user
 */
export const getProducts = async (req: any, res: any) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    include: { products: true },
  })

  res.json({ data: user!.products })
}

/**
 * @description Get the product of the current user by product id
 */
export const getOneProduct = async (req: any, res: any) => {
  const id = req.params.id

  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  })

  res.json({ data: product })
}

/**
 * @description Create a product for the current user
 */
export const createProduct = async (req: any, res: any) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  })

  res.json({ data: product })
}

/**
 * @description Update a product of the current user by product id
 */
export const updateProduct = async (req: any, res: any) => {
  const updated = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: { name: req.body.name },
  })

  res.json({ data: updated })
}

/**
 * @description Delete a product of the current user by product id
 */
export const deleteProduct = async (req: any, res: any, next: any) => {
  try {
    const deleted = await prisma.product.delete({
      where: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    })

    res.json({ data: deleted })
  } catch (error) {
    next(error) // 500 error
  }
}
