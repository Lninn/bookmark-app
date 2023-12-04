import mongoose from "mongoose"


export interface Todos extends mongoose.Document {
  text: string
  fill: string
}

const TodosSchema = new mongoose.Schema<Todos>({
  text: {
    type: String,
    required: [true, "text is required"],
  },
  fill: {
    type: String,
    required: [true, "fill is required"],
  },
})

const modelName = "Todos"

export default mongoose.models[modelName] || mongoose.model<Todos>(modelName, TodosSchema)
