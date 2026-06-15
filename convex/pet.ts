import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const addFirmware = mutation({
  args: {
    name: v.string(),
    fileName: v.string(),
    md5: v.string(),
    size: v.string(),
    remark: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('firmwares', {
      name: args.name,
      fileName: args.fileName,
      md5: args.md5,
      size: args.size,
      remark: args.remark ?? ''
    })
  }
})

export const getFirmwares = query({
  handler: async (ctx) => {
    return await ctx.db.query('firmwares').collect()
  }
})

export const getSources = query({
  handler: async (ctx) => {
    return await ctx.db.query('sources').collect()
  }
})

//remove firmware by id
export const removeFirmware = mutation({
  args: {
    id: v.id('firmwares')
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  }
})

export const updateFirmware = mutation({
  args: {
    id: v.id('firmwares'),
    name: v.string(),
    remark: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      name: args.name,
      remark: args.remark ?? ''
    })
  }
})

// --- Serial Numbers ---

export const getSerialNumbers = query({
  handler: async (ctx) => {
    return await ctx.db.query('serialNumbers').collect()
  }
})

export const addSerialNumber = mutation({
  args: {
    sn: v.string(),
    remark: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    await ctx.db.insert('serialNumbers', {
      sn: args.sn,
      remark: args.remark ?? ''
    })
  }
})

export const removeSerialNumber = mutation({
  args: {
    id: v.id('serialNumbers')
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  }
})

export const updateSerialNumber = mutation({
  args: {
    id: v.id('serialNumbers'),
    sn: v.string(),
    remark: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      sn: args.sn,
      remark: args.remark ?? ''
    })
  }
})
