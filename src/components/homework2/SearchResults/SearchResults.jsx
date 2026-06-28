import styles from './SearchResults.module.css';

function SearchResults() {
  
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
        SearchResults
      </div>
    </>
  )
}

export default SearchResults;
