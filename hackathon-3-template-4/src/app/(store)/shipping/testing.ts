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
                    Authorization: `ShippoToken shippo_test_478bf9a81de70366b8cce0b55166c0a4e2f2b5c5`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error: any) {
        res.status(500).json({ message: error.message, error: error.response?.data });
    }
}
