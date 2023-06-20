const {
  newContactMessage,
  getAllContactMessage,
} = require("../database/contact");

const newContactMessageSent = async (req, res) => {
  try {
    await newContactMessage(req.body);
    res.status(200).json({ msg: "Thank you for reaching out" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getAllContactMessageSent = async (req, res) => {
  try {
    const allMessages = await getAllContactMessage();
    res.status(200).json({ msg: allMessages });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  newContactMessageSent,
  getAllContactMessageSent,
};
