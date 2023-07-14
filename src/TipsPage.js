import React from "react";
import Navbar from "./Components/Navbar";
import TravelTip from "./Components/tips/TravelTip";
import "./TipsPage.css";
import { Fragment, useState } from "react";

function showSection(sectionName) {
  document
    .querySelectorAll(".section")
    .forEach((sectionElem) => sectionElem.classList.add("hidden"));
  document
    .querySelectorAll(".product-selector")
    .forEach((sectionElem) => sectionElem.classList.remove("border-red-500"));
  document.getElementById(`${sectionName}Section`).classList.remove("hidden");
  document
    .getElementById(`${sectionName}Selector`)
    .classList.add("border-red-500");
}

const products = [
  {
    id: 1,
    name: "How to Plan a Trip",
    href: "#plan",
    imageSrc: "/europe1.jpg",
    imageAlt: "Efel Tour",
    section: "plan",
  },
  {
    id: 2,
    name: "Best Travel Insurances",
    href: "#insurance",
    imageSrc: "/63875889.webp",
    imageAlt: "City on the water",
    section: "insurance",
  },
  {
    id: 3,
    name: "Travel Safety",
    href: "#",
    imageSrc: "/Europe-Travel-Tips-01.jpg",
    imageAlt: "Happy girl in Venece",
    section: "safety",
  },
  {
    id: 4,
    name: "One Step Ahead",
    href: "#",
    imageSrc: "/Eastern-Europe-Travel-Itinerary.webp",
    imageAlt: "Briges in the city",
    section: "step",
  },
];

const features = [
  {
    name: "Research",
    description:
      "Start by researching the countries you want to visit in Europe. Consider your interests, such as historical landmarks, natural landscapes, or vibrant cities.",
    imageSrc:
      "https://www.travelanddestinations.com/wp-content/uploads/2019/07/G-Adventures-Europe-Tour-Example.png",
    imageAlt: "A map with european countryes",
  },
  {
    name: "Budget Management",
    description:
      " Planning helps you set a realistic budget and avoid overspending. By researching costs, comparing prices, and pre-booking accommodations and activities, you can make informed financial decisions, find the best deals, and allocate your funds wisely.",
    imageSrc:
      "https://media.cntraveller.com/photos/611bed307048754865719a7c/16:9/w_2580,c_limit/2021.jpg",
    imageAlt: "landscape with nature and cityes",
  },
  {
    name: "Availability and Reservations",
    description:
      " Many popular destinations have limited availability for accommodations, tours, and attractions. By planning ahead and making reservations in advance, you can secure your preferred choices, especially during peak travel seasons when availability may be limited.",
    imageSrc:
      "https://tourscanner.com/blog/wp-content/uploads/2022/01/Venice-Italy.jpg",
    imageAlt: "Venece on the water",
  },
  {
    name: "Seamless Logistics",
    description:
      " Planning your transportation, such as flights, trains, or car rentals, in advance ensures a smoother travel experience. It allows you to secure the best fares, avoid last-minute availability issues, and have a well-thought-out logistics plan for getting from one place to another.",
    imageSrc:
      "https://tripduck.com/wp-content/uploads/2020/07/BLOG-PHOTO-6.png",
    imageAlt: "lanscape with nature",
  },
  {
    name: "Research and Safety",
    description:
      " Planning gives you the opportunity to research your destinations, including local customs, culture, and safety considerations. This knowledge helps you navigate unfamiliar environments with confidence, respect local customs, and make informed decisions to ensure your safety and well-being.",
    imageSrc:
      "https://www.theinfusionhub.com/wp-content/uploads/2022/07/Top-Famous-Sightseeing-Places-in-Europe-1-1200x675.png",
    imageAlt: "efel tour, coloseum, Venece city white houses in Grece",
  },
  {
    name: "Stress Reduction",
    description:
      " Travel planning reduces stress by providing a sense of organization and preparedness. Knowing your itinerary, having essential bookings in place, and being aware of potential challenges in advance allows you to relax and enjoy your trip without unnecessary worries.",
    imageSrc:
      "https://www.schengenvisainfo.com/news/wp-content/uploads/2022/03/Travel-to-Paris-Europe-tour-woman-with-suitcase-near-Eiffel-Tower-France.jpg",
    imageAlt: "efel tour, a women on the bridge looking at the efel tour",
  },
  {
    name: "Hidden Gems and Authentic Experiences",
    description:
      "Planning allows you to uncover hidden gems and off-the-beaten-path experiences. By doing research, seeking local recommendations, and incorporating flexibility into your itinerary, you can discover lesser-known attractions and immerse yourself in the authentic local culture.",
    imageSrc:
      "https://www.boundless.co.uk/-/media/Images/Articles/Six%20of%20the%20best%20European%20travel%20destinations/Accessible%20travel%20destinations%20Dublin.jpg",
    imageAlt: "brege in the night time",
  },
];

