import { Categoria } from '../modelos/categoriaModelo.js';
import { Producto } from '../modelos/productoModelo.js';
import { check, validationResult } from 'express-validator';

// GET /categorias
export const obtCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();

        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// GET /categorias/:id
export const obtCategoriaPorID = async (req, res) => {

    try {

        const categoria = await Categoria.findByPk(
            req.params.id,
            {
                include: Producto
            }
        );

        if (!categoria) {
            return res.status(404).json({
                error: 'Categoria no encontrada'
            });
        }

        res.status(200).json(categoria);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// POST /categorias
export const insertaCategoria = async (req, res) => {

    try {

        await check('nombre')
            .notEmpty()
            .withMessage('El nombre no puede estar vacío')
            .run(req);

        const errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                mensaje: errores.array()
            });
        }

        const categoria = await Categoria.create(req.body);

        res.status(201).json(categoria);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// PATCH /categorias/:id
export const actualizaCategoria = async (req, res) => {

    try {

        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({
                error: 'Categoria no encontrada'
            });
        }

        await Categoria.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );

        res.status(200).json({
            mensaje: 'Categoria actualizada'
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

// DELETE /categorias/:id
export const eliminaCategoria = async (req, res) => {

    try {

        const categoria = await Categoria.findByPk(req.params.id);

        if (!categoria) {
            return res.status(404).json({
                error: 'Categoria no encontrada'
            });
        }

        await Categoria.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            mensaje: 'Categoria eliminada'
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};