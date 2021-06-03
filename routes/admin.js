var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products = [
    {
      name: "Iphone 12",
      category: "Mobile",
      description: "Apple phone",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000"
    },
    {
      name: "Samsung S21 Ultra",
      category: "Mobile",
      description: "Samsung phone",
      image: "https://images-na.ssl-images-amazon.com/images/I/91BAitkzszL._SL1500_.jpg"
    },
    {
      name: "OnePlus 9 Pro",
      category: "Mobile",
      description: "Oneplus phone",
      image: "https://www.gizmochina.com/wp-content/uploads/2020/12/oneplus_5011101665_9_pro_128gb_5g_1629057-500x500.jpg"
    },
    {
      name: "Mi 11 Ultra",
      category: "Mobile",
      description: "Mi phone",
      image: "https://www.gizmochina.com/wp-content/uploads/2021/02/mi11ultra-white.jpg"
    }
  ]

  res.render('admin/view-products',{admin:true, products})
});
router.get('/add-product',function(req, res) {
  res.render('admin/add-product')

})
router.post('/add-product',(req, res) => {
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
