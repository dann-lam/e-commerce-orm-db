const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Find all categories and include Product.
router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product
      }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update({

      where: {
        id: req.params.id
      }
    })
  } catch (err) {

  }

});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!categoryData) {
      res.status(404).json({message: "No category with that ID was located"})
      return;
    }

    res.status(200).json(categoryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
