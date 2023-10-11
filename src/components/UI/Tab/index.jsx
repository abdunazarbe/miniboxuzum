import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function UnderlineTab({ product }) {
    const [activeTab, setActiveTab] = React.useState("html");

    const data = [
        {
            label: "Mahsulot tavsifi",
            value: "Mahsulot tavsifi",
            desc: `Mahsulot nomi: ${product?.name} \n
                   Mahsulot narxi: ${product.price}`,
        },
        {
            label: "Ko'rsatma",
            value: "Ko'rsatma",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Sharhlar (202)",
            value: "Sharhlar (202)",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent py-[14px] w-[450px]"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-[#7000FF] py-6 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-[#7000FF]" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className="pt-[50px] pb-[30px]">
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}