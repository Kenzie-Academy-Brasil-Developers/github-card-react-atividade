import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import './styles.css'

const RepoCards = ({ repos }) => {
	return (
		<section>
			{repos.map((repo, index) => {
				return (
					repo?.name && (
						<Card component='div' key={index} sx={{ maxWidth: 345 }}>
							<CardMedia
								component='img'
								height='140'
								image={repo.owner?.avatar_url}
								alt={repo?.name}
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{repo?.name}
								</Typography>
								<Typography color='text.secondary' variant='body2'>
									{repo?.description}
								</Typography>
							</CardContent>
						</Card>
					)
				)
			})}
		</section>
	)
}

export default RepoCards
