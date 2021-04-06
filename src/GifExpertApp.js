import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] = useState(['Tokyo Goul'])

    return (
        <>
            <div className="nav">
                <h2>Gif Expert App</h2>
                <AddCategory setCategories={ setCategories }/>  
            </div>
            <div className="card-container">
                <hr/>
                <div className="cards">
                    <ol>
                        {categories.map(category => 
                            <GifGrid 
                                key={ category } 
                                category={ category }
                            />
                        )}
                    </ol>
                </div>
            </div>
        </>
    );
}
