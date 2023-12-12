
import Nav from './Nav'
import Banner from './Banner'
import Products from './Products'

export default function Home() {
  return (

    <div  className="text-3xl font-bold">
    <Banner/>
    <Nav/>
    <Products/>
    </div>
  );
}