const travelTips = [
  {
    title: "Packing Tips and Hacks ",
    content:
      "Master the art of efficient packing with these valuable tips and hacks. Learn how to maximize space, organize your belongings, and pack smart for your European adventures. Say goodbye to overpacking and hello to stress-free travel",
    extraContent: (
      <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-4">Travel Packing Tips:</h2>
        <ul class="list-disc pl-6">
          <li>Create a checklist to stay organized.</li>
          <li>Pack versatile clothing items.</li>
          <li>Roll your clothes to save space.</li>
          <li>Use travel-sized toiletries.</li>
          <li>Utilize packing cubes for organization.</li>
          <li>Carry a portable charger for electronics.</li>
          <li>Keep important documents easily accessible.</li>
          <li>Pack a small day bag for outings.</li>
          <li>Leave room for souvenirs.</li>
          <li>Travel light for a more enjoyable journey.</li>
        </ul>
        <p class="text-sm text-gray-600 mt-4">
          Remember, efficient packing can enhance your travel experience. Plan
          ahead and pack smart!
        </p>
      </div>
    ),
  },
  {
    title: "Must-Visit Hidden Gems ",
    content:
      "Escape the crowds and discover Europe's hidden gems. From charming villages tucked away in picturesque landscapes to lesser-known cultural treasures, unveil the secrets of these off-the-beaten-path destinations for an unforgettable travel experience.",
    extraContent: (
      <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-4">
          Finding Travel Hidden Gems in Europe:
        </h2>
        <ul class="list-disc pl-6">
          <li>
            Research lesser-known destinations and off-the-beaten-path
            locations.
          </li>
          <li>Connect with locals or fellow travelers for insider tips.</li>
          <li>Explore small towns and villages outside major tourist hubs.</li>
          <li>
            Visit local markets, cafes, and restaurants for authentic
            experiences.
          </li>
          <li>
            Follow travel bloggers or social media accounts highlighting hidden
            gems.
          </li>
          <li>
            Consult travel guidebooks and online resources for hidden gem
            recommendations.
          </li>
          <li>Take scenic detours and explore natural landscapes.</li>
          <li>
            Visit local museums, galleries, and cultural events for unique
            insights.
          </li>
          <li>
            Embrace spontaneous adventures and be open to unexpected
            discoveries.
          </li>
          <li>
            Interact with locals to learn about hidden gems known only to them.
          </li>
        </ul>
        <p class="text-sm text-gray-600 mt-4">
          Uncovering hidden gems can add a sense of adventure to your European
          journey. Happy exploring!
        </p>
      </div>
    ),
  },
  {
    title: "Transportation Guides",
    content:
      "Getting around Europe is a breeze with our comprehensive transportation guides. Whether you're hopping on trains, buses, or trams, we'll provide you with everything you need to know to navigate Europe's efficient transportation systems like a pro.",
    extraContent: (
      <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-4">Travel Transportation Tips:</h2>
        <ul class="list-disc pl-6">
          <li>Research transportation options in advance.</li>
          <li>Consider a rail pass for extensive travel.</li>
          <li>Familiarize yourself with local transportation systems.</li>
          <li>Check for any special passes or discounts available.</li>
          <li>Plan for shorter distances with buses or regional trains.</li>
          <li>Utilize ferries for island or coastal destinations.</li>
          <li>Pay attention to schedules and ticketing information.</li>
          <li>Keep important travel documents and tickets secure.</li>
          <li>Stay aware of any cultural norms or etiquette.</li>
          <li>Be prepared for potential delays or changes in plans.</li>
        </ul>
        <p class="text-sm text-gray-600 mt-4">
          Understanding transportation options is key to a successful journey.
          Enjoy your travels with these tips!
        </p>
      </div>
    ),
  },
  {
    title: "Cultural Etiquette and Customs",
    content:
      "Respect local customs and cultural norms during your European adventures. Avoid cultural mishaps and embrace the diverse traditions of each country. Gain insights into proper etiquette and become a mindful traveler.",
    extraContent: (
      <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-4">
          Respecting Cultural Etiquette and Customs:
        </h2>
        <ul class="list-disc pl-6">
          <li>
            Research the cultural norms and customs of the countries you plan to
            visit.
          </li>
          <li>
            Dress appropriately, following local customs and religious
            sensitivities.
          </li>
          <li>
            Learn a few basic phrases in the local language to show respect.
          </li>
          <li>
            Be mindful of public behavior and follow local rules and
            regulations.
          </li>
          <li>
            Respect religious sites and traditions, dress modestly, and adhere
            to any guidelines.
          </li>
          <li>
            Ask for permission before taking photos of people, especially in
            more conservative regions.
          </li>
          <li>Be aware of local dining customs and table manners.</li>
          <li>Respect personal space and avoid intrusive behavior.</li>
          <li>
            Learn and use proper greetings and gestures for each culture you
            encounter.
          </li>
          <li>
            Take time to understand and appreciate the local customs,
            traditions, and history.
          </li>
        </ul>
        <p class="text-sm text-gray-600 mt-4">
          Respecting cultural etiquette enhances cross-cultural understanding
          and fosters positive interactions during your European travels.
        </p>
      </div>
    ),
  },
  {
    title: "Travel Safety and Health Tips",
    content:
      "Stay safe and healthy during your European travels with our essential tips. From personal safety precautions to health advice, we've got you covered. Travel with confidence knowing you're well-prepared for any situation.",
    extraContent: (
      <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-4">Travel Safety and Health Tips:</h2>
        <ul class="list-disc pl-6">
          <li>
            Research the safety situation and any travel advisories for your
            destinations.
          </li>
          <li>
            Keep a copy of important documents and emergency contact
            information.
          </li>
          <li>
            Secure your belongings and be cautious of your surroundings,
            especially in crowded areas.
          </li>
          <li>
            Stay informed about local customs, laws, and cultural sensitivities.
          </li>
          <li>
            Stay hydrated and maintain good hygiene practices, including
            handwashing.
          </li>
          <li>
            Pack a basic first aid kit with essentials such as band-aids,
            medications, and insect repellent.
          </li>
          <li>
            Get travel insurance to cover unexpected events, including medical
            emergencies.
          </li>
          <li>
            Check if you need any vaccinations or preventive measures before
            traveling.
          </li>
          <li>
            Follow food and water safety precautions to avoid foodborne
            illnesses.
          </li>
          <li>
            Be cautious when trying new activities or adventure sports, and
            choose reputable operators.
          </li>
        </ul>
        <p class="text-sm text-gray-600 mt-4">
          Prioritizing safety and health during your travels ensures a more
          enjoyable and worry-free experience in Europe.
        </p>
      </div>
    ),
  },

  {
    title: "Food and Drink Experiences",
    content:
      "Embark on a culinary journey through Europe's gastronomic delights. From tantalizing street food to Michelin-starred restaurants, savor the flavors of Europe with our curated list of must-try dishes, food markets, and local culinary experiences.",
    extraContent: (
      <div class="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
        <h2 class="text-lg font-bold mb-4">
          Food and Drink Experiences in Europe:
        </h2>
        <ul class="list-disc pl-6">
          <li>
            Sample local cuisine and traditional dishes in each destination.
          </li>
          <li>
            Visit local markets and food stalls to experience the flavors of the
            region.
          </li>
          <li>
            Try regional specialties and delicacies for an authentic taste of
            the culture.
          </li>
          <li>
            Explore wine regions and participate in wine tastings and vineyard
            tours.
          </li>
          <li>
            Indulge in café culture and enjoy local coffee, pastries, and
            people-watching.
          </li>
          <li>
            Take cooking classes or food tours to learn about local culinary
            traditions.
          </li>
          <li>
            Experiment with street food for a delicious and affordable dining
            experience.
          </li>
          <li>
            Discover hidden gems by asking locals for their favorite food
            recommendations.
          </li>
          <li>
            Respect dining customs, such as observing meal times and tipping
            practices.
          </li>
          <li>
            Embrace the pleasure of slow dining and savor each meal as a social
            and cultural experience.
          </li>
        </ul>
        <p class="text-sm text-gray-600 mt-4">
          Food and drink experiences in Europe offer a delightful way to explore
          the rich gastronomic traditions of each country and immerse yourself
          in the local culture.
        </p>
      </div>
    ),
  },
];

