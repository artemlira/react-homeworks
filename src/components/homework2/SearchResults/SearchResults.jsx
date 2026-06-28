import styles from './SearchResults.module.css';

function SearchResults() {
  const searchResultsData = [
    {
      id: 1,
      siteName: 'W3SchoolsUA',
      siteUrl: 'https://w3schoolsua.github.io',
      favicon: 'https://static.vecteezy.com/system/resources/thumbnails/051/336/398/small_2x/w3schools-transparent-logo-free-png.png',
      title: 'React Підручник - W3Schools українською - GitHub Pages',
      description: 'React — це бібліотека JavaScript для створення інтерфейсів користувача. React використовується для створення односторінкових програм. React дозволяє нам ...'
    },
    {
      id: 2,
      siteName: 'React',
      siteUrl: 'https://uk.legacy.reactjs.org',
      favicon: 'https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png',
      title: 'Посібник: знайомство з React',
      description: 'Данний посібник не потребує попереднього ознайомлення з React. Перед початком роботи. У цьому посібнику ми працюватимо над створенням маленької гри.'
    },
    {
      id: 3,
      siteName: 'W3SchoolsUA',
      siteUrl: 'https://w3schoolsua.github.io',
      favicon: 'https://static.vecteezy.com/system/resources/thumbnails/051/336/398/small_2x/w3schools-transparent-logo-free-png.png',
      title: 'React Старт - W3Schools українською',
      description: 'Підручник React. Старт. React безпосередньо в HTML. Налаштування середовища React Запустити програму React. Змінити програму React. Що далі?'
    },
  ];


  return (
    <>
      <div>
        <h2 className={styles.title}>
          Job condition:
        </h2>
        <p className={styles.description}>
          Задача 5. Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)
        </p>
      </div>
      <h2 className={styles.title}>
        Solution:
      </h2>
      <div className={styles.searchResults}>
        <ul className={styles.searchResultsList}>
          {
            searchResultsData.map((item) => (
              <li
                key={item.id}
                className={styles.searchResultsListItem}
              >
                <a
                  className={styles.searchResultsListItemLink}
                  href={item.siteUrl}
                >
                  <div className={styles.searchResultsListItemContent}>
                    <img
                      className={styles.searchResultsListItemFavicon}
                      src={item.favicon}
                      alt={item.siteName}
                    />
                    <div className={styles.searchResultsListItemInfo}>
                      <span className={styles.searchResultsListItemSiteName}>{item.siteName}</span>
                      <p className={styles.searchResultsListItemSiteUrl}>{item.siteUrl}</p>
                    </div>
                  </div>
                  <h3 className={styles.searchResultsListItemTitle}>{item.title}</h3>
                </a>
                <p className={styles.searchResultsListItemDescription}>{item.description}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default SearchResults;
