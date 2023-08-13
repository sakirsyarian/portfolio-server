const Experience = require('../models/experience');

class ExperinceController {
    static async find(req, res) {
        try {
            const experiences = await Experience.find();
            res.status(200).json({ success: true, data: experiences });
        } catch (error) {
            console.log(error);
        }
    }

    static async save(req, res) {
        try {
            const { company, position, date, description } = req.body;

            const createExperience = new Experience({ company, position, date, description });
            const experience = await createExperience.save();

            res.status(201).json({ success: true, data: experience });
        } catch (error) {
            console.log(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const experience = await Experience.findByIdAndDelete(id);

            res.status(200).json({ success: true, data: experience });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ExperinceController;
