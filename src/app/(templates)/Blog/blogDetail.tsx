import Blocks from "@/app/blocks/Blocks";
import DetailHeader from "@/app/components/headers/DetailHeader";

export default function BlogDetail({title, image, blocks}) {
    return (
        <>
            <DetailHeader title={title} image={image}/>
            <div className="container py-5 md:py-8">
                {blocks && <Blocks blocks={blocks}/>}
            </div>
        </>
    )
}
