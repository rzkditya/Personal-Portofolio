import NavIcon from "../atom/NavIcon";
import Main from "../layout/Main";
import Accent_1 from "../../assets/Accent_1.png";
import Accent_2 from "../../assets/Accent_2.png";
import Accent_3 from "../../assets/Accent_3.png";
import About_1 from "../../assets/About_1.jpg";
import About_2 from "../../assets/About_2.jpg";
import About_3 from "../../assets/About_3.jpg";
import Sidebar from "../molecule/Sidebar";

const iconSize = "text-5xl";

const About = () => {
  return (
    <>
      <NavIcon />
      <Main className="flex flex-col font-display">
        <section
          id="chapter_one"
          className="relative flex min-h-screen snap-start justify-center lg:text-sm overflow-hidden"
        >
          <div className="flex w-[60%] overflow-hidden">
            <img
              src={About_1}
              alt="Card Picture"
              className="opacity-80 inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-end mb-26 lg:mb-20 w-[40%] bg-background-1">
            <div className="flex justify-center items-center sm:w-66 lg:w-100">
              <p className="font-text font-bold italic text-justify sm:text-sm/snug lg:text-lg/snug">
                I graduated with a degree in Computer System, but after college,
                I took a detour — not into tech right away, but into a personal
                passion: coffee brewing. What started as a hobby grew into a
                craft. I dove deep into the science of coffee, practiced
                relentlessly, and eventually competed in several brewing
                competitions. Through that process, I learned how to experiment,
                analyze, and improve — a mindset that feels surprisingly close
                to software development. That’s when something clicked.
              </p>
            </div>
          </div>
          <div className="absolute sm:bottom-80 lg:bottom-66 sm:left-50 lg:left-144 flex sm:w-40 lg:w-100 text-white font-bold gap-2">
            <div className="mt-4 text-5xl font-bold">01</div>
            <div className="sm:text-6xl/12 lg:text-8xl/18 font-bold tracking-tight">
              BREW, LEARN, REPEAT
            </div>
          </div>
          <div className="absolute -top-30 -right-80 -rotate-20 w-150 bg-blue-200/60 z-0">
            <img src={Accent_1} alt="Accent image" />
          </div>
        </section>

        <section
          id="chapter_two"
          className="relative flex min-h-screen snap-start justify-center text-sm overflow-hidden"
        >
          <div className="flex justify-center items-center w-[40%] bg-background-1">
            <div className="flex justify-center items-center sm:w-66 lg:w-100">
              <p className="font-text font-bold italic text-justify sm:text-sm/snug lg:text-lg/snug">
                In 2024, I began working at PGN, first as a City Gas Sales, then
                in Sales and Customer Management Representative. These roles
                taught me about customer empathy and real-world problem solving.
                But behind the scenes, I was diving back into tech. I enrolled
                in a Full Stack Developer bootcamp, started building apps,
                earned a professional certificate on Coursera. I’ve been
                learning JavaScript, React, and Tailwind — and loving the
                challenge of turning ideas into working software.
              </p>
            </div>
          </div>
          <div className="flex w-[60%]">
            <img
              src={About_2}
              alt="Card Picture"
              className="opacity-80 inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute sm:bottom-64 lg:bottom-50 sm:right-76 lg:right-140 flex sm:w-40 lg:w-100 text-white font-bold gap-2">
            <div className="sm:text-6xl/12 lg:text-8xl/18 text-right font-bold tracking-tight">
              CODE IN PROGRESS
            </div>
            <div className="mt-4 text-5xl font-bold">02</div>
          </div>
          <div className="absolute -top-20 -left-40 w-150">
            <img src={Accent_2} alt="Accent image" />
          </div>
        </section>

        <section
          id="chapter_three"
          className="relative flex min-h-screen snap-start justify-center text-sm overflow-hidden"
        >
          <div className="flex w-[60%]">
            <img
              src={About_3}
              alt="Card Picture"
              className="opacity-80 inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-end mb-30 w-[40%] bg-background-1">
            <div className="flex justify-center items-center w-100 z-1">
              <p className="font-text font-bold italic text-justify text-lg/snug">
                I’m now ready to step fully into the world of software
                development. My goal is to become a strong full-stack developer
                — someone who writes clean, thoughtful code and never stops
                learning. I believe the same curiosity and discipline that
                carried me through brewing competitions and bootcamps will drive
                me as a developer. Whether it’s building user-focused apps,
                solving backend challenges, or learning new stacks, I’m excited
                to keep growing — one commit at a time.
              </p>
            </div>
          </div>
          <div className="absolute bottom-50 left-116 flex w-100 text-white font-bold gap-2">
            <div className="mt-4 text-5xl font-bold">03</div>
            <div className="text-8xl/18 font-bold tracking-tight">
              BUILDING WHAT'S NEXT
            </div>
          </div>
          <div className="absolute -top-20 -right-40 w-150">
            <img src={Accent_3} alt="Accent image" />
          </div>
        </section>
      </Main>
      <Sidebar />
    </>
  );
};

export default About;
