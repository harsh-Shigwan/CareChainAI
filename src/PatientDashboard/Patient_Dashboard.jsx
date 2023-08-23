import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import HorizontalImageCardList from "../components/PatientComponents/HorizontalImageCardList";

import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from "../components/PatientComponents";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  data,
  dropdown1Data,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/PatientData/dummy";
import { useStateContext } from "../contexts/PatientContext/ContextProvider";
import product9 from "../data/PatientData/product9.jpg";

const DropDown = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
    <DropDownListComponent
      id="City"
      fields={{ text: "City", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="25vw"
    />
  </div>
);

const DropDown1 = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
    <DropDownListComponent
      id="City"
      fields={{ text: "Dr", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdown1Data}
      popupHeight="220px"
      popupWidth="38vw"
    />
  </div>
);

const Patient_Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  const cardData = [
    {
      title: "Dentist",
      description: "Teething troubles? Schedule a dental checkup",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
    },
    {
      title: "Gynecologist/Obstetrician",
      description: "Explore for women’s health, pregnancy and infertility treatments",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
    },
    {
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management and sports nutrition",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
    },
    {
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
    },
    {
      title: "General surgeon",
      description: "Need to get operated? Find the right surgeon",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
    },
    {
      title: "Orthopedist",
      description: "For Bone and Joints issues, spinal injuries and more",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
    },
    {
      title: "General physician",
      description: "Find the right family doctor in your neighborhood",
      image: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
    },
    {
      title: "Card 7",
      description: "Description for Card 3",
      image: "url_to_image_3.jpg",
    },
    {
      title: "Card 8",
      description: "Description for Card 3",
      image: "url_to_image_3.jpg",
    },
    // Add more card data as needed
  ];

  return (
    <div className="h-full w-full mt-3">
      <div className="h-28 w-full  dark:bg-secondary-dark-bg flex justify-between items-center ">
        <div className=" flex relative ml-10 mr-80  h-10 w-full space-x-4 ">
          <div className="h-10 w-2/5 bg-white dark:bg-secondary-dark-bg ">
            {" "}
            <DropDown currentMode={currentMode} />
          </div>
          <div className="h-10 w-3/5 bg-white dark:bg-secondary-dark-bg  ">
            <DropDown1 currentMode={currentMode} />
          </div>
        </div>
      </div>
      <div className="h-96 w-full bg-white dark:bg-secondary-dark-bg relative flex justify-between items-center">
        <div className='mt-10 h-3/4 w-full mx-1 w- bg-slate-800 rounded-2xl absolute bg-[url("https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png")] bg-cover bg-center '>
          <div className=" ml-44 mt-60">
            <Button
              color="white"
              bgColor={currentColor}
              text="Sign-Up Today"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
      <div className="h-20 w-full bg-white dark:bg-secondary-dark-bg  "></div>
      <div className="h-full w-full bg-white dark:bg-secondary-dark-bg absolute ">
        <div className="flex space-x-5 ml-10 mt-5 ">
          <div className="h-72 w-60 rounded-2xl bg-black relative">
            <div className=' h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png")]'></div>
            <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
              <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                Instant Video Consultation
              </div>
              <div className="text-sm text-gray-400 h-9  text-center mt-2">
                Connect within 60 sec
              </div>
            </div>
          </div>
          <div className="h-72 w-60 rounded-2xl bg-red-400">
            <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png")]'></div>
            <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
              <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                Find Doctor Near You
              </div>
              <div className="text-sm text-gray-400 h-9  text-center mt-2">
                Confirm appointment
              </div>
            </div>
          </div>
          <div className="h-72 w-60 rounded-2xl bg-green-400">
            <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png")]'></div>
            <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
              <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                Medinice
              </div>
              <div className="text-sm text-gray-400 h-9  text-center mt-2">
                Essential at your doorstep
              </div>
            </div>
          </div>
          <div className="h-72 w-60 rounded-2xl bg-red-500">
            <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png")]'></div>
            <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
              <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                Lap Test
              </div>
              <div className="text-sm text-gray-400 h-9  text-center mt-2">
                Sample pickup at your home
              </div>
            </div>
          </div>
          <div className="h-72 w-60 rounded-2xl bg-red-700">
            <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png")]'></div>
            <div className="h-24 w-60 rounded-b-xl border-2 bg-white">
              <div className="h-15 text-center ml-5 mr-5 tracking-tight text-xl font-semibold ">
                Surguries
              </div>
              <div className="text-sm text-gray-400 h-9  text-center mt-2">
                Safe and trusted surgury center
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 w-full bg-white dark:bg-secondary-dark-bg  "></div>
        <div className="h-32 w-full bg-white dark:bg-secondary-dark-bg  "><div className="m-4  h-20 bg-white dark:bg-secondary-dark-bg">
        <div className=" h-13 text-black text-2xl font-semibold text-justify ml-6  tracking-tight  dark:text-white">
          Consult top doctors online for any health concern
        </div>
        <div className="h-9 text-black  text-sm ml-6  mb-5 text-justify mt-2  dark:text-white">
          Private online Consultation with verified doctors in all
          specialists
        </div>
      </div></div>
        <div className="h-96 w-full bg-white dark:bg-secondary-dark-bg ">
          <div className="flex space-x-6 ml-2 mr-2 ">
            <div className=" h-72 w-52 rounded-2xl  bg-white dark:bg-secondary-dark-bg ">
              <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png")]'></div>
              <div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">
                Periods Doubt and Pregency
              </div>
              <div className="h-13 text-sm text-sky-400   text-center mt-2 ">
                Consult Now
              </div>
            </div>
            <div className=" h-72 w-48 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
              <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png")]'></div>
              <div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">Acne , pimple or skin issues</div><div className="h-13 text-sm text-sky-400   text-center mt-2">Consult Now</div>
            </div>
            <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
              <div className='h-52 rounded-full bg-white bg-[url("https://www.practo.com/consult/static/images/top-speciality-sexology.svg")]'></div><div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">Performance issue in bed</div><div className="h-13 text-sm text-sky-400   text-center mt-2">Consult Now</div>
            </div>
            <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
              <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png")]'></div><div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">Cold , cough or   <br/> fever</div><div className="h-13 text-sm text-sky-400   text-center mt-2">Consult Now</div>
            </div>
            <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
              <div className='h-52 rounded-full bg-white bg-[url("https://www.practo.com/consult/static/images/top-speciality-pediatric.svg")]'></div><div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">Child not feeling <br/>well</div><div className="h-13 text-sm text-sky-400   text-center mt-2">Consult Now</div>
            </div>
            <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
              <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png")]'></div><div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">Depression or<br/> anxiety</div><div className="h-13 text-sm text-sky-400   text-center mt-2">Consult Now</div>
            </div>
          </div>
          <div className=" m-4 mt-20 h-10 bg-white dark:bg-secondary-dark-bg">
            <div className=" h-13 text-black text-2xl font-semibold text-justify ml-6 mt-5 tracking-tight  dark:text-white">
            Book an appointment for an in-clinic consultation
            </div>
            <div className="h-9 text-black  text-sm ml-6  mb-5 text-justify mt-2  dark:text-white ">
            Find experienced doctors across all specialists
            </div>
          </div>
        </div>
        <div className="h-14 w-full bg-white dark:bg-secondary-dark-bg  "></div>
        
          <div className="h-96  bg-white dark:bg-secondary-dark-bg">
            
            <div className="container mx-auto  rounded-t-lg">
              <HorizontalImageCardList data={cardData} />
            </div>
          </div>
 
        

        <section class="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg ml-14 mr-14 mt-5 mb-5 rounded-3xl border-2 ">
          <div class="container mx-auto flex px-5 bottom-2 py-24 md:flex-row flex-col items-center ">
            <div class=" rounded-xl lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
              <img
                class="object-cover object-center rounded ml-5 "
                alt="hero"
                src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class=" h-13 text-black text-2xl font-semibold text-justify ml-6 mt-5 tracking-tight  dark:text-white">
                Read top articles from <br />
                health experts
                <br class="hidden lg:inline-block" />
              </h1>
              <p class=" leading-relaxed h-15 text-black  text-sm ml-6  mb-5 text-justify mt-2  dark:text-white">
                Health articles that keep you infromed about good health
                practices and achieve your goal
              </p>

              <div className=" ml-8 mt-12">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See all articles"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font bg-white dark:bg-secondary-dark-bg dark:text-white rounded-t-3xl ">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean
                shorts. Slow-carb next level shoindigoitch ethical authentic, yr
                scenester sriracha forage franzen organic drinking vinegar.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p class="text-gray-500 ">Senior Product Designer</p>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font  bg-zinc-200 dark:bg-gray-600  ">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold dark:text-white">
                Download the CareChainAI App
              </h1>
              <p class="mb-8 leading-relaxed dark:text-white">
                Access video consultation with India’s top doctors on the Practo
                app. Connect with doctors online, available 24/7, from the
                comfort of your home.
              </p>
              <div class="flex w-full md:justify-start justify-center items-end">
                <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                  <label
                    for="hero-field"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-secondary-dark-bg text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-white"
                  ></input>
                </div>

                <Button
                  className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover: rounded text-lg"
                  color="white"
                  bgColor={currentColor}
                  text="Contact Us"
                  borderRadius="10px"
                />
              </div>
              <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
                Neutra shabby chic ramps, viral fixie.
              </p>
              <div class="flex lg:flex-row md:flex-col">
                <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                    <span class="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-600 mb-1">
                      Download on the
                    </span>
                    <span class="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
              />
            </div>
          </div>
        </section>

        <section
          class="footer  h-full "
          style={{ backgroundColor: currentColor }}
        >
          <div class="container mx-auto py-4 px-4">
            <div class="flex flex-wrap justify-between items-center">
              <div class="w-full sm:w-6/12">
                <h3 class="text-xl font-bold mb-2">Address</h3>
                <p class="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  ex placeat.
                </p>
                <div class="flex">
                  <a href="#" class="mx-2 fab fa-facebook-f"></a>
                  <a href="#" class="mx-2 fab fa-twitter"></a>
                  <a href="#" class="mx-2 fab fa-linkedin"></a>
                  <a href="#" class="mx-2 fab fa-instagram"></a>
                </div>
              </div>
              <div class="w-full sm:w-6/12">
                <h3 class="text-xl font-bold mb-2">E-mail</h3>
                <a href="#" class="link text-gray-700 mb-2">
                  xyz@gmail.com
                </a>
                <a href="#" class="link text-gray-700 mb-2">
                  xyz@gmail.com
                </a>
              </div>
              <div class="w-full sm:w-6/12">
                <h3 class="text-xl font-bold mb-2">Call us</h3>
                <p class="text-gray-700 mb-4">+91 925874569</p>
                <p class="text-gray-700 mb-4">+91 925874569</p>
              </div>
              <div class="w-full sm:w-6/12">
                <h3 class="text-xl font-bold mb-2">Opening hours</h3>
                <p class="text-gray-700 mb-4">
                  monday - friday : 8:00 - 24:00 <br />
                  saturday : 9:00 - 24:00
                </p>
              </div>
            </div>
          </div>
          <div class="credit text-center py-2 px-4">
            created by <span class="text-gray-700">ninjashub</span> | all rights
            reserved!
          </div>
        </section>

        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$63,448.78</p>
              </div>
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
              >
                <BsCurrencyDollar />
              </button>
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
              />
            </div>
          </div>
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {earningData.map((item) => (
              <div
                key={item.title}
                className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className=" border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p className="text-3xl font-semibold">$48,487</p>

                  <p className="text-gray-500 mt-1">Expense</p>
                </div>

                <div className="mt-5">
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkLine"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <Stacked
                  currentMode={currentMode}
                  width="320px"
                  height="360px"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className=" rounded-2xl md:w-400 p-4 m-3"
              style={{ backgroundColor: currentColor }}
            >
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-white text-2xl">Earnings</p>

                <div>
                  <p className="text-2xl text-white font-semibold mt-8">
                    $63,448.78
                  </p>
                  <p className="text-gray-200">Monthly revenue</p>
                </div>
              </div>

              <div className="mt-4">
                <SparkLine
                  currentColor={currentColor}
                  id="column-sparkLine"
                  height="100px"
                  type="Column"
                  data={SparklineAreaData}
                  width="320"
                  color="rgb(242, 252, 253)"
                />
              </div>
            </div>

            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
              <div>
                <p className="text-2xl font-semibold ">$43,246</p>
                <p className="text-gray-400">Yearly sales</p>
              </div>

              <div className="w-40">
                <Pie
                  id="pie-chart"
                  data={ecomPieChartData}
                  legendVisiblity={false}
                  height="160px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 m-4 flex-wrap justify-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Recent Transactions</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="mt-10 w-72 md:w-400">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Sales Overview</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="md:w-full overflow-auto">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Weekly Stats</p>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500"
              >
                <IoIosMore />
              </button>
            </div>

            <div className="mt-10 ">
              {weeklyStats.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between mt-4 w-full"
                >
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{ background: item.iconBg }}
                      className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
              <div className="mt-4">
                <SparkLine
                  currentColor={currentColor}
                  id="area-sparkLine"
                  height="160px"
                  type="Area"
                  data={SparklineAreaData}
                  width="320"
                  color="rgb(242, 252, 253)"
                />
              </div>
            </div>
          </div>
          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">MedicalPro Branding</p>
              <button
                type="button"
                className="text-xl font-semibold text-gray-400"
              >
                <IoIosMore />
              </button>
            </div>
            <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
              16 APR, 2021
            </p>

            <div className="flex gap-4 border-b-1 border-color mt-6">
              {medicalproBranding.data.map((item) => (
                <div
                  key={item.title}
                  className="border-r-1 border-color pr-4 pb-2"
                >
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-b-1 border-color pb-4 mt-2">
              <p className="text-md font-semibold mb-2">Teams</p>

              <div className="flex gap-4">
                {medicalproBranding.teams.map((item) => (
                  <p
                    key={item.name}
                    style={{ background: item.color }}
                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <p className="text-md font-semibold mb-2">Leaders</p>
              <div className="flex gap-4">
                {medicalproBranding.leaders.map((item, index) => (
                  <img
                    key={index}
                    className="rounded-full w-8 h-8"
                    src={item.image}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Daily Activities</p>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500"
              >
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img className="md:w-96 h-50 " src={product9} alt="" />
              <div className="mt-8">
                <p className="font-semibold text-lg">React 18 coming soon!</p>
                <p className="text-gray-400 ">By Johnathan Doe</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the news you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Read More"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient_Dashboard;
