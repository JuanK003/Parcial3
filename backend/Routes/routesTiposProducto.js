import express from 'express'
import { createTipo, deleteTipo, getAllTipos, getTipo, updateTipo } from '../controllers/TipoProductoController.js'
const router = express.Router()

router.get('/', getAllTipos)
router.get('/:id', getTipo)
router.post('/', createTipo)
router.put('/:id', updateTipo)
router.delete('/:id', deleteTipo)

export default router