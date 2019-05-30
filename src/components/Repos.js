import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';

const Repos = ({ currentLanguageRepos }) => {
  return (
    <React.Fragment>
      {currentLanguageRepos.map((repo, index) => {
        const { name, owner, html_url, stargazers_count, forks, open_issues } = repo;
        const { login, avatar_url } = owner;
        return (
          <li className="repos__list-item" key={name}>
            <h4>#{index + 1}</h4>

            <img className="repos__img" src={avatar_url} alt={`Foto de ${login}`} />

            <h2>
              <a href={html_url} target="_blank">{login}</a>
            </h2>
            <ul className="repos__description">
              <li>
                <FaUser color='#333' size={22} />
                <a href={`https://github.com/${login}`} target="_blank">{login}</a>
              </li>
              <li>
                <FaStar color='#fc0' size={22} />
                {stargazers_count.toLocaleString()} estrelas
              </li>
              <li>
                <FaCodeBranch color='rgb(45, 140, 65)' size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color='#007bff' size={22} />
                {open_issues.toLocaleString()} questões
              </li>
            </ul>
          </li>
        )
      })}
    </React.Fragment>
  )
}

Repos.propTypes = {
  currentLanguageRepos: PropTypes.array.isRequired
}

export default Repos;