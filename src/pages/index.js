import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Servook"
          description="Local Plumbers, Carpenters, Painters, Electricians, Cleaners, Babysitters, Beauty professionals"
        />
        <Banner />

        <AppFeature/>

        <Pricing />
        <Testimonials />

      </Layout>
    </ThemeProvider>
  );
}
