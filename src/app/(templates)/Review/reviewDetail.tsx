import DetailHeader from "@/app/components/headers/DetailHeader";
import MovieInfoCard from "@/app/(templates)/Review/components/MovieInfoCard";
import Blocks from "@/app/blocks/Blocks";


export default function ReviewDetail({title, image, reviewItem, blocks}) {
    return (
        <>
            <DetailHeader image={image} title={title}/>
            <section className="container py-5 md:py-8">
                {reviewItem.type === 'movie' && (
                    <>
                        <MovieInfoCard {...reviewItem} />
                    </>
                )}
                {blocks !== null && <Blocks blocks={blocks}/>}
            </section>
        </>
    )
}
