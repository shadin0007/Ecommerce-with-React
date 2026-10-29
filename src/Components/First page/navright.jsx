import { CircleQuestionMark } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

const navright = () => {
  return (
    <div className='flex gap-5 font-nt uppercase text-[1.2vw] '>
       
            <p>Log in</p>
            <p>EN/GBP</p>
            <p>
                <CircleQuestionMark size={20} strokeWidth={1.3} />
            </p>

            <p>
                <Search size={20} strokeWidth={1.3} />
            </p>

            <p>
                <Bookmark size={20} strokeWidth={1.3} />
            </p>

            <p>
                <ShoppingBag size={20} strokeWidth={1.3} />
            </p>

        
    </div>
  )
}

export default navright
