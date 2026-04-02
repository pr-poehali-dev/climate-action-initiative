import { Mail, MapPin, Phone } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Запишитесь
                <br />
                на приём
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Первая консультация бесплатно</p>
            </div>

            <div className="space-y-4 md:space-y-8">
              <a
                href="tel:+79615239897"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Phone className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  +7 961 523-98-97
                </p>
              </a>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-2xl">Новороссийск, ул. Героев Десантников, 47</p>
              </div>

              <div
                className={`flex gap-2 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                {[
                  { label: "Telegram", href: "https://t.me/+79615239897" },
                  { label: "WhatsApp", href: "https://wa.me/79615239897" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-transparent font-mono text-xs text-foreground/60 transition-all hover:border-foreground/60 hover:text-foreground/90"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Messenger buttons */}
          <div className="flex flex-col justify-center space-y-6">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">
                Напишите нам — расскажите о вашем ребёнке, и мы подберём подходящую программу. Первая консультация бесплатно.
              </p>
            </div>

            <div
              className={`flex flex-col gap-4 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <a href="https://t.me/+79615239897" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="primary" size="lg" className="w-full">
                  Написать в Telegram
                </MagneticButton>
              </a>
              <a href="https://wa.me/79615239897" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="secondary" size="lg" className="w-full">
                  Написать в WhatsApp
                </MagneticButton>
              </a>
              <a href="tel:+79615239897">
                <MagneticButton variant="secondary" size="lg" className="w-full">
                  Позвонить нам
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}