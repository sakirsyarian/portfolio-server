const Ability = require('../models/ability');

class AbilityController {
    static async find(req, res) {
        try {
            const abilities = await Ability.find();
            res.status(200).json({ success: true, data: abilities });
        } catch (error) {
            console.log(error);
        }
    }

    static async save(req, res) {
        try {
            const { icon, name, category } = req.body;

            const createAbility = new Ability({ icon, name, category });
            const ability = await createAbility.save();

            res.status(201).json({ success: true, data: ability });
        } catch (error) {
            console.log(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const ability = await Ability.findByIdAndDelete(id);

            res.status(200).json({ success: true, data: ability });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AbilityController;
