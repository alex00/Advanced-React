const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check of they are logged
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info)

    console.log(item)

    return item
  }
}

module.exports = Mutations;
