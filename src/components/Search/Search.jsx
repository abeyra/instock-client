import './Search.scss';


export default function Search({ placeholder }) {
    return (
        <>
        <input 
        className="search" 
        type="text"
        name="search"
        placeholder={placeholder}>
        </input>
        </>
    )
}