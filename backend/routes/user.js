const express = require('express');
const { addowner, getallOwners } = require("../controller/user")
const router_owner = express.Router();

router_owner.get("/owner", async (req, res) => {
    const alltasks = await getallOwners()
    res.json(alltasks)
})
router_owner.post("/owner", async (req, res) => {
    const payload = req.body
    const addedOwner = await addowner(payload)
    return res.json(addedOwner)
})

module.exports = router_owner
