export default function Paragraph({title, text}) {
    return (
        <div className="container flex flex-col py-2 gap-y-2 md:py-3">
            <h3 data-cypress="paragraph-title" className="font-bold text-lg prose max-w-none">{title}</h3>
            <div data-cypress="paragraph-text" className="prose max-w-none" dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    )
}
