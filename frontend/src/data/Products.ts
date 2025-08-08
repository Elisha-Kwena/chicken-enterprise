import banner1 from './images/products/live-chickens.jpg';
import banner2 from './images/products/eggs.jpg';
import banner3 from './images/products/processed.jpg';
import banner4 from './images/products/chicks.jpg';

import banner11 from './images/products/live2.jpg';
import banner22 from './images/products/eggs2.jpg';
import banner33 from './images/products/processed2.jpg';
import banner44 from './images/products/chicks2.jpg';



export const products = [
    {
      "id": "live-001",
      "category": "Live Chickens",
      "name": "Broiler Chicken",
      "image": banner1,
      "image2": banner11,
      "image_description": "Healthy 3kg live broiler chicken standing on green grass, clean feathers, bright morning light",
      "description": "Premium antibiotic-free broilers (2.5-3.5kg), raised free-range. Ready for processing or rearing.",
      "price": 1800,
      "unit": "per bird",
      "tags": ["best-seller", "live", "farm-raised"],
      "promo": false
    },
    {
      "id": "egg-001",
      "category": "Eggs",
      "name": "Large Brown Eggs",
      "image": banner2,
      "image2": banner22,
      "image_description": "Rustic woven basket with 12 fresh brown eggs, natural sunlight on shells",
      "description": "Nutrient-rich free-range eggs (65g+ each), collected twice daily. Ideal for baking and breakfast.",
      "price": 350,
      "unit": "per dozen",
      "tags": ["organic", "farm-fresh"],
      "promo": false
    },
    {
      "id": "processed-001",
      "category": "Processed Poultry",
      "name": "Dressed Whole Chicken",
      "image": banner3,
      "image2": banner33,
      "image_description": "Plump vacuum-sealed whole chicken on white tray with freshness guarantee label",
      "description": "Hygienically processed 2-2.5kg chicken, ready for roasting or stewing. No preservatives added.",
      "price": 1500,
      "unit": "per bird",
      "tags": ["ready-to-cook", "no-hormones"],
      "promo": false
    },
    {
      "id": "chicks-001",
      "category": "Day-Old Chicks",
      "name": "Broiler Chicks (Day-Old)",
      "image": banner4,
    "image2": banner44,
      "image_description": "20 healthy yellow day-old broiler chicks in a clean brooder with wood shavings, heat lamp visible",
      "description": "Vaccinated, high-quality broiler chicks (KARI improved breed). 95% survival rate guarantee with proper care.",
      "price": 350,
      "unit": "per chick",
      "min_order": 10,
      "tags": ["vaccinated", "fast-growing"],
      "promo": true,
      "promo_details": "Buy 50+ chicks, get 5 free!"
    }
]