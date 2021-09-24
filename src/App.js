import './App.css'
import { useState } from 'react'
import RepoCards from './components/RepoCards'
import { TextField, Box, Button } from '@material-ui/core'

function App() {
	const [gitRepos, setGitRepos] = useState([])
	const [input, setInput] = useState('')

	const getReposFromAPI = () => {
		fetch(`https://api.github.com/repos/${input}`)
			.then((response) => response.json())
			.then((response) => setGitRepos([...gitRepos, response]))
			.catch((err) => console.log(err))
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<Box
					component='form'
					sx={{
						'& > :not(style)': { m: 1, width: '25ch' },
					}}
					noValidate
					autoComplete='off'
				>
					<TextField
						value={input}
						placeholder='Pesquise um repositório'
						variant='standard'
						color='warning'
						focused
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button variant='contained' onClick={getReposFromAPI}>
						Pesquisar
					</Button>
				</Box>
				<RepoCards repos={gitRepos} />
			</header>
		</div>
	)
}

export default App
