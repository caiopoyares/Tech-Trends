export const FetchLanguageRepo = async language => {
  language === 'todas' ? language = 'all' : language;
  const response = await fetch(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  const data = await response.json();
  return data.items;
}