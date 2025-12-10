/* eslint-disable @next/next/no-img-element */
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "This class exceeded my expectations in every way. The instructor explained concepts clearly, kept the sessions engaging, and encouraged questions, which made learning enjoyable and effective. The materials were well-organized, practical, and easy to apply in real-world trading scenarios.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Daksh M Giriya",
    role: "Student",
  },
  {
    text: "It's wonderful place to learn basics and advanced level of stock market we are trained for over a month",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Harshal S",
    role: "Student",
  },
  {
    text: "I recently attended the Free Stock Market Training & Wealth Management sessions by Excelsior, and it was a fantastic experience! The instructors were highly knowledgeable and explained complex concepts in a simple and practical way. The session was an eye-opener for financial planning.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Jyoti Kammar",
    role: "Student",
  },
  {
    text: "I never thought learning stock trading could be this easy! The training is simple yet very effective. The live examples and strategies taught here helped me understand the market better. Highly recommended",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Manjunath Karlannavar",
    role: "Student",
  },
  {
    text: "Attended 1 full day live training workshop on stock market. Live with Prof. Mallikarjun sajjan sir. It was very informative and gave a clear direction on how to approach the market.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Prashant Angadi",
    role: "Local Guide",
  },
  {
    text: "I have completed their Basic to Master course. I felt it was good since I didn't had any idea about share market but from this course I got to learn a lot of new things. Mahesh Memane sir's teaching skills were very good study material available for learning any time.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "RX Varun Shetty",
    role: "Student",
  },
  {
    text: "I have attended one day training of Mr.mallikarjun sir. It was a wonderful experience. Full of positive thoughts & a mission towards financial freedom. Lot of energy & motivational speech encourage me to achieve my financial goals, a never before experience.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Abhishek Mutnal",
    role: "Student",
  },
  {
    text: "Vishwanath Sir’s way of teaching is truly exceptional! His insights on trading and risk management have helped me improve my strategies. This academy provides the best learning experience for anyone interested in stock market investments",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Mallikarjun Koralli",
    role: "Student",
  },
  {
    text: "Taking this class was a transformative experience for me. Coming in as a beginner, I was initially overwhelmed by the complexity of the stock market, but the course broke everything down in a way that was easy to understand and apply. The practical sessions were the best part.",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Mahesh Mirje",
    role: "Student",
  },
  {
    text: "I had an incredible experience with the stock market and wealth training program. The sessions were highly informative, breaking down complex financial concepts into simple, actionable strategies. The instructors were knowledgeable, engaging, and patient, making learning both enjoyable and impactful.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Nashrat Jahan",
    role: "Student",
  },
  {
    text: "The best place to learn stock market trading. The trainers make sure everyone understands the concepts, even beginners. The practical approach to teaching really helped me build confidence in trading.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Anand Dhanapal",
    role: "Student",
  },
  {
    text: "I had an incredible experience with the stock market training and wealth management session offered by Excelsior Bangalore. The trainers were highly knowledgeable and simplified complex concepts, making it easy for beginners like me to understand the market dynamics.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Prajwal Hiremath",
    role: "Student",
  },
  {
    text: "They teach us mainly on low risk and high reward and its really works for many peoples for sure.",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "ANUP G A",
    role: "Student",
  },
  {
    text: "The training provided by Prof. Mallikarjun sajjan Sir in the Workshop \"Train the Trainer\" was encouraging and energetic to keep me focused minting money and absolute knowledge of stock market to achieve financial freedom.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    name: "Shankareppa Kittur",
    role: "Student",
  },
  {
    text: "I had an excellent experience with This institute as it offers a well-structured curriculum that caters to both beginners and advanced learners, covering everything from fundamental and technical analysis to live trading strategies. The mentorship is top-notch.",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    name: "TARUN NAIK",
    role: "Student",
  },
  {
    text: "Today I attended Honorable sajjan sir live session today on Train the Trainer. It was just amazing. I learnt for about financial planning. Thank you very much sir for your valuable guidance. This going to help lot for my rest of life.",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    name: "Babu Rajput",
    role: "Student",
  },
];

const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 11);
const thirdColumn = testimonials.slice(11, 16);

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