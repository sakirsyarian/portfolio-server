const Ability = require('../models/ability');

class AbilityController {
    static async find(req, res) {
        try {
            const abilities = await Ability.find();
            res.status(200).json({ success: true, data: abilities });
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    }

    static async save(req, res) {
        try {
            const { icon, name, category, test } = req.body;

            const createAbility = new Ability({ icon, name, category, test });
            const ability = await createAbility.save();

            res.status(201).json({ success: true, data: ability });
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const ability = await Ability.findByIdAndDelete(id);

            res.status(200).json({ message: `${ability.name} deleted successfully` });
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    }
}

module.exports = AbilityController;
