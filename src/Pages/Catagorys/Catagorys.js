import { useQuery } from '@tanstack/react-query';
import Catagory from './Catagory';

const Catagorys = () => {
    // const[catagorys,setCatagorys] = useState([])
    const { data: catagorys = [] } = useQuery({
        queryKey: ['catagorys'],
        queryFn: () => fetch('http://localhost:5000/catagory')
            .then(res => res.json())
    })
    return (

        <div>
            <div>
                <h1 className='py-12 text-center text-3xl'>Browse items by category</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    catagorys?.map(catagory => <Catagory
                        key={catagory._id}
                        catagory={catagory}
                    ></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagorys;