import './App.css';
import Navbar from './components/Navbar'
import Places from './components/Places'
import data from './data'

const App = () => {
    const datas = data.map(item => {
        return (
            <Places
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className='container'>
            <Navbar />
            <section>
                {datas}
            </section>
        </div>
    )
}

export default App