const RepoCards = ({ repos }) => {
	return (
		<section>
			{repos.map((repo, index) => {
				return (
					repo?.name && (
						<div key={index}>
							<img src={repo.owner?.avatar_url} alt={repo?.name} />
							<p>
								{repo?.name}
								<br />
								{repo?.description}
							</p>
						</div>
					)
				)
			})}
		</section>
	)
}

export default RepoCards
