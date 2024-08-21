
  
import { Price } from './Price';
import { Graphic } from './Graphic';
import { About } from './About';
import { Dividend } from './Dividend';
export const Company = ({symbol, graph}) => {
    return (
        <div>
            <Price symbol={symbol}/>
            <Graphic graph={graph} />
            <About />
            <Dividend />
        </div>
    )

}

