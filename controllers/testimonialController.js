const Testimonial = require('../models/testimonial');

class TestimonialController {
    static async find(req, res) {
        try {
            // const createTestimonial = new Testimonial({
            //     image: 'images.com',
            //     name: 'Sarian',
            //     role: 'CEO Elgoritme',
            //     message: 'A really good job, all aspects of the project were followed steb by step and with good result.',
            // });
            // const testimonial = await createTestimonial.save();

            const testimonial = await Testimonial.find();

            res.status(200).json({ success: true, data: testimonial });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TestimonialController;
