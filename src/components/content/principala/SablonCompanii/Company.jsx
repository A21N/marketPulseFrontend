
  
import { Price } from './Price';
import { Graficbrd } from '../brd/Graficbrd';
import { Desprebrd } from '../brd/Desprebrd';
import { Brddividend } from '../brd/Brddividend';
export const Company = ({symbol}) => {
    return (
        <div>
            <Price symbol={symbol}/>
            <Graficbrd />
            <Desprebrd />
            <Brddividend />

        </div>
    )

}

