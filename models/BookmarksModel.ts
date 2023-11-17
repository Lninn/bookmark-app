import mongoose from "mongoose"

// ref https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json
// ref https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks

export interface Bookmarks extends mongoose.Document {
  id: string
  parentId?: string
  index?: number
  url?: string
  title: string,
  dateAdded?: number
}

const BookmarksSchema = new mongoose.Schema<Bookmarks>({
  id: {
    type: String,
    required: [true, "Id 是必填字段"],
    min: [0, "Id 的最小值为 0"]
  },
  parentId: {
    type: String,
    max: [80, "Age 的最大值为 80"]
  },
  index: {
    type: Number,
  },
  url: {
    type: String
  },
  title: {
    type: String
  },
  dateAdded: {
    type: Number
  }
})

const modelName = "Bookmarks"

export default mongoose.models[modelName] || mongoose.model<Bookmarks>(modelName, BookmarksSchema)
