export function Card(props) {

  const { name, category, id} = props

  function tatImg(){
    if (id === 0 ){
      return(
        <img
          src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg'
          className='tatooine cardImg card-img-top'
          alt='...'
        />
      )
    } else {
      return (
        <img
          src={'https://starwars-visualguide.com/assets/img/planets/' + (id+1) + '.jpg'}
          className='card-img-top'
          alt='...'
        />
      )
    }
  }

	return (
		<div className='card'>
      {category=== "Characters"?
        <img
          src={'https://starwars-visualguide.com/assets/img/characters/' + (id+1) + '.jpg'}
          className='card-img-top'
          alt='...'
        />
      :
      null
      }
      {category=== "Films"?
        <img
          src={'https://starwars-visualguide.com/assets/img/films/' + (id+1) + '.jpg'}
          className='card-img-top'
          alt='...'
        />
      :
      null
      }
      {category=== "Planets"?
        tatImg()
      :
        null
      }
			<div className='card-body'>
				<h5 className='card-title mb-3'>{name}</h5>
				<p className='card-text m-0'>Gender: </p>
				<p className='card-text m-0'>Hair color: </p>
				<p className='card-text m-0 '>Eye color: </p>
				<div className='mt-4'>
					<a
						to={'/' + (1)}
						className='btn btn-primary'>
						Learn More!
					</a>
					<button
						className='like btn btn-outline-danger'>
					</button>
				</div>
			</div>
		</div>
	)

}
