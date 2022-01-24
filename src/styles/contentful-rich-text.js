import React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

export function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    // Complete list of rich-text-types can be found here:
    // https://www.npmjs.com/package/@contentful/rich-text-react-renderer

    /////////
    // BLOCKS
    /////////
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-5xl">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-4xl">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-3xl">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-2xl">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-xl">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="text-base">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-base mb-2">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc list-outside ml-10">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-outside ml-10">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-gray-400 ml-4 pl-4">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: (node, children) => (
        <div className="h-1 w-full bg-gray-400 my-4" />
      ),

      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        if (entry.__typename === "Unit")
          return (
            <div className="border-4 border-red-400">
              <p>This is an embedded entry</p>
              <h1 className="text-green-500 text-2xl">{entry.title}</h1>
            </div>
          );

        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        if (entry.__typename === "CodeBlock") {
          return (
            <div>
              <code>{entry.code}</code>
            </div>
          );
        }

        // Example for a Video embed:
        // if (entry.__typename === "VideoEmbed") {
        //   return (
        //       <iframe
        //           src={entry.embedUrl}
        //           height="100%"
        //           width="100%"
        //           frameBorder="0"
        //           scrolling="no"
        //           title={entry.title}
        //           allowFullScreen={true}
        //       />
        //   );
        // }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt="My image alt text" />;
      },

      //////////
      // INLINES
      //////////
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        if (entry.__typename === "Unit")
          return (
            <span className="">
              <span>This is an inline entry</span>
              <span className="text-green-500 text-2xl">{entry.title}</span>
            </span>
          );

        if (entry.__typename === "Brand")
          return (
            <span className="text-orange-500 text-2xl">{entry.brand}</span>
          );

        // Example for a Blog Post:
        // render the entries as needed
        // if (entry.__typename === "BlogPost") {
        //   return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        // }
      },

      ////////
      // MARKS
      ////////
      renderMark: {
        [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
        [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
        [MARKS.UNDERLINE]: (text) => (
          <span className="underline underline-offset-2 decoration-2 hover:underline-offset-4 ">
            {text}
          </span>
        ),
        [MARKS.CODE]: (text) => (
          <span className="bg-green-200 text-2xl">{text}</span>
        ),
      },
    },
  };
}
