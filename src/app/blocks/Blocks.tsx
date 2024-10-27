import React from "react";
import Paragraph from "@/app/blocks/common/Paragraph";
import ImageContent from "@/app/blocks/common/Image";
import CallToAction from "@/app/blocks/common/CallToAction";
import Map from "@/app/blocks/common/Map";


const components = {
    "Common\\Paragraph": Paragraph,
    "Common\\Image": ImageContent,
    "Common\\CallToAction": CallToAction,
    "Common\\Map": Map
};

function renderBlockComponent(block, props = {}) {
    if (!components[block._template]) {
        console.warn(`${block._template} doesn't exist`);
        return "";
    }

    return React.createElement(components[block._template], {
        key: block._identifier,
        ...block.data,
        ...props,
    });
}

function Blocks({ blocks }) {
    return <>{blocks.map((block) => renderBlockComponent(block))}</>;
}

export default Blocks;
export { renderBlockComponent };
