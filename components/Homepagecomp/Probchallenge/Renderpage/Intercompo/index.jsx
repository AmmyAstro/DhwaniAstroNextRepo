
"use client";

import { allinterdata } from "./Interdata";
import Procompo from "./Procompo";

const Index = ({ pageName, subcategoryName }) => {
  const categoryData = allinterdata.find(item => item[pageName]);

  if (!categoryData) {
    return <div>Page  found</div>;
  }

  const pageContent = categoryData[pageName];

  if (!pageContent) {
    return <div>No content available</div>;
  }

  if (subcategoryName) {
    const subData = pageContent[subcategoryName];

    if (!subData || !subData.cards?.length) {
      return <div>No {subcategoryName} content available</div>;
    }

    return (
      <section className="healing_service_new mt-0 justify-self-center sm:max-w-7xl w-full p-4">
        <div className="container flex flex-col gap-8">
          <Procompo data={subData.cards} heading={subData.heading || "• Dhwani Astro Products •"} />
        </div>
      </section>
    );
  }


  return (
    <section className="healing_service_new mt-0 justify-self-center sm:max-w-7xl w-full p-4">
      <div className="container flex flex-col gap-8">
        {Object.entries(pageContent).map(([key, value]) => (
          value.cards?.length > 0 && (
            <Procompo key={key} data={value.cards} heading={value.heading || "• Dhwani Astro Products •"} />
          )
        ))}
      </div>
    </section>
  );
};

export default Index;
