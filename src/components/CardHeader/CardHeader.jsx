import './CardHeader.scss';


export default function CardHeader({ text }) {
    return (
        <>
        <h1 className="card-header">
            {text}
        </h1>
        </>
    )
}