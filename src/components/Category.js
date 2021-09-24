import '../styles/Category.css'

function Category({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lmj-categories'>
            <label>Filtrer la catégorie : <br /></label>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <br/>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Category