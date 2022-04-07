import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.spinner}>
        <div className={[styles.spinnerCircle, styles.spinnerCircleOuter].join(' ')}>
        </div>
        <div className={[styles.spinnerCircleOff, styles.spinnerCircleInner].join(' ')}>
        </div>
        <div className={[styles.spinnerCircle, styles.spinnerCircleSingle1].join(' ')}>
        </div>
        <div className={[styles.spinnerCircle, styles.spinnerCircleSingle2].join(' ')}>
        </div>
        <div className={styles.text}>
          ...Грузимся...
        </div>
      </div>
    </div>);
}

export default Spinner;
