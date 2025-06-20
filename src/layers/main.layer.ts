import { BotContext, BotMethods } from "@bot-whatsapp/bot/dist/types"
import { flowSeller } from "../flows/seller.flow"
import { flowSchedule } from "../flows/schedule.flow"
import { flowConfirm } from "../flows/confirm.flow"
import { flowTest } from "../flows/test.flow"
/**
 * Determina que flujo va a iniciarse basado en el mensaje recibido
 */
export default async (ctx: BotContext, { gotoFlow }: BotMethods) => {
    const message = ctx.body?.trim().toLowerCase();
    

    if (message === '/info') {
        return gotoFlow(flowTest);
    } else if (message === 'ver horarios') {
        return gotoFlow(flowTest);
    }
    
    // Más condiciones...
}