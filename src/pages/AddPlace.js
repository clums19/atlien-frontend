import { useState } from 'react';
import Main from '../components/Main';

function AddPlace(props) {
    // console.log(props)
    const [newForm, setNewForm] = useState({
        title: '',
        image: '',
        description: '',
        distance: '',
        web: '',
        category: 'foods',
      });
    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPost(newForm);
        setNewForm({
            title: '',
            image: '',
            description: '',
            distance: '',
            web: '',
            category: 'foods',
        });
    };
    return(
        <section>
            <Main/>
            <form className='newPlace' onSubmit={handleSubmit}>
            <label className='formTitle' htmlFor="category">Name of Place</label>
                <input 
                type="text"
                name='title'
                defaultValue={newForm.title}
                placeholder='title'
                onChange={handleChange}/>
                <label className='formTitle' htmlFor="category">Image</label>
                <input 
                type="text"
                defaultValue={newForm.image}
                name='image'
                placeholder='image url'
                onChange={handleChange}/>
                <label className='formTitle' htmlFor="category">Description</label>
                <input 
                type="text"
                defaultValue={newForm.description}
                name='description'
                placeholder='description'
                onChange={handleChange}/>
                <label className='formTitle' htmlFor="category">Distance</label>
                <input 
                type="text"
                defaultValue={newForm.distance}
                name='distance'
                placeholder='distance ex: 2 miles'
                onChange={handleChange}/>
                <label className='formTitle' htmlFor="category">Website</label>
                <input 
                type="text"
                defaultValue={newForm.web}
                name='web'
                placeholder='website url'
                onChange={handleChange}/>
                <label className='formTitle' htmlFor="category">Category</label>
                <select value={newForm.category} name="category" onChange={handleChange}>
                    <option value='foods'>foods</option>
                    <option value='clubs'>clubs</option>
                    <option value='attractions'>attractions</option>
                    <option value='parks'>parks</option>
                    <option value='bars'>bars</option>
                </select>
                <input type='submit' value='Add Place'/>
            </form>
        </section>
    )
}
export default AddPlace;