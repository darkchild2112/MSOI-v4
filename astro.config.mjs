import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.makingsenseofit.org.uk',
  integrations: [react()],
  redirects: {
    '/services/autism-assessments': '/services/autism-adhd-assessments'
  }
});