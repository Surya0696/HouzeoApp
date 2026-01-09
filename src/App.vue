<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased">
    <!-- Desktop Header -->
    <header class="sticky top-0 z-[100] bg-white border-b border-gray-200">
      <div class="max-w-[1440px] mx-auto px-4 h-[64px] flex items-center justify-between">

        <!-- Left -->
        <div class="flex items-center gap-8">
          <div class="text-2xl font-bold text-blue-600">Houzeo</div>

          <nav class="hidden lg:flex items-center gap-6">
            <a class="nav-link">Product</a>
            <a class="nav-link">How Houzeo Works</a>
            <a class="nav-link">Reviews</a>
            <a class="nav-link">Buy</a>
            <a class="nav-link">Sell</a>
            <a class="nav-link">Pricing</a>
            <a class="nav-link">Resources</a>
          </nav>
        </div>

        <!-- Right -->
        <div class="hidden lg:flex items-center gap-6">
          <div class="text-right leading-tight">
            <p class="text-sm font-semibold">(844) 448-0110</p>
            <p class="text-xs text-gray-500">9am to 6pm CST, Mon–Sat</p>
          </div>

          <a class="text-sm text-gray-700 hover:text-blue-600">Sign In</a>

          <button class="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">
            Start Free Listing
          </button>
        </div>
      </div>
    </header>

    <!-- Right: Filters + Listings -->
    <section class="flex flex-col gap-4">
      <!-- Filter Bar -->
      <div class="bg-white border-b border-gray-200">
        <div class="max-w-[1440px] mx-auto px-4 py-3 flex items-center gap-3 flex-wrap">

          <!-- Location Input with Search Icon Button -->
          <div class="relative flex-1 min-w-[200px] md:w-full">
            <input v-model="filters.location" type="text" placeholder="Austin, TX"
              class="w-full px-4 py-2.5 pr-[120px] border border-blue-600 rounded-lg text-sm bg-white text-gray-900 focus:outline-none focus:border-blue-600 transition-all" />
            <!-- Clear X Icon in Circle -->
            <button v-if="filters.location" @click="filters.location = ''"
              class="absolute right-[48px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 border-none flex items-center justify-center cursor-pointer text-gray-500 hover:text-gray-900 hover:bg-gray-300 transition-all">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 4l-8 8M4 4l8 8"></path>
              </svg>
            </button>
            <!-- Search Icon in Blue Circle Button -->
            <button
              class="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 border-none flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
              <svg class="text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <!-- For Sale Dropdown - Active State (Blue) -->
          <div class="relative hidden lg:block">
            <select v-model="filters.status"
              class="appearance-none px-4 py-2.5 pr-10 border border-blue-600 rounded-lg text-sm bg-white text-blue-600 font-medium cursor-pointer focus:outline-none focus:border-blue-600 transition-colors min-w-[130px]">
              <option value="for-sale">For Sale</option>
              <option value="sold">Sold</option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600 pointer-events-none" fill="none"
              stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Price Dropdown -->
          <div class="relative">
            <select v-model="filters.price"
              class="appearance-none px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 cursor-pointer focus:outline-none focus:border-blue-600 transition-colors min-w-[120px] md:w-full">
              <option value="any">Price</option>
              <option value="0-500000">Up to $500k</option>
              <option value="500000-1000000">$500k - $1M</option>
              <option value="1000000+">$1M+</option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none"
              stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Beds & Baths Dropdown -->
          <div class="relative hidden lg:block">
            <select v-model="filters.bedsBaths"
              class="appearance-none px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 cursor-pointer focus:outline-none focus:border-blue-600 transition-colors min-w-[140px]">
              <option value="any">Beds & Baths</option>
              <option value="1+">1+ Bed</option>
              <option value="2+">2+ Beds</option>
              <option value="3+">3+ Beds</option>
              <option value="4+">4+ Beds</option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none"
              stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Property Type Dropdown -->
          <div class="relative hidden lg:block">
            <select v-model="filters.propertyType"
              class="appearance-none px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 cursor-pointer focus:outline-none focus:border-blue-600 transition-colors min-w-[150px]">
              <option value="any">Property Type</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="multi-family">Multi-family</option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" fill="none"
              stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Filters Button with Icon and Text -->
          <button
            class="hidden lg:flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 cursor-pointer hover:border-blue-600 hover:bg-gray-50 transition-all"
            type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
              <circle cx="9" cy="6" r="2"></circle>
              <circle cx="15" cy="12" r="2"></circle>
              <circle cx="9" cy="18" r="2"></circle>
            </svg>
            <span>Filters</span>
          </button>

          <!-- Saved Button with Pencil Icon -->
          <button
            class="hidden lg:flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium bg-white text-gray-900 cursor-pointer hover:border-blue-600 hover:bg-gray-50 transition-all"
            type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Saved</span>
          </button>

          <!-- Mobile: Save Search Button -->
          <button
            class="lg:hidden w-full px-4 py-2.5 border-none rounded-lg text-sm font-semibold bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors flex-1"
            type="button">
            Save Search
          </button>

          <!-- Mobile: Filters Button -->
          <button
            class="lg:hidden flex items-center justify-center px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 cursor-pointer hover:border-blue-600 hover:bg-gray-50 transition-all"
            type="button" title="Filters">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
              <circle cx="9" cy="6" r="2"></circle>
              <circle cx="15" cy="12" r="2"></circle>
              <circle cx="9" cy="18" r="2"></circle>
            </svg>
          </button>

        </div>


      </div>


    </section>

    <main class="max-w-[1440px] mx-auto px-6 py-4 hidden lg:grid grid-cols-[50%_50%] gap-6 min-h-[calc(100vh-96px)]">

      <!-- ================= LEFT MAP ================= -->
      <section class="sticky top-[96px] h-[calc(100vh-120px)] rounded-xl overflow-hidden bg-gray-200 shadow-sm">

        <iframe class="w-full h-full border-0" loading="lazy" title="Map" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31771654.566996552!2d-113.74204452401878!3d37.275732829492106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809f5f46ff8af4fd%3A0x8a92f1b0c4c9b8b1!2sUnited%20States!5e0!3m2!1sen!2sus!4v1700000000000">
        </iframe>
      </section>

      <!-- ================= RIGHT LISTINGS ================= -->
      <section class="h-[calc(100vh-120px)] overflow-y-auto pr-2">

        <!-- Title Bar -->
        <div class="mb-4">

          <h1 class="text-2xl font-bold text-gray-900 m-0 md:text-xl">
            <span class="text-blue-600">{{
              filters.location || "Austin, TX"
            }}</span>
            real estate & homes for sale
          </h1>
          <div class="flex items-center gap-4 md:w-full md:justify-between">
            <p class="text-sm text-gray-500 m-0">
              <strong class="text-gray-900 font-semibold">{{
                totalPropertiesCount.toLocaleString()
              }}</strong>
              Homes
            </p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <span>Sort by:</span>
              <select v-model="sortBy"
                class="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white text-gray-900 cursor-pointer focus:outline-none focus:border-blue-600">
                <option value="new">New Listing</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PropertyCard v-for="property in filteredProperties" :key="property.id" :property="property"
            @toggle-favorite="toggleFavorite" />
        </div>

      </section>

    </main>

  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import PropertyCard from "./components/PropertyCard.vue";

