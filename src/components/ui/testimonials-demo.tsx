/* eslint-disable @next/next/no-img-element */
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Dear sir, in my trading journey you are the greatest blessings of my life.. Aaj tumchyamulech mi ajun stock market mde tikun aahe.. Thank you so much sir... God bless you🙏😇",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Student Trader",
    role: "Day Trader",
  },
  {
    text: "सर तुम्हाला मनापासून शेअर मार्केटचा गुरु मानल आहे. तुमच शिकवणं अगदी मस्त आहे. खोलतंजौन शिकवता पण एकदम सोप्या पद्धतीने शिकवता.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Trading Student",
    role: "Pune Trader",
  },
  {
    text: "King of Candles, Master of patterns, Ruler of Reversals 🔥 🔥🔥❤️",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Market Learner",
    role: "Technical Analyst",
  },
  {
    text: "Better than a thousand days of diligent study is one day with a great teacher.❤️🙌😍",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Blessed Student",
    role: "Options Trader",
  },
  {
    text: "shubham sir a perfect mentor of share market biggest blessing for me who gave me confidence to dream big and achieve my life goals 😇 we are really lucky to learn from you sir.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Shubham Fan",
    role: "Full-time Trader",
  },
  {
    text: "Dear Shubham sir, Your ability to explain complex trading concepts in an easy-to-understand manner is remarkable. Students are grasping the material and applying it effectively.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Trading Enthusiast",
    role: "Investment Advisor",
  },
  {
    text: "Jai Mahakal Sir 🙏 tumchya sarkhe guru bhetayla pan nashib lagte. Tumhi nehmi mhanta na everything is destined so u were already part of our destiny ! U r big bull of trading market sir🔥",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Mahakal Devotee",
    role: "Swing Trader",
  },
  {
    text: "M.S Dhoni of Share market ❤️🔥😍",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Dhoni Fan Trader",
    role: "Cricket Fan Trader",
  },
  {
    text: "सर तुमच्या कडून शेअर मार्केट चे खूप काही शिकायला मिळते..तुमचा confidence, patience, analysis खूप भारी आहे...तुम्ही एवढ्या एखाद्या ट्रेड बद्दल एवढे confident असता की ते बघून आमचा confidence वाढतो.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Confident Trader",
    role: "Portfolio Manager",
  },
  {
    text: "King of Share Market...!!!",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Share Market King",
    role: "Market Enthusiast",
  },
  {
    text: "Dear Maharashtrian jadugar sir😇, Traiding tumhi tr chup changali shikavta ahet.. it is amazing but important shikanyasarkhi gost ahe tumachyakadun ti mhanje pensions .. thanks for God ki amhala menter mhanun tumhi bhetalat.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Maharashtrian Trader",
    role: "Long Term Investor",
  },
  {
    text: "गृहिणी या क्षेत्रात आल्या ते फक्त तुमच्यामुळे.....",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Grateful Housewife",
    role: "Homemaker Trader",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <img
              src="/logo.jpg"
              alt="Excelsior Logo"
              className="h-16 sm:h-20 w-auto object-contain"
              style={{ filter: 'brightness(1.1)' }}
            />
          </motion.div>

          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Student Success Stories
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our successful traders have to say about Excelsior.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 