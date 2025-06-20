import { BotContext, BotMethods } from "@bot-whatsapp/bot/dist/types"
import { flowSeller } from "../flows/seller.flow"
import { flowSchedule } from "../flows/schedule.flow"
import { flowConfirm } from "../flows/confirm.flow"
import { flowTest } from "../flows/test.flow"

export default async (ctx: BotContext, { gotoFlow, flowDynamic }: BotMethods) => {
    const message = ctx.body?.trim().toLowerCase();

    if (message === '/info') {
        return gotoFlow(flowTest);
    } else if (message === 'ver estado' || message === 'estado') {
        return gotoFlow(flowTest);
    }

    // Si no reconoce el comando, muestra el menú
    await flowDynamic([
        {
            body: "Menú principal",
            buttons: [
                [{ body: "Ver Estado" }, { body: "Actuadores" }],
                [{ body: "Vincular" }, { body: "Actualizar Disp." }]
            ]
        }
    ]);
}