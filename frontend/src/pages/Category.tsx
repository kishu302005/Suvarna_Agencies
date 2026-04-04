import { Link } from 'react-router-dom';

const categories = [
    { id: 1, name: 'Refrigerators', count: 12 },
    { id: 2, name: 'Washing Machines', count: 8 },
    { id: 3, name: 'Microwaves', count: 15 },
    { id: 4, name: 'Air Conditioners', count: 10 },
];

export default function Category() {
    return (
        <div className="page category-page">
            <h2>Shop by Category</h2>
            <div className="category-grid">
                {categories.map(category => (
                    <div key={category.id} className="category-card">
                        <h3>{category.name}</h3>
                        <p>{category.count} Products</p>
                        <Link to="/" className="btn btn-secondary">Browse {category.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
