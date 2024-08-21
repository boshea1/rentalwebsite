import Review from "../app/components/Review";
import {render, screen} from '@testing-library/react';
import data from '../app/data/reviews';


test('reviews render successfully', ()=>{
    render(<Review name={'pete'}/>)
    expect(screen.getByText(/pete/i)).toBeInTheDocument();
})