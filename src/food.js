import React from 'react'

const food = ({data}) => {
  return (
    
        <div className='row'>
          {data.map(data=>
        <div className='col-md-4'>
           <div class="card" style="{{width: 18rem}}">
           <img src={data.recipe.image} class="card-img-top" alt="card image cap"/>   
           <div class="card-body">
        
       
    <h5 class="card-title">{data.receipe.label}</h5>
    <p class="card-text">total calories.{Math.round(data.receipe.calories)}</p>
    <a href="#" class="btn btn-primary">buy</a>
    </div>
    </div>
    </div>
  )
}
</div>
)}
export default food
