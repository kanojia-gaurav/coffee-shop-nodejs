const { query } = require("express");
const express =  require("express");
const router = express.Router()
const controllers = require("../controllers")

router.get('/', async(req,res,next)=>{

    const data ={
        title: "Gaurav's coffee Shop"

    }

    const newData = req.context
    const itemCtr = controllers.item.instance()
    newData.Coffee = await itemCtr.get({category: "Coffee"})
    newData.Pasteries = await itemCtr.get({category: "Pasteries"})
    newData.Cookies = await itemCtr.get({category: "Cookies"})


    res.render("home",newData)
})

router.get('/blog', (req, res, next)=>{
    const data ={
        title: "Gaurav's coffee Shop"
    }

    res.render("blog",data)
})


// router.get('/items', async(req, res, next)=>{

//     const filters = req.query

//     const itemCtr = controllers.item.instance()
//     const item = await itemCtr.get(filters)

//     res.json({
//         item
//     })
// })


router.post('/order', async(req, res, next)=>{

    const orderData = req.body

    const orderCtr = controllers.order.instance()
    const order = await orderCtr.post(orderData)
    res.json(order)
})
module.exports = router