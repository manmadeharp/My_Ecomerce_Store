const Category = require('../../models/category')
const Products = require('../../models/product')

function createCategories(categories, parentId = null) {
    const categoryList = []
    let category;
    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for (let cats of category) {
        categoryList.push({
            _id: cats._id,
            name: cats.name,
            slug: cats.slug,
            parentId: cats.parentId,
            children: createCategories(categories, cats._id)
        })
    }
    return categoryList
    // to see what this does do http://localhost:3000/api/category/getcategory
    //puts subcategories in parent category by parent id
}


exports.initialData = async (req, res) => {

    const categories = await Category.find({}).exec();
    const products = await Products.find({})
        .select('_id name price quantity slug description productPictures category')
        .populate({ path: 'category', select: '_id name' })
        .exec();
    res.status(200).json({
        categories: createCategories(categories),
        products
    })

}  