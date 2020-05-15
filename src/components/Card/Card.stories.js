import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
  includeStories: ["withImage", "withoutImage"],
};

const cardLinksObj = {
  "url": "www.google.com",
  "github": "www.github.com"
}

export const withImage = () => (
         <Card
           imageSource="http://placekitten.com/g/600/800"
           imageAlt="Random colors and shapes"
           title="Card Title TEST"
           subtitle="Is this thing on? I hope so."
           description="Business-to-consumer iPhone leverage growth hacking crowdfunding. Infrastructure ramen founders stock equity. Pitch MVP pivot infrastructure ecosystem bootstrapping founders. Direct mailing influencer gen-z business-to-consumer virality series A financing advisor scrum project entrepreneur MVP. Partnership burn rate marketing client interaction design launch party venture rockstar mass market research & development."
           tags={["tag01", "tag02", "tag03"]}
           cardLinks={cardLinksObj}
           detailPageLink="www.google.com"
         />
       );
