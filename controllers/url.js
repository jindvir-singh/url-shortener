import { nanoid } from "nanoid";
import URL from "../models/url.js";


async function _generateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ message: "URL required" })

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const generateId = nanoid(8);
    // const generateId = customAlphabet(alphabet, 8);

    await URL.create({
        shortId: generateId,
        requiredUrl: body.url,
        visitHistory: []
    })

    return res.json({ id: generateId })
}

async function _updateVisitHistory(req, res) {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true } // Returns updated document
        );

        if (!entry) {
            return res.status(404).send("Short URL not found");
        }

        res.redirect(entry.requiredUrl);
    } catch (error) {
        console.error("Error updating visit history:", error);
        res.status(500).send("Internal Server Error");
    }
}

export { _generateNewShortURL, _updateVisitHistory }