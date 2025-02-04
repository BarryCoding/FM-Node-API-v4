import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from './handlers/middleware'

const router = Router()

/**
 * Product
 */
router.get('/product', (req, res) => {
  res.json({ message: 'GET /product nodemon' })
})
router.get('/product/:id', (req, res) => {})
router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {})
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {})
router.delete('/product/:id', (req, res) => {})

/**
 * Update
 */
router.get('/update', (req, res) => {})
router.get('/update/:id', (req, res) => {})
router.post(
  '/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),
  handleInputErrors,
  (req, res) => {}
)
router.put(
  '/update/:id',
  body('title').optional().isString(),
  body('body').optional().isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional(),
  handleInputErrors,
  (req, res) => {}
)
router.delete('/update/:id', (req, res) => {})

/**
 * UpdatePoint
 */
router.get('/updatepoint', (req, res) => {})
router.get('/updatepoint/:id', (req, res) => {})
router.post(
  '/updatepoint',
  body('name').isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  handleInputErrors,
  (req, res) => {}
)
router.put(
  '/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  handleInputErrors,
  (req, res) => {}
)
router.delete('/updatepoint/:id', (req, res) => {})

export { router }
