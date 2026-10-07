import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreaDetailPage from '@/pages/ServiceAreaDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { services, serviceAreas } from '@/data/siteData';

export default function App() {
  const serviceSlugs = services.map((s) => s.slug);
  const areaSlugs = serviceAreas.map((a) => a.slug);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {serviceSlugs.map((slug) => (
            <Route key={`svc-${slug}`} path={`/${slug}`} element={<ServiceDetailPage staticSlug={slug} />} />
          ))}
          {areaSlugs.map((slug) => (
            <Route key={`area-${slug}`} path={`/${slug}`} element={<ServiceAreaDetailPage staticSlug={slug} />} />
          ))}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
