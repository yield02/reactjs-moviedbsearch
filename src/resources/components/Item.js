
export default function Item({Title, ...props}) {
    return (
        <div className="searchItem" {...props}>
            <h2>{Title}</h2>
        </div>
    )
    
}