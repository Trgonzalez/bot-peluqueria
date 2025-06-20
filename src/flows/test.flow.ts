import { addKeyword } from "@bot-whatsapp/bot";

const flowTest = addKeyword(['/test']).addAction(async (_, { flowDynamic }) => {
    await flowDynamic([
        {
            body: "¿Qué deseas hacer?",
            buttons: [
                { body: "Ver horarios" },
                { body: "Contactar" }
            ]
        }
    ]);
});

export { flowTest };