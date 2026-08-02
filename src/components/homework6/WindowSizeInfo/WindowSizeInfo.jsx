import styles from './WindowSizeInfo.module.css';
import useWindowSize from './hooks/useWindowSize';

function getDeviceInfo(width) {
  if (width < 768) {
    return {
      name: 'Телефон',
      iconClassName: styles.phoneIcon,
    };
  }

  if (width < 1024) {
    return {
      name: 'Планшет',
      iconClassName: styles.tabletIcon,
    };
  }

  return {
    name: 'Монітор',
    iconClassName: styles.monitorIcon,
  };
}

function WindowSizeInfo() {
  const {width, height} = useWindowSize();
  const device = getDeviceInfo(width);

  return (
    <>
      <div className={styles.conditionWrapper}>
        <h2 className={styles.title}>Job condition:</h2>
        <p className={styles.description}>
          Задача 3. useWindowSize – розмір вікна браузера<br />
          Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера.
          Він повинен оновлюватися при зміні розміру вікна.<br />
          В папці homework6 Створіть компонент, який відображає поточні розміри вікна браузера
          (ширина x висота), використовуючи useWindowSize. На основі розмірів відображати іконки
          монітора, планшета або телефона.
        </p>
      </div>

      <div className={styles.solutionWrapper}>
        <h2 className={styles.title}>Solution:</h2>

        <div className={styles.sizeCard}>
          <div className={`${styles.deviceIcon} ${device.iconClassName}`} />

          <div>
            <p className={styles.deviceName}>{device.name}</p>
            <p className={styles.windowSize}>
              {width} x {height}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WindowSizeInfo;
