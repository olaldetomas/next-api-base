import Pet from '../models/Pet'
import router from '../router'

router
  .get(async (req, res) => {
    try {
      const pets = await Pet.find({})
      res.status(200).json({ success: true, data: pets })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })
  .post(async (req, res) => {
    try {
      const pet = await Pet.create(req.body)

      res.status(201).json({ success: true, data: pet })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  })

export default router.handler()
