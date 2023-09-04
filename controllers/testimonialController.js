const Testimonial = require('../models/testimonial');

class TestimonialController {
    static async find(req, res) {
        try {
            const testimonials = await Testimonial.find();
            res.status(200).json({ success: true, data: testimonials });
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    }

    static async save(req, res) {
        try {
            const { image, name, role, message, test } = req.body;

            const createTestimonial = new Testimonial({ image, name, role, message, test });
            const testimonial = await createTestimonial.save();

            res.status(201).json({ success: true, data: testimonial });
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const testimonial = await Testimonial.findByIdAndDelete(id);

            res.status(200).json({ message: `${testimonial.name} deleted successfully` });
        } catch (error) {
            res.status(500).json({ success: false, error });
        }
    }
}

module.exports = TestimonialController;
