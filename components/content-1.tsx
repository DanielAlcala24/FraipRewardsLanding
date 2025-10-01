import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Un ecosistema de motivación a tu alcance
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block"
                alt="Ilustración del sistema de recompensas"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="Ilustración del sistema de recompensas (claro)"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Con Fraip Rewards, creas una cultura donde cada logro cuenta. Los colaboradores acumulan puntos por su desempeño, que pueden canjear por un catálogo de cupones y beneficios definidos por la empresa.
            </p>
            <p className="text-muted-foreground">
              Además, fomenta la camaradería con sorteos y votaciones por el &quot;Colaborador del Mes&quot;, haciendo del reconocimiento una experiencia divertida y tangible para todos.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  &quot;Implementar Fraip Rewards transformó nuestra dinámica de equipo. Ver a los colaboradores canjear sus puntos y participar en los sorteos ha generado un impacto increíble en la moral y la motivación.&quot;
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">Ana García, Gerente de RRHH</cite>
                  <Image
                    className="h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Logo de empresa cliente"
                    height="20"
                    width="100"
                  />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
