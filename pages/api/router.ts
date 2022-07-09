import { createRouter } from 'next-connect'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from './lib/dbConnect'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.use(async (req, res, next) => {
  await dbConnect()
  await next()
})

export default router
