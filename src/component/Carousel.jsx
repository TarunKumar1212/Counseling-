import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img1 from "../assets/CrouselImage/1.png";
import Img2 from "../assets/CrouselImage/2.png";
import Img3 from "../assets/CrouselImage/3.png";

const Carousel = ({ use }) => {
  const carouselHeight = use ? "h-[300px] md:h-[500px]" : "h-[400px] md:h-[650px]";

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="relative w-full overflow-hidden"> 
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        className="w-full !w-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img1} alt="Admission Guidance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-10 text-white bg-black/40 justify-center">
              <motion.h1 
                className="text-2xl md:text-5xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Navigate Your Admission Journey with Ease
              </motion.h1>
              <motion.p 
                className="mt-2 md:mt-4 text-sm md:text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Get insights into top universities, entrance exams, and career options.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img2} alt="Career Planning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-10 text-white bg-black/40 justify-center">
              <motion.h1 
                className="text-2xl md:text-5xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Plan Your Education, Secure Your Future
              </motion.h1>
              <motion.p 
                className="mt-2 md:mt-4 text-sm md:text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Find the right college, course, and exam with expert counseling.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className={`relative w-full ${carouselHeight}`}>
            <img src={Img3} alt="Top Universities" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center text-center px-4 md:px-10 text-white bg-black/40 justify-center">
              <motion.h1 
                className="text-2xl md:text-5xl font-extrabold drop-shadow-lg"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                Discover Top Courses & Universities
              </motion.h1>
              <motion.p 
                className="mt-2 md:mt-4 text-sm md:text-lg max-w-2xl"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
              >
                Unlock a world of opportunities with the best programs tailored for you.
              </motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Carousel;
