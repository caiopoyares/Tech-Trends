import React from 'react';
import Spinner from 'react-loader-spinner'

import Language from './Language';
import { FetchLanguageRepo } from '../utilities/Api';
import Repos from './Repos';

export default class Popular extends React.Component {
  state = {
    selectedLanguage: 'Todas',
    repos: {}
  }

  componentDidMount() {
    const { selectedLanguage } = this.state;
    FetchLanguageRepo(selectedLanguage)
      .then(data => this.setState(state => {
        return {
          repos: { [state.selectedLanguage]: data }
        }
      }))
  }

  updateLanguage = lang => {
    this.setState({ selectedLanguage: lang });
    if (!this.state.repos[lang]) {
      FetchLanguageRepo(lang)
        .then(data => this.setState(state => {
          return {
            repos: { ...state.repos, [lang]: data }
          }
        }));
    }
  }

  render() {
    const languages = ['Todas', 'Javascript', 'Ruby', 'Java', 'CSS', 'Go'];
    const { selectedLanguage, repos } = this.state;
    return (
      <React.Fragment>
        <ul className='popular__list'>
          {languages.map(language => (
            <Language language={language} onUpdateLanguage={this.updateLanguage} key={language} selected={selectedLanguage} />
          ))}
        </ul>
        <ul className="repos__list">
          {this.state.repos[selectedLanguage] ? (<Repos currentLanguageRepos={repos[selectedLanguage]} />) : (<Spinner className='loading-spinner' type="Bars" color="crimson" height={80} width={80} />)}
        </ul>
      </React.Fragment>
    )
  }
}