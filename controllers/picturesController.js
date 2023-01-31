const Picture = require('../models/picture');
const fs = require('fs');
exports.create = async (req, res) => {
    try {
        const { name } = req.body;

        const file = req.file;
        const picture = new Picture({
            name,
            src: file.path,
        });

        await picture.save();
        res.json(picture);
    } catch (err) {
        res.status(500).json({ message: "Erro ao salvar a imagem." });
    }
};

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find()
        res.json(pictures);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar imagens" });
    }
}

exports.remove = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id)
        if(!picture) {
            return res.status(404).json({ message: "IMAGEM NÃO ENCONTRADA" });
        }
        fs.unlinkSync(picture.src)

        await picture.remove()
        res.json({ message: "IMAGEM REMOVIDA COM SUCESSO." })
    } catch (error) {
        res.status(500).json({ message: 'ERRO AO EXCLUIR A IMAGEM.' })
    }
} 