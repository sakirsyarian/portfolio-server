const Testimonial = require('../models/testimonial');

class Controller {
    static home(req, res) {
        res.status(200).json({ message: 'Hello World' });
    }
}

module.exports = Controller;
