const Experience = require('../models/experience');

class ExperinceController {
    static async find(req, res) {
        try {
            const experiences = await Experience.find();
            res.status(200).json({ success: true, data: experiences });
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    }

    static async save(req, res) {
        try {
            const { company, position, date, description, test } = req.body;

            const createExperience = new Experience({ company, position, date, description, test });
            const experience = await createExperience.save();

            res.status(201).json({ success: true, data: experience });
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const experience = await Experience.findByIdAndDelete(id);

            res.status(200).json({ message: `${experience.company} deleted successfully` });
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    }
}

module.exports = ExperinceController;
