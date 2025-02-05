import { myPrisma as prisma } from '../db'

/**
 * @description Get the update of the current product by update id
 */
export const getOneUpdate = async (req: any, res: any) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  })

  res.json({ data: update })
}

/**
 * @description Get all updates of the current user's products
 */
export const getUpdates = async (req: any, res: any) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  })

  // bad performance
  const updates = products.map((product) => product.updates).flat()

  res.json({ data: updates })
}

/**
 * @description Create an update for a product
 */
export const createUpdate = async (req: any, res: any) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
      belongsToId: req.user.id,
    },
  })

  if (!product) {
    // does not belong to user
    return res.json({ message: 'nope, not your product' })
  }

  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      productId: product.id,
      updatedAt: new Date(),
      // product: { connect: { id: product.id } },
    },
  })

  res.json({ data: update })
}

/**
 * @description Update an update by update id
 */
export const updateUpdate = async (req: any, res: any) => {
  // bad performance
  const products = await prisma.product.findMany({
    where: { belongsToId: req.user.id },
    include: { updates: true },
  })

  const updates = products.map((product) => product.updates).flat()

  const match = updates.find((update) => update.id === req.params.id)

  if (!match) {
    return res.json({ message: 'nope, not your update' })
  }

  const updatedUpdate = await prisma.update.update({
    where: { id: req.params.id },
    data: req.body,
  })

  res.json({ data: updatedUpdate })
}

/**
 * @description Delete an update by update id
 */
export const deleteUpdate = async (req: any, res: any) => {
  const products = await prisma.product.findMany({
    where: { belongsToId: req.user.id },
    include: { updates: true },
  })

  const updates = products.map((product) => product.updates).flat()

  const match = updates.find((update) => update.id === req.params.id)

  if (!match) {
    return res.json({ message: 'nope, not your update' })
  }

  const deleted = await prisma.update.delete({
    where: { id: req.params.id },
  })

  res.json({ data: deleted })
}