export interface Property {
  id: number;
  title: string;
  type: string;
  status: "for-sale" | "sold";
  daysOnMarket: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  images: string[];
  isFavorite: boolean;
}

const filters = reactive({
  location: "Austin, TX",
  status: "for-sale",
  price: "any",
  bedsBaths: "any",
  propertyType: "any",
});

const sortBy = ref<"new" | "price-low" | "price-high">("new");
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const properties = ref<Property[]>([
  {
    id: 1,
    title: "House For Sale",
    type: "House For Sale",
    status: "for-sale",
    daysOnMarket: "6 days on Houzeo",
    price: 3349000,
    beds: 4,
    baths: 3,
    sqft: 998,
    address: "2856 Meadow Park Ave",
    city: "Henderson",
    state: "NV 89052",
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isFavorite: false,
  },
  {
    id: 2,
    title: "Condo Sold",
    type: "Condo Sold",
    status: "sold",
    daysOnMarket: "Sold 12 days ago",
    price: 529000,
    beds: 3,
    baths: 2,
    sqft: 1320,
    address: "1001 Lakeshore Dr",
    city: "Austin",
    state: "TX 78734",
    images: [
      "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isFavorite: false,
  },
  {
    id: 3,
    title: "Multi-family Home",
    type: "Multi-family Home For Sale",
    status: "sold",
    daysOnMarket: "10 days on Houzeo",
    price: 2149000,
    beds: 5,
    baths: 4,
    sqft: 2350,
    address: "42 Greenway Ct",
    city: "Austin",
    state: "TX 78746",
    images: [
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/259733/pexels-photo-259733.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isFavorite: false,
  },

  // Mock more properties
  ...Array.from({ length: 47 }, (_, i) => ({
    id: i + 4,
    title:
      i % 3 === 0
        ? "House For Sale"
        : i % 3 === 1
          ? "Condo For Sale"
          : "Multi-family Home For Sale",
    type:
      i % 3 === 0
        ? "House For Sale"
        : i % 3 === 1
          ? "Condo For Sale"
          : "Multi-family Home For Sale",
    status: i % 4 === 0 ? "sold" : "for-sale", // ✅ status works
    daysOnMarket: `${Math.floor(Math.random() * 30) + 1} days on Houzeo`,
    price: Math.floor(Math.random() * 5000000) + 200000,
    beds: Math.floor(Math.random() * 5) + 1,
    baths: Math.floor(Math.random() * 4) + 1,
    sqft: Math.floor(Math.random() * 3000) + 800,
    address: `${Math.floor(Math.random() * 9999) + 1} Sample St`,
    city: "Austin",
    state: "TX 78701",
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    isFavorite: false,
  })),
]);


// Total properties count (for display)
const totalPropertiesCount = 2010;

const filteredProperties = computed(() => {
  let list = [...properties.value];

  // ✅ LOCATION FILTER
  if (filters.location.trim()) {
    const term = filters.location.toLowerCase();
    list = list.filter(
      (p) =>
        p.city.toLowerCase().includes(term) ||
        p.state.toLowerCase().includes(term) ||
        p.address.toLowerCase().includes(term)
    );
  }

  // ✅ STATUS FILTER (FOR SALE / SOLD)
  if (filters.status) {
    list = list.filter((p) => p.status === filters.status);
  }

  // ✅ PRICE FILTER
  if (filters.price !== "any") {
    if (filters.price === "0-500000") {
      list = list.filter((p) => p.price <= 500000);
    } else if (filters.price === "500000-1000000") {
      list = list.filter((p) => p.price > 500000 && p.price <= 1000000);
    } else if (filters.price === "1000000+") {
      list = list.filter((p) => p.price > 1000000);
    }
  }

  // ✅ SORT
  if (sortBy.value === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "price-high") {
    list.sort((a, b) => b.price - a.price);
  }

  return list;
});


const toggleFavorite = (id: number) => {
  const target = properties.value.find((p) => p.id === id);
  if (target) {
    target.isFavorite = !target.isFavorite;
  }
};
</script>
