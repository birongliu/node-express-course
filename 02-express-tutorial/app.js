console.log('Express Tutorial')
const express = require('express')
const { products } = require('./data.js')
const app = express()
app.use(express.static("./public"))
const port = 4000


app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It worked!" });
})
app.get("/api/v1/products", (req, res) => {
    res.json(products);
})

app.get("/api/v1/products/:productID", (req, res) => {
    const { productID } = req.params;
    if(!isNaN(productID)) return res.json({ message: "Invalid product ID" });
    const singleProduct = products.find((product) => product.id === Number(productID));
    if(!singleProduct) return res.json({ message: "product with the ID" });
    res.json(singleProduct);
})
app.all("*", (req, res) => {
    res.status(404).send("resource not found")
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
