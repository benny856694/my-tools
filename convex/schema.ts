import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  firmwares: defineTable({
    name: v.string(),
    md5: v.string(),
    size: v.string(),
    fileName: v.string(),
    remark: v.optional(v.string())
  }),
  sources: defineTable({
    name: v.string(),
    baseUrl: v.string()
  }),
  serialNumbers: defineTable({
    sn: v.string(),
    remark: v.optional(v.string())
  })
})
