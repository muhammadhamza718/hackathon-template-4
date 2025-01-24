import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function createShipment(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { address_from, address_to, parcels } = req.body;

    try {
        const response = await axios.post(
            "https://api.goshippo.com/shipments/",
            {
                address_from,
                address_to,
                parcels,
                async: false,
            },
            {
                headers: {
                    Authorization: `ShippoToken token`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error: any) {
        res.status(500).json({ message: error.message, error: error.response?.data });
    }
}
