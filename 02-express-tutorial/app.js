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
    const id = parseInt(req.params.productID);
    if(isNaN(id)) return res.json({ message: "Invalid product ID" });
    const singleProduct = products.find((product) => product.id === id);
    if(!singleProduct) return res.json({ message: "product with the ID" });
    res.json(singleProduct);
})
app.get("/api/v1/query", (req, res) => {
    const search = req.query.search;
    const limit = req.query.limit;
    if(!search || !limit) {
        return res.json({ message: "query is missing" });
    }
    if(limit && isNaN(limit)) {
        return res.json({ message: "limit should be a number" });
    }

    return products.filter((product) => product.name === search).slice(0, Number(limit));
    
})
app.all("*", (req, res) => {
    res.status(404).send("resource not found")
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
