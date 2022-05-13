import React from "react";
import fs from "fs";
import { collection, getDocs } from "firebase/firestore";
import { db } from 'services/firebase.app';
import { format } from 'date-fns';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
        development: "http://localhost:3000",
        production: "https://uzstore.uz",
      }[process.env.NODE_ENV];
  const staticPages = fs.readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "_app.js",
          "_document.js",
          "404.js",
          "sitemap.xml.js",
        ].includes(staticPage);
      })
      .map((staticPagePath) => {
        return `${baseUrl}/${staticPagePath}`;
      });
   const querySnapshot = await getDocs(collection(db, "uzstore_products"));
   const documents = [];
   querySnapshot?.forEach((doc)=>{
     const data = doc.data();
     documents.push(data);
   })
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((url) => {
            return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
            `;
          })
          .join("")}
          ${documents?.map(({ product_id }) => {
              return `
                  <url>
                    <loc>${baseUrl}/product/${product_id}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                  </url>
                `;
            })
            .join("")}
      </urlset>
    `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;