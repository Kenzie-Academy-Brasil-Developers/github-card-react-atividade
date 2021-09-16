import './App.css'
import { useState } from 'react'
import RepoCards from './components/RepoCards'

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
				<div>
					<input
						value={input}
						placeholder='Pesquise um repositório'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button onClick={getReposFromAPI}>Pesquisar</button>
				</div>
				<RepoCards repos={gitRepos} />
			</header>
		</div>
	)
}

export default App
