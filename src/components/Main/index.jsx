import {Routes,Route} from 'react-router-dom';
import { Home } from '../Home';
import { Login } from '../Login';
import { Acoples } from '../Acoples';
import database from '../../assets/database/products.json'

const Main = () => {

    const data = database
    console.log(data)
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/jnonONJkJBKJBikBIUbKJHkjhkjhJKBhjgvcTRDeRTdfcghVJBKhNLKOPJhugfRTDERSwrStRYTVb' element={<Home/>}></Route>
                <Route path='/jnonONJkJBKJBikBIUbKJHkjhkjhJKBhjgvcTRDeRTdfcghVJBKhNLKOPJhugfRTDERSwrStRYTVb/Acoples' element={<Acoples list={data}/>}></Route>
            </Routes>
        </>
    )
}

export {Main}