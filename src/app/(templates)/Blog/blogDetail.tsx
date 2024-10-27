import DetailHeader from "@/app/components/headers/DetailHeader";
import Blocks from "@/app/blocks/Blocks";

export default function BlogDetail({title, image, blocks}) {
    return (
        <>
            <DetailHeader title={title} image={image}/>
            <div className="container py-5 md:py-8">
                {blocks !== null && <Blocks blocks={blocks}/>}
            </div>
        </>
    )
}
