import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';

import banner1 from './images/slides/slide1.jpg';
import banner2 from './images/slides/slide2.webp';
import banner3 from './images/slides/slide3.jpg';
import banner4 from './images/slides/banner4.jpg';
import banner5 from './images/slides/banner5.jpg';

export const heroData = [
  {
    id: 1,
    title: "Fresh Kienyeji Chicken, Delivered to Your Door!",
    banner: banner1,
    altText: "Fresh Kienyeji chicken products",
    description: [
      "100% Natural, No Hormones | Free Delivery for Orders Above KES 1,500",
      "KES 1,200/kg - Special launch price (Normally KES 1,500)",
      "Same-Day Delivery - Available in Nairobi & Kiambu",
      "Money-Back Guarantee - If not satisfied"
    ],
    links: [
      {
        id: 1,
        label: "Order now",
        path: "/order",
        icon: null
      },
      {
        id: 2,
        label: "Learn More",
        path: "/about",
        icon: faCircleInfo
      }
    ]
  },
  {
    id: 2,
    title: "Premium Kienyeji Eggs!",
    banner: banner2,
    altText: "Fresh Kienyeji eggs",
    description: [
      "Straight from our Nakuru farms to your table, crack open the real taste of Kenyan freshness with these nutrient-rich kienyeji eggs – only KES 800/tray!"
    ],
    links: [
      {
        id: 1,
        label: "Order eggs now (KES 800/Tray)",
        path: "/eggs",
        icon: null
      }
    ]
  },
  {
    id: 3,
    title: "Weekend Nyama Choma Special – Save 15% on Processed Chicken!",
    banner: banner3,
    altText: "Processed chicken for nyama choma",
    description: [
      "Hosting a party? Get 15% OFF bulk orders of our hygienically processed chicken (whole or pieces). We deliver to weddings, birthdays & corporate events across Nairobi!"
    ],
    links: [
      {
        id: 1,
        label: "Grab the deal",
        path: "/specials",
        icon: null
      }
    ]
  },
  {
    id: 4,
    title: "Meet Your Chicken's Happy Home!",
    banner: banner5,
    altText: "Free-range chicken farm",
    description: [
      "Our kienyeji chickens roam freely on 5-acre Nakuru farms, fed with natural grains – no antibiotics or hormones. See the difference in every bite!"
    ],
    links: [
      {
        id: 1,
        label: "Watch farm tour video",
        path: "/farm-tour",
        icon: faPlay
      }
    ]
  },
  {
    id: 5,
    title: "Bulk Buyers Save BIG – Up to 20% OFF!",
    banner: banner4,
    altText: "Bulk chicken packaging",
    description: [
      "Hotels, caterers & kibandas: Order 15kg+ weekly for 20% OFF + free delivery – trusted by 50+ Nairobi eateries! Event planners: Save 15% on 10kg+ orders with free cutting & portioning for weddings/parties. Vendors: Earn more with wholesale rates from KES 1,000/kg (20kg+) – become an authorized distributor today!"
    ],
    links: [
      {
        id: 1,
        label: "Get Bulk pricing",
        path: "/bulk-orders",
        icon: null
      }
    ]
  }
];