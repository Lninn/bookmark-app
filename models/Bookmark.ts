import mongoose from "mongoose"

export interface Bookmark extends mongoose.Document {
  name: string
  age: number
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const PetSchema = new mongoose.Schema<Bookmark>({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, "name 为必填字段"],
    maxlength: [60, "Name 的长度不能超过60个字符"],
  },
  age: {
    /* Pet's age, if applicable */
    
    type: Number,
    required: [true, "age 为必填字段"],
    max: [80, "Age 的最大值为 80"]
  },
})

export default mongoose.models.Bookmark || mongoose.model<Bookmark>("Bookmark", PetSchema)
