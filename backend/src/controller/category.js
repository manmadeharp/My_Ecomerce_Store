const Category = require('../models/category')
const slugify = require('slugify')
const category = require('../models/category')

function createCategories(categories, parentId = null){
    const categoryList =[]
    let category;
    if(parentId==null){
        category = categories.filter(cat=>cat.parentId == undefined)
    }else{
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for(let cats of category){
        categoryList.push({
            _id: cats._id,
            name: cats.name,
            slug:cats.slug,
            children:createCategories(categories, cats._id)
        })
    }
    return categoryList
    // to see what this does do http://localhost:3000/api/category/getcategory
    //puts subcategories in parent category by parent id
}

exports.addCategory =  (req, res) => {
    let categoryUrl
    

    const categoryObj= {
        name: req.body.name,
        slug: slugify(req.body.name),
    }

    if(req.file){
        categoryObj.categoryImage = process.env.API + '/public/' + req.file.filename;
    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId
    }
    const cat = new Category(categoryObj);
    cat.save((error, category) =>{
        if(error) return res.status(400).json({error})
        if(category){
            return res.status(201).json({category})
        }
    })
}
exports.getCategory = (req,res) => {
    Category.find({})
    .exec((error, categories) =>{
        if(error) return res.status(400).json({error})
        if(categories){

            const categoryList = createCategories(categories);

            return res.status(201).json({categoryList})
        }
    })
}