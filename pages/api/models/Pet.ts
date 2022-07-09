import mongoose from 'mongoose'

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
})

export default mongoose.models.Pet || mongoose.model('Pet', PetSchema)
