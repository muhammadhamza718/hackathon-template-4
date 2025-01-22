"use client";
import { useState } from "react";

const Testing = () => {
    const [shipmentId, setShipmentId] = useState<string | null>(null);

    const createShipment = async () => {
        const addressFrom = {
            name: "Sender Name",
            street1: "123 Sender St.",
            city: "San Francisco",
            state: "CA",
            zip: "94107",
            country: "US",
        };

        const addressTo = {
            name: "Recipient Name",
            street1: "456 Recipient St.",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "US",
        };

        const parcels = [
            {
                length: "5",
                width: "5",
                height: "5",
                distance_unit: "in",
                weight: "2",
                mass_unit: "lb",
            },
        ];

        try {
            const response = await fetch("/api/testing", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address_from: addressFrom,
                    address_to: addressTo,
                    parcels,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setShipmentId(data.object_id); // Shipment ID
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log("Error creating shipment:", error);
        }
    };

    return (
        <div className="bg-purple-400 mx-auto m-8 p-6 text-center">
            <h1 className="">Shippo Shipment Generator</h1>
            <button onClick={createShipment} className="bg-pink-500 p-4 rounded-md mx-auto m-4">Create Shipment</button>
            {shipmentId && <p className="text-center font-bold text-2xl p-2 m-2">Shipment ID: {shipmentId}</p>}
        </div>
    );
};

export default Testing;
