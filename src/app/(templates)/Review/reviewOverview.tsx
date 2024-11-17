import ReviewCard from "@/app/(templates)/Review/components/ReviewCard";
import Blocks from "@/app/blocks/Blocks";
import TemplateHeader from "@/app/components/headers/TemplateHeader";

export default function ReviewOverview({headerItems, reviewItems, blocks}) {
    return (
        <div>
            <TemplateHeader {...headerItems} />
            <section className="container py-5 md:py-8 flex flex-col gap-y-6">
                {reviewItems.map((reviewItem) => (
                    <ReviewCard key={reviewItem.id} reviewItem={reviewItem}/>
                ))}
            </section>
            {blocks && <Blocks blocks={blocks}/>}
        </div>
    )
}
