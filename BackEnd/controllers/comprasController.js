import Compra from "../models/compras.js"

async function create(req, res){
    try {
        const newOrder = await Compra.create({
            user: req.auth.id,
            products: req.body.products,
            total: req.body.total,
            paymentMethod: req.body.paymentMethod,
            name: req.body.name,
            address: req.body.address,
            NumberCard: req.body.NumberCard
        })
        return res.json(newOrder)
    } catch (err) {
        console.log(err)
    }
}

async function list(req, res){
    try {
        const compras = await Compra.find().populate('usuario').populate('producto');
        res.json(compras);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener las compras", error: err });
    }
}

async function find(req, res){
    try {
        const compra = await Compra.findById(req.params.id).populate('usuario').populate('producto');
        if (!compra) {
            res.status(404).json({ message: "Compra no encontrada" });
        } else {
            res.json(compra);
        }
    } catch (err) {
        res.status(500).json({ message: "Error al obtener la compra", error: err });
    }
}

async function update(req, res) {
    const { usuario, producto, total } = req.body;
    try {
        const compraActualizada = await Compra.findByIdAndUpdate(
            req.params.id,
            { usuario, producto, total },
            { new: true }
        );
        res.json(compraActualizada);
    } catch (err) {
        res.status(500).json({ message: "Error al actualizar la compra", error: err });
    }
}

async function destroy(req, res){
    try {
        await Compra.findByIdAndDelete(req.params.id);
        res.json({ message: "Compra eliminada" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar la compra", error: err });
    }
}

export default{
    create,
    list,
    find,
    update,
    destroy,
}

