module.exports = {
  getInventory: async (req, res) => {
    const db = req.app.get('db')
    const inventory = await db.get_inventory()
    res.status(200).send(inventory)
  },
  addProduct: async (req, res) => {
    const db = req.app.get('db')
    const { name, price, img } = req.body
    const product = await db.add_product({ name, price, img })
    res.status(200).send(product)
  },
  deleteProduct: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const product = await db.delete_product(id)
    res.status(200).send(product)
  },
  updateProduct: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const { name, price, img } = req.body
    const product = await db.update_product({ id, name, price, img })
    res.status(200).send(product)
  },
  getProduct: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const product = await db.get_product(id)
    res.status(200).send(product)
  }
}