import TemplateHeader from "@/app/components/headers/TemplateHeader";
import Blocks from "@/app/blocks/Blocks";
import BlogPostCard from "@/app/(templates)/Blog/components/BlogPostCard";


export default function BlogOverview({headerItems, blogPostItems, blocks}) {
    return (
        <div>
            <TemplateHeader {...headerItems}/>
            <section className="container py-5 md:py-8 flex flex-col gap-y-4">
                {blogPostItems.map((blogPostItem) => (
                    <BlogPostCard key={blogPostItem.id} blogPostItem={blogPostItem}/>
                ))}
                {blocks !== null && <Blocks blocks={blocks}/>}
            </section>
        </div>
    );
}

