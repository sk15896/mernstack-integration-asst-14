const express=require("express");

const router=express.Router();

const customer=require("../controllers/customerController");

router.get("/",customer.getCustomers);

router.post("/",customer.addCustomer);

router.put("/:id",customer.updateCustomer);

router.delete("/:id",customer.deleteCustomer);

module.exports=router;