import {Routes,Route} from 'react-router-dom';
import { Home } from '../Home';
import { Login } from '../Login';
import { Acoples } from '../Acoples';
import database from '../../assets/database/products.json'
import { NewProd } from '../NewProd';
const Main = () => {

    const data = database
    console.log(data)
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/jnonONJkJBKJBikBIUbKJHkjhkjhJKBhjgvcTRDeRTdfcghVJBKhNLKOPJhugfRTDERSwrStRYTVb' element={<Home/>}></Route>
                <Route path='/jnonONJkJBKJBikBIUbKJHkjhkjhJKBhjgvcTRDeRTdfcghVJBKhNLKOPJhugfRTDERSwrStRYTVb/Acoples' element={<Acoples list={data}/>}></Route>
                <Route path='/jnonONJkJBKJBikBIUbKJHkjhkjhJKBhjgvcTRDeRTdfcghVJBKhNLKOPJhugfRTDERSwrStRYTVb/newProd' element={<NewProd/>}></Route>
            </Routes>
        </>
    )
}

export {Main}