const Project = require('../models/project');

class ProjectController {
    static async find(req, res) {
        try {
            const projects = await Project.find();
            res.status(200).json({ success: true, data: projects });
        } catch (error) {
            console.log(error);
        }
    }

    static async save(req, res) {
        try {
            const { image, name, tags, description, github } = req.body;

            const createProject = new Project({ image, name, tags, description, github });
            const project = await createProject.save();

            res.status(201).json({ success: true, data: project });
        } catch (error) {
            console.log(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const project = await Project.findByIdAndDelete(id);

            res.status(200).json({ success: true, data: project });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ProjectController;
