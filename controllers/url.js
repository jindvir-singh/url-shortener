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

export { _generateNewShortURL }