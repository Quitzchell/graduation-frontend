import { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogDetail from "@/app/(templates)/Blog/blogDetail";
import BlogOverview from "@/app/(templates)/Blog/blogOverview";
import Home from "@/app/(templates)/Home/home";
import ReviewDetail from "@/app/(templates)/Review/reviewDetail";
import ReviewOverview from "@/app/(templates)/Review/reviewOverview";
import {fetchPage} from "@/services/fetchPage";

const templates = {
    homepage: Home,
    blog: BlogOverview,
    review: ReviewOverview
};

const objects = {
    blogpost: BlogDetail,
    review: ReviewDetail
}

type PageProps = {
    params: { segments: string[] };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: PageProps) {
    const segments = params.segments || ["home"];
    const page = await fetchPage(segments.join("/"));

    if (templates[page?._template] !== undefined) {
        const Template = templates[page._template];
        console.log(Template);

        return <Template {...page} />;
    }

    if (objects[page?._object] !== undefined) {
        const Object = objects[page._object];
        console.log(Object)

        return <Object {...page} />
    }

    return notFound();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const segments = params.segments || ["home"];
    const page = await fetchPage(segments.join("/"));

    if (!page?.meta) {
        return {};
    }

    return {
        title: page.meta.title,
        description: page.meta.description,
    };
}
