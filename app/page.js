import { BackgroundLines } from "@/components/ui/background-lines";
import { BentoGridComponent } from "@/components/Bento";
import { AnimatedTestimonialsComponent } from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { SignupFormDemo } from "@/components/Form";

export default function Home() {
  return (
    <div className="relative">
      {/* Section 1 */}
      <BackgroundLines className="relative flex items-center justify-center w-full flex-col px-4 bg-transparent backgroundImage2">
        {/* Contenu principal */}
        <h2 className="relative z-20 bg-clip-text text-transparent text-center bg-gradient-to-r from-fuchsia-600 to-blue-600 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 font-bold tracking-tight">
          Empower your business <br /> with a stunning website.
        </h2>
        <p className="relative z-20 max-w-xl mx-auto text-md md:text-xl text-neutral-400 font-semibold dark:text-neutral-400 text-center">
          Get the best website for your project, business, or personal use. We
          offer a wide range of services to help you get started.
        </p>
      </BackgroundLines>

      {/* Section 2 (Noir) */}
      <div className="relative bg-black overflow-hidden">
        <AnimatedTestimonialsComponent />
      </div>

      {/* Section 3 */}
      <div className="relative py-20 backgroundImage">
        {/* Dégradé ascendant pour transition avec le noir */}
        <div className="absolute top-0 left-0 right-0 h-[30px] bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Contenu principal */}
        <BentoGridComponent />
      </div>
      {/* <Contact /> */}
      <div className="bg-black pt-10">
        <SignupFormDemo />
      </div>
    </div>
  );
}
