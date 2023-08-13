const Testimonial = require('../models/testimonial');

class TestimonialController {
    static async find(req, res) {
        try {
            const testimonials = await Testimonial.find();
            res.status(200).json({ success: true, data: testimonials });
        } catch (error) {
            console.log(error);
        }
    }

    static async save(req, res) {
        try {
            const { image, name, role, message } = req.body;

            const createTestimonial = new Testimonial({ image, name, role, message });
            const testimonial = await createTestimonial.save();

            res.status(201).json({ success: true, data: testimonial });
        } catch (error) {
            console.log(error);
        }
    }

    static async findByIdAndDelete(req, res) {
        try {
            const { id } = req.params;
            const testimonial = await Testimonial.findByIdAndDelete(id);

            res.status(200).json({ success: true, data: testimonial });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TestimonialController;
