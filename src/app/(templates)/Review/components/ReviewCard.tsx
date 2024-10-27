import capitalize from "lodash.capitalize";
import Link from "next/link";
import {Button} from "@/app/components/ui/button";


export default function ReviewCard({reviewItem}) {
    const {slug, title, excerpt, score, reviewable} = reviewItem
    return (
        <div data-cypress="review-card" className="p-4 border rounded-md flex flex-col gap-y-4">
            <div>
                <Title title={title}/>
                <Subtitle
                    type={reviewable.type}
                    score={score}
                />
            </div>

            <p>{excerpt}</p>
            <Button asChild><Link href={`review/${slug}`}>Read more</Link></Button>
        </div>
    )
}

function Title({title}) {
    return <h3 className="font-bold text-lg">{title}</h3>
}

function Subtitle({type, score}) {
    return (
        <div className="flex flex-col">
            <p className="text-sm">Category: {capitalize(type)}</p>
            <p className='text-sm'>Verdict: {score}/10</p>
        </div>
    );
}
