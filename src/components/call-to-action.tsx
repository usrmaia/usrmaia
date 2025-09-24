import { Button } from "@/components/ui/button";
import { MessageCircle, SendHorizonal } from "lucide-react";
import { sendWhatsAppMessage } from "@/lib/actions";

export const CallToAction = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
            Vamos Conversar?
          </h2>
          <p className="mt-4">
            Envie uma mensagem e vamos discutir seu próximo projeto!
          </p>

          <form
            action={sendWhatsAppMessage}
            className="mx-auto mt-10 max-w-sm lg:mt-12"
          >
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <MessageCircle className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                name="message"
                placeholder="Digite sua mensagem aqui..."
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="text"
              />

              <div className="md:pr-1.5 lg:pr-0">
                <Button
                  type="submit"
                  aria-label="Enviar mensagem no WhatsApp"
                  className="rounded-(--radius)"
                >
                  <span className="hidden md:block">Enviar</span>
                  <SendHorizonal
                    className="relative mx-auto size-5 md:hidden"
                    strokeWidth={2}
                  />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