export default function TipsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl sm:px-6 lg:mb-4">
        <h1 className="flex justify-center mt-4 font-serif text-3xl font-bold text-center text-brown-700 ">
          Are you Ready for Your Journey?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-9 ">
          <img
            className="order-1 sm:order-1"
            alt=""
            src="https://img.freepik.com/free-vector/europe-buildings-travel-illustration-card_1284-35665.jpg"
          />
          <span className="flex flex-col justify-center order-2 font-sans font-serif text-xl text-brown-500 sm:order-2 sm:ml-4">
            <p className="mx-1 font-light tracking-wide">
              Welcome to our travel blog, where we invite you on a captivating
              journey through the enchanting landscapes, rich history, and
              vibrant cultures of Europe. Explore the Old World charm of cities
              like Paris, Rome, and Barcelona, where iconic landmarks and
              artistic masterpieces await at every turn. Embark on picturesque
              road trips through the scenic countryside, discovering hidden gems
              in the rolling hills of Tuscany, the majestic fjords of Norway, or
              the fairytale castles of Germany.
            </p>
          </span>
        </div>
      </div>

      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <span
              key={product.id}
              onClick={() => showSection(product.section)}
              className="group"
            >
              <div
                id={product.section + "Selector"}
                className="w-full overflow-hidden bg-gray-200 border-2 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 product-selector"
              >
                <h3 className="flex justify-center my-2 font-sans font-bold text-md text-brown-800">
                  {product.name}
                </h3>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
            </span>
          ))}
        </div>
      </div>

      {/* how to plan a trip */}
      <div id="planSection" className="hidden bg-white section">
        <div className="py-24 mx-auto max-w-7xl sm:px-2 sm:py-10 lg:px-4">
          <div className="max-w-2xl px-4 mx-auto lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-semibold text-brown-500">
                Start your Journey from here
              </h2>
              <p
                id="plan"
                className="mt-2 font-sans text-3xl font-bold tracking-tight text-brown-700 sm:text-4xl"
              >
                How to Plan a Trip
              </p>
              <p className="mt-4 font-sans text-brown-500">
                Planning your trip is an essential step towards a successful and
                enjoyable travel experience. By taking the time to plan ahead,
                you can maximize your time, minimize stress, and make the most
                of your journey. Here's why it's important to plan your trip:
              </p>
            </div>

            <div className="pt-10 mt-10 space-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 ">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                    <h3 className="text-5xl font-bold text-brown-700">
                      {feature.name}
                    </h3>
                    <p className="mt-2 font-sans text-xl tracking-wider whitespace-normal text-brown-500 first-letter:float-left first-letter:text-5xl first-letter:pr-1 first-letter:font-black first-letter:text-black-500">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-auto lg:col-span-7 xl:col-span-8">
                    <div className="justify-end inline-block max-w-full max-h-full rounded-lg ">
                      <img
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      {/* <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div> */}

      {/* insurance */}

      <div
        id="insuranceSection"
        className="hidden transition-all duration-300 ease-in-out delay-150 bg-white section sm:py-10"
      >
        <h1 className="flex justify-center pt-4 pb-10 font-sans text-4xl text-brown-700 text-bold">
          Choose your Best Insurance
        </h1>
        <div className="flex justify-center mx-auto font-sans leading-loose tracking-wide text-brown-600 text-grey-850 max-w-7xl sm:px-6 lg:px-8">
          <p>
            Exploring the wonders of Europe is an incredible adventure, but it's
            essential to prioritize your safety and peace of mind while
            traveling. That's why securing travel insurance is a vital step
            before your European journey. From captivating cities to
            breathtaking landscapes, Europe offers a world of experiences.
            However, unexpected situations like medical emergencies, trip
            interruptions, or lost belongings can disrupt your plans. With
            comprehensive travel insurance, you can navigate these challenges
            confidently. Protect yourself against unforeseen circumstances,
            ensure financial coverage for medical expenses, and gain access to
            24/7 emergency assistance. Don't let the unexpected overshadow your
            European expedition. Safeguard your trip with travel insurance and
            embark on your European adventure with peace and confidence.
          </p>
        </div>
        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-15 lg:max-w-7xl">
          <div className="relative overflow-hidden rounded-lg lg:h-96">
            <div className="absolute inset-0">
              <img
                src="https://happytowander.com/wp-content/uploads/plan-your-trip-g69d249858_1920.jpg"
                alt="map"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="relative w-full h-96 lg:hidden"
            />
            <div
              aria-hidden="true"
              className="relative w-full h-32 lg:hidden"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-black bg-opacity-75 rounded-bl-lg rounded-br-lg backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <div>
                <h2 id="insurance" className="text-xl font-bold text-white">
                  Choosing the right travel insurance is crucial to protect
                  yourself and your investment during your adventures.
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  We've researched and compiled a list of the best travel
                  insurance options available. These providers offer
                  comprehensive coverage for medical emergencies, trip
                  cancellations, lost baggage, and more. Look for companies with
                  excellent customer reviews, competitive pricing, and worldwide
                  coverage.
                </p>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://europe-insurance.eu/"
                className="flex items-center justify-center flex-shrink-0 px-4 py-3 mt-6 text-base font-medium text-white bg-white bg-opacity-0 border border-white border-opacity-25 rounded-md hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
              >
                Choose your Insurance
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Travel safety */}
      <div
        id="safetySection"
        className="hidden transition-all duration-300 ease-in-out delay-150 bg-white section"
      >
        <div className="title">
          <h1>1. Stay Aware</h1>
        </div>
        <div className="para">
          <p>
            Remain aware of your surroundings, particularly in crowded tourist
            areas or public transportation hubs. Stay vigilant to prevent any
            potential theft or scams.
          </p>
        </div>
        <div className="title">
          <h1>2. Stay Informed</h1>
        </div>
        <div className="para">
          <p>
            Stay updated on current events and any travel advisories issued by
            your home country. Check government websites or contact your embassy
            or consulate for the latest information and recommendations.
          </p>
        </div>
        <div className="title">
          <h1>3. Travel Insurance</h1>
        </div>
        <div className="para">
          <p>
            Obtain comprehensive travel insurance that covers medical
            emergencies, trip cancellations, and lost belongings. This provides
            an extra layer of protection and peace of mind during your travels.
          </p>
        </div>
        <div className="title">
          <h1>4. Respect Local Customs</h1>
        </div>
        <div className="para">
          <p>
            Research the local customs, laws, and cultural norms of the
            countries you plan to visit. This will help you avoid any
            unintentional offenses and show respect to the local population.
          </p>
        </div>
        <div className="title">
          <h1>5. Beware of Pickpockets</h1>
        </div>
        <div className="para">
          <p>
            Be cautious of pickpockets who may operate in crowded tourist areas.
            Keep your valuables in front pockets or use a money belt to minimize
            the risk of theft.
          </p>
        </div>

        <div className="title">
          <h1>6. Secure Your Belongings</h1>
        </div>
        <div className="para">
          <p>
            Keep your personal belongings secure at all times. Use a secure bag
            or backpack and keep important documents, such as passports and
            identification, in a safe place.
          </p>
        </div>
        <div className="title">
          <h1>7. Register with Your Embassy</h1>
        </div>
        <div className="para">
          <p>
            Consider registering with your embassy or consulate before your
            trip. This allows them to reach out to you in case of any
            emergencies or provide important updates or assistance during your
            travels.
          </p>
        </div>
        <div className="title">
          <h1>8. Emergency Contact Information</h1>
        </div>
        <div className="para">
          <p>
            Save emergency contact numbers, including local authorities and your
            embassy or consulate, in your phone or carry them with you for quick
            access in case of any emergencies.
          </p>
        </div>
      </div>

      {/* One step ahead */}
      <div
        id="stepSection"
        className="hidden transition-all duration-300 ease-in-out delay-150 bg-white section"
      >
        <div className="py-24 bg-white sm:py-9">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-brown-700 sm:text-4xl">
                One Step Ahead
              </h1>
              <div className="grid max-w-xl grid-cols-1 mt-4 font-sans text-base gap-x-8 text-grey-850 lg:max-w-none lg:grid-cols-2 gap-y-8">
                {travelTips.map((tt, index) => (
                  <TravelTip
                    id={`tip-${index}`}
                    title={tt.title}
                    content={tt.content}
                    extraContent={tt.extraContent}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
