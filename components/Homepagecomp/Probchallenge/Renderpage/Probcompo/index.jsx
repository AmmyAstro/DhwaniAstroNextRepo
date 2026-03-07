"use client";

import Callchatsec from "@/components/Smcompo/Callchatsec";
import { allmaindata } from "../Alldata/Reusedata";
import Consultcompo from "./Consultcompo";
import Procards from "./Procards";
import Pujacards from "./Pujacards";

const Index = ({ pageName }) => {
    const pageData = allmaindata.find(item => item[pageName]); 
    const pageContent = pageData ? pageData[pageName] : null;

    if (!pageContent) {
        return <div>Page not found</div>; 
    }

    return (
        <section className="healing_service_new mt-0 justify-self-center sm:max-w-7xl w-full p-4 ">
            <div className="container flex flex-col gap-8">
                <Consultcompo data={pageContent.firstSection} />
                <Procards data={pageContent.secondSection.cards} heading={pageContent.secondSection.heading} />
                <Pujacards data={pageContent.thirdSection.cards} heading={pageContent.thirdSection.heading} />
                <Callchatsec/>
            </div>
        </section>
    );
};

export default Index;
