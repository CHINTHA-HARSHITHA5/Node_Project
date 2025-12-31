import express from "express"
import { Employeecontrollers } from "../controllers/Employeecontrollers.js"

const router = express.Router()

router.post("/add_employee", Employeecontrollers.createEmployee)

export default router