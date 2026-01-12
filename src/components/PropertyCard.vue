<template>
  <article class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition">
    <!-- IMAGE -->
    <div class="relative">
      <img :src="currentImage" class="w-full h-[240px] object-cover" loading="lazy" />

      <!-- Days badge -->
      <span class="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-sm font-semibold shadow">
        {{ property.daysOnMarket }}
      </span>

      <!-- Heart -->
      <button class="absolute top-4 right-4 text-white" @click.stop="toggleFavorite">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>



      <!-- Image dots -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
        <span v-for="(_, i) in property.images" :key="i" class="h-2 rounded-full"
          :class="i === currentIndex ? 'w-5 bg-white' : 'w-2 bg-white/60'" />
      </div>
    </div>

    <!-- CONTENT -->
    <div class="p-4 lg:p-5 space-y-2 lg:space-y-3">
      <!-- Type + views -->
      <div class="flex items-center justify-between">
        <span class="flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          {{ property.type }}
        </span>

        <span class="flex items-center gap-1 text-gray-500 text-sm">
          2.3K
        </span>
      </div>

      <!-- Price + meta -->
      <div class="flex flex-wrap items-center gap-6">
        <span class="text-[16px] font-bold text-blue-600">
          {{ formattedPrice }}
        </span>


        <span class="text-[12px] text-gray-600">
          <strong class="text-gray-900">{{ property.beds }}</strong> Beds
        </span>

        <span class="text-[12px] text-gray-600">
          <strong class="text-gray-900">{{ property.baths }}</strong> Baths
        </span>

        <span class="text-[12px] text-gray-600">
          <strong class="text-gray-900">{{ property.sqft }}</strong> sqft.
        </span>
      </div>

      <!-- Address -->
      <div class="text-[12px] font-semibold text-gray-900">
        {{ property.address }},
        <span class="text-[12px] text-gray-600">
          {{ property.city }}, {{ property.state }}
        </span>
      </div>

      <!-- MLS Text -->
      <div class="text-[12px] text-gray-400 leading-snug">
        Nashville (Real Tracs Mid) MLS-TN as distributed by MLS GRID
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Property } from "../App.vue";

const props = defineProps<{ property: Property }>();
const emit = defineEmits(["toggle-favorite"]);

const currentIndex = ref(0);

const currentImage = computed(() => props.property.images[currentIndex.value]);

const formattedPrice = computed(() =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(props.property.price)
);

const toggleFavorite = () => {
  emit("toggle-favorite", props.property.id);
};
</script>
