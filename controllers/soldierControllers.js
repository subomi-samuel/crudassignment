const Soldier = require("../models/soldier.js");

exports.createNewSoldier = (req, res) => {
    Soldier.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (error, newSoldier) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else {
            return res.status(200).json({ message: "New soldier created.", newSoldier });
        }
    });
};

exports.fetchSoldier = (req, res) => {
    Soldier.find({}, (error, soldier) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else {
            return res.status(200).json({ message: soldier });
        }
    });
};

exports.fetchSoldier = (req, res) => {
    Soldier.findById(req.params.id, (error, soldier) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!soldier) {
            return res.status(404).json({ message: "Soldier not found." });
        } else {
            return res.status(200).json({ soldier });
        }
    });
};

exports.updateSoldier = (req, res) => {
    soldier.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, (error, soldier) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!soldier) {
            return res.status(404).json({ message: "Soldier not found. " });
        } else {
            soldier.save((error, updatedSoldier) => {
                if (erorr) {
                    return res.status(500).json({ message: error });
                } else {
                    return res.status(200).json({ message: "Soldier details updated successfully." });
                }
            });
        }
    });
};

exports.deleteSoldier = (req, res) => {
    Soldier.findByIdAndDelete(req.params.id, (error, Soldier) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!Soldier) {
            return res.status(404).json({ message: "Soldier not found." });
        } else {
            return res.status(200).json({ message: "Soldier deleted successfully." });
        }
    });
};