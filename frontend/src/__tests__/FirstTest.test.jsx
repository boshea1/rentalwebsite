import {render, screen, waitFor} from '@testing-library/react'
import Reviews from '../app/components/Reviews'


test("example 1 renders successfully", ()=>{
     render(<Reviews/>)
})

const element = screen.findByText(/Reviews/i)
waitFor(()=>expect(element).toBeInTheDocument());