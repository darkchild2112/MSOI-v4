import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // redirects: {
  //   '/services.htm?serviceId=1': '/services/schools',
  //   '/services.htm?serviceId=2': '/services/family-mental-health',
  //   '/services.htm?serviceId=3': '/services/learning-disabilities',
  //   '/services.htm?serviceId=4': '/services/cognitive-assessments',
  //   '/services.htm?serviceId=5': '/services/autism-assessments',
  //   '/services.htm?serviceId=6': '/services/supervision-and-training'
  // },
  integrations: [react()]
});