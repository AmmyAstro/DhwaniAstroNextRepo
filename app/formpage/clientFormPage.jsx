'use client'
import Formremedies from '@/components/Homepagecomp/Formremedies';
import { useSearchParams } from 'next/navigation'




export default function ClientFormPage() {

    const params = useSearchParams();    
    const slug = params.get('slug');

  return (
  <Formremedies
    slug={slug}
  />
  
  );
}
